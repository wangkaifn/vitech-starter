import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router/auto'
const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})

export default router
