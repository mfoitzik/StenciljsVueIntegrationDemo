import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { ComponentLibrary }   from 'vue-library/lib';

createApp(App).use(ComponentLibrary).mount('#app')
