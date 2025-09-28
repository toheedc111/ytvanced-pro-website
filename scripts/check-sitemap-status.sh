#!/bin/bash

# Script to check sitemap status and verify Google Search Console submission

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 Sitemap Status Checker${NC}"
echo "========================"

# Get the project root directory
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

echo -e "${YELLOW}Checking sitemap status...${NC}"

# Check if sitemap exists
if [ ! -f "$PROJECT_ROOT/public/sitemap.xml" ]; then
    echo -e "${RED}✗ sitemap.xml not found${NC}"
    exit 1
fi

echo -e "${GREEN}✓ sitemap.xml found${NC}"

# Get sitemap date
SITEMAP_DATE=$(grep -o '<lastmod>[0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}</lastmod>' "$PROJECT_ROOT/public/sitemap.xml" | head -n 1 | grep -o '[0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}')
echo "  Last modified date: $SITEMAP_DATE"

# Get current date
CURRENT_DATE=$(date +"%Y-%m-%d")
echo "  Current date: $CURRENT_DATE"

# Check if sitemap is up to date
if [ "$SITEMAP_DATE" = "$CURRENT_DATE" ]; then
    echo -e "${GREEN}✓ Sitemap is up to date${NC}"
else
    echo -e "${YELLOW}⚠ Sitemap is not up to date${NC}"
    echo "  Difference: $(($(date -d "$CURRENT_DATE" +%s) - $(date -d "$SITEMAP_DATE" +%s)) / 86400) days"
fi

# Check sitemap size
SITEMAP_SIZE=$(wc -l < "$PROJECT_ROOT/public/sitemap.xml")
echo "  Sitemap entries: $SITEMAP_SIZE lines"

# Check if robots.txt references sitemap
if [ -f "$PROJECT_ROOT/public/robots.txt" ]; then
    if grep -q "Sitemap:" "$PROJECT_ROOT/public/robots.txt"; then
        echo -e "${GREEN}✓ robots.txt references sitemap${NC}"
    else
        echo -e "${YELLOW}⚠ robots.txt does not reference sitemap${NC}"
    fi
else
    echo -e "${YELLOW}⚠ robots.txt not found${NC}"
fi

# Test sitemap accessibility
echo -e "${YELLOW}Testing sitemap accessibility...${NC}"

# Check if we can access the sitemap locally
if curl -s --head "http://localhost:5173/sitemap.xml" | head -n 1 | grep -q "200"; then
    echo -e "${GREEN}✓ Sitemap accessible via local server${NC}"
else
    echo -e "${YELLOW}⚠ Cannot access sitemap via local server${NC}"
fi

# Check if update script exists
echo -e "${YELLOW}Checking update scripts...${NC}"
if [ -f "$PROJECT_ROOT/scripts/update-search-console.sh" ]; then
    echo -e "${GREEN}✓ update-search-console.sh found${NC}"
else
    echo -e "${RED}✗ update-search-console.sh not found${NC}"
fi

if [ -f "$PROJECT_ROOT/scripts/setup-cron-job.sh" ]; then
    echo -e "${GREEN}✓ setup-cron-job.sh found${NC}"
else
    echo -e "${RED}✗ setup-cron-job.sh not found${NC}"
fi

# Check cron jobs
echo -e "${YELLOW}Checking cron jobs...${NC}"
if crontab -l 2>/dev/null | grep -q "update-search-console.sh"; then
    echo -e "${GREEN}✓ Cron job for sitemap updates is configured${NC}"
    echo "  Cron entry: $(crontab -l 2>/dev/null | grep "update-search-console.sh")"
else
    echo -e "${YELLOW}⚠ No cron job found for sitemap updates${NC}"
    echo "  To set up automatic updates, run: ./scripts/setup-cron-job.sh"
fi

echo ""
echo -e "${BLUE}📋 Recommendations${NC}"
echo "================="

if [ "$SITEMAP_DATE" != "$CURRENT_DATE" ]; then
    echo "1. Update sitemap manually: ./scripts/update-search-console.sh"
fi

if ! crontab -l 2>/dev/null | grep -q "update-search-console.sh"; then
    echo "2. Set up automatic updates: ./scripts/setup-cron-job.sh"
fi

echo "3. Submit sitemap to Google Search Console manually at:"
echo "   https://search.google.com/search-console/sitemaps"
echo "   ⚠ Note: Google deprecated automatic sitemap ping in June 2023"
echo "   You must manually reload sitemaps in Google Search Console"

echo "4. Monitor sitemap status in Google Search Console"

echo ""
echo -e "${GREEN}✅ Sitemap status check completed!${NC}"