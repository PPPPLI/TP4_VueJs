import { createApp } from 'vue'
import App from './App.vue'
import userStore from './store/index.js'
import router from './router/index.js'

const app = createApp(App)

app.use(userStore)
app.use(router)

app.mount('#app')