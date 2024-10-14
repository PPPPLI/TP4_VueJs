import { createApp } from 'vue'
import App from './App.vue'
import userStore from './store/index.js'

const app = createApp(App)

app.use(userStore)

app.mount('#app')