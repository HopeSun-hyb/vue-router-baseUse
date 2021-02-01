import vue from 'vue'
import vueRouter from 'vue-router'

import Home from '../views/home.vue'

// 1.注册路由插件
vue.use(vueRouter)

// 2.映射组件和路由
let routes = [
    { path: '/', component: Home },
    { path: '/about', component: () => import(/* webpackChunkName: "about" */'../views/about.vue')}
]

// 3.创建router对象，传入routes
const router = new vueRouter({
    routes
})

export default router