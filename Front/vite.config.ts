import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': '/src', // This allows you to use '@' as an alias for the src directory
    },
  },
  server: {
    host: true, // or "0.0.0.0"
    allowedHosts: [
      'aurora-vm.francecentral.cloudapp.azure.com'
    ],
    proxy: {
      '/api': {
        target: 'http://api-gateway',
        changeOrigin: true,
      },
    },
  }
})
