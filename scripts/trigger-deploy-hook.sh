#!/bin/bash

# Trigger Vercel Deploy Hook to rebuild and republish the sitemap.
# Usage:
#   ./scripts/trigger-deploy-hook.sh                # uses $VERCEL_DEPLOY_HOOK
#   VERCEL_DEPLOY_HOOK=... ./scripts/trigger-deploy-hook.sh
#   ./scripts/trigger-deploy-hook.sh https://api.vercel.com/v1/integrations/deploy/<hook-id>

set -e

HOOK_URL="${1:-${VERCEL_DEPLOY_HOOK}}"

if [ -z "$HOOK_URL" ]; then
  echo "❌ Error: VERCEL_DEPLOY_HOOK is not set and no URL argument was provided."
  echo "   Set env var or pass the hook URL as the first argument."
  echo "   Example: VERCEL_DEPLOY_HOOK=https://api.vercel.com/v1/integrations/deploy/<hook-id> ./scripts/trigger-deploy-hook.sh"
  exit 1
fi

echo "🚀 Triggering Vercel Deploy Hook"
echo "🔗 URL: $HOOK_URL"

HTTP_STATUS=$(curl -s -o /tmp/deploy_hook_out.txt -w "%{http_code}" -X POST "$HOOK_URL")

if [ "$HTTP_STATUS" = "200" ] || [ "$HTTP_STATUS" = "201" ] || [ "$HTTP_STATUS" = "202" ]; then
  echo "✅ Hook triggered successfully (HTTP $HTTP_STATUS)"
  echo "📄 Response (first 200 chars):"
  head -c 200 /tmp/deploy_hook_out.txt; echo ""
  exit 0
else
  echo "❌ Hook trigger failed (HTTP $HTTP_STATUS)"
  echo "📄 Response:"
  cat /tmp/deploy_hook_out.txt
  exit 1
fi