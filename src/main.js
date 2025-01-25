import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

import TabExample1 from '@/pages/TabExample1.vue'
import TabExample2 from '@/pages/TabExample2.vue'
import TabExample3 from '@/pages/TabExample3.vue'

const routes = [
  { path: '/', redirect: '/example1' },
  { path: '/example1', component: TabExample1 },
  { path: '/example2', component: TabExample2 },
  { path: '/example3', component: TabExample3 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
