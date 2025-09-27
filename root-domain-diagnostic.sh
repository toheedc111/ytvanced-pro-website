#!/bin/bash

echo "🔍 Root Domain DNS Configuration Diagnostic"
echo "========================================="
echo ""

echo "1. 🧪 Testing DNS Resolution from Different Sources"
echo "------------------------------------------------"
echo "Local DNS resolution:"
echo "  Root domain A record: $(dig +short ytvanced.pro A)"
echo "  Root domain CNAME record: $(dig +short ytvanced.pro CNAME)"
echo "  WWW CNAME record: $(dig +short www.ytvanced.pro CNAME)"
echo ""

echo "Google DNS (8.8.8.8) resolution:"
echo "  Root domain A record: $(dig @8.8.8.8 +short ytvanced.pro A)"
echo "  Root domain CNAME record: $(dig @8.8.8.8 +short ytvanced.pro CNAME)"
echo "  WWW CNAME record: $(dig @8.8.8.8 +short www.ytvanced.pro CNAME)"
echo ""

echo "Cloudflare DNS (lakas.ns.cloudflare.com) resolution:"
echo "  Root domain A record: $(dig @lakas.ns.cloudflare.com +short ytvanced.pro A)"
echo "  Root domain CNAME record: $(dig @lakas.ns.cloudflare.com +short ytvanced.pro CNAME)"
echo "  WWW CNAME record: $(dig @lakas.ns.cloudflare.com +short www.ytvanced.pro CNAME)"
echo ""

echo "2. 📊 Analysis"
echo "-------------"
LOCAL_ROOT_A=$(dig +short ytvanced.pro A)
CLOUDFLARE_WWW_CNAME=$(dig @lakas.ns.cloudflare.com +short www.ytvanced.pro CNAME)
CLOUDFLARE_ROOT_ANY=$(dig @lakas.ns.cloudflare.com ytvanced.pro ANY | grep -c "HINFO\|CNAME\|A")

if [[ -n "$CLOUDFLARE_WWW_CNAME" ]]; then
    echo "✅ WWW subdomain correctly configured in Cloudflare"
else
    echo "❌ WWW subdomain not properly configured in Cloudflare"
fi

if [[ "$CLOUDFLARE_ROOT_ANY" -gt 0 ]] && [[ "$(dig @lakas.ns.cloudflare.com ytvanced.pro ANY | grep -c HINFO)" -eq 0 ]]; then
    echo "✅ Root domain has DNS records in Cloudflare"
else
    echo "❌ Root domain missing DNS records in Cloudflare"
    echo "   Cloudflare is returning HINFO instead of A/CNAME records"
fi

echo ""
echo "3. 🔧 Required Actions"
echo "---------------------"
if [[ "$(dig @lakas.ns.cloudflare.com ytvanced.pro ANY | grep -c HINFO)" -gt 0 ]]; then
    echo "🚨 CRITICAL ISSUE: Root domain has no A or CNAME record in Cloudflare"
    echo ""
    echo "Steps to fix:"
    echo "1. Login to Cloudflare dashboard"
    echo "2. Select ytvanced.pro domain"
    echo "3. Go to DNS settings"
    echo "4. Check if you have BOTH of these records:"
    echo "   - Type: CNAME | Name: @    | Content: cname.vercel-dns.com | Proxy: DNS only"
    echo "   - Type: CNAME | Name: www  | Content: cname.vercel-dns.com | Proxy: DNS only"
    echo "5. If the root domain record is missing, ADD it:"
    echo "   - Click 'Add record'"
    echo "   - Type: CNAME"
    echo "   - Name: @ (will display as ytvanced.pro)"
    echo "   - Content: cname.vercel-dns.com"
    echo "   - Proxy status: DNS only (gray cloud)"
    echo "   - TTL: Auto"
    echo "   - Click 'Save'"
    echo "6. Wait 5-15 minutes for DNS propagation"
else
    echo "✅ Root domain appears to have proper DNS records"
    echo "   If website still not working, wait for DNS propagation"
fi