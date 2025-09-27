#!/bin/bash

echo "🔍 Verifying ytvanced.pro deployment..."
echo "=================================="

echo "📡 DNS Records:"
dig +short ytvanced.pro A
dig +short www.ytvanced.pro CNAME

echo ""
echo "🌐 HTTP Status:"
curl -I https://ytvanced.pro 2>/dev/null | head -1
curl -I https://www.ytvanced.pro 2>/dev/null | head -1

echo ""
echo "🔒 SSL Certificate:"
echo | openssl s_client -connect ytvanced.pro:443 2>/dev/null | openssl x509 -noout -subject -dates 2>/dev/null

echo ""
echo "⚡ Performance Test:"
curl -o /dev/null -s -w "Time: %{time_total}s | Size: %{size_download} bytes\n" https://ytvanced.pro

echo ""
echo "✅ Verification complete!"