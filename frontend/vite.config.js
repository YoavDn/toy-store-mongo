import { fileURLToPath,  URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: '../backend/public', // this line place index.html in the public folder
    assetsDir: './dist', // this line place your assets in the public/dist folder
    emptyOutDir : true
  }
})
