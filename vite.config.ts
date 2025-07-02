import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize for mobile performance
    target: 'es2015',
    cssTarget: 'chrome61',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion'],
          'ui-vendor': ['lucide-react', '@radix-ui/react-slot'],
        },
      },
    },
    // Reduce chunk size warnings threshold for mobile
    chunkSizeWarningLimit: 1000,
  },
  server: {
    // Enable compression for dev server
    proxy: {},
  },
  optimizeDeps: {
    // Include commonly used deps for faster builds
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'lucide-react',
      '@radix-ui/react-slot',
      'class-variance-authority',
      'clsx',
      'tailwind-merge',
    ],
  },
  // Enable modern build features
  esbuild: {
    target: 'es2020',
    supported: {
      'top-level-await': true,
    },
  },
})
