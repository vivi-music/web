/**
 * @file i18n.js
 * @description Internationalisierungskonfiguration für Vivi Music.
 * Enthält Übersetzungen für Deutsch (de) und Englisch (en) inklusive neuer Features.
 * @module i18n
 */
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      features: 'Features',
      screenshots: 'Screenshots',
      install: 'Install',
      contribute: 'Contribute',
      language: 'Language',
      theme: {
        light: 'Switch to Light Mode',
        system: 'Switch to System Mode',
        dark: 'Switch to Dark Mode',
        github: 'Visit Web Repository'
      }
    },
    hero: {
      tagline: 'v5.0.3-testing',
      title: 'Music,',
      subtitle: 'Unleashed.',
      description: 'The open-source Android player with Innertube integration, synced lyrics, and Material 3 Expressive Design.',
      btn_download: 'Download App',
      btn_features: 'View Features',
      release_notes: 'Open Release Notes for {version}'
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
      },
      equalizer: {
        title: 'Audio Precision',
        desc: 'Fine-tune your listening experience with a built-in equalizer and advanced audio effects.'
      },
      material: {
        title: 'Material 3 Design',
        desc: 'Experience fluid animations and dynamic colors with the latest Material You expressive design.'
      },
      privacy: {
        title: 'Private by Design',
        desc: 'No tracking, no telemetry. Your listening habits stay on your device where they belong.'
      }
    },
    showcase: {
      title: 'Visual Excellence',
      subtitle: 'Material 3 Expressive Design in Action.'
    },
    install: {
      title: 'Get Vivi Music',
      subtitle: 'Choose your preferred way to stay up to date.',
      izzy: {
        desc: 'The recommended way for F-Droid users. Secure, fast, and easy to update via the IzzyOnDroid repository.'
      },
      github: {
        desc: 'Download the latest APK directly from our GitHub releases if you prefer manual installation.'
      },
      btn_izzy: 'Get it on IzzyOnDroid',
      btn_github: 'View Assets',
      safety_note: 'Verified & Secure APKs',
      step1: {
        title: 'Download',
        desc: 'Pick a source above and download the latest APK file to your Android device.'
      },
      step2: {
        title: 'Settings',
        desc: 'If prompted, allow your browser or file manager to install apps from unknown sources.'
      },
      step3: {
        title: 'Launch',
        desc: 'Open the downloaded file, tap install, and enjoy your music with Vivi.'
      }
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
      }
    },
    footer: {
      license: 'Licensed under GPL v3.0',
      based_on: 'Based on InnerTune',
      social: {
        discord: 'Join our Discord Server',
        telegram: 'Join our Telegram Channel',
        github: 'Visit GitHub Organization'
      }
    }
  },
  de: {
    nav: {
      features: 'Funktionen',
      screenshots: 'Vorschau',
      install: 'Installieren',
      contribute: 'Mitwirken',
      language: 'Sprache',
      theme: {
        light: 'Zu hellem Design wechseln',
        system: 'Zu System-Design wechseln',
        dark: 'Zu dunklem Design wechseln',
        github: 'Web Repository besuchen'
      }
    },
    hero: {
      tagline: 'v5.0.3-testing',
      title: 'Musik,',
      subtitle: 'Entfesselt.',
      description: 'Der Open-Source Android Player mit Innertube Integration, synchronen Lyrics und Material 3 Expressive Design.',
      btn_download: 'App Laden',
      btn_features: 'Funktionen',
      release_notes: 'Release Notes für {version} öffnen'
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
      },
      equalizer: {
        title: 'Audio-Präzision',
        desc: 'Verfeinere dein Hörerlebnis mit einem integrierten Equalizer und fortschrittlichen Audio-Effekten.'
      },
      material: {
        title: 'Material 3 Design',
        desc: 'Erlebe flüssige Animationen und dynamische Farben mit dem neuesten Material You Design.'
      },
      privacy: {
        title: 'Privatsphäre zuerst',
        desc: 'Kein Tracking, keine Telemetrie. Dein Hörverhalten bleibt genau dort, wo es hingehört: auf deinem Gerät.'
      }
    },
    showcase: {
      title: 'Visuelle Exzellenz',
      subtitle: 'Material 3 Expressive Design in Action.'
    },
    install: {
      title: 'Vivi Music holen',
      subtitle: 'Wähle deine bevorzugte Quelle für Updates.',
      izzy: {
        desc: 'Der empfohlene Weg für F-Droid Nutzer. Sicher, schnell und einfach über das IzzyOnDroid Repository.'
      },
      github: {
        desc: 'Lade die aktuellste APK direkt von unseren GitHub Releases für eine manuelle Installation.'
      },
      btn_izzy: 'Bei IzzyOnDroid laden',
      btn_github: 'Assets ansehen',
      safety_note: 'Verifizierte & Sichere APKs',
      step1: {
        title: 'Herunterladen',
        desc: 'Wähle eine Quelle oben und lade die aktuellste APK-Datei auf dein Android-Gerät.'
      },
      step2: {
        title: 'Einstellungen',
        desc: 'Falls gefragt, erlaube deinem Browser oder Dateimanager die Installation aus unbekannten Quellen.'
      },
      step3: {
        title: 'Starten',
        desc: 'Öffne die Datei, tippe auf Installieren und genieße deine Musik mit Vivi.'
      }
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
      }
    },
    footer: {
      license: 'Lizenziert unter GPL v3.0',
      based_on: 'Basiert auf InnerTune',
      social: {
        discord: 'Unserem Discord Server beitreten',
        telegram: 'Unserem Telegram Kanal beitreten',
        github: 'GitHub Organisation besuchen'
      }
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n