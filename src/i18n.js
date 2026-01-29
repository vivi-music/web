import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      features: 'Features',
      screenshots: 'Screenshots',
      install: 'Install',
      contribute: 'Contribute',
      language: 'Language'
    },
    hero: {
      tagline: 'v5.0.3-testing',
      title: 'Music,',
      subtitle: 'Unleashed.',
      description: 'The open-source Android player with Innertube integration, synced lyrics, and Material 3 Expressive Design.',
      btn_download: 'Download App',
      btn_features: 'View Features'
    }
  },
  de: {
    nav: {
      features: 'Funktionen',
      screenshots: 'Vorschau',
      install: 'Installieren',
      contribute: 'Mitwirken',
      language: 'Sprache'
    },
    hero: {
      tagline: 'v5.0.3-testing',
      title: 'Musik,',
      subtitle: 'Entfesselt.',
      description: 'Der Open-Source Android Player mit Innertube Integration, synchronen Lyrics und Material 3 Expressive Design.',
      btn_download: 'App Laden',
      btn_features: 'Funktionen'
    }
  }
}

const i18n = createI18n({
  legacy: false, 
  locale: 'de', // Standardmäßig Deutsch
  fallbackLocale: 'en',
  messages
})

export default i18n
