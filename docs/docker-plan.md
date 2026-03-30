# Plan: Dockerize AetherSwap

## Context

AetherSwap is a Python 3.10+ FastAPI app that automates Steam skin trading. The user wants to run it via `docker run` and `docker compose`. The app currently runs as a desktop tool (pywebview + uvicorn). We need to containerize it for headless server deployment.

**Key challenge:** The `config/` directory is both a Python package (`config/__init__.py` with credential I/O logic) AND the runtime data directory (credentials, SQLite DB, Playwright profiles). Volume-mounting `config/` for persistence would mask the Python module. The entrypoint script must restore `config/__init__.py` from a backup copy.

## Files Created

### 1. `.dockerignore`

Excludes: `.git/`, `config/` runtime data (credentials, db, playwright dirs), `__pycache__/`, `venv/`, `log/`, `images/`, `.agreed_disclaimer`. Keeps `config/__init__.py` and `config/config.json` in the build context.

### 2. `Dockerfile` (multi-stage)

**Stage 1 — builder:**
- Base: `python:3.10-slim-bookworm`
- Install build deps, pip install from `requirements.txt` (filtering out `pywebview` since no GUI in container)
- Install Playwright Chromium: `python -m playwright install chromium`

**Stage 2 — runtime:**
- Base: `python:3.10-slim-bookworm`
- Install Playwright system deps + `tini` (proper PID 1 init)
- Copy site-packages from builder
- Copy Playwright browser from builder
- Copy app source with `--chown=aether:aether`
- **Critical:** Copy `config/__init__.py` to `/_config_init_backup/__init__.py` so the entrypoint can restore it after volume mount
- Create non-root user `aether` (UID 1001)
- `EXPOSE 28472`
- Healthcheck: `curl http://localhost:28472/api/status`
- Entrypoint: `tini -- /app/docker-entrypoint.sh`

**Estimated size:** ~800MB-1.2GB (Playwright Chromium alone is ~400MB)

### 3. `docker-entrypoint.sh`

1. `mkdir -p /app/config /app/log`
2. If `config/__init__.py` missing (volume mount masked it): copy from `/_config_init_backup/__init__.py`
3. If `config/config.json` missing: copy from `/_config_init_backup/config.json`
4. `touch /app/.agreed_disclaimer` (auto-accept disclaimer — no TTY)
5. Read env vars: `AETHER_HOST` (default `0.0.0.0`), `AETHER_PORT` (default `28472`)
6. `exec uvicorn app.api:app --host $AETHER_HOST --port $AETHER_PORT --log-level warning`

### 4. `docker-compose.yml`

```yaml
services:
  aetherswap:
    build: .
    ports:
      - "28472:28472"
    volumes:
      - aether-config:/app/config
    environment:
      - AETHER_HOST=0.0.0.0
      - AETHER_PORT=28472
    restart: unless-stopped
    healthcheck: (curl /api/status)

volumes:
  aether-config:
```

### 5. Source code change: `app/services/buff_auth.py` (line 34-40)

Added `--no-sandbox` and `--disable-setuid-sandbox` to the Playwright launch args. Without this, Chromium refuses to start inside a container as non-root. The `iflow/client.py` already has these flags; `buff_auth.py` did not.

## Files NOT Modified

- `app/main.py` — not used in container (we bypass `run.py` entirely by calling uvicorn directly on `app.api:app`)
- `app/api.py` — no changes needed
- `config/__init__.py` — no changes needed (backed up in image for volume mount recovery)

## Known Limitations

1. **Manual Steam/Buff login** (headless=False Playwright) won't work in container — no display server. Users must either:
   - Configure credentials before containerizing (copy existing `config/`)
   - Use the steampy-based auto-login which works headless (needs `shared_secret`)
2. **Image size** ~1GB due to Playwright Chromium — unavoidable for browser automation

## Verification

1. `docker build -t aetherswap .` — builds without errors
2. `docker compose up -d` — container starts and stays running
3. `curl http://localhost:28472/api/status` — returns JSON status
4. `http://localhost:28472/` in browser — web UI loads
5. `docker compose down && docker compose up -d` — config persists across restarts
6. Existing tests still pass: `pytest tests/ -v`
