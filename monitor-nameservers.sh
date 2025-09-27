#!/bin/bash

echo "🔄 Monitoring ytvanced.pro Nameserver Changes..."
echo "=============================================="
echo "This script checks nameserver propagation every 60 seconds."
echo "Nameserver propagation can take 4-24 hours."
echo "Press Ctrl+C to stop monitoring."
echo ""

while true; do
    echo "$(date): Checking nameserver configuration..."
    echo "---------------------------------------------"
    
    # Check current nameservers
    CURRENT_NS=$(dig +short NS ytvanced.pro)
    
    echo "Current nameservers:"
    echo "$CURRENT_NS"
    echo ""
    
    # Check if Cloudflare nameservers are active
    if [[ "$CURRENT_NS" == *"cloudflare"* ]]; then
        echo "✅ SUCCESS: Cloudflare nameservers are now active!"
        echo "   Your domain is now managed by Cloudflare"
        echo ""
        echo "Next steps:"
        echo "1. Wait 5-15 minutes for DNS record propagation"
        echo "2. Your website should be live at https://ytvanced.pro"
        echo "3. Run ./monitor-dns.sh to monitor DNS record propagation"
        break
    elif [[ "$CURRENT_NS" == *"dns-parking.com"* ]]; then
        echo "⏳ Still using Hostinger nameservers (dns-parking.com)"
        echo "   Waiting for nameserver propagation..."
        echo "   This can take 4-24 hours"
    else
        echo "⚠️  Using unknown nameservers:"
        echo "   $CURRENT_NS"
    fi
    
    echo ""
    echo "Next check in 60 seconds..."
    echo "=================================================="
    sleep 60
done