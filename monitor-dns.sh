#!/bin/bash

echo "🔄 Monitoring ytvanced.pro DNS changes..."
echo "========================================"
echo "This script checks DNS propagation every 60 seconds."
echo "Note: In Cloudflare, '@' displays as your domain name but is correct."
echo "Press Ctrl+C to stop monitoring."
echo ""

while true; do
    echo "$(date): Checking DNS configuration..."
    echo "----------------------------------------"
    
    # Check nameservers first (most critical)
    NAMESERVERS=$(dig +short NS ytvanced.pro)
    A_RECORD=$(dig +short ytvanced.pro A)
    CNAME_RECORD=$(dig +short ytvanced.pro CNAME)
    WWW_CNAME=$(dig +short www.ytvanced.pro CNAME)
    
    echo "📋 Nameserver Check:"
    echo "--------------------"
    if [[ "$NAMESERVERS" == *"cloudflare"* ]]; then
        echo "✅ Using Cloudflare nameservers"
    elif [[ "$NAMESERVERS" == *"dns-parking.com"* ]]; then
        echo "❌ ISSUE: Still using Hostinger nameservers (dns-parking.com)"
        echo "   This is the PRIMARY issue preventing your website from working"
        echo "   Action: Update nameservers at your domain registrar to Cloudflare"
    else
        echo "⚠️  Using unknown nameservers:"
        echo "   $NAMESERVERS"
    fi
    
    echo ""
    echo "🌐 DNS Record Check:"
    echo "-------------------"
    echo "  ytvanced.pro:"
    if [[ -n "$A_RECORD" ]]; then
        echo "    A record: $A_RECORD (INCORRECT - Should be CNAME)"
    fi
    if [[ -n "$CNAME_RECORD" ]]; then
        echo "    CNAME record: $CNAME_RECORD"
    fi
    if [[ -z "$A_RECORD" && -z "$CNAME_RECORD" ]]; then
        echo "    No records found"
    fi
    
    echo "  www.ytvanced.pro:"
    if [[ -n "$WWW_CNAME" ]]; then
        echo "    CNAME record: $WWW_CNAME"
    else
        echo "    No record found"
    fi
    
    echo ""
    echo "🔍 Analysis:"
    echo "-----------"
    
    # Check if nameservers are the issue
    if [[ "$NAMESERVERS" == *"dns-parking.com"* ]]; then
        echo "🚨 CRITICAL ISSUE: Nameservers still point to Hostinger"
        echo "   Even correct Cloudflare DNS records won't work until you fix this"
        echo ""
        echo "🔧 IMMEDIATE ACTION REQUIRED:"
        echo "   1. Login to your domain registrar (where you bought ytvanced.pro)"
        echo "   2. Find the Nameserver or DNS settings"
        echo "   3. Change nameservers to Cloudflare's nameservers"
        echo "   4. Get Cloudflare nameservers from Cloudflare dashboard:"
        echo "      - Login to Cloudflare"
        echo "      - Select ytvanced.pro domain"
        echo "      - Go to DNS tab"
        echo "      - Scroll to 'Nameservers' section"
        echo "   5. Wait 4-24 hours for nameserver propagation"
        echo ""
        echo "💡 After nameserver propagation, your existing Cloudflare DNS records will start working"
    else
        # Check DNS records if nameservers are correct
        ISSUES=0
        
        # Check if A record points to wrong IP
        if [[ "$A_RECORD" == "84.32.84.32" ]]; then
            echo "❌ ISSUE: A record points to Hostinger (84.32.84.32)"
            echo "   This prevents Vercel from serving your website"
            ((ISSUES++))
        elif [[ "$A_RECORD" == "76.76.21.21" ]]; then
            echo "❌ ISSUE: A record points to unknown IP (76.76.21.21)"
            echo "   This prevents Vercel from serving your website"
            ((ISSUES++))
        elif [[ -n "$A_RECORD" ]]; then
            echo "⚠️  WARNING: A record points to unexpected IP ($A_RECORD)"
            echo "   Vercel requires CNAME records for custom domains"
            ((ISSUES++))
        fi
        
        # Check CNAME records
        if [[ "$CNAME_RECORD" == "cname.vercel-dns.com" ]]; then
            echo "✅ Root domain correctly points to Vercel"
        elif [[ -n "$CNAME_RECORD" ]]; then
            echo "⚠️  Root domain has CNAME but points to: $CNAME_RECORD"
            echo "   Should point to: cname.vercel-dns.com"
            ((ISSUES++))
        else
            echo "❌ Root domain has no CNAME record"
            ((ISSUES++))
        fi
        
        if [[ "$WWW_CNAME" == "cname.vercel-dns.com" ]]; then
            echo "✅ WWW subdomain correctly points to Vercel"
        elif [[ -n "$WWW_CNAME" ]]; then
            echo "⚠️  WWW subdomain has CNAME but points to: $WWW_CNAME"
            echo "   Should point to: cname.vercel-dns.com"
            ((ISSUES++))
        else
            echo "❌ WWW subdomain has no CNAME record"
            ((ISSUES++))
        fi
        
        # Check for problematic configurations
        if [[ "$WWW_CNAME" == "ytvanced.pro" ]]; then
            echo "❌ ISSUE: WWW points to root domain (loop configuration)"
            ((ISSUES++))
        fi
        
        echo ""
        if [[ $ISSUES -eq 0 ]]; then
            echo "🎉 All DNS records are correctly configured!"
            echo ""
            echo "Testing website accessibility..."
            DOMAIN_STATUS=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 https://ytvanced.pro)
            if [ "$DOMAIN_STATUS" == "200" ]; then
                echo "✅ Website is accessible at https://ytvanced.pro"
                echo "📝 Note: SSL certificate may still be provisioning"
            else
                echo "⚠️  Website DNS is correct but still loading (SSL provisioning)"
            fi
        else
            echo "🔧 Required actions:"
            echo "   1. Login to Cloudflare dashboard"
            echo "   2. Go to DNS settings for ytvanced.pro"
            echo "   3. DELETE any A records for ytvanced.pro"
            echo "   4. DELETE any incorrect CNAME records"
            echo "   5. ADD these correct records:"
            echo "      Type: CNAME | Name: @    | Content: cname.vercel-dns.com | Proxy: DNS only"
            echo "      Type: CNAME | Name: www  | Content: cname.vercel-dns.com | Proxy: DNS only"
            echo "   6. Save changes"
            echo ""
            echo "💡 Cloudflare Note:"
            echo "   - When you enter '@' as Name, Cloudflare displays it as 'ytvanced.pro'"
            echo "   - This is NORMAL behavior - the record is correctly configured as root domain"
            echo ""
            echo "   7. Wait 5-15 minutes for DNS propagation"
        fi
    fi
    
    echo ""
    echo "Next check in 60 seconds..."
    echo "=================================================="
    sleep 60
done