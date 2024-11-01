# 项目介绍

这是一个基于 Vue 3 的前端项目，使用 Vite 作为构建工具，并集成了多种现代化的开发工具和插件。

## 启动命令

在项目根目录下，你可以使用以下命令来进行开发、构建和测试：

- `npm run dev`：启动开发服务器
- `npm run build`：构建项目
- `npm run preview`：预览构建后的项目
- `npm run test:unit`：运行单元测试
- `npm run test:e2e`：运行端到端测试
- `npm run lint`：运行 ESLint 并自动修复问题
- `npm run format`：使用 Prettier 格式化代码

## 主要功能点

- **组件化开发**：使用 Vue 3 的组合式 API 和单文件组件进行开发，提升代码复用性和可维护性。
- **状态管理**：集成 Pinia 作为状态管理库，简化应用状态的管理。
- **路由管理**：使用 Vue Router 进行路由管理，支持动态路由和路由守卫。
- **UI 组件库**：集成 Element Plus，提供丰富的 UI 组件，提升开发效率。
- **样式处理**：使用 UnoCSS 进行原子化 CSS 管理，并支持 Sass 预处理器。
- **自动化导入**：通过 unplugin-auto-import 和 unplugin-vue-components 实现自动导入，减少手动引入的繁琐操作。
- **Mock 数据**：集成 Mock.js 和 vite-plugin-mock，方便进行本地数据模拟和接口测试。
- **单元测试**：使用 Vitest 和 @vue/test-utils 进行单元测试，确保组件功能的正确性。
- **端到端测试**：使用 Cypress 进行端到端测试，模拟用户操作，验证应用的整体功能。
- **代码质量**：集成 ESLint 和 Prettier，统一代码风格，提升代码质量。
- **PWA 支持**：通过 vite-plugin-pwa 实现渐进式 Web 应用支持，提升用户体验。

## 依赖包说明

### 生产依赖

- `@vueuse/core`：Vue Composition API 工具库
- `element-plus`：Element UI 的 Vue 3 版本
- `pinia`：Vue 的状态管理库
- `vue`：核心框架
- `vue-router`：Vue 的路由管理库

### 开发依赖

- `@iconify/json`：图标库
- `@tsconfig/node20`：TypeScript 配置
- `@types/jsdom`：JSDOM 的类型定义
- `@types/node`：Node.js 的类型定义
- `@unocss/preset-icons`：UnoCSS 图标预设
- `@vitejs/plugin-vue`：Vite 的 Vue 插件
- `@vitejs/plugin-vue-jsx`：Vite 的 Vue JSX 插件
- `@vitest/eslint-plugin`：Vitest 的 ESLint 插件
- `@vue/eslint-config-prettier`：Vue 的 ESLint Prettier 配置
- `@vue/eslint-config-typescript`：Vue 的 ESLint TypeScript 配置
- `@vue/test-utils`：Vue 测试工具
- `@vue/tsconfig`：Vue 的 TypeScript 配置
- `cypress`：端到端测试框架
- `eslint`：代码检查工具
- `eslint-plugin-cypress`：Cypress 的 ESLint 插件
- `eslint-plugin-vue`：Vue 的 ESLint 插件
- `jsdom`：JavaScript 的 DOM 模拟器
- `npm-run-all2`：并行运行 npm 脚本
- `prettier`：代码格式化工具
- `start-server-and-test`：启动服务器并运行测试
- `typescript`：JavaScript 的超集
- `unocss`：原子化 CSS 框架
- `unplugin-auto-import`：自动导入插件
- `unplugin-icons`：图标插件
- `unplugin-vue-components`：Vue 组件自动导入插件
- `unplugin-vue-router`：Vue 路由自动生成插件
- `vite`：下一代前端工具
- `vite-plugin-mock`：Vite 的 Mock 插件
- `mockjs`：Mock 数据生成工具
- `sass`：CSS 预处理器
- `vite-plugin-pages`：Vite 的页面插件
- `vite-plugin-pwa`：Vite 的 PWA 插件
- `vite-plugin-vue-layouts`：Vite 的 Vue 布局插件
- `vitest`：快速单元测试框架
- `vue-tsc`：Vue 的 TypeScript 编译器
