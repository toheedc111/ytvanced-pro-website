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

# Generate new sitemap using the Node.js script
echo "Generating fresh sitemap with current timestamps..."
if command -v node >/dev/null 2>&1; then
    node scripts/generate-sitemap.js
    echo -e "${GREEN}Sitemap regenerated successfully!${NC}"
else
    echo -e "${RED}Node.js not found. Please install Node.js to generate sitemap.${NC}"
    exit 1
fi

# Google Search Console Notification (Deprecated)
echo ""
echo -e "${YELLOW}⚠️  Google Search Console Manual Update Required${NC}"
echo -e "${YELLOW}Google deprecated automatic sitemap ping in June 2023${NC}"
echo "  See: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping"
echo ""

# Bing Search Console Notification (Still works)
echo "Notifying Bing Search Console..."
BING_PING_URL="http://www.bing.com/ping?sitemap=https://ytvanced.pro/sitemap.xml"

# Use curl to ping Bing
if command -v curl >/dev/null 2>&1; then
    if curl -s "$BING_PING_URL" > /dev/null; then
        echo -e "${GREEN}✅ Successfully notified Bing Search Console${NC}"
    else
        echo -e "${YELLOW}⚠️  Failed to notify Bing Search Console${NC}"
    fi
else
    echo -e "${YELLOW}curl not found, skipping Bing ping${NC}"
fi

# Yandex Search Console Notification (Still works)
echo "Notifying Yandex Search Console..."
YANDEX_PING_URL="https://webmaster.yandex.com/ping?sitemap=https://ytvanced.pro/sitemap.xml"

if command -v curl >/dev/null 2>&1; then
    if curl -s "$YANDEX_PING_URL" > /dev/null; then
        echo -e "${GREEN}✅ Successfully notified Yandex Search Console${NC}"
    else
        echo -e "${YELLOW}⚠️  Failed to notify Yandex Search Console${NC}"
    fi
else
    echo -e "${YELLOW}curl not found, skipping Yandex ping${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Search Console Update Process Completed!${NC}"
echo ""
echo -e "${BLUE}📋 Manual Steps Required for Google Search Console:${NC}"
echo "1. 🌐 Visit: https://search.google.com/search-console"
echo "2. 📂 Navigate to 'Sitemaps' section"
echo "3. 🔄 Find your sitemap: https://ytvanced.pro/sitemap.xml"
echo "4. ⚡ Click 'Test' then 'Submit' or 'Reload' to refresh"
echo "5. ⏰ Wait 24-48 hours for Google to process the updated sitemap"
echo ""
echo -e "${BLUE}💡 Pro Tips:${NC}"
echo "• Run this script after major content updates"
echo "• Check Google Search Console weekly for indexing status"
echo "• Monitor 'Coverage' reports for any crawl errors"
echo "• Use 'URL Inspection' tool to test individual pages"
