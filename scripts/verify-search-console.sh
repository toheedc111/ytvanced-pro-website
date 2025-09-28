#!/bin/bash

# Script to verify Google Search Console configuration

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 Google Search Console Verification Script${NC}"
echo "=========================================="

# Get the project root directory
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

echo -e "${YELLOW}Checking project structure...${NC}"

# Check if index.html exists
if [ ! -f "$PROJECT_ROOT/index.html" ]; then
    echo -e "${RED}Error: index.html not found${NC}"
    exit 1
fi

# Check if .env.production exists
if [ ! -f "$PROJECT_ROOT/.env.production" ]; then
    echo -e "${YELLOW}Warning: .env.production not found${NC}"
else
    echo -e "${GREEN}✓ .env.production found${NC}"
    
    # Check if Google Search Console verification variable is set
    if grep -q "VITE_GOOGLE_SEARCH_CONSOLE_VERIFICATION=" "$PROJECT_ROOT/.env.production"; then
        VERIFICATION_CODE=$(grep "VITE_GOOGLE_SEARCH_CONSOLE_VERIFICATION=" "$PROJECT_ROOT/.env.production" | cut -d'=' -f2)
        if [ -n "$VERIFICATION_CODE" ] && [ "$VERIFICATION_CODE" != "" ]; then
            echo -e "${GREEN}✓ Google Search Console verification code found in .env.production${NC}"
            echo "  Verification code: $VERIFICATION_CODE"
        else
            echo -e "${YELLOW}⚠ Google Search Console verification variable is empty in .env.production${NC}"
        fi
    else
        echo -e "${YELLOW}⚠ Google Search Console verification variable not found in .env.production${NC}"
    fi
fi

# Check meta tag in index.html
echo -e "${YELLOW}Checking meta tag in index.html...${NC}"
if grep -q "google-site-verification" "$PROJECT_ROOT/index.html"; then
    echo -e "${GREEN}✓ Google Search Console meta tag found in index.html${NC}"
    
    # Extract the content
    META_CONTENT=$(grep -o 'content="[^"]*"' "$PROJECT_ROOT/index.html" | grep google | cut -d'"' -f2)
    if [ "$META_CONTENT" = "YOUR_GOOGLE_VERIFICATION_CODE_HERE" ]; then
        echo -e "${YELLOW}⚠ Meta tag contains placeholder text. Please update with your actual verification code.${NC}"
    else
        echo "  Meta tag content: $META_CONTENT"
    fi
else
    echo -e "${RED}✗ Google Search Console meta tag not found in index.html${NC}"
fi

# Check verification file
echo -e "${YELLOW}Checking verification file...${NC}"
VERIFICATION_FILES=$(find "$PROJECT_ROOT/public" -name "google*.html" 2>/dev/null)
if [ -n "$VERIFICATION_FILES" ]; then
    echo -e "${GREEN}✓ Google verification file(s) found:${NC}"
    for file in $VERIFICATION_FILES; do
        echo "  - $(basename "$file")"
        CONTENT=$(head -n 1 "$file")
        echo "    Content: $CONTENT"
    done
else
    echo -e "${YELLOW}⚠ No Google verification files found in public directory${NC}"
fi

# Check sitemap
echo -e "${YELLOW}Checking sitemap...${NC}"
if [ -f "$PROJECT_ROOT/public/sitemap.xml" ]; then
    echo -e "${GREEN}✓ sitemap.xml found${NC}"
    
    # Check if sitemap has been updated today
    SITEMAP_DATE=$(grep -o '<lastmod>[0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}</lastmod>' "$PROJECT_ROOT/public/sitemap.xml" | head -n 1 | grep -o '[0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}')
    TODAY=$(date -u +"%Y-%m-%d")
    
    if [ "$SITEMAP_DATE" = "$TODAY" ]; then
        echo -e "${GREEN}✓ Sitemap is up to date (lastmod: $SITEMAP_DATE)${NC}"
    else
        echo -e "${YELLOW}⚠ Sitemap lastmod date is $SITEMAP_DATE, today is $TODAY${NC}"
    fi
else
    echo -e "${RED}✗ sitemap.xml not found${NC}"
fi

# Check robots.txt
echo -e "${YELLOW}Checking robots.txt...${NC}"
if [ -f "$PROJECT_ROOT/public/robots.txt" ]; then
    echo -e "${GREEN}✓ robots.txt found${NC}"
    
    if grep -q "Sitemap:" "$PROJECT_ROOT/public/robots.txt"; then
        echo -e "${GREEN}✓ Sitemap reference found in robots.txt${NC}"
    else
        echo -e "${YELLOW}⚠ Sitemap reference not found in robots.txt${NC}"
    fi
else
    echo -e "${RED}✗ robots.txt not found${NC}"
fi

# Check update scripts
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

echo ""
echo -e "${BLUE}📋 Verification Summary${NC}"
echo "======================"
echo "To complete your Google Search Console setup:"
echo "1. Get your verification code from Google Search Console"
echo "2. Add it to .env.production as VITE_GOOGLE_SEARCH_CONSOLE_VERIFICATION="
echo "3. Or update the meta tag in index.html directly"
echo "4. Submit your sitemap at https://ytvanced.pro/sitemap.xml"
echo "5. Set up automatic updates with: ./scripts/setup-cron-job.sh"

echo ""
echo -e "${GREEN}✅ Verification script completed!${NC}"