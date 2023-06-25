import { createRouter, createWebHistory } from 'vue-router'
import TaskManager from '@/components/TaskManager.vue'
import TaskHome from '@/components/TaskHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: TaskHome
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: TaskManager
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
