import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import setupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    setupExtend(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/styles/global.scss" as *;',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
})
