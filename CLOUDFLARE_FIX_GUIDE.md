# 🔧 Cloudflare DNS Configuration Fix - Step by Step

## 🎯 Current Issue
Your domain ytvanced.pro is still pointing to Hostinger (84.32.84.32) instead of your Vercel deployment.

## ✅ Solution: Correct DNS Records

### Step 1: Login to Cloudflare
1. Go to https://dash.cloudflare.com
2. Login with your credentials
3. Select the ytvanced.pro domain

### Step 2: Go to DNS Settings
1. Click on the "DNS" tab in the left sidebar
2. You'll see your current DNS records

### Step 3: DELETE Incorrect Records
Look for and DELETE this record:
```
Type: CNAME
Name: ytvanced.pro
Content: cname.vercel-dns.com
```

### Step 4: ADD Correct Records
Add these two records:

**Record 1 (Root Domain):**
- Type: `CNAME`
- Name: `@` (this represents your root domain)
- Content: `cname.vercel-dns.com`
- Proxy status: `DNS only` (gray cloud icon)

**Record 2 (WWW Subdomain):**
- Type: `CNAME`
- Name: `www`
- Content: `cname.vercel-dns.com`
- Proxy status: `DNS only` (gray cloud icon)

### Step 5: Save and Wait
1. Click "Save" or "Add record" for each record
2. Wait 5-15 minutes for DNS propagation

## 🔄 What This Fixes
- `ytvanced.pro` → Vercel deployment
- `www.ytvanced.pro` → Vercel deployment

## 🔍 Verification
After 5-15 minutes, run:
```bash
./monitor-dns.sh
```

Your website should then be accessible at https://ytvanced.pro