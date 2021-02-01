import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dynamic/:id',
    name: 'Dynamic',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dynamic.vue')
  },  
  {
    path: '/query',
    name: 'Query',
    component: () => import(/* webpackChunkName: "about" */ '../views/Query.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
