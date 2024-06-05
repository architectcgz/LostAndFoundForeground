import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementUI from 'element-plus'
import App from './App.vue'
import router from './router'

import SvgIcon from "@/components/svgIcon/index.vue";
import elementIcons from '@/components/svgIcon/svgicon'
import stores from "@/stores/index.js";

const app = createApp(App)

app.use(createPinia())
app.use(elementIcons)
app.component('svg-icon', SvgIcon)
app.use(router)
app.use(ElementUI)
app.use(stores)
app.mount('#app')
