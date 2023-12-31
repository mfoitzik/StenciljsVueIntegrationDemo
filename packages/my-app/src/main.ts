import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { ComponentLibrary }   from '@mifotest/vue-library/lib';

createApp(App).use(ComponentLibrary).mount('#app')
