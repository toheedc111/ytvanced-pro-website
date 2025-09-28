#!/bin/bash

# Script to update sitemap and provide guidance for Google Search Console
# Note: Google deprecated sitemap ping in June 2023 (see https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping)

# Exit on any error
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting Google Search Console Update Process...${NC}"

# Get the project root directory
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

echo "Project root: $PROJECT_ROOT"

# Update the sitemap lastmod dates to current date
echo "Updating sitemap.xml with current date..."
CURRENT_DATE=$(date +"%Y-%m-%d")

# Create a temporary file
TEMP_SITEMAP="$PROJECT_ROOT/temp_sitemap.xml"

# Update lastmod dates in sitemap.xml
sed "s/<lastmod>[0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}<\/lastmod>/<lastmod>$CURRENT_DATE<\/lastmod>/g" \
    "$PROJECT_ROOT/public/sitemap.xml" > "$TEMP_SITEMAP"

# Replace the original sitemap with updated version
mv "$TEMP_SITEMAP" "$PROJECT_ROOT/public/sitemap.xml"

echo -e "${GREEN}Sitemap updated with current date: $CURRENT_DATE${NC}"

# Google Search Console Notification (Deprecated)
echo "Notifying Google Search Console..."
echo -e "${YELLOW}⚠ Google deprecated sitemap ping in June 2023${NC}"
echo "  See: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping"
echo "  Recommendation: Submit sitemap manually in Google Search Console"

# Bing Search Console Notification
echo "Notifying Bing Search Console..."
BING_PING_URL="http://www.bing.com/ping?sitemap=https://ytvanced.pro/sitemap.xml"

# Use curl to ping Bing
if command -v curl >/dev/null 2>&1; then
    curl -s "$BING_PING_URL" > /dev/null
    echo -e "${GREEN}Successfully notified Bing Search Console${NC}"
else
    echo -e "${YELLOW}curl not found, skipping Bing ping${NC}"
fi

echo -e "${GREEN}Google Search Console Update Process Completed!${NC}"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo "1. Visit Google Search Console: https://search.google.com/search-console"
echo "2. Navigate to 'Sitemaps' section"
echo "3. Select your sitemap: https://ytvanced.pro/sitemap.xml"
echo "4. Click 'Reload' or wait for automatic crawl"
