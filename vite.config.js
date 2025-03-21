import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://private-anon-ec5c40d5dd-frenetapi.apiary-mock.com/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  test: {
    globals: true, // Permite o uso de globals (describe, it, expect, etc.)
    environment: 'jsdom', // Usa o jsdom para simular o ambiente do navegador
    setupFiles: './src/tests/setup.js', // Arquivo de setup para configurações globais
    pool: 'vmThreads',
  },
})
