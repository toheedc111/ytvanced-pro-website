import { generateSitemap } from './scripts/generate-sitemap.js';

export function sitemapPlugin() {
  return {
    name: 'sitemap-generator',
    buildStart() {
      console.log('🗺️  Generating sitemap during build...');
    },
    generateBundle() {
      try {
        generateSitemap();
        console.log('✅ Sitemap generated and included in build');
      } catch (error) {
        console.error('❌ Failed to generate sitemap:', error);
        throw error;
      }
    }
  };
}