import { createRouter, createWebHistory } from 'vue-router'
import LoggedOutView from '../layouts/LoggedOutView.vue'
import ProductListingView from '../views/ProductListingView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: LoggedOutView },
      component: ProductListingView
    },
    {
      path: '/cart',
      name: 'cart',
      meta: { layout: LoggedOutView },
      component: CartView
    }
  ]
})

export default router
