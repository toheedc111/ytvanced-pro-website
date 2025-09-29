#!/bin/bash

# Vercel Deployment Script for Sitemap Updates
# This script handles deployment to Vercel with sitemap generation

set -e

echo "🚀 Deploying to Vercel with Fresh Sitemap"
echo "========================================="

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

# Step 1: Generate fresh sitemap
echo ""
print_info "Step 1: Generating fresh sitemap..."

if npm run generate-sitemap; then
    print_status "Sitemap generated successfully"
else
    print_error "Failed to generate sitemap"
    exit 1
fi

# Step 2: Build the project
echo ""
print_info "Step 2: Building project..."

if npm run build; then
    print_status "Project built successfully"
else
    print_error "Build failed"
    exit 1
fi

# Step 3: Deploy to Vercel
echo ""
print_info "Step 3: Deploying to Vercel..."

# Check if this is a production deployment
if [ "$1" = "--prod" ] || [ "$1" = "--production" ]; then
    print_info "Deploying to production..."
    if vercel --prod; then
        print_status "Production deployment successful"
    else
        print_error "Production deployment failed"
        exit 1
    fi
else
    print_info "Deploying to preview..."
    if vercel; then
        print_status "Preview deployment successful"
    else
        print_error "Preview deployment failed"
        exit 1
    fi
fi

# Step 4: Verify sitemap accessibility
echo ""
print_info "Step 4: Verifying sitemap accessibility..."

# Get the deployment URL from Vercel
DEPLOYMENT_URL=$(vercel ls | grep "$(basename $(pwd))" | head -1 | awk '{print $2}')

if [ -n "$DEPLOYMENT_URL" ]; then
    print_info "Checking sitemap at: https://$DEPLOYMENT_URL/sitemap.xml"
    
    # Test sitemap accessibility
    HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://$DEPLOYMENT_URL/sitemap.xml")
    
    if [ "$HTTP_STATUS" = "200" ]; then
        print_status "Sitemap is accessible (HTTP $HTTP_STATUS)"
    else
        print_warning "Sitemap returned HTTP $HTTP_STATUS"
    fi
else
    print_warning "Could not determine deployment URL"
fi

echo ""
print_status "Deployment completed successfully!"

echo ""
echo "🔗 Useful Links:"
echo "==============="
echo "• Vercel Dashboard: https://vercel.com/dashboard"
echo "• Deployment URL: https://$DEPLOYMENT_URL"
echo "• Sitemap URL: https://$DEPLOYMENT_URL/sitemap.xml"

echo ""
echo "📊 Next Steps:"
echo "============="
echo "• Check your deployment in the Vercel dashboard"
echo "• Verify sitemap is accessible and up-to-date"
echo "• Monitor GitHub Actions for automated updates"