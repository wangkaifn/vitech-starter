import { defineConfig } from 'unocss'
// 允许你在样式中使用类似于 Tailwind 的实用类
import presetWind from '@unocss/preset-wind'
export default defineConfig({
  presets: [
    presetWind(),
  ],
})
