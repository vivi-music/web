/**
 * Internationalisierungskonfiguration (i18n).
 * Enthält Übersetzungen für Deutsch (de) und Englisch (en).
 */
import { createI18n } from 'vue-i18n'

const messages = {
  // ... (Hier bleiben deine existierenden Übersetzungen unverändert) ...
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
    },
    features: {
      title_part1: 'Powerful',
      title_part2: 'Features',
      description: 'Experience music without limits. Built for performance and aesthetics.',
      architecture: 'Modern Architecture',
      innertube: {
        title: 'Innertube API',
        desc: 'Direct integration with YouTube Music InnerTube client for unlimited streaming.'
      },
      lyrics: {
        title: 'Synced Lyrics',
        desc: 'Real-time synchronized lyrics support for almost every track.'
      },
      rpc: {
        title: 'Discord RPC',
        desc: 'Share what you are listening to directly on your Discord profile.'
      },
      cache: {
        title: 'Smart Caching',
        desc: 'Intelligent caching strategy to save data and enable offline playback.'
      }
    },
    showcase: {
      title: 'Visual Excellence',
      subtitle: 'Material 3 Expressive Design in Action.'
    },
    install: {
      title: 'Installation',
      step1: {
        title: 'Download APK',
        desc: 'Get the latest release from our GitHub repository.',
        link: 'Go to Releases'
      },
      step2: {
        title: 'Allow Installation',
        desc: 'Enable "Install from unknown sources" in your settings if prompted.'
      },
      step3: {
        title: 'Enjoy Music',
        desc: 'Launch Vivi Music and sign in or start listening anonymously.'
      }
    },
    test: {
      title: 'Run Tests',
      note: 'Requires a connected Android device or running emulator.'
    },
    contribute: {
      title: 'Contribute',
      subtitle: 'Join the development and help us make Vivi Music even better.',
      fork: {
        title: 'Fork Repository',
        desc: 'Create your own copy of the project on GitHub.'
      },
      debug: {
        title: 'Debug App',
        desc: 'Open the project in Android Studio and run it locally.'
      },
      pr: {
        title: 'Pull Request',
        desc: 'Submit your improvements or bug fixes for review.'
      },
      directories: 'Key Directories'
    },
    footer: {
      license: 'Licensed under GPL v3.0',
      based_on: 'Based on the open-source Vivi Music Android project.'
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
    },
    features: {
      title_part1: 'Mächtige',
      title_part2: 'Funktionen',
      description: 'Erlebe Musik ohne Grenzen. Entwickelt für Leistung und Ästhetik.',
      architecture: 'Moderne Architektur',
      innertube: {
        title: 'Innertube API',
        desc: 'Direkte Integration des YouTube Music InnerTube Clients für unbegrenztes Streaming.'
      },
      lyrics: {
        title: 'Synchrone Songtexte',
        desc: 'Echtzeit-synchronisierte Songtexte für fast jeden Titel.'
      },
      rpc: {
        title: 'Discord RPC',
        desc: 'Teile direkt auf deinem Discord-Profil, was du gerade hörst.'
      },
      cache: {
        title: 'Intelligentes Caching',
        desc: 'Intelligente Caching-Strategie zum Datensparen und für Offline-Wiedergabe.'
      }
    },
    showcase: {
      title: 'Visuelle Exzellenz',
      subtitle: 'Material 3 Expressive Design in Aktion.'
    },
    install: {
      title: 'Installation',
      step1: {
        title: 'APK Herunterladen',
        desc: 'Hole dir das neueste Release von unserem GitHub Repository.',
        link: 'Zu den Releases'
      },
      step2: {
        title: 'Installation zulassen',
        desc: 'Aktiviere "Installation aus unbekannten Quellen" in den Einstellungen.'
      },
      step3: {
        title: 'Musik genießen',
        desc: 'Starte Vivi Music und melde dich an oder höre anonym.'
      }
    },
    test: {
      title: 'Tests ausführen',
      note: 'Erfordert ein verbundenes Android-Gerät oder einen laufenden Emulator.'
    },
    contribute: {
      title: 'Mitwirken',
      subtitle: 'Tritt der Entwicklung bei und hilf uns, Vivi Music noch besser zu machen.',
      fork: {
        title: 'Repository Forken',
        desc: 'Erstelle deine eigene Kopie des Projekts auf GitHub.'
      },
      debug: {
        title: 'App Debuggen',
        desc: 'Öffne das Projekt in Android Studio und führe es lokal aus.'
      },
      pr: {
        title: 'Pull Request',
        desc: 'Reiche deine Verbesserungen oder Fehlerbehebungen zur Überprüfung ein.'
      },
      directories: 'Wichtige Verzeichnisse'
    },
    footer: {
      license: 'Lizenziert unter GPL v3.0',
      based_on: 'Basierend auf dem Open-Source Vivi Music Android Projekt.'
    }
  }
}

/**
 * i18n Instanz erstellen.
 * FIX: Default Locale auf 'en' geändert.
 */
const i18n = createI18n({
  legacy: false,
  locale: 'en', // <--- Standard auf Englisch
  fallbackLocale: 'en',
  messages
})

export default i18n