// Vercel-compatible sitemap generator
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
// Prefer environment variable for domain; fallback to canonical domain
const DOMAIN = process.env.VITE_SITE_URL || 'https://ytvanced.pro';
const OUTPUT_PATH = path.join(__dirname, '../../public/sitemap.xml');

// Route configuration with priorities and change frequencies
// Sourced from src/App.jsx to ensure accuracy
const routes = [
  // Main pages
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/download', priority: '0.9', changefreq: 'weekly' },
  { path: '/features', priority: '0.8', changefreq: 'monthly' },
  { path: '/documentation', priority: '0.7', changefreq: 'monthly' },
  { path: '/installation', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.7', changefreq: 'weekly' },
  { path: '/community', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.5', changefreq: 'yearly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },

  // Legal pages
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
  { path: '/disclaimer', priority: '0.3', changefreq: 'yearly' },

  // Article pages
  { path: '/youtube-vanced-apk-2025-complete-download-installation-guide', priority: '0.9', changefreq: 'monthly' },
  { path: '/youtube-vanced-apk-download-official-sources-safety-guide', priority: '0.9', changefreq: 'monthly' },
  { path: '/youtube-vanced-apk-vs-youtube-premium-ultimate-comparison-2025', priority: '0.9', changefreq: 'monthly' },
  { path: '/youtube-vanced-apk-android-installation-compatibility-guide', priority: '0.9', changefreq: 'monthly' },
  { path: '/youtube-music-vanced-apk-features-download-guide-2025', priority: '0.9', changefreq: 'monthly' },

  // Legacy routes for SEO
  { path: '/guides', priority: '0.6', changefreq: 'monthly' },
  { path: '/alternatives', priority: '0.6', changefreq: 'monthly' },
  { path: '/support', priority: '0.6', changefreq: 'monthly' }
];

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

// Generate sitemap XML
const generateSitemap = () => {
  console.log('🚀 Generating sitemap...');
  const currentDate = getCurrentDate();
  console.log(`📅 Using current date: ${currentDate}`);

  const generatedAtISO = new Date().toISOString();
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  // Harmless XML comment ensures content changes each run for hourly updates
  sitemap += `<!-- generatedAt: ${generatedAtISO} -->\n`;
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${DOMAIN}${route.path}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });

  sitemap += '</urlset>';

  // Ensure directory exists
  const dir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Write sitemap to file
  fs.writeFileSync(OUTPUT_PATH, sitemap);
  console.log('✅ Sitemap generated successfully!');
  console.log(`📍 Location: ${OUTPUT_PATH}`);
  console.log(`📊 Total URLs: ${routes.length}`);
  console.log(`🌐 Domain: ${DOMAIN}`);
};

// Execute
generateSitemap();