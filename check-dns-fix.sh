#!/bin/bash

echo "🔍 Checking if DNS fix has been applied..."
echo "========================================"
echo "Note: In Cloudflare, '@' displays as your domain name but is correct."
echo ""

A_RECORD=$(dig +short ytvanced.pro A)
CNAME_RECORD=$(dig +short ytvanced.pro CNAME)
WWW_CNAME=$(dig +short www.ytvanced.pro CNAME)

echo "Current DNS resolution:"
echo "----------------------"
echo "A record for ytvanced.pro: ${A_RECORD:-None}"
echo "CNAME record for ytvanced.pro: ${CNAME_RECORD:-None}"
echo "CNAME record for www.ytvanced.pro: ${WWW_CNAME:-None}"
echo ""

echo "Analysis:"
echo "---------"
if [[ -n "$A_RECORD" ]]; then
    echo "❌ ISSUE: A record still exists ($A_RECORD)"
    echo "   Vercel requires CNAME records, not A records"
    echo "   Action: DELETE this A record in Cloudflare"
fi

if [[ "$CNAME_RECORD" == "cname.vercel-dns.com" ]]; then
    echo "✅ CORRECT: Root domain CNAME points to Vercel"
elif [[ -n "$CNAME_RECORD" ]]; then
    echo "⚠️  Root domain has CNAME but points to: $CNAME_RECORD"
    echo "   Should point to: cname.vercel-dns.com"
else
    echo "❌ ISSUE: Root domain does not have correct CNAME"
    echo "   Action: ADD CNAME record with Name: @ and Content: cname.vercel-dns.com"
fi

if [[ "$WWW_CNAME" == "cname.vercel-dns.com" ]]; then
    echo "✅ CORRECT: WWW subdomain CNAME points to Vercel"
elif [[ -n "$WWW_CNAME" ]]; then
    echo "⚠️  WWW subdomain has CNAME but points to: $WWW_CNAME"
    echo "   Should point to: cname.vercel-dns.com"
else
    echo "❌ ISSUE: WWW subdomain does not have correct CNAME"
    echo "   Action: Ensure WWW CNAME points to cname.vercel-dns.com"
fi

echo ""
echo "Cloudflare Configuration Notes:"
echo "------------------------------"
echo "• When you enter '@' as Name in Cloudflare, it displays as 'ytvanced.pro'"
echo "• This is NORMAL behavior - '@' represents the root domain"
echo "• The important part is that Content should be 'cname.vercel-dns.com'"
echo ""

echo "Required actions:"
echo "----------------"
if [[ -n "$A_RECORD" ]] || [[ "$CNAME_RECORD" != "cname.vercel-dns.com" ]] || [[ "$WWW_CNAME" != "cname.vercel-dns.com" ]]; then
    echo "1. Login to Cloudflare dashboard"
    echo "2. Go to DNS settings for ytvanced.pro"
    echo "3. DELETE any A records for ytvanced.pro"
    echo "4. DELETE any incorrect CNAME records"
    echo "5. ADD these correct records:"
    echo "   Record 1:"
    echo "     Type: CNAME"
    echo "     Name: @ (will display as ytvanced.pro)"
    echo "     Content: cname.vercel-dns.com"
    echo "     Proxy status: DNS only"
    echo "   Record 2:"
    echo "     Type: CNAME"
    echo "     Name: www"
    echo "     Content: cname.vercel-dns.com"
    echo "     Proxy status: DNS only"
    echo "6. Save changes"
    echo "7. Wait 5-15 minutes for propagation"
else
    echo "✅ DNS configuration appears to be correct!"
    echo "If website is still not working, wait for DNS propagation or clear Cloudflare cache."
fi