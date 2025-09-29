#!/bin/bash
npm run build
cp public/sitemap.xml dist/
echo "✅ Sitemap copied to dist directory"
