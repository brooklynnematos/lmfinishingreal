import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
        ]
      }
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz'
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br'
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 60
      },
      pngquant: {
        quality: [0.7, 0.8],
        speed: 4
      },
      webp: {
        quality: 70
      },
      svgo: {
        multipass: true,
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('framer-motion')) return 'framer';
            if (id.includes('@emailjs')) return 'email';
            if (id.includes('lucide-react')) return 'icons';
            if (id.includes('react-helmet-async')) return 'seo';
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      },
      mangle: {
        safari10: true,
        keep_fnames: false,
        toplevel: true,
        module: true
      },
      format: {
        comments: false,
        ascii_only: true
      }
    },
    sourcemap: false,
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    reportCompressedSize: false,
    assetsInlineLimit: 4096,
    modulePreload: {
      polyfill: true
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', '@emailjs/browser', 'lucide-react', 'react-helmet-async'],
    exclude: ['@googlemaps/js-api-loader', '@react-google-maps/api']
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  }
});