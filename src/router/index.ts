import { createRouter, createWebHashHistory } from 'vue-router'

const constantRoutes = [
  {
    path: '/containerLayout',
    name: 'containerLayout',
    hidden: true,
    component: () => import('@/components/ContainerLayout.vue'),
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  // routes: mapTwoLevelRouter(constantRoutes),
})

export default router
