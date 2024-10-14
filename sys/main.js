import { createApp } from 'vue'
import store from '/src/code/store/store.js';
import router from '/src/pages/router';
import App from '/src/App.vue'

// ------------------------------------------------------------------------- //
// Create and setup Vue Web Application.
// ------------------------------------------------------------------------- //

const app = createApp(App);
app
  .use(store)
  .use(router)
  .mount('#app')

// ------------------------------------------------------------------------- //