import { createRouter, createWebHistory } from 'vue-router';
import BlogCatalog from './pages/blog-catalog/BlogCatalog.vue';
import BlogDetails from './pages/blog-details/BlogDetails.vue';
import ProjectCatalog from './pages/project-catalog/ProjectCatalog.vue'
import ProjectDetails from './pages/project-details/ProjectDetails.vue';
import Error from './pages/error/Error.vue';
import Start from './pages/start/Start.vue';

const root = import.meta.env.BASE_URL;
const routes = [
  {component: BlogCatalog, name: 'BlogCatalog', path: `/blog`,},
  {component: BlogDetails, name: 'BlogDetails', path: `/blog/:id`,},
  {component: Error, name: 'Error', path: `/:pathMatch(.*)*`,},
  {component: ProjectCatalog, name: 'ProjectCatalog', path: `/projects`,},
  {component: ProjectDetails, name: 'ProjectDetails', path: `/projects/:id`,},
  {component: Start, name: 'Start', path: `/`,},
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes,
  scrollBehavior(to, from, savedPosition) {
    return (savedPosition) ? savedPosition : { top: 0 };
  },
});

export default router;