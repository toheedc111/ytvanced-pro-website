#!/bin/bash

echo "🔍 Final Verification Script for ytvanced.pro Deployment"
echo "======================================================"
echo ""

echo "1. 📁 Local Build Verification"
echo "------------------------------"
if [ -d "dist" ] && [ -f "dist/index.html" ]; then
    echo "✅ Local build successful - dist folder exists"
    echo "   Files in dist: $(ls dist | wc -l) items"
else
    echo "❌ Local build missing - dist folder not found"
fi
echo ""

echo "2. 🚀 GitHub Repository Status"
echo "-----------------------------"
REPO_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://api.github.com/repos/toheedc111/ytvanced-pro-website")
if [ "$REPO_STATUS" == "200" ]; then
    echo "✅ GitHub repository accessible"
    COMMITS=$(curl -s "https://api.github.com/repos/toheedc111/ytvanced-pro-website/commits?per_page=1" | grep -c "sha")
    if [ "$COMMITS" -gt 0 ]; then
        echo "✅ Recent commits found - GitHub integration working"
    else
        echo "⚠️  No commits found"
    fi
else
    echo "❌ GitHub repository not accessible (Status: $REPO_STATUS)"
fi
echo ""

echo "3. ☁️  Vercel Deployment Status"
echo "------------------------------"
VERCEL_URL="https://ytvanced-pro-website-f6q8.vercel.app"
VERCEL_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$VERCEL_URL")
if [ "$VERCEL_STATUS" == "200" ]; then
    echo "✅ Vercel deployment accessible at $VERCEL_URL"
    VERCEL_CONTENT=$(curl -s "$VERCEL_URL" | grep -c "<title>")
    if [ "$VERCEL_CONTENT" -gt 0 ]; then
        echo "✅ Vercel deployment returning content"
    else
        echo "⚠️  Vercel deployment returning empty content"
    fi
else
    echo "❌ Vercel deployment not accessible (Status: $VERCEL_STATUS)"
fi
echo ""

echo "4. 🌐 DNS Configuration Check"
echo "----------------------------"
A_RECORD=$(dig +short ytvanced.pro A)
CNAME_RECORD=$(dig +short ytvanced.pro CNAME)

if [[ "$A_RECORD" == "84.32.84.32" ]]; then
    echo "❌ DNS pointing to Hostinger (84.32.84.32)"
    echo "   Required action: Update Cloudflare DNS records"
    echo "   Current CNAME record: $CNAME_RECORD"
elif [[ -n "$CNAME_RECORD" ]]; then
    echo "✅ DNS has CNAME record: $CNAME_RECORD"
    echo "   Verifying if it points to Vercel..."
    if [[ "$CNAME_RECORD" == *"vercel"* ]]; then
        echo "✅ DNS correctly points to Vercel infrastructure"
    else
        echo "⚠️  DNS points to non-Vercel service"
    fi
else
    echo "⚠️  No DNS records found for ytvanced.pro"
fi
echo ""

echo "5. 🌍 Website Accessibility"
echo "--------------------------"
DOMAIN_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://ytvanced.pro")
if [ "$DOMAIN_STATUS" == "200" ]; then
    echo "✅ Website accessible at https://ytvanced.pro"
elif [ "$DOMAIN_STATUS" == "000" ]; then
    echo "⚠️  Website not accessible (DNS issue or still propagating)"
else
    echo "⚠️  Website returned status: $DOMAIN_STATUS"
fi
echo ""

echo "📋 Summary"
echo "----------"
if [[ "$A_RECORD" != "84.32.84.32" ]] && [ "$VERCEL_STATUS" == "200" ] && [ "$DOMAIN_STATUS" == "200" ]; then
    echo "🎉 Everything is working correctly!"
elif [[ "$A_RECORD" == "84.32.84.32" ]] && [ "$VERCEL_STATUS" == "200" ]; then
    echo "🔧 Action required: Fix DNS configuration in Cloudflare"
    echo "   Follow the steps in CLOUDFLARE_FIX_GUIDE.md"
else
    echo "⚠️  Multiple issues detected - check each section above"
fi