import { defineConfig } from 'unocss'
// 允许你在样式中使用类似于 Tailwind 的实用类
import presetWind from '@unocss/preset-wind'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        // ...
      },
      prefix: 'i-',
    }),
  ],
})
