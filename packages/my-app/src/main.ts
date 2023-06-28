import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { ComponentLibrary }   from '@mfoitzik/vue-library/lib';

createApp(App).use(ComponentLibrary).mount('#app')
