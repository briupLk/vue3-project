import Home from '@/pages/home.vue'
import Workbench from '@/pages/workbench/workbench.vue'

export default {
  routers: [
    {
      path: '/',
      redirect: {
        path: '/home'
      }
    },
    {
      path: '/home',
      name: 'home',
      redirect: {
        path: '/home/workbench'
      },
      component: Home,
      children: [
        {
          path: 'workbench',
          name: 'workbench',
          component: Workbench
        }
      ]
    }
  ]
}