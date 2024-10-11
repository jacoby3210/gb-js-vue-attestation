import { createRouter, createWebHistory } from 'vue-router';
import BlogCatalog from './pages/blog-catalog/BlogCatalog.vue';
import BlogDetails from './pages/blog-details/BlogDetails.vue';
import ProjectCatalog from './pages/project-catalog/ProjectCatalog.vue'
import Error from './pages/error/Error.vue';
import Start from './pages/start/Start.vue';

const routes = [
  {component: BlogCatalog, name: 'BlogCatalog', path: '/blog',},
  {component: BlogDetails, name: 'BlogDetails', path: '/blog/article/:id',},
  {component: Error, name: 'Error', path: '/:pathMatch(.*)*',},
  {component: ProjectCatalog, name: 'ProjectCatalog', path: '/projects',},
  {component: Start, name: 'Start', path: '/',},
];
const router = createRouter({
  history: createWebHistory(), 
  routes,
  scrollBehavior(to, from, savedPosition) {
    return (savedPosition) ? savedPosition : { top: 0 };
  },
});

export default router;