import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    open: true,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemaps in production for better performance
    minify: 'terser',
    target: 'es2015',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          icons: ['react-icons'],
        },
        // Optimize file names for caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable CSS minification
    cssMinify: true,
    // Optimize assets
    assetsInlineLimit: 4096,
  },
  // Enable CSS optimizations
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      // Add any CSS preprocessor options if needed
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'react-icons'
    ]
  },
  // Enable esbuild optimizations
  esbuild: {
    drop: ['console', 'debugger'], // Remove console.log and debugger in production
  },
  // Performance optimizations
  define: {
    __DEV__: false,
  }
});
