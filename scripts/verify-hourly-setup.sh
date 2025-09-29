#!/bin/bash

echo "🔍 Verifying Hourly Sitemap Update Setup"
echo "========================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

echo ""

# Check if sitemap exists
echo "📋 Checking Sitemap File"
echo "========================"
if [ -f "public/sitemap.xml" ]; then
    print_status "Sitemap file exists"
    URLS=$(grep -c '<url>' public/sitemap.xml)
    echo "📊 Contains $URLS URLs"
    
    LAST_MOD=$(grep -o '<lastmod>[^<]*</lastmod>' public/sitemap.xml | head -1 | sed 's/<[^>]*>//g')
    echo "📅 Last modified: $LAST_MOD"
    
    # Check if sitemap is recent (within last 24 hours)
    if [ "$(uname)" = "Darwin" ]; then
        # macOS
        SITEMAP_TIME=$(stat -f %m public/sitemap.xml)
        CURRENT_TIME=$(date +%s)
    else
        # Linux
        SITEMAP_TIME=$(stat -c %Y public/sitemap.xml)
        CURRENT_TIME=$(date +%s)
    fi
    
    TIME_DIFF=$((CURRENT_TIME - SITEMAP_TIME))
    HOURS_OLD=$((TIME_DIFF / 3600))
    
    if [ $HOURS_OLD -lt 24 ]; then
        print_status "Sitemap is recent (${HOURS_OLD} hours old)"
    else
        print_warning "Sitemap is ${HOURS_OLD} hours old - may need refresh"
    fi
else
    print_error "Sitemap file not found"
    echo "Run: npm run generate-sitemap"
fi

echo ""

# Check GitHub Actions workflow
echo "📋 Checking GitHub Actions"
echo "=========================="
if [ -f ".github/workflows/sitemap-update.yml" ]; then
    print_status "GitHub Actions workflow exists"
    
    # Check if workflow has hourly cron
    if grep -q "cron.*0 \* \* \* \*" .github/workflows/sitemap-update.yml; then
        print_status "Hourly cron schedule configured"
    else
        print_warning "Hourly cron schedule not found"
    fi
    
    # Check if workflow has Vercel deployment step
    if grep -q "VERCEL_DEPLOY_HOOK" .github/workflows/sitemap-update.yml; then
        print_status "Vercel deployment integration configured"
    else
        print_warning "Vercel deployment integration not found"
    fi
else
    print_error "GitHub Actions workflow missing"
fi

echo ""

# Check if Vercel project is linked
echo "📋 Checking Vercel Integration"
echo "=============================="
if [ -f ".vercel/project.json" ]; then
    print_status "Vercel project linked"
    
    PROJECT_ID=$(cat .vercel/project.json | grep -o '"projectId":"[^"]*' | cut -d'"' -f4)
    echo "📍 Project ID: $PROJECT_ID"
else
    print_warning "Vercel project not linked"
    echo "Run: vercel link"
fi

echo ""

# Check package.json scripts
echo "📋 Checking Package Scripts"
echo "==========================="
if grep -q "generate-sitemap" package.json; then
    print_status "Sitemap generation script configured"
else
    print_error "Sitemap generation script missing"
fi

if grep -q "update-sitemap" package.json; then
    print_status "Update sitemap script configured"
else
    print_warning "Update sitemap script not found"
fi

if grep -q "prebuild.*generate-sitemap" package.json; then
    print_status "Prebuild sitemap generation configured"
else
    print_warning "Prebuild sitemap generation not configured"
fi

echo ""

# Check sitemap generator script
echo "📋 Checking Sitemap Generator"
echo "============================="
if [ -f "scripts/generate-sitemap.js" ]; then
    print_status "Sitemap generator script exists"
    
    # Check if it has the correct domain
    if grep -q "ytvanced.pro" scripts/generate-sitemap.js; then
        print_status "Domain configuration found"
    else
        print_warning "Domain configuration may need verification"
    fi
else
    print_error "Sitemap generator script missing"
fi

echo ""

# Check Vite plugin integration
echo "📋 Checking Vite Integration"
echo "============================"
if [ -f "vite-sitemap-plugin.js" ]; then
    print_status "Vite sitemap plugin exists"
else
    print_warning "Vite sitemap plugin not found"
fi

if grep -q "sitemapPlugin" vite.config.js; then
    print_status "Vite plugin integrated in config"
else
    print_warning "Vite plugin not integrated"
fi

echo ""

# Check monitoring scripts
echo "📋 Checking Monitoring Scripts"
echo "=============================="
if [ -f "scripts/monitor-sitemap-updates.sh" ]; then
    print_status "Monitoring script exists"
else
    print_warning "Monitoring script not found"
fi

if [ -f "scripts/setup-cron-job.sh" ]; then
    print_status "Cron setup script exists"
else
    print_warning "Cron setup script not found"
fi

echo ""

# Overall status
echo "📋 Overall Setup Status"
echo "======================="

CHECKS_PASSED=0
TOTAL_CHECKS=8

# Count successful checks
[ -f "public/sitemap.xml" ] && ((CHECKS_PASSED++))
[ -f ".github/workflows/sitemap-update.yml" ] && ((CHECKS_PASSED++))
[ -f ".vercel/project.json" ] && ((CHECKS_PASSED++))
grep -q "generate-sitemap" package.json && ((CHECKS_PASSED++))
[ -f "scripts/generate-sitemap.js" ] && ((CHECKS_PASSED++))
[ -f "vite-sitemap-plugin.js" ] && ((CHECKS_PASSED++))
grep -q "sitemapPlugin" vite.config.js && ((CHECKS_PASSED++))
[ -f "scripts/monitor-sitemap-updates.sh" ] && ((CHECKS_PASSED++))

PERCENTAGE=$((CHECKS_PASSED * 100 / TOTAL_CHECKS))

if [ $CHECKS_PASSED -eq $TOTAL_CHECKS ]; then
    print_status "Setup is complete! ($CHECKS_PASSED/$TOTAL_CHECKS checks passed - $PERCENTAGE%)"
    echo ""
    print_info "🎯 Your sitemap will update automatically every hour!"
    echo ""
    echo "🔄 Next Actions:"
    echo "• Push changes to GitHub to activate workflow"
    echo "• Set up VERCEL_DEPLOY_HOOK secret in GitHub"
    echo "• Monitor GitHub Actions for hourly runs"
    echo "• Check Vercel deployments dashboard"
elif [ $CHECKS_PASSED -ge 6 ]; then
    print_warning "Setup is mostly complete ($CHECKS_PASSED/$TOTAL_CHECKS checks passed - $PERCENTAGE%)"
    echo "Review the warnings above to complete setup"
else
    print_error "Setup needs attention ($CHECKS_PASSED/$TOTAL_CHECKS checks passed - $PERCENTAGE%)"
    echo "Please address the missing components above"
fi

echo ""

# Provide helpful commands
echo "📚 Useful Commands"
echo "=================="
echo "• Test sitemap: npm run generate-sitemap"
echo "• Setup Vercel: scripts/setup-vercel-integration.sh"
echo "• Setup cron: scripts/setup-cron-job.sh hourly"
echo "• Monitor updates: scripts/monitor-sitemap-updates.sh"
echo "• Manual workflow: GitHub → Actions → Run workflow"

echo ""
print_info "Run this script anytime to check your setup status!"