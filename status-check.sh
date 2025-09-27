#!/bin/bash

echo "🔍 ytvanced.pro Deployment Status Check"
echo "====================================="
echo ""

echo "1. 📋 Nameserver Configuration"
echo "------------------------------"
DOMAIN_NS=$(dig +short NS ytvanced.pro)
echo "Current nameservers:"
echo "$DOMAIN_NS"
echo ""

if [[ "$DOMAIN_NS" == *"cloudflare"* ]]; then
    echo "✅ Nameservers correctly point to Cloudflare"
    
    echo ""
    echo "2. 🌐 DNS Records Check"
    echo "----------------------"
    ROOT_CNAME=$(dig +short ytvanced.pro CNAME)
    WWW_CNAME=$(dig +short www.ytvanced.pro CNAME)
    
    echo "Root domain (ytvanced.pro): $ROOT_CNAME"
    echo "WWW subdomain (www.ytvanced.pro): $WWW_CNAME"
    echo ""
    
    if [[ "$ROOT_CNAME" == "cname.vercel-dns.com" ]] && [[ "$WWW_CNAME" == "cname.vercel-dns.com" ]]; then
        echo "✅ DNS records correctly point to Vercel"
        
        echo ""
        echo "3. 🌍 Website Accessibility"
        echo "--------------------------"
        WEBSITE_STATUS=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 https://ytvanced.pro)
        
        if [ "$WEBSITE_STATUS" == "200" ]; then
            echo "✅ Website is accessible at https://ytvanced.pro"
            echo "🎉 Deployment is COMPLETE!"
        else
            echo "⚠️  Website not yet accessible (status: $WEBSITE_STATUS)"
            echo "   DNS records have propagated but website may still be loading"
        fi
    else
        echo "⚠️  DNS records not yet propagated or incorrectly configured"
        echo "   Current root CNAME: ${ROOT_CNAME:-None}"
        echo "   Current WWW CNAME: ${WWW_CNAME:-None}"
    fi
elif [[ "$DOMAIN_NS" == *"dns-parking.com"* ]]; then
    echo "❌ Nameservers still point to Hostinger"
    echo "   Nameserver propagation in progress (4-24 hours)"
    echo "   Run ./monitor-nameservers.sh to monitor progress"
else
    echo "⚠️  Using unexpected nameservers"
    echo "   $DOMAIN_NS"
fi

echo ""
echo "📋 Summary"
echo "----------"
echo "Nameservers: $DOMAIN_NS"
echo "Root CNAME: ${ROOT_CNAME:-Not resolved}"
echo "WWW CNAME: ${WWW_CNAME:-Not resolved}"
echo "Website status: $WEBSITE_STATUS"