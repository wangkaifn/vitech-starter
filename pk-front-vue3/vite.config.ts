import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueRouter from 'unplugin-vue-router/vite'

import UnoCSS from 'unocss/vite'

import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        // presets
        'vue',
        VueRouterAutoImports,
        //...
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
