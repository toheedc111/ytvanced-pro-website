#!/bin/bash

set -e

SITE_URL="${1:-https://ytvanced.pro}"
SITEMAP_URL="$SITE_URL/sitemap.xml"

echo "🔍 Checking sitemap headers: $SITEMAP_URL"

# Fetch headers
HEADERS=$(curl -sI "$SITEMAP_URL")
LAST_MODIFIED=$(echo "$HEADERS" | grep -i '^Last-Modified:' | sed 's/Last-Modified: //I')
CACHE_CONTROL=$(echo "$HEADERS" | grep -i '^Cache-Control:' | sed 's/Cache-Control: //I')
STATUS=$(echo "$HEADERS" | head -1)

echo "Status: $STATUS"
echo "Cache-Control: ${CACHE_CONTROL:-<none>}"
echo "Last-Modified: ${LAST_MODIFIED:-<none>}"

if [ -z "$LAST_MODIFIED" ]; then
  echo "⚠️  Could not read Last-Modified header"
  exit 1
fi

# Parse RFC1123 date in a cross-platform way (macOS/BSD)
if date -j -f "%a, %d %b %Y %H:%M:%S %Z" "$LAST_MODIFIED" +%s >/dev/null 2>&1; then
  SITEMAP_TS=$(date -j -f "%a, %d %b %Y %H:%M:%S %Z" "$LAST_MODIFIED" +%s)
  NOW_TS=$(date +%s)
  AGE_SEC=$((NOW_TS - SITEMAP_TS))
  AGE_MIN=$((AGE_SEC / 60))
  AGE_HR=$((AGE_MIN / 60))
  echo "Age: ${AGE_MIN} minutes (~${AGE_HR} hours)"
else
  echo "⚠️  Unable to parse Last-Modified with BSD date; printing raw value"
fi

if echo "$CACHE_CONTROL" | grep -qi 'no-cache'; then
  echo "✅ Cache-Control includes no-cache"
else
  echo "⚠️  Cache-Control is not no-cache"
fi

echo "Done."