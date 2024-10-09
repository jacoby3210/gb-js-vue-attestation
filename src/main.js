import { createApp } from 'vue'
import router from './gui/router';
import store from './code/store/store.js';
import App from './App.vue'
import ArticleCatalog from './gui/pages/blog/components/ArticleCatalog.vue';
import ArticleSample from "./gui/pages/blog/components/ArticleSample.vue"
import Banner from "./gui/pages/start/components/Banner.vue"
import ProjectCatalog from './gui/pages/start/components/ProjectCatalog.vue';
import Stats from './gui/pages/start/components/Stats.vue';

const app = createApp(App);
app
  .component('ArticleCatalog', ArticleCatalog)
  .component('ArticleSample', ArticleSample)
  .component('ProjectCatalog', ProjectCatalog)
  .component('Banner', Banner)
  .component('Stats', Stats)
  .use(store)
  .use(router)
  .mount('#app')
