#!/bin/bash

echo "🔍 Checking ytvanced.pro deployment status..."
echo "============================================="

echo "📡 Current DNS Resolution:"
dig +short ytvanced.pro A
dig +short www.ytvanced.pro CNAME

echo ""
echo "🌐 HTTP Response:"
curl -I https://ytvanced.pro 2>/dev/null | head -3

echo ""
echo "📊 Current Status Analysis:"

# Check if it's still showing Hostinger parking page
CONTENT_LENGTH=$(curl -I https://ytvanced.pro 2>/dev/null | grep content-length | cut -d' ' -f2 | tr -d '\r')

if [ "$CONTENT_LENGTH" = "9973" ]; then
    echo "❌ Still showing Hostinger parking page"
    echo "👉 Action needed: Update Cloudflare DNS records"
    echo ""
    echo "🔧 Required DNS Records:"
    echo "Type: CNAME | Name: @ | Content: cname.vercel-dns.com"
    echo "Type: CNAME | Name: www | Content: cname.vercel-dns.com"
    echo "Proxy: DNS only (gray cloud)"
else
    echo "✅ Website is live!"
    echo "🎉 Deployment successful!"
fi

echo ""
echo "⏰ If you just updated DNS, wait 10-15 minutes for propagation"