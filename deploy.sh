#!/bin/bash

echo "🚀 Automated Deployment Script for ytvanced.pro"
echo "================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Step 1: Installing Vercel CLI...${NC}"
npm install -g vercel

echo -e "${BLUE}Step 2: Building the project...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build successful!${NC}"
else
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

echo -e "${BLUE}Step 3: Deploying to Vercel...${NC}"
npx vercel --prod --yes

echo -e "${BLUE}Step 4: Adding domain to Vercel...${NC}"
npx vercel domains add ytvanced.pro

echo -e "${YELLOW}📋 COPY THESE DNS RECORDS TO CLOUDFLARE:${NC}"
echo "========================================"
echo "Type: CNAME"
echo "Name: @"
echo "Content: cname.vercel-dns.com"
echo "Proxy: DNS only (gray cloud)"
echo ""
echo "Type: CNAME"
echo "Name: www"  
echo "Content: cname.vercel-dns.com"
echo "Proxy: DNS only (gray cloud)"
echo ""

echo -e "${GREEN}🎉 Deployment completed!${NC}"
echo -e "${YELLOW}👉 Now go to Cloudflare and add the DNS records shown above${NC}"
echo -e "${BLUE}🌐 Your site will be live at https://ytvanced.pro in 5-15 minutes${NC}"