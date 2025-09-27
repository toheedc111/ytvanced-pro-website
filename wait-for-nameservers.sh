#!/bin/bash

echo "🔄 Waiting for ytvanced.pro nameservers to point to Cloudflare..."
echo "================================================================"
echo "This script will check every 30 seconds until nameservers are updated."
echo "Expected nameservers: lakas.ns.cloudflare.com, tori.ns.cloudflare.com"
echo "Current nameservers:"
dig +short NS ytvanced.pro
echo ""
echo "Press Ctrl+C to stop monitoring."
echo ""

while true; do
    echo "$(date): Checking nameservers..."
    
    # Get current nameservers
    CURRENT_NS=$(dig +short NS ytvanced.pro | sort)
    EXPECTED_NS="lakas.ns.cloudflare.com.
tori.ns.cloudflare.com."
    
    echo "Current: $CURRENT_NS"
    echo "Expected: $EXPECTED_NS"
    echo ""
    
    # Check if nameservers match
    if [[ "$CURRENT_NS" == "$EXPECTED_NS" ]]; then
        echo "✅ SUCCESS: Nameservers now point to Cloudflare!"
        echo "Next steps:"
        echo "1. Log in to Cloudflare dashboard"
        echo "2. Fix DNS records (delete A record, add correct CNAME records)"
        echo "3. Add custom domain to Vercel dashboard"
        echo ""
        break
    else
        echo "⏳ Still waiting for nameserver propagation..."
        echo "This can take 4-24 hours after updating at your domain registrar."
        echo ""
    fi
    
    echo "Next check in 30 seconds..."
    echo "=============================="
    sleep 30
done