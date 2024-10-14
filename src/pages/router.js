import { createRouter, createWebHistory } from 'vue-router';
import BlogCatalog from './blog-catalog/BlogCatalog.vue';
import BlogDetails from './blog-details/BlogDetails.vue';
import ProjectCatalog from './project-catalog/ProjectCatalog.vue'
import ProjectDetails from './project-details/ProjectDetails.vue';
import Error from './error/Error.vue';
import Start from './start/Start.vue';

const root = import.meta.env.BASE_URL;
const routes = [
  {component: BlogCatalog, name: 'BlogCatalog', path: `/blog`,},
  {component: BlogDetails, name: 'BlogDetails', path: `/blog/:id`,},
  {component: Error, name: 'Error', path: `/:pathMatch(.*)*`,},
  {component: Error, name: 'Error', path: `/404`,},
  {component: ProjectCatalog, name: 'ProjectCatalog', path: `/projects`,},
  {component: ProjectDetails, name: 'ProjectDetails', path: `/projects/:id`,},
  {component: Start, name: 'Start', path: `/`,},
];
const router = createRouter({
  history: createWebHistory(root), 
  routes,
  scrollBehavior(to, from, savedPosition) {
    return (savedPosition) ? savedPosition : { top: 0 };
  },
});

export default router;