#!/usr/bin/env bash
# Batch-rebuild med spa sites from a queue of GMB / website URLs.
#
# Usage:
#   1. Put URLs one per line in sites/queue.txt
#   2. From the repo root, run: bash .claude/skills/run-batch.sh
#
# Each URL will trigger the /medspa-rebuild workflow in Claude Code.
# This script does NOT run the skills itself — it only prints the commands
# you paste into Claude Code, one URL at a time.

set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
QUEUE="$REPO_ROOT/sites/queue.txt"

if [ ! -f "$QUEUE" ]; then
  echo "No queue found at $QUEUE"
  echo "Create it with one URL per line (GMB or website), then re-run."
  exit 1
fi

echo "=== Med spa batch rebuild queue ==="
echo "Queue: $QUEUE"
echo "Paste each line below into Claude Code, one at a time."
echo "A new branch 'site/<slug>' will be created per business."
echo ""

i=0
while IFS= read -r url || [ -n "$url" ]; do
  # skip blank lines and comments
  [[ -z "$url" || "$url" =~ ^[[:space:]]*# ]] && continue
  i=$((i+1))
  echo "[$i] /medspa-rebuild $url"
done < "$QUEUE"

echo ""
echo "Total: $i sites queued"
echo ""
echo "Tip: after each run completes, push the branch and capture the Vercel preview URL for the pitch deck."
