/* eslint-disable */
// 对路由进行映射，并导出 vueRouter 实例
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 1. 引入路由组件
// import article from ;
// import example from '@/views/example/index.vue';

// 2. 定义路由
const routes = [
    { path: '/', redirect: '/article' },    // 访问根目录重定向
    { path: '/article', component: () => import('@/views/article/index.vue'), meta: {name: 'zhanglei'} },
    { path: '/article/details/:id', component: () => import('@/views/article/details.vue') },
    { path: '/example', component: () => import('@/views/example/index.vue') },
    { path: '/jobs', component: () => import('@/views/jobs/index.vue') },
    { path: '/about', component: () => import('@/views/about/index.vue') },
    { path: '/join', component: () => import('@/views/h5_join/index.vue') },
    { path: '*', component: () => import('@/components/404.vue') }
]

// 3. 创建并导出 VueRouter 实例
export default new VueRouter({
    routes
});

