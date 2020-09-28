import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Counter from '../views/Counter.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/counter', name: 'Counter', component: Counter },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
