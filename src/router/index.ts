import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import FavoriteView from '@/views/FavoriteView/FavoriteView.vue'
import SearchView from '../views/SearchView/SearchView.vue'
import ErrorView from '@/views/ErrorView.vue/ErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: FavoriteView
    },
    {
      path: '/search/:query',
      name: 'search',
      component: SearchView,
      props: true
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorView
    },
    { path: '/:pathMatch(.*)*', redirect: '/error/' }
  ],
})

export default router
