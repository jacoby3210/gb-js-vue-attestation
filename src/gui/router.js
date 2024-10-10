import { createRouter, createWebHistory } from 'vue-router';
import Blog from './pages/blog/Blog.vue';
import BlogDetails from './pages/blog-details/BlogDetails.vue';
import Error from './pages/error/Error.vue';
import Start from './pages/start/Start.vue';

const routes = [
  {component: Blog, name: 'Blog', path: '/blog',},
  {component: BlogDetails, name: 'Article', path: '/blog/article/:id',},
  // {component: Error, name: 'Error', path: '/:pathMatch(.*)*',},
  {component: Start, name: 'Home', path: '/',},
];
const router = createRouter({
  history: createWebHistory(), 
  routes,
  scrollBehavior(to, from, savedPosition) {
    return (savedPosition) ? savedPosition : { top: 0 };
  },
});

export default router;