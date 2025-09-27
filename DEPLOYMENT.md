# 🚀 Deployment Guide for ytvanced.pro

This guide will help you deploy your YouTube Vanced APK website to **ytvanced.pro** using Vercel with Cloudflare optimization.

## 📋 Prerequisites

- [Vercel account](https://vercel.com) (free)
- [Cloudflare account](https://cloudflare.com) (free)
- Your domain `ytvanced.pro` managed in Cloudflare
- Git repository (GitHub/GitLab recommended)

## 🛠️ Step 1: Prepare Your Repository

1. **Push your code to GitHub/GitLab:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: YouTube Vanced APK website"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

## ⚡ Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy your project:**
   ```bash
   cd /path/to/your/project
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? → Y
   - Which scope? → Select your account
   - Link to existing project? → N
   - Project name? → `ytvanced-pro`
   - Directory? → `./` (current directory)
   - Want to override settings? → N

### Option B: Using Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub/GitLab repository
4. Configure project settings:
   - **Project Name:** `ytvanced-pro`
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

## 🌐 Step 3: Configure Custom Domain

### In Vercel Dashboard:

1. Go to your project settings
2. Navigate to "Domains" tab
3. Add your domain: `ytvanced.pro`
4. Add `www.ytvanced.pro` (optional)
5. Vercel will provide DNS records

### Example DNS Records:
```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## ☁️ Step 4: Cloudflare Configuration

### DNS Settings:
1. Login to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your domain `ytvanced.pro`
3. Go to DNS → Records
4. Add/Update these records:

```
Type: A
Name: @
IPv4: 76.76.19.19
Proxy: 🟠 (Proxied)

Type: CNAME
Name: www
Target: cname.vercel-dns.com
Proxy: 🟠 (Proxied)
```

### SSL/TLS Settings:
1. Go to SSL/TLS → Overview
2. Set encryption mode to **"Full (strict)"**
3. Enable **"Always Use HTTPS"**

### Performance Optimization:
1. **Speed → Optimization:**
   - Auto Minify: ✅ HTML, CSS, JS
   - Brotli: ✅ Enable
   - Early Hints: ✅ Enable

2. **Caching → Configuration:**
   - Caching Level: Standard
   - Browser Cache TTL: 4 hours

3. **Page Rules** (optional):
   ```
   ytvanced.pro/static/*
   Settings: Cache Level = Cache Everything, Edge Cache TTL = 1 month
   ```

## 🔧 Step 5: Environment Variables (Optional)

If you need analytics or other services:

1. In Vercel Dashboard → Settings → Environment Variables
2. Add production variables:
   ```
   VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
   VITE_GOOGLE_TAG_MANAGER_ID=GTM_ID
   VITE_HOTJAR_ID=HOTJAR_ID
   ```

## ✅ Step 6: Verify Deployment

1. **Check your website:** https://ytvanced.pro
2. **Test redirects:** 
   - https://www.ytvanced.pro → should redirect to https://ytvanced.pro
3. **Check SSL:** Look for 🔒 in browser
4. **Test mobile responsiveness**
5. **Verify SEO meta tags**

## 🚀 Step 7: Automatic Deployments

Vercel automatically deploys when you push to your main branch:

```bash
git add .
git commit -m "Update website content"
git push origin main
```

## 📊 Performance Monitoring

### Vercel Analytics:
- Enable in Vercel Dashboard → Analytics
- Monitor Core Web Vitals
- Track visitor metrics

### Cloudflare Analytics:
- Dashboard → Analytics & Logs
- Monitor traffic and performance
- Set up security alerts

## 🛡️ Security Headers (Already Configured)

The `vercel.json` includes security headers:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()

## 🔄 Deployment Commands

```bash
# Deploy to production
npm run deploy

# Deploy preview
npm run deploy:preview

# Local development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚨 Troubleshooting

### Common Issues:

1. **Domain not resolving:**
   - Wait 24-48 hours for DNS propagation
   - Check Cloudflare DNS settings
   - Verify Vercel domain configuration

2. **SSL errors:**
   - Ensure Cloudflare SSL mode is "Full (strict)"
   - Check if certificate is active in Vercel

3. **Build failures:**
   - Check build logs in Vercel dashboard
   - Verify all dependencies in package.json
   - Ensure Node.js version compatibility

4. **404 errors on routes:**
   - Verify `vercel.json` rewrites configuration
   - Check React Router setup

### Support Resources:
- [Vercel Documentation](https://vercel.com/docs)
- [Cloudflare Documentation](https://developers.cloudflare.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

## 🎉 Final Checklist

- [ ] Code pushed to repository
- [ ] Vercel project created and deployed
- [ ] Custom domain configured in Vercel
- [ ] Cloudflare DNS records updated
- [ ] SSL certificate active
- [ ] Website accessible at https://ytvanced.pro
- [ ] SEO meta tags working
- [ ] Performance optimizations enabled
- [ ] Analytics configured (optional)

Your YouTube Vanced APK website is now live at **https://ytvanced.pro**! 🚀