import { createRouter, createWebHistory } from 'vue-router';
import AppStartPage from './pages/AppStartPage.vue';

const routes = [{component: AppStartPage, name: 'Home', path: '/',},];
const router = createRouter({history: createWebHistory(), routes});

export default router;