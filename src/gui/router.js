import { createRouter, createWebHistory } from 'vue-router';
import Blog from './pages/blog/Blog.vue';
import Start from './pages/start/Start.vue';

const routes = [
  {component: Start, name: 'Home', path: '/',},
  {component: Blog, name: 'Blog', path: '/blog',},
];
const router = createRouter({history: createWebHistory(), routes});

export default router;