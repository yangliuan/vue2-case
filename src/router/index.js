import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/exhibition',
    name: 'Exhibition',
    component: () => import('../views/exhibition.vue')
  },
  {
    path: '/control',
    name: 'Control',
    component: () => import('../views/control.vue')
  },
  {
    path: '/excel',
    name: 'Excel',
    component: () => import('../views/excel.vue')
  },
  {
    path: '/word',
    name: 'Word',
    component: () => import('../views/word.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
