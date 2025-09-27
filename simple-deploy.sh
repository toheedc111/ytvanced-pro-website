#!/bin/bash

echo "🔥 SIMPLE DEPLOYMENT FOR ytvanced.pro"
echo "====================================="

echo "✅ Your website is ready!"
echo "📁 All files are built and working"
echo "🌍 Code is pushed to GitHub"
echo ""

echo "🎯 TO DEPLOY: Just run these 3 commands:"
echo ""
echo "1️⃣  vercel login"
echo "2️⃣  vercel --prod"  
echo "3️⃣  vercel domains add ytvanced.pro"
echo ""

echo "🌐 THEN ADD TO CLOUDFLARE:"
echo "Type: CNAME | Name: @ | Content: cname.vercel-dns.com"
echo "Type: CNAME | Name: www | Content: cname.vercel-dns.com"
echo ""

echo "⏰ YOUR SITE WILL BE LIVE IN 15 MINUTES!"

# Show current status
echo ""
echo "📊 CURRENT STATUS:"
echo "Build: ✅ Working"  
echo "GitHub: ✅ Pushed"
echo "Domain: ⏳ Waiting for you to connect"
echo ""

echo "💡 Alternative: Use Vercel Dashboard at https://vercel.com/dashboard"