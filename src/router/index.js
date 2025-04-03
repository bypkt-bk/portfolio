import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/project/task-management-website',
      name: 'task-management-website',
      component: () => import('../views/project/task-management-website.vue')
    },
  ],
})

export default router
