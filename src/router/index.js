import { createRouter, createWebHistory } from 'vue-router'
import appRouterConfig from '@/assets/config/router.config'

const router = createRouter({
  history: createWebHistory(),
  routes: appRouterConfig.routers
  // base: '',
})

export default router