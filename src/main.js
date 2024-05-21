import './index.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Create the Vue app
const app = createApp(App)

// Use the router and pinia
app.use(router)
app.use(createPinia())

// Mount the app
app.mount('#app')
