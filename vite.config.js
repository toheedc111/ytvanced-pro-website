import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { sitemapPlugin } from './vite-sitemap-plugin.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // Removed sitemapPlugin to avoid build errors
  
  // Production optimizations
  build: {
    target: 'es2020',
    minify: 'esbuild',
    sourcemap: false,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['react-icons', 'lucide-react'],
          utils: ['react-helmet-async']
        },
        // Optimize asset file names
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const extType = info[info.length - 1]
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`
          }
          if (/\.(css)$/i.test(assetInfo.name)) {
            return `assets/css/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    }
  },
  
  // Development server config
  server: {
    port: 5173,
    host: true
  },
  
  // Preview server config  
  preview: {
    port: 4173,
    host: true
  }
})
