import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Vercel / custom domain: base '/'
// GitHub Pages project site: base '/History.tj/'
const isGithubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  plugins: [react()],
  base: isGithubPages ? '/History.tj/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
})
