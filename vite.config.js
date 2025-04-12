import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3120,
    proxy: {
      '/api': {
        target: 'https://portfoliobackend-nnue.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
