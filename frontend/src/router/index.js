import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import toyApp from '../views/toy-app.vue'
import toyDetails from '../views/toy-details.vue'
import toyEdit from '../views/toy-edit.vue'
import signup from '../views/signup.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/toy',
      name: 'toy',
      component: toyApp
    },
    {
      path: '/toy/edit/:toyId?',
      name: 'toyEdit',
      component: toyEdit
    },
    {
      path: '/toy/:toyId',
      name: 'toyDetails',
      component: toyDetails
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})

export default router
