import { createApp } from 'vue'
import router from './gui/router';
import store from './code/store/store.js';
import App from './App.vue'

const app = createApp(App);
app
  .use(store)
  .use(router)
  .mount('#app')
