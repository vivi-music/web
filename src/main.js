import { createApp } from 'vue'
import './assets/css/base.css'
import 'virtual:uno.css'
import App from './App.vue'
import i18n from './i18n' // <--- Importieren

const app = createApp(App)

app.use(i18n) // <--- Plugin nutzen
app.mount('#app')
