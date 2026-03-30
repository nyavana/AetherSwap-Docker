#!/bin/sh
set -e

# Ensure runtime directories exist
mkdir -p /app/config /app/log

# Restore config/__init__.py if volume mount masked it
if [ ! -f /app/config/__init__.py ]; then
    cp /_config_init_backup/__init__.py /app/config/__init__.py
fi

# Restore default config.json if missing
if [ ! -f /app/config/config.json ]; then
    cp /_config_init_backup/config.json /app/config/config.json
fi

# Auto-accept disclaimer (no TTY in container)
touch /app/.agreed_disclaimer

AETHER_HOST="${AETHER_HOST:-0.0.0.0}"
AETHER_PORT="${AETHER_PORT:-28472}"

exec python -m uvicorn app.api:app \
    --host "$AETHER_HOST" \
    --port "$AETHER_PORT" \
    --log-level warning
