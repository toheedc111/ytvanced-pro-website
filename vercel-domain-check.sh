#!/bin/bash

echo "🔍 Vercel Custom Domain Configuration Check"
echo "========================================="
echo ""

echo "1. 🧪 Current Website Status"
echo "--------------------------"
echo "Vercel deployment URL:"
curl -I -s --max-time 5 https://ytvanced-pro-website-f6q8.vercel.app | head -1
echo ""

echo "Custom domain (ytvanced.pro):"
curl -I -s --max-time 5 https://ytvanced.pro | head -1
echo ""

echo "WWW domain (www.ytvanced.pro):"
curl -I -s --max-time 5 https://www.ytvanced.pro | head -1
echo ""

echo "2. 🔍 Analysis"
echo "-------------"
# Check what we're actually getting from the custom domain
CONTENT_TYPE=$(curl -s -H "Accept: text/html" --max-time 5 https://ytvanced.pro | grep -i "content-type" | head -1)
TITLE=$(curl -s --max-time 5 https://ytvanced.pro | grep -i "<title>" | head -1)

if [[ "$TITLE" == *"Hostinger"* ]]; then
    echo "❌ Custom domain still showing Hostinger parking page"
    echo "   This indicates Vercel doesn't know about your custom domain"
elif [[ "$TITLE" == *"Vanced"* ]] || [[ "$TITLE" == *"YouTube"* ]]; then
    echo "✅ Custom domain showing expected website content"
else
    echo "⚠️  Custom domain showing unexpected content"
    echo "   Title: $TITLE"
fi

echo ""
echo "3. 🛠️  Required Actions"
echo "----------------------"
if [[ "$TITLE" == *"Hostinger"* ]]; then
    echo "🚨 Vercel Custom Domain Configuration Needed"
    echo ""
    echo "Steps to fix:"
    echo "1. Login to Vercel dashboard (https://vercel.com/dashboard)"
    echo "2. Find your project (ytvanced-pro-website or similar)"
    echo "3. Go to Settings → Domains"
    echo "4. Add domain: ytvanced.pro"
    echo "5. Add domain: www.ytvanced.pro"
    echo "6. Wait 5-15 minutes for SSL certificate provisioning"
    echo ""
    echo "Vercel needs to be told about your custom domain even though"
    echo "DNS is already pointing to Cloudflare. This is a required step."
else
    echo "✅ Custom domain appears to be working correctly"
    echo "If you're still seeing issues, try clearing your browser cache"
fi

echo ""
echo "4. 📊 Additional Verification"
echo "----------------------------"
echo "Check if Vercel deployment is accessible:"
echo "curl -I https://ytvanced-pro-website-f6q8.vercel.app"
echo ""
echo "Check DNS propagation:"
echo "dig ytvanced.pro A"
echo "dig www.ytvanced.pro CNAME"