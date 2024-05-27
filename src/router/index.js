   import { createRouter, createWebHistory } from 'vue-router';
   import Home from '../views/Home.vue'; // 这里仅用于示例，实际不需要

   const routes = [
     {
       path: '/',
       name: 'home',
       component: Home,
     },
     {
       path: '/about',
       name: 'about',
       // 使用动态导入，这样在首次加载时不加载这个组件
       component: () => import('../views/About.vue'),
     },
   ];

   const router = createRouter({
     history: createWebHistory(),
     routes,
   });

   export default router;