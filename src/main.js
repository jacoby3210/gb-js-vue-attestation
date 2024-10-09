import { createApp } from 'vue'
import router from './gui/router';
import store from './code/store/store.js';
import App from './App.vue'

createApp(App).use(store).use(router).mount('#app')
