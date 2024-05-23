import { createRouter, createWebHistory } from 'vue-router'
import CountryPage from '@/pages/CountryPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CountryPage
    }
  ]
})

export default router
