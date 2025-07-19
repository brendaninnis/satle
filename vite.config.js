import { defineConfig } from 'vite'

export default defineConfig({
  // Environment variables prefixed with VITE_ are exposed to the client
  // This ensures proper loading of .env files based on the mode
  envDir: './', // Look for .env files in project root
  
  build: {
    // Output directory for production builds
    outDir: 'dist',
    // Generate source maps for debugging
    sourcemap: true
  },
  
  server: {
    // Development server configuration
    port: 3000,
    open: true // Automatically open browser on dev server start
  }
}) 