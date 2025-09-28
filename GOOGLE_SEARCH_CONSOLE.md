# 🔍 Google Search Console Setup Guide

This guide explains how to set up Google Search Console for the YouTube Vanced website to improve SEO and track search performance.

## 📋 Prerequisites

- Google Account
- Access to Google Search Console
- Admin access to this website repository

## 🔧 Setup Process

### 1. Create Google Search Console Property

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click "Add Property"
3. Enter your domain: `https://ytvanced.pro`
4. Choose verification method (recommended: HTML meta tag)

### 2. Verify Ownership

#### Method 1: Environment Variable (Recommended)
1. In Google Search Console, select "HTML tag" verification method
2. Copy the verification code that looks like: `google-site-verification: google1234567890abc.html`
3. Add the verification code to `.env.production`:
   ```
   VITE_GOOGLE_SEARCH_CONSOLE_VERIFICATION=your_actual_verification_code_here
   ```

#### Method 2: HTML Meta Tag
1. In Google Search Console, select "HTML tag" verification method
2. Copy the verification code that looks like: `google-site-verification: google1234567890abc.html`
3. Update the meta tag in `index.html`:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
   ```

#### Method 3: HTML File
1. Download the HTML verification file from Google Search Console
2. Rename `public/google1234567890abc.html` to match the filename provided by Google
3. Upload to your site (already configured in this repository)

### 3. Submit Sitemap

1. In Google Search Console, navigate to "Sitemaps"
2. Add the sitemap URL: `https://ytvanced.pro/sitemap.xml`
3. Click "Submit"

### 4. Set Up Automatic Updates

This repository includes scripts to automatically update search engines:

#### Manual Update
```bash
# Run the update script
./scripts/update-search-console.sh
```

#### Automatic Hourly Updates
```bash
# Set up cron job for hourly updates
./scripts/setup-cron-job.sh
```

The automatic update script will:
- Update sitemap lastmod dates to current date
- Ping Google Search Console
- Ping Bing Search Console

### 5. Monitor Performance

1. Check indexing status regularly
2. Monitor search queries and click-through rates
3. Fix any crawl errors promptly
4. Review mobile usability reports

## 📊 Key Metrics to Track

- **Index Coverage**: Pages indexed vs. pages with errors
- **Search Performance**: Clicks, impressions, CTR, and average position
- **Core Web Vitals**: Loading performance, interactivity, visual stability
- **Mobile Usability**: Mobile-friendly issues
- **Manual Actions**: Any penalties or warnings

## ⚙️ Advanced Configuration

### robots.txt
The site includes a `robots.txt` file that:
- Allows all content to be crawled
- Specifies the sitemap location

### Schema Markup
The site includes structured data for:
- SoftwareApplication (for the main product)
- Breadcrumbs
- FAQ pages
- Article pages

### Performance Optimization
- Fast loading times with Vite bundling
- Mobile-responsive design
- Proper image optimization
- Clean URL structure

## 🚨 Troubleshooting

### Common Issues

1. **Verification Failed**
   - Ensure meta tag is in the `<head>` section
   - Check for typos in verification code
   - Wait up to 24 hours for DNS propagation

2. **Sitemap Not Found**
   - Verify sitemap URL is correct
   - Check that sitemap.xml is accessible
   - Ensure robots.txt references sitemap

3. **Pages Not Indexing**
   - Check for noindex tags
   - Verify robots.txt isn't blocking pages
   - Look for crawl errors in Search Console

### Support Resources

- [Google Search Console Help](https://support.google.com/webmasters/)
- [Google Search Central Documentation](https://developers.google.com/search)
- [SEO Best Practices](https://developers.google.com/search/docs/beginner/seo-starter-guide)

## 🔄 Maintenance

- Run the update script after major content changes
- Monitor for 404 errors and fix broken links
- Update sitemap when adding new pages
- Review search performance monthly