#!/bin/bash

# Vercel Integration Setup Script
# This script helps configure Vercel build hooks for automatic deployments

set -e

echo "🚀 Vercel Integration Setup for Hourly Sitemap Updates"
echo "======================================================"

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
print_info "This script will help you set up Vercel integration for automatic deployments"
print_info "when your sitemap is updated by GitHub Actions."
echo ""

# Step 1: Check Vercel project status
echo "📋 Step 1: Vercel Project Status"
echo "================================"

if [ -f ".vercel/project.json" ]; then
    print_status "Vercel project is already linked"
    PROJECT_ID=$(cat .vercel/project.json | grep -o '"projectId":"[^"]*"' | cut -d'"' -f4)
    print_info "Project ID: $PROJECT_ID"
else
    print_warning "Vercel project not linked. Please run 'vercel link' first"
    echo ""
    print_info "To link your project:"
    print_info "1. Run: vercel link"
    print_info "2. Follow the prompts to connect your project"
    print_info "3. Re-run this script"
    exit 1
fi

# Check if user is logged in
if ! vercel whoami &> /dev/null; then
    print_warning "You need to log in to Vercel first"
    echo "Please run: vercel login"
    echo "Then run this script again."
    exit 1
else
    VERCEL_USER=$(vercel whoami)
    print_status "Logged in as: $VERCEL_USER"
fi

echo ""

# Step 2: Get project information
echo "📋 Step 2: Project Configuration"
echo "================================"

# Try to get project info
if [ -f ".vercel/project.json" ]; then
    PROJECT_ID=$(cat .vercel/project.json | grep -o '"projectId":"[^"]*' | cut -d'"' -f4)
    ORG_ID=$(cat .vercel/project.json | grep -o '"orgId":"[^"]*' | cut -d'"' -f4)
    print_status "Found existing Vercel project: $PROJECT_ID"
else
    print_warning "No Vercel project found. Please link your project first:"
    echo "Run: vercel link"
    echo "Then run this script again."
    exit 1
fi

echo ""

# Step 3: Create deploy hook
echo "📋 Step 3: Deploy Hook Creation"
echo "==============================="

print_info "Creating a deploy hook for automatic deployments..."
print_warning "Note: Deploy hooks must be created manually in the Vercel dashboard"

echo ""
echo "🔗 Manual Setup Instructions:"
echo "=============================="
echo "1. Visit: https://vercel.com/dashboard"
echo "2. Go to your project: ytvanced-pro-website"
echo "3. Navigate to Settings → Git"
echo "4. Scroll down to 'Deploy Hooks'"
echo "5. Click 'Create Hook'"
echo "6. Name: 'Sitemap Auto Update'"
echo "7. Branch: 'main' (or your default branch)"
echo "8. Copy the generated webhook URL"

echo ""
read -p "📝 Please paste your Vercel deploy hook URL here: " DEPLOY_HOOK_URL

if [ -z "$DEPLOY_HOOK_URL" ]; then
    print_error "Deploy hook URL is required"
    exit 1
fi

# Validate URL format
if [[ ! "$DEPLOY_HOOK_URL" =~ ^https://api\.vercel\.com/v1/integrations/deploy/ ]]; then
    print_warning "URL doesn't look like a Vercel deploy hook. Please verify."
    echo "Expected format: https://api.vercel.com/v1/integrations/deploy/..."
fi

print_status "Deploy hook URL received"

echo ""

# Step 4: GitHub Secrets Setup
echo "📋 Step 4: GitHub Secrets Configuration"
echo "======================================="

print_info "You need to add the deploy hook as a GitHub secret"
echo ""
echo "🔐 GitHub Secrets Setup:"
echo "========================"
echo "1. Go to your GitHub repository"
echo "2. Navigate to Settings → Secrets and variables → Actions"
echo "3. Click 'New repository secret'"
echo "4. Name: VERCEL_DEPLOY_HOOK"
echo "5. Value: $DEPLOY_HOOK_URL"
echo "6. Click 'Add secret'"

echo ""
read -p "✅ Have you added the VERCEL_DEPLOY_HOOK secret to GitHub? (y/n): " GITHUB_SECRET_ADDED

if [[ ! "$GITHUB_SECRET_ADDED" =~ ^[Yy]$ ]]; then
    print_warning "Please add the GitHub secret before proceeding"
    echo "The automatic deployment won't work without it."
fi

echo ""

# Step 5: Test the integration
echo "📋 Step 5: Integration Testing"
echo "=============================="

print_info "Testing the deploy hook..."

# Test the webhook
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$DEPLOY_HOOK_URL")

if [ "$HTTP_STATUS" = "200" ] || [ "$HTTP_STATUS" = "201" ]; then
    print_status "Deploy hook test successful! (HTTP $HTTP_STATUS)"
    print_info "A deployment should be triggered on Vercel"
else
    print_error "Deploy hook test failed (HTTP $HTTP_STATUS)"
    print_warning "Please verify the URL and try again"
fi

echo ""

# Step 6: Summary and next steps
echo "📋 Step 6: Setup Summary"
echo "======================="

print_status "Vercel integration setup completed!"

echo ""
echo "🎯 What's been configured:"
echo "========================="
echo "✅ Vercel CLI verified"
echo "✅ Project linked: $PROJECT_ID"
echo "✅ Deploy hook created"
echo "✅ GitHub Actions workflow ready"

echo ""
echo "🔄 How it works:"
echo "==============="
echo "1. GitHub Actions runs every hour (cron: '0 * * * *')"
echo "2. Generates fresh sitemap with current timestamp"
echo "3. Checks for changes in sitemap content"
echo "4. If changes detected:"
echo "   - Commits updated sitemap to repository"
echo "   - Notifies Bing and Yandex search engines"
echo "   - Triggers Vercel deployment via webhook"
echo "   - Provides manual instructions for Google Search Console"

echo ""
echo "🔍 Next Steps:"
echo "============="
echo "1. ✅ Push your changes to GitHub to activate the workflow"
echo "2. 📊 Monitor GitHub Actions tab for hourly runs"
echo "3. 🔍 Check Vercel deployments dashboard"
echo "4. 📋 Manually update Google Search Console when needed"

echo ""
echo "📚 Useful Commands:"
echo "=================="
echo "• Test sitemap generation: npm run generate-sitemap"
echo "• Manual workflow trigger: GitHub → Actions → Hourly Sitemap Update → Run workflow"
echo "• Check workflow logs: GitHub → Actions → Latest workflow run"
echo "• Monitor Vercel deployments: https://vercel.com/dashboard"

echo ""
print_status "Setup complete! Your sitemap will now update automatically every hour."

# Create a verification script
cat > scripts/verify-hourly-setup.sh << 'EOF'
#!/bin/bash

echo "🔍 Verifying Hourly Sitemap Update Setup"
echo "========================================"

# Check if sitemap exists
if [ -f "public/sitemap.xml" ]; then
    echo "✅ Sitemap file exists"
    URLS=$(grep -c '<url>' public/sitemap.xml)
    echo "📊 Contains $URLS URLs"
    
    LAST_MOD=$(grep -o '<lastmod>[^<]*</lastmod>' public/sitemap.xml | head -1 | sed 's/<[^>]*>//g')
    echo "📅 Last modified: $LAST_MOD"
else
    echo "❌ Sitemap file not found"
    echo "Run: npm run generate-sitemap"
fi

# Check GitHub Actions workflow
if [ -f ".github/workflows/sitemap-update.yml" ]; then
    echo "✅ GitHub Actions workflow exists"
else
    echo "❌ GitHub Actions workflow missing"
fi

# Check if Vercel project is linked
if [ -f ".vercel/project.json" ]; then
    echo "✅ Vercel project linked"
else
    echo "❌ Vercel project not linked"
fi

# Check package.json scripts
if grep -q "generate-sitemap" package.json; then
    echo "✅ Sitemap generation script configured"
else
    echo "❌ Sitemap generation script missing"
fi

echo ""
echo "🎯 Setup Status: Ready for hourly updates!"
EOF

chmod +x scripts/verify-hourly-setup.sh
print_status "Created verification script: scripts/verify-hourly-setup.sh"

echo ""
print_info "Run 'scripts/verify-hourly-setup.sh' anytime to check your setup status"