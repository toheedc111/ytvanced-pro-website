#!/bin/bash

echo "🔍 Verifying YouTubeMusicGuide.jsx Fix"
echo "===================================="
echo ""

echo "1. 🔍 Checking for duplicate React imports in YouTubeMusicGuide.jsx..."
echo "--------------------------------------------------------------------"
LINES=$(grep -n "import React from 'react';" /Users/maeed/Downloads/qoder/ytvecand/ai-coding-website/src/pages/YouTubeMusicGuide.jsx)

if [ "$(echo "$LINES" | wc -l)" -eq 1 ]; then
    echo "✅ Only one React import found:"
    echo "$LINES"
else
    echo "❌ Found multiple React imports:"
    echo "$LINES"
fi

echo ""
echo "2. 🧪 Testing syntax with Node..."
echo "------------------------------"
# Test if the file can be parsed without syntax errors
if node -c /Users/maeed/Downloads/qoder/ytvecand/ai-coding-website/src/pages/YouTubeMusicGuide.jsx 2>/dev/null; then
    echo "✅ File syntax is valid"
else
    echo "❌ File syntax contains errors"
fi

echo ""
echo "3. 📊 Checking all JSX files for duplicate imports..."
echo "--------------------------------------------------"
echo "Files with React imports:"
find /Users/maeed/Downloads/qoder/ytvecand/ai-coding-website/src -name "*.jsx" -exec grep -l "import React from 'react';" {} \; | while read file; do
    COUNT=$(grep -c "import React from 'react';" "$file")
    if [ "$COUNT" -gt 1 ]; then
        echo "❌ $file has $COUNT React imports"
    else
        echo "✅ $file has $COUNT React import"
    fi
done

echo ""
echo "✅ Verification complete!"