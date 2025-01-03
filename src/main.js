import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// theme
import '../src/components/style/index.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
