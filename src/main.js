import './assets/main.css'

import { createApp } from 'vue'
import '/src/assets/js/jquery-3.7.1.min.js';
import '/src/assets/bootstrap-4.6.2-dist/js/bootstrap.bundle.min.js';
import '/src/assets/bootstrap-4.6.2-dist/js/bootstrap.min.js';
import '/src/assets/bootstrap-4.6.2-dist/css/bootstrap.min.css';
import '/src/assets/fontawesome-free-6.5.2-web/css/fontawesome.min.css';
import '/src/assets/fontawesome-free-6.5.2-web/js/fontawesome.min.js';

import App from './App.vue'
import router from './router'
import pinia from "@/stores/store.js";

const app = createApp(App)


app.use(pinia)
app.use(router)
app.mount('#app')
