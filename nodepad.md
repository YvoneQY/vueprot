# vue3的学习笔记

vue本次项目使用的是vue3+vite+全家桶(ol+axios+pinia+vue-router+element-plus)

### vue3项目创建
```
npm init vue@latest

```

### 安装插件

```
yarn add axios ol pinia vue-router 
yarn add element-plus

```
插件对应功能内容
axios
ol:openlayers专门处理地图插件，支持内网访问。
pinia
vue-router

## vue3路由
```
import { createRouter,createWebHashHistory } from "vue-router";

const Home = ()=>import('../components/Home.vue');
const About = ()=>import('../components/About.vue');

const routes=[
    { path: '/', component: Home },
    { path: '/about', component: About },
]

 const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router


```



## vue3中使用openlayer




### 功能页面

1. 登录页面


### 报错问题
1. 安装scss
Preprocessor dependency "sass" not found. Did you install it
安装node-sass 或 sass 就可以解决 不安装的话就去除style中的lang属性。
```
npm install node-sass
npm install sass --save-dev
```








