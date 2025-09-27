#!/bin/bash

echo "🔍 Comprehensive DNS and Deployment Diagnostic"
echo "=============================================="
echo ""

echo "📡 Checking current DNS resolution for ytvanced.pro..."
echo "------------------------------------------------------"
echo "Current DNS records:"
dig +short ytvanced.pro A
dig +short ytvanced.pro CNAME
dig +short www.ytvanced.pro CNAME
echo ""

echo "🌐 Checking HTTP response from ytvanced.pro..."
echo "------------------------------------------------"
curl -I -s -m 10 https://ytvanced.pro | head -5
echo ""

echo "✅ Checking Vercel deployment status..."
echo "--------------------------------------"
curl -I -s -m 10 https://ytvanced-pro-website-f6q8.vercel.app | head -3
echo ""

echo "📋 GitHub repository status..."
echo "-----------------------------"
curl -s "https://api.github.com/repos/toheedc111/ytvanced-pro-website" | grep -E "(full_name|homepage|updated_at)" | head -3
echo ""

echo "🔧 Recommended next steps:"
echo "-------------------------"
echo "1. In Cloudflare DNS settings, ensure you have these EXACT records:"
echo "   Type: CNAME | Name: @    | Content: cname.vercel-dns.com | Proxy: DNS only"
echo "   Type: CNAME | Name: www  | Content: cname.vercel-dns.com | Proxy: DNS only"
echo ""
echo "2. Make sure you DELETE any record with 'ytvanced.pro' as the name"
echo "3. The root domain record must use '@' as the name, not the full domain"
echo ""
echo "4. After making changes, wait 5-15 minutes for DNS propagation"
echo "5. You can monitor progress with: ./monitor-dns.sh"