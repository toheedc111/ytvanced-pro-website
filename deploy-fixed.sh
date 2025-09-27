#!/bin/bash

echo "🚀 Deploying Fixed Version to Vercel"
echo "=================================="
echo ""

echo "1. 📝 Checking for duplicate React imports..."
echo "------------------------------------------"
DUPLICATE_IMPORTS=$(find src -name "*.jsx" -exec grep -l "import React from 'react';" {} \; | xargs grep -n "import React from 'react';" | grep -v ":1:" | wc -l)

if [ "$DUPLICATE_IMPORTS" -gt 0 ]; then
    echo "❌ Found $DUPLICATE_IMPORTS files with duplicate React imports"
    echo "Please fix these before deploying:"
    find src -name "*.jsx" -exec grep -l "import React from 'react';" {} \; | xargs grep -n "import React from 'react';" | grep -v ":1:"
    exit 1
else
    echo "✅ No duplicate React imports found"
fi

echo ""
echo "2. 🧪 Testing local build..."
echo "--------------------------"
if npm run build; then
    echo "✅ Local build successful"
else
    echo "❌ Local build failed"
    echo "Please check the error messages above"
    exit 1
fi

echo ""
echo "3. 🚀 Deploying to Vercel..."
echo "--------------------------"
echo "Pushing changes to GitHub to trigger Vercel deployment..."

# Add, commit, and push changes
git add .
git commit -m "🔧 Fix duplicate React import in YouTubeMusicGuide.jsx"
git push origin main

echo ""
echo "✅ Deployment initiated!"
echo "Vercel will automatically build and deploy your changes."
echo "You can monitor the deployment at: https://vercel.com/dashboard"
echo ""
echo "After deployment completes, add your custom domain in Vercel settings:"
echo "1. Go to your project in Vercel dashboard"
echo "2. Settings → Domains"
echo "3. Add domain: ytvanced.pro"
echo "4. Add domain: www.ytvanced.pro"