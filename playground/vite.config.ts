import vue from '@vitejs/plugin-vue'
import { resolve } from 'pathe'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      configFile: resolve(__dirname, '../unocss.config.ts'),
    }),
  ],
  resolve: {
    alias: {
      '@alvarosabu/ui': resolve(__dirname, '../src/'),
    },
  },
})
