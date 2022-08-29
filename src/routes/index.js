

import {createRouter, createWebHashHistory} from 'vue-router'

const Login = ()=>import('../sys/login/Login.vue');

const routes=[
    { path: '/', redirect: '/Login'  },
    { path: '/Login', component: Login }
]


 const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router

