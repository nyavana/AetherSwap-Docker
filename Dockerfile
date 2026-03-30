# ---- Stage 1: builder ----
FROM python:3.10-slim-bookworm AS builder

RUN apt-get update && apt-get install -y --no-install-recommends \
        build-essential \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /build

COPY requirements.txt .

# Install Python deps, excluding pywebview (no GUI in container)
RUN grep -iv 'pywebview' requirements.txt > requirements-docker.txt \
    && pip install --no-cache-dir -r requirements-docker.txt

# Install Playwright Chromium
RUN python -m playwright install chromium

# ---- Stage 2: runtime ----
FROM python:3.10-slim-bookworm

# Install Playwright system dependencies + tini + curl (for healthcheck)
RUN apt-get update && apt-get install -y --no-install-recommends \
        tini \
        curl \
        # Playwright Chromium system deps
        libnss3 \
        libnspr4 \
        libatk1.0-0 \
        libatk-bridge2.0-0 \
        libcups2 \
        libdrm2 \
        libdbus-1-3 \
        libxkbcommon0 \
        libatspi2.0-0 \
        libxcomposite1 \
        libxdamage1 \
        libxfixes3 \
        libxrandr2 \
        libgbm1 \
        libpango-1.0-0 \
        libcairo2 \
        libasound2 \
        libxshmfence1 \
    && rm -rf /var/lib/apt/lists/*

# Create non-root user
RUN groupadd -g 1001 aether && useradd -u 1001 -g aether -m aether

WORKDIR /app

# Copy Python packages from builder
COPY --from=builder /usr/local/lib/python3.10/site-packages /usr/local/lib/python3.10/site-packages
COPY --from=builder /usr/local/bin /usr/local/bin

# Copy Playwright browsers from builder
COPY --from=builder /root/.cache/ms-playwright /home/aether/.cache/ms-playwright
RUN chown -R aether:aether /home/aether/.cache

# Copy application source
COPY --chown=aether:aether . .

# Backup config/__init__.py so it survives volume mount over config/
RUN mkdir -p /_config_init_backup \
    && cp config/__init__.py /_config_init_backup/__init__.py \
    && cp config/config.json /_config_init_backup/config.json

# Make entrypoint executable
RUN chmod +x docker-entrypoint.sh

# Create directories that will be volume-mounted
RUN mkdir -p config log && chown -R aether:aether config log

USER aether

EXPOSE 28472

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
    CMD curl -sf http://localhost:28472/api/status || exit 1

ENTRYPOINT ["tini", "--", "/app/docker-entrypoint.sh"]
