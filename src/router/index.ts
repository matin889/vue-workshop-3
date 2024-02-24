import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MovieList from '@/components/MovieList.vue'
import MovieDetails from '@/components/MovieDetails.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/movies',
      name: 'Movies',
      component: MovieList
    },
    {
      path: '/movie/:id',
      name: 'MovieDetails',
      component: MovieDetails
    }
  ]
})

export default router
