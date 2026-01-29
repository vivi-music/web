// src/i18n.js
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      features: 'Features',
      screenshots: 'Screenshots',
      install: 'Install',
      contribute: 'Contribute'
    },
    hero: {
      title: 'Music, Unleashed.',
      subtitle: 'The open-source Android player with Innertube integration.',
      download: 'Download App'
    }
  },
  de: {
    nav: {
      features: 'Funktionen',
      screenshots: 'Vorschau',
      install: 'Installieren',
      contribute: 'Mitwirken'
    },
    hero: {
      title: 'Musik, Entfesselt.',
      subtitle: 'Der Open-Source Android Player mit Innertube Integration.',
      download: 'App Herunterladen'
    }
  }
}

const i18n = createI18n({
  legacy: false, // Wichtig für Vue 3 Composition API
  locale: 'en',  // Standardsprache
  fallbackLocale: 'en',
  messages
})

export default i18n
