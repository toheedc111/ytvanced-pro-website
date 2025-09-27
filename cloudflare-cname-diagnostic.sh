#!/bin/bash

echo "🔍 Cloudflare Root Domain CNAME Diagnostic"
echo "========================================"
echo ""

echo "1. 📋 Current DNS Configuration Status"
echo "------------------------------------"
echo "Cloudflare DNS Records (from your screenshot):"
echo "  ✓ CNAME | ytvanced.pro | cname.vercel-dns.com | DNS only"
echo "  ✓ CNAME | www          | cname.vercel-dns.com | DNS only"
echo ""

echo "2. 🧪 DNS Resolution Tests"
echo "------------------------"
echo "Testing from different DNS resolvers:"
echo ""

echo "Local DNS:"
ROOT_A_LOCAL=$(dig +short ytvanced.pro A)
ROOT_CNAME_LOCAL=$(dig +short ytvanced.pro CNAME)
WWW_CNAME_LOCAL=$(dig +short www.ytvanced.pro CNAME)
echo "  Root domain A: ${ROOT_A_LOCAL:-None}"
echo "  Root domain CNAME: ${ROOT_CNAME_LOCAL:-None}"
echo "  WWW domain CNAME: ${WWW_CNAME_LOCAL:-None}"
echo ""

echo "Google DNS (8.8.8.8):"
ROOT_A_GOOGLE=$(dig @8.8.8.8 +short ytvanced.pro A)
ROOT_CNAME_GOOGLE=$(dig @8.8.8.8 +short ytvanced.pro CNAME)
WWW_CNAME_GOOGLE=$(dig @8.8.8.8 +short www.ytvanced.pro CNAME)
echo "  Root domain A: ${ROOT_A_GOOGLE:-None}"
echo "  Root domain CNAME: ${ROOT_CNAME_GOOGLE:-None}"
echo "  WWW domain CNAME: ${WWW_CNAME_GOOGLE:-None}"
echo ""

echo "Cloudflare DNS (direct):"
ROOT_A_CF=$(dig @lakas.ns.cloudflare.com +short ytvanced.pro A)
ROOT_CNAME_CF=$(dig @lakas.ns.cloudflare.com +short ytvanced.pro CNAME)
WWW_CNAME_CF=$(dig @lakas.ns.cloudflare.com +short www.ytvanced.pro CNAME)
echo "  Root domain A: ${ROOT_A_CF:-None}"
echo "  Root domain CNAME: ${ROOT_CNAME_CF:-None}"
echo "  WWW domain CNAME: ${WWW_CNAME_CF:-None}"
echo ""

echo "3. 🔍 Analysis"
echo "-------------"
if [[ -n "$WWW_CNAME_GOOGLE" ]] && [[ "$WWW_CNAME_GOOGLE" == "cname.vercel-dns.com." ]]; then
    echo "✅ WWW subdomain is resolving correctly to Vercel"
else
    echo "⚠️  WWW subdomain resolution issues"
fi

if [[ -n "$ROOT_CNAME_GOOGLE" ]] && [[ "$ROOT_CNAME_GOOGLE" == "cname.vercel-dns.com." ]]; then
    echo "✅ Root domain is resolving correctly to Vercel"
elif [[ -n "$ROOT_A_GOOGLE" ]]; then
    echo "⚠️  Root domain resolving to IP addresses (possibly cached)"
else
    echo "⚠️  Root domain not resolving properly"
fi

echo ""
echo "4. 📊 Cloudflare Specific Issues"
echo "------------------------------"
# Check if we're getting the HINFO response that indicates missing records
HINFO_RESPONSE=$(dig @lakas.ns.cloudflare.com ytvanced.pro ANY | grep -c "HINFO\|RFC8482")
if [[ $HINFO_RESPONSE -gt 0 ]]; then
    echo "⚠️  Cloudflare returning HINFO records - this indicates DNS records may not be active yet"
    echo "   This often happens during propagation or when records are misconfigured"
else
    echo "✅ Cloudflare returning proper DNS records"
fi

echo ""
echo "5. 🛠️  Troubleshooting Steps"
echo "--------------------------"
echo "If website is still not working:"
echo "1. Wait 15-30 minutes for full DNS propagation"
echo "2. Clear your local DNS cache:"
echo "   - macOS: sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder"
echo "   - Windows: ipconfig /flushdns"
echo "   - Linux: sudo systemctl restart systemd-resolved"
echo ""
echo "3. If still not working after 30 minutes:"
echo "   - Check Cloudflare's DNS settings again"
echo "   - Ensure both CNAME records exist with correct values"
echo "   - Verify Proxy status is 'DNS only' (gray cloud)"
echo "   - Check for any Cloudflare-specific domain settings"
echo ""
echo "4. Test with different DNS resolvers:"
echo "   dig @1.1.1.1 ytvanced.pro CNAME  # Cloudflare DNS"
echo "   dig @8.8.8.8 ytvanced.pro CNAME  # Google DNS"
echo "   dig @9.9.9.9 ytvanced.pro CNAME  # Quad9 DNS"