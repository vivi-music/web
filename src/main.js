import { createApp } from 'vue'
import './assets/css/base.css'
import 'virtual:uno.css'
import App from './App.vue'
import i18n from './i18n' // <--- Neu: Import

const app = createApp(App)

app.use(i18n) // <--- Neu: Plugin nutzen
app.mount('#app')
