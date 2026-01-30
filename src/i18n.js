/**
 * @file i18n.js
 * @description Internationalization (i18n) configuration for the Vivi Music website.
 * This setup supports 11 languages (EN, DE, RU, FR, ML, ES, JA, KO, ZH, TR, PT) 
 * and handles automatic browser language detection.
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
      backup: {
        title: 'Cloud Backup',
        desc: 'Seamlessly backup and restore your settings and local playlists.'
      },
      playlists: {
        title: 'Playlist Magic',
        desc: 'Import YouTube playlists or create local ones with advanced management.'
      },
      timer: {
        title: 'Sleep Timer',
        desc: 'Fall asleep to your favorite tracks with a gentle volume fade-out.'
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
      subtitle: 'Material 3 Expressive Design in Action.',
      mockup: {
        welcome: 'Welcome back',
        discover: 'Discover',
        for_you: 'For You',
        relax: 'Relax',
        energy: 'Energy',
        now_playing: 'Now Playing',
        track_title: 'Cosmic Resonance',
        track_artist: 'Vivi Orchestra',
        lyrics: {
          line1: 'Lost in the echoes of time',
          line2: 'Where the stars begin to chime',
          line3: 'Floating through the endless night'
        },
        library: 'Your Library',
        search_title: 'Explore',
        search_placeholder: 'Artists, songs, albums...',
        trending: 'Trending Now',
        equalizer_title: 'Audio Precision',
        bass_boost: 'Bass Boost',
        surround: 'Surround Sound',
        settings_title: 'Settings',
        backup_status: 'Cloud Backup: Active',
        timer_label: 'Sleep Timer: 30m'
      }
    },
    install: {
      title: 'Get Vivi Music',
      subtitle: 'Choose your preferred way to stay up to date.',
      izzy: {
        title: 'IzzyOnDroid',
        desc: 'The recommended way for F-Droid users. Secure, fast, and easy to update via the IzzyOnDroid repository.'
      },
      github: {
        title: 'GitHub Releases',
        desc: 'Download the latest APK directly from our GitHub releases if you prefer manual installation.'
      },
      btn_izzy: 'Get it on IzzyOnDroid',
      btn_github: 'View Assets',
      safety_note: 'Verified & Secure APKs',
      qr: {
        title: 'Scan to Download',
        desc: 'Point your phone\'s camera at this code to open the latest release directly on your device.'
      },
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
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Got questions? We have answers.',
      cost: { q: 'Is it free?', a: 'Yes, Vivi Music is 100% free and open-source.' },
      source: { q: 'Where can I find the code?', a: 'Everything is public on our GitHub organization.' },
      ytmusic: { q: 'Does it require YouTube Premium?', a: 'No, it works without any subscription via InnerTube.' },
      download: { q: 'Is it on the Play Store?', a: 'Due to Google\'s policies, it\'s only available via GitHub and IzzyOnDroid.' },
      safety: { q: 'Is it safe?', a: 'Yes, the app is open-source and verified by the community.' }
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
      backup: {
        title: 'Cloud Backup',
        desc: 'Sichere und stelle deine Einstellungen sowie lokalen Playlists nahtlos wieder her.'
      },
      playlists: {
        title: 'Playlist-Magie',
        desc: 'Importiere YouTube-Playlists oder erstelle lokale Listen mit erweiterter Verwaltung.'
      },
      timer: {
        title: 'Sleep Timer',
        desc: 'Schlafe zu deinen Lieblingstracks ein – mit sanftem Volume Fade-out.'
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
      subtitle: 'Material 3 Expressive Design in Aktion.',
      mockup: {
        welcome: 'Willkommen zurück',
        discover: 'Entdecken',
        for_you: 'Für Dich',
        relax: 'Relax',
        energy: 'Energie',
        now_playing: 'Aktuelle Wiedergabe',
        track_title: 'Kosmische Resonanz',
        track_artist: 'Vivi Orchester',
        lyrics: {
          line1: 'Verloren im Echo der Zeit',
          line2: 'Wo die Sterne anfangen zu klingen',
          line3: 'Schwebend durch die endlose Nacht'
        },
        library: 'Deine Mediathek',
        search_title: 'Entdecken',
        search_placeholder: 'Künstler, Songs, Alben...',
        trending: 'Gerade angesagt',
        equalizer_title: 'Audio-Präzision',
        bass_boost: 'Bass-Verstärker',
        surround: 'Raumklang',
        settings_title: 'Einstellungen',
        backup_status: 'Cloud Backup: Aktiv',
        timer_label: 'Sleep Timer: 30 Min'
      }
    },
    install: {
      title: 'Vivi Music holen',
      subtitle: 'Wähle deine bevorzugte Quelle für Updates.',
      izzy: {
        title: 'IzzyOnDroid',
        desc: 'Der empfohlene Weg für F-Droid Nutzer. Sicher, schnell und einfach über das IzzyOnDroid Repository.'
      },
      github: {
        title: 'GitHub Releases',
        desc: 'Lade die aktuellste APK direkt von unseren GitHub Releases für eine manuelle Installation.'
      },
      btn_izzy: 'Bei IzzyOnDroid laden',
      btn_github: 'Assets ansehen',
      safety_note: 'Verifizierte & Sichere APKs',
      qr: {
        title: 'QR-Code scannen',
        desc: 'Richte die Kamera deines Handys auf diesen Code, um die aktuellste Version direkt auf deinem Gerät zu öffnen.'
      },
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
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Fragen? Wir haben Antworten.',
      cost: { q: 'Ist es kostenlos?', a: 'Ja, Vivi Music ist zu 100% kostenlos und Open Source.' },
      source: { q: 'Wo finde ich den Code?', a: 'Alles ist öffentlich in unserer GitHub-Organisation einsehbar.' },
      ytmusic: { q: 'Benötigt es YouTube Premium?', a: 'Nein, es funktioniert ohne Abonnement über die InnerTube API.' },
      download: { q: 'Gibt es die App im Play Store?', a: 'Wegen Googles Richtlinien ist sie nur über GitHub und IzzyOnDroid verfügbar.' },
      safety: { q: 'Ist es sicher?', a: 'Ja, die App ist quelloffen und wird von der Community geprüft.' }
    }
  },
  es: {
    nav: {
      features: 'Características',
      screenshots: 'Capturas',
      install: 'Instalar',
      contribute: 'Contribuir',
      language: 'Idioma',
      theme: {
        light: 'Cambiar a modo claro',
        system: 'Cambiar al sistema',
        dark: 'Cambiar a modo oscuro',
        github: 'Ver repositorio web'
      }
    },
    hero: {
      tagline: 'v5.0.3-testing',
      title: 'Música,',
      subtitle: 'Liberada.',
      description: 'El reproductor Android de código abierto con integración Innertube, letras sincronizadas y diseño Material 3 Expressive.',
      btn_download: 'Descargar App',
      btn_features: 'Ver funciones',
      release_notes: 'Abrir notas de la versión {version}'
    },
    features: {
      title_part1: 'Funciones',
      title_part2: 'Potentes',
      description: 'Experimenta la música sin límites. Diseñado para el rendimiento y la estética.',
      architecture: 'Arquitectura Moderna',
      innertube: {
        title: 'API Innertube',
        desc: 'Integración directa con el cliente YouTube Music InnerTube para streaming ilimitado.'
      },
      lyrics: {
        title: 'Letras Sincronizadas',
        desc: 'Soporte de letras sincronizadas en tiempo real para casi todas las pistas.'
      },
      rpc: {
        title: 'Discord RPC',
        desc: 'Comparte lo que estás escuchando directamente en tu perfil de Discord.'
      },
      backup: {
        title: 'Copia en la Nube',
        desc: 'Copia de seguridad y restauración sin problemas de tus ajustes y listas locales.'
      },
      playlists: {
        title: 'Magia de Listas',
        desc: 'Importa listas de YouTube o crea locales con gestión avanzada.'
      },
      timer: {
        title: 'Temporizador',
        desc: 'Duérmete con tus pistas favoritas con un suave desvanecimiento de volumen.'
      },
      cache: {
        title: 'Caché Inteligente',
        desc: 'Estrategia de caché inteligente para ahorrar datos y permitir reproducción offline.'
      },
      equalizer: {
        title: 'Precisión de Audio',
        desc: 'Ajusta tu experiencia auditiva con un ecualizador integrado y efectos avanzados.'
      },
      material: {
        title: 'Diseño Material 3',
        desc: 'Experimenta animaciones fluidas y colores dinámicos con el último diseño Material You.'
      },
      privacy: {
        title: 'Privacidad Nativa',
        desc: 'Sin rastreo, sin telemetría. Tus hábitos de escucha se quedan en tu dispositivo.'
      }
    },
    showcase: {
      title: 'Excelencia Visual',
      subtitle: 'Diseño Material 3 Expressive en acción.',
      mockup: {
        welcome: 'Bienvenido de nuevo',
        discover: 'Descubrir',
        for_you: 'Para ti',
        relax: 'Relax',
        energy: 'Energía',
        now_playing: 'Reproduciendo',
        track_title: 'Resonancia Cósmica',
        track_artist: 'Orquesta Vivi',
        lyrics: {
          line1: 'Perdido en los ecos del tiempo',
          line2: 'Donde las estrellas empiezan a sonar',
          line3: 'Flotando en la noche infinita'
        },
        library: 'Tu Biblioteca',
        search_title: 'Explorar',
        search_placeholder: 'Artistas, canciones, álbumes...',
        trending: 'Tendencias actuales',
        equalizer_title: 'Precisión de Audio',
        bass_boost: 'Refuerzo de graves',
        surround: 'Sonido envolvente',
        settings_title: 'Ajustes',
        backup_status: 'Copia en la Nube: Activa',
        timer_label: 'Temporizador: 30m'
      }
    },
    install: {
      title: 'Consigue Vivi Music',
      subtitle: 'Elige tu forma preferida de mantenerte actualizado.',
      izzy: {
        title: 'IzzyOnDroid',
        desc: 'La forma recomendada para usuarios de F-Droid. Seguro, rápido y fácil de actualizar.'
      },
      github: {
        title: 'GitHub Releases',
        desc: 'Descarga el APK directamente de nuestras versiones en GitHub para instalación manual.'
      },
      btn_izzy: 'Consíguelo en IzzyOnDroid',
      btn_github: 'Ver archivos',
      safety_note: 'APKs Verificadas y Seguras',
      step1: {
        title: 'Descargar',
        desc: 'Elige una fuente arriba y descarga el APK en tu dispositivo Android.'
      },
      step2: {
        title: 'Ajustes',
        desc: 'Si se te solicita, permite instalar aplicaciones de fuentes desconocidas.'
      },
      step3: {
        title: 'Lanzar',
        desc: 'Abre el archivo, pulsa instalar y disfruta de tu música con Vivi.'
      }
    },
    contribute: {
      title: 'Contribuir',
      subtitle: 'Únete al desarrollo y ayúdanos a mejorar Vivi Music.',
      fork: {
        title: 'Fork del Repo',
        desc: 'Crea tu propia copia del proyecto en GitHub.'
      },
      debug: {
        title: 'Depurar App',
        desc: 'Abre el proyecto en Android Studio y ejecútalo localmente.'
      },
      pr: {
        title: 'Pull Request',
        desc: 'Envía tus mejoras o correcciones para revisión.'
      }
    },
    footer: {
      license: 'Licenciado bajo GPL v3.0',
      based_on: 'Basado en InnerTune',
      social: {
        discord: 'Únete a nuestro Discord',
        telegram: 'Únete a nuestro Telegram',
        github: 'Visita nuestra organización en GitHub'
      }
    },
    faq: {
      title: 'FAQ',
      subtitle: '¿Tienes preguntas? Tenemos respuestas.',
      cost: { q: '¿Es gratis?', a: 'Sí, Vivi Music es 100% gratuito y de código abierto.' },
      source: { q: '¿Dónde está el código?', a: 'Todo es público en nuestra organización de GitHub.' },
      ytmusic: { q: '¿Requiere YouTube Premium?', a: 'No, funciona sin suscripción a través de InnerTube.' },
      download: { q: '¿Está en la Play Store?', a: 'Debido a las políticas de Google, solo está disponible en GitHub e IzzyOnDroid.' },
      safety: { q: '¿Es seguro?', a: 'Sí, la aplicación es de código abierto y verificada por la comunidad.' }
    }
  },
  fr: {
    nav: {
      features: 'Fonctions',
      screenshots: 'Captures',
      install: 'Installer',
      contribute: 'Contribuer',
      language: 'Langue',
      theme: {
        light: 'Passer au mode clair',
        system: 'Mode système',
        dark: 'Passer au mode sombre',
        github: 'Voir le dépôt web'
      }
    },
    hero: {
      tagline: 'v5.0.3-testing',
      title: 'Musique,',
      subtitle: 'Libérée.',
      description: 'Le lecteur Android open-source avec intégration Innertube, paroles synchronisées et design Material 3 Expressive.',
      btn_download: 'Télécharger',
      btn_features: 'Fonctionnalités',
      release_notes: 'Notes de version pour {version}'
    },
    features: {
      title_part1: 'Fonctions',
      title_part2: 'Puissantes',
      description: 'Vivez la musique sans limites. Conçu pour la performance et l\'esthétique.',
      architecture: 'Architecture Moderne',
      innertube: {
        title: 'API Innertube',
        desc: 'Intégration directe avec le client YouTube Music InnerTube pour un streaming illimité.'
      },
      lyrics: {
        title: 'Paroles Synchros',
        desc: 'Support des paroles synchronisées en temps réel pour presque chaque titre.'
      },
      rpc: {
        title: 'Discord RPC',
        desc: 'Partagez ce que vous écoutez directement sur votre profil Discord.'
      },
      backup: {
        title: 'Cloud Backup',
        desc: 'Sauvegardez et restaurez vos paramètres et playlists locales sans effort.'
      },
      playlists: {
        title: 'Playlist Magique',
        desc: 'Importez des playlists YouTube ou créez-en localement avec gestion avancée.'
      },
      timer: {
        title: 'Mise en veille',
        desc: 'Endormez-vous avec vos titres préférés grâce à un fondu sonore progressif.'
      },
      cache: {
        title: 'Cache Intelligent',
        desc: 'Stratégie de cache intelligente pour économiser les données et l\'écoute hors-ligne.'
      },
      equalizer: {
        title: 'Précision Audio',
        desc: 'Affinez votre écoute avec un égaliseur intégré et des effets audio avancés.'
      },
      material: {
        title: 'Design Material 3',
        desc: 'Des animations fluides et des couleurs dynamiques avec le dernier design Material You.'
      },
      privacy: {
        title: 'Privé par Design',
        desc: 'Pas de suivi, pas de télémétrie. Vos habitudes d\'écoute restent sur votre appareil.'
      }
    },
    showcase: {
      title: 'Excellence Visuelle',
      subtitle: 'Le design Material 3 Expressive en action.',
      mockup: {
        welcome: 'Bon retour',
        discover: 'Découvrir',
        for_you: 'Pour vous',
        relax: 'Relax',
        energy: 'Énergie',
        now_playing: 'Lecture en cours',
        track_title: 'Résonance Cosmique',
        track_artist: 'Orchestre Vivi',
        lyrics: {
          line1: 'Perdu dans les échos du temps',
          line2: 'Là où les étoiles s\'éveillent',
          line3: 'Flottant dans la nuit infinie'
        },
        library: 'Ma Bibliothèque',
        search_title: 'Explorer',
        search_placeholder: 'Artistes, titres, albums...',
        trending: 'Tendances',
        equalizer_title: 'Précision Audio',
        bass_boost: 'Bass Boost',
        surround: 'Son Surround',
        settings_title: 'Paramètres',
        backup_status: 'Cloud Backup : Actif',
        timer_label: 'Veille : 30m'
      }
    },
    install: {
      title: 'Obtenir Vivi Music',
      subtitle: 'Choisissez votre méthode préférée pour rester à jour.',
      izzy: {
        title: 'IzzyOnDroid',
        desc: 'La méthode recommandée pour les utilisateurs de F-Droid. Sûr, rapide et facile.'
      },
      github: {
        title: 'GitHub Releases',
        desc: 'Téléchargez l\'APK directement depuis GitHub pour une installation manuelle.'
      },
      btn_izzy: 'Via IzzyOnDroid',
      btn_github: 'Voir les fichiers',
      safety_note: 'APKs Vérifiés & Sécurisés',
      step1: {
        title: 'Télécharger',
        desc: 'Choisissez une source et téléchargez le fichier APK sur votre Android.'
      },
      step2: {
        title: 'Paramètres',
        desc: 'Si demandé, autorisez l\'installation d\'apps provenant de sources inconnues.'
      },
      step3: {
        title: 'Lancer',
        desc: 'Ouvrez le fichier, installez et profitez de votre musique avec Vivi.'
      }
    },
    contribute: {
      title: 'Contribuer',
      subtitle: 'Rejoignez le développement et aidez-nous à améliorer Vivi Music.',
      fork: {
        title: 'Forker le Repo',
        desc: 'Créez votre propre copie du projet sur GitHub.'
      },
      debug: {
        title: 'Déboguer l\'App',
        desc: 'Ouvrez le projet dans Android Studio et lancez-le localement.'
      },
      pr: {
        title: 'Pull Request',
        desc: 'Soumettez vos améliorations ou corrections pour examen.'
      }
    },
    footer: {
      license: 'Sous licence GPL v3.0',
      based_on: 'Basé sur InnerTune',
      social: {
        discord: 'Rejoindre notre Discord',
        telegram: 'Rejoindre notre Telegram',
        github: 'Visiter GitHub'
      }
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Des questions ? Nous avons les réponses.',
      cost: { q: 'Est-ce gratuit ?', a: 'Oui, Vivi Music est 100% gratuit et open-source.' },
      source: { q: 'Où trouver le code ?', a: 'Tout est public sur notre organisation GitHub.' },
      ytmusic: { q: 'Faut-il YouTube Premium ?', a: 'Non, cela fonctionne sans abonnement via InnerTube.' },
      download: { q: 'Est-ce sur le Play Store ?', a: 'En raison des politiques de Google, c\'est seulement sur GitHub et IzzyOnDroid.' },
      safety: { q: 'Est-ce sûr ?', a: 'Oui, l\'application est open-source et vérifiée par la communauté.' }
    }
  },
  ru: {
    nav: {
      features: 'Функции',
      screenshots: 'Скриншоты',
      install: 'Установка',
      contribute: 'Участие',
      language: 'Язык',
      theme: {
        light: 'Светлая тема',
        system: 'Системная тема',
        dark: 'Темная тема',
        github: 'Репозиторий сайта'
      }
    },
    hero: {
      tagline: 'v5.0.3-testing',
      title: 'Музыка,',
      subtitle: 'На свободе.',
      description: 'Android-плеер с открытым исходным кодом, интеграцией Innertube, синхронными текстами и дизайном Material 3.',
      btn_download: 'Скачать App',
      btn_features: 'Функции',
      release_notes: 'Список изменений для {version}'
    },
    features: {
      title_part1: 'Мощные',
      title_part2: 'Функции',
      description: 'Музыка без границ. Создано для производительности и эстетики.',
      architecture: 'Современная Архитектура',
      innertube: {
        title: 'Innertube API',
        desc: 'Прямая интеграция с клиентом YouTube Music для безграничного стриминга.'
      },
      lyrics: {
        title: 'Тексты песен',
        desc: 'Синхронизированные тексты песен в реальном времени почти для каждого трека.'
      },
      rpc: {
        title: 'Discord RPC',
        desc: 'Делитесь тем, что вы слушаете, прямо в своем профиле Discord.'
      },
      backup: {
        title: 'Облачный бэкап',
        desc: 'Удобное резервное копирование и восстановление настроек и плейлистов.'
      },
      playlists: {
        title: 'Магия плейлистов',
        desc: 'Импорт плейлистов YouTube или создание локальных с продвинутым управлением.'
      },
      timer: {
        title: 'Таймер сна',
        desc: 'Засыпайте под любимые треки с плавным затуханием громкости.'
      },
      cache: {
        title: 'Умный кэш',
        desc: 'Интеллектуальное кэширование для экономии трафика и офлайн-прослушивания.'
      },
      equalizer: {
        title: 'Точность звука',
        desc: 'Настройте звук с помощью встроенного эквалайзера и аудиоэффектов.'
      },
      material: {
        title: 'Дизайн Material 3',
        desc: 'Плавные анимации и динамические цвета в современном стиле Material You.'
      },
      privacy: {
        title: 'Приватность',
        desc: 'Никакой слежки и телеметрии. Ваша история прослушивания остается только у вас.'
      }
    },
    showcase: {
      title: 'Визуальный идеал',
      subtitle: 'Дизайн Material 3 Expressive в действии.',
      mockup: {
        welcome: 'С возвращением',
        discover: 'Обзор',
        for_you: 'Для вас',
        relax: 'Релакс',
        energy: 'Энергия',
        now_playing: 'Сейчас играет',
        track_title: 'Космический резонанс',
        track_artist: 'Оркестр Vivi',
        lyrics: {
          line1: 'Потерянный в эхо времен',
          line2: 'Где звезды начинают звенеть',
          line3: 'Плывя сквозь бесконечную ночь'
        },
        library: 'Медиатека',
        search_title: 'Поиск',
        search_placeholder: 'Артисты, песни, альбомы...',
        trending: 'Сейчас в тренде',
        equalizer_title: 'Точность звука',
        bass_boost: 'Усиление басов',
        surround: 'Объемный звук',
        settings_title: 'Настройки',
        backup_status: 'Облачный бэкап: Активен',
        timer_label: 'Таймер сна: 30м'
      }
    },
    install: {
      title: 'Скачать Vivi Music',
      subtitle: 'Выберите удобный способ получения обновлений.',
      izzy: {
        title: 'IzzyOnDroid',
        desc: 'Рекомендуемый способ для пользователей F-Droid. Безопасно, быстро и легко.'
      },
      github: {
        title: 'GitHub Релизы',
        desc: 'Скачайте APK напрямую из наших релизов на GitHub для ручной установки.'
      },
      btn_izzy: 'Скачать из IzzyOnDroid',
      btn_github: 'Посмотреть файлы',
      safety_note: 'Проверенные и безопасные APK',
      step1: {
        title: 'Скачивание',
        desc: 'Выберите источник выше и скачайте APK-файл на ваше устройство.'
      },
      step2: {
        title: 'Настройки',
        desc: 'Если потребуется, разрешите установку приложений из неизвестных источников.'
      },
      step3: {
        title: 'Запуск',
        desc: 'Откройте файл, нажмите «Установить» и наслаждайтесь музыкой.'
      }
    },
    contribute: {
      title: 'Участие',
      subtitle: 'Присоединяйтесь к разработке и помогите нам сделать Vivi Music лучше.',
      fork: {
        title: 'Форкнуть репо',
        desc: 'Создайте свою копию проекта на GitHub.'
      },
      debug: {
        title: 'Отладка',
        desc: 'Откройте проект в Android Studio и запустите его локально.'
      },
      pr: {
        title: 'Pull Request',
        desc: 'Отправьте свои улучшения на проверку.'
      }
    },
    footer: {
      license: 'Лицензия GPL v3.0',
      based_on: 'На основе InnerTune',
      social: {
        discord: 'Наш Discord',
        telegram: 'Наш Telegram',
        github: 'GitHub Организация'
      }
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Есть вопросы? У нас есть ответы.',
      cost: { q: 'Это бесплатно?', a: 'Да, Vivi Music на 100% бесплатна и имеет открытый исходный код.' } ,
      source: { q: 'Где найти код?', a: 'Все открыто в нашей организации на GitHub.' },
      ytmusic: { q: 'Нужен ли YouTube Premium?', a: 'Нет, приложение работает без подписки через InnerTube.' },
      download: { q: 'Есть ли в Play Store?', a: 'Из-за политики Google приложение доступно только на GitHub и IzzyOnDroid.' },
      safety: { q: 'Это безопасно?', a: 'Да, приложение имеет открытый исходный код и проверено сообществом.' }
    }
  },
  ja: {
    nav: {
      features: '機能',
      screenshots: 'プレビュー',
      install: 'インストール',
      contribute: '貢献する',
      language: '言語',
      theme: {
        light: 'ライトモード',
        system: 'システム設定',
        dark: 'ダークモード',
        github: 'リポジトリを表示'
      }
    },
    hero: {
      tagline: 'v5.0.3-testing',
      title: '音楽、',
      subtitle: '解き放たれる。',
      description: 'Innertube統合、同期歌詞、Material 3デザインを備えたオープンソースのAndroidプレイヤー。',
      btn_download: 'アプリをダウンロード',
      btn_features: '機能を見る',
      release_notes: '{version} のリリースノート'
    },
    features: {
      title_part1: '強力な',
      title_part2: '機能',
      description: '限界のない音楽体験。パフォーマンスと美しさを追求。',
      architecture: '最新アーキテクチャ',
      innertube: {
        title: 'Innertube API',
        desc: 'YouTube Musicクライアントとの直接統合により、無制限のストリーミングを実現。'
      },
      lyrics: {
        title: '同期歌詞',
        desc: 'ほぼすべての曲でリアルタイム同期歌詞をサポート。'
      },
      rpc: {
        title: 'Discord RPC',
        desc: '聴いている曲をDiscordプロフィールで共有。'
      },
      backup: {
        title: 'クラウドバックアップ',
        desc: '設定やローカルプレイリストのシームレスなバックアップと復元。'
      },
      playlists: {
        title: 'プレイリスト管理',
        desc: 'YouTubeプレイリストのインポートや、高度なローカル管理。'
      },
      timer: {
        title: 'スリープタイマー',
        desc: '音量を徐々に下げながら、お気に入りの曲で眠りにつく。'
      },
      cache: {
        title: 'スマートキャッシュ',
        desc: 'データ節約とオフライン再生のための高度なキャッシュ。'
      },
      equalizer: {
        title: 'オーディオ精度',
        desc: '内蔵イコライザーとオーディオエフェクトで自分好みの音に。'
      },
      material: {
        title: 'Material 3 デザイン',
        desc: '最新の Material You による滑らかなアニメーションと動的なカラー。'
      },
      privacy: {
        title: 'プライバシー設計',
        desc: '追跡やテレメトリなし。あなたのリスニングデータはデバイス内に保持されます。'
      }
    },
    showcase: {
      title: '視覚的な卓越性',
      subtitle: 'Material 3 デザインの美しさ。',
      mockup: {
        welcome: 'おかえりなさい',
        discover: '見つける',
        for_you: 'あなたへ',
        relax: 'リラックス',
        energy: 'エナジー',
        now_playing: '再生中',
        track_title: '宇宙の共鳴',
        track_artist: 'Vivi オーケストラ',
        lyrics: {
          line1: '時の残響の中に迷い込み',
          line2: '星々が響き始める場所',
          line3: '果てしない夜を漂う'
        },
        library: 'ライブラリ',
        search_title: '探す',
        search_placeholder: 'アーティスト、曲、アルバム...',
        trending: 'トレンド',
        equalizer_title: 'オーディオ精度',
        bass_boost: 'バスブースト',
        surround: 'サラウンド',
        settings_title: '設定',
        backup_status: 'バックアップ：有効',
        timer_label: 'タイマー：30分'
      }
    },
    install: {
      title: 'Vivi Music を手に入れる',
      subtitle: '最新の状態を保つための最適な方法を選択してください。',
      izzy: {
        title: 'IzzyOnDroid',
        desc: 'F-Droidユーザーに推奨される方法。安全で高速。'
      },
      github: {
        title: 'GitHub リリース',
        desc: '手動インストールを好む場合は、GitHubからAPKを直接ダウンロード。'
      },
      btn_izzy: 'IzzyOnDroid で入手',
      btn_github: 'アセットを表示',
      safety_note: '検証済みの安全な APK',
      step1: {
        title: 'ダウンロード',
        desc: 'ソースを選択してAPKファイルをダウンロード。'
      },
      step2: {
        title: '設定',
        desc: '必要に応じて、不明なソースからのインストールを許可。'
      },
      step3: {
        title: '起動',
        desc: 'ファイルを開き、インストールして音楽を楽しもう。'
      }
    },
    contribute: {
      title: '貢献',
      subtitle: '開発に参加して、Vivi Musicをさらに良くしよう。',
      fork: {
        title: 'リポジトリをフォーク',
        desc: 'GitHubでプロジェクトのコピーを作成。'
      },
      debug: {
        title: 'デバッグ',
        desc: 'Android Studioでプロジェクトを開いて実行。'
      },
      pr: {
        title: 'プルリクエスト',
        desc: '改善やバグ修正を提案。'
      }
    },
    footer: {
      license: 'GPL v3.0 ライセンス',
      based_on: 'InnerTune ベース',
      social: {
        discord: 'Discord サーバー',
        telegram: 'Telegram チャンネル',
        github: 'GitHub 組織'
      }
    },
    faq: {
      title: 'よくある質問',
      subtitle: 'ご不明な点はありますか？ここでお答えします。',
      cost: { q: '無料ですか？', a: 'はい、Vivi Musicは完全に無料で、オープンソースです。' },
      source: { q: 'ソースコードはどこにありますか？', a: 'GitHubの公式オーガニゼーションですべて公開されています。' },
      ytmusic: { q: 'YouTube Premiumが必要ですか？', a: 'いいえ、InnerTube APIを利用しているため、サブスクリプションなしで動作します。' },
      download: { q: 'Play ストアにありますか？', a: 'Googleのポリシーにより、GitHubまたはIzzyOnDroidからのみ入手可能です。' },
      safety: { q: '安全ですか？', a: 'はい、アプリはオープンソースであり、コミュニティによって検証されています。' }
    }
  },
  ko: {
    nav: {
      features: '기능',
      screenshots: '미리보기',
      install: '설치',
      contribute: '기여하기',
      language: '언어',
      theme: {
        light: '라이트 모드',
        system: '시스템 설정',
        dark: '다크 모드',
        github: '웹 리포지토리'
      }
    },
    hero: {
      tagline: 'v5.0.3-testing',
      title: '음악,',
      subtitle: '해방되다.',
      description: 'Innertube 통합, 동기화된 가사, Material 3 디자인을 갖춘 오픈 소스 안드로이드 플레이어.',
      btn_download: '앱 다운로드',
      btn_features: '기능 보기',
      release_notes: '{version} 릴리스 노트'
    },
    features: {
      title_part1: '강력한',
      title_part2: '기능들',
      description: '한계 없는 음악 경험. 성능과 미학을 위해 구축되었습니다.',
      architecture: '현대적인 아키텍처',
      innertube: {
        title: 'Innertube API',
        desc: 'YouTube Music 클라이언트와 직접 통합되어 무제한 스트리밍 가능.'
      },
      lyrics: {
        title: '동기화 가사',
        desc: '거의 모든 트랙에서 실시간 동기화 가사 지원.'
      },
      rpc: {
        title: 'Discord RPC',
        desc: '현재 듣고 있는 곡을 디스코드 프로필에 공유하세요.'
      },
      backup: {
        title: '클라우드 백업',
        desc: '설정 및 로컬 재생 목록을 원활하게 백업하고 복원하세요.'
      },
      playlists: {
        title: '플레이리스트 매직',
        desc: 'YouTube 재생 목록을 가져오거나 고급 관리 기능으로 로컬 목록을 만드세요.'
      },
      timer: {
        title: '취침 타이머',
        desc: '부드러운 볼륨 페이드아웃과 함께 좋아하는 곡을 들으며 잠드세요.'
      },
      cache: {
        title: '스마트 캐싱',
        desc: '데이터를 절약하고 오프라인 재생을 가능하게 하는 지능형 캐싱 전략.'
      },
      equalizer: {
        title: '정밀한 오디오',
        desc: '내장된 이퀄라이저와 고급 오디오 효과로 감상 경험을 미세 조정하세요.'
      },
      material: {
        title: 'Material 3 디자인',
        desc: '최신 Material You 디자인으로 유연한 애니메이션과 동적 색상을 경험하세요.'
      },
      privacy: {
        title: '개인정보 보호',
        desc: '추적이나 텔레메트리 없음. 당신의 청취 기록은 기기에만 저장됩니다.'
      }
    },
    showcase: {
      title: '시각적 우수성',
      subtitle: 'Material 3 디자인의 실제 구현.',
      mockup: {
        welcome: '다시 오신 것을 환영합니다',
        discover: '둘러보기',
        for_you: '추천',
        relax: '휴식',
        energy: '에너지',
        now_playing: '현재 재생 중',
        track_title: '우주의 공명',
        track_artist: 'Vivi 오케스트라',
        lyrics: {
          line1: '시간의 메아리 속에 길을 잃고',
          line2: '별들이 울리기 시작하는 곳',
          line3: '끝없는 밤을 떠다니며'
        },
        library: '라이브러리',
        search_title: '탐색',
        search_placeholder: '아티스트, 곡, 앨범...',
        trending: '현재 트렌드',
        equalizer_title: '정밀한 오디오',
        bass_boost: '베이스 부스트',
        surround: '서라운드 사운드',
        settings_title: '설정',
        backup_status: '클라우드 백업: 활성',
        timer_label: '취침 타이머: 30분'
      }
    },
    install: {
      title: 'Vivi Music 받기',
      subtitle: '최신 상태를 유지하기 위한 최적의 방법을 선택하세요.',
      izzy: {
        title: 'IzzyOnDroid',
        desc: 'F-Droid 사용자를 위한 권장 방법. 안전하고 빠릅니다.'
      },
      github: {
        title: 'GitHub 릴리스',
        desc: '수동 설치를 선호한다면 GitHub에서 직접 APK를 다운로드하세요.'
      },
      btn_izzy: 'IzzyOnDroid에서 받기',
      btn_github: '에셋 보기',
      safety_note: '검증된 안전한 APK',
      step1: {
        title: '다운로드',
        desc: '소스를 선택하고 APK 파일을 다운로드하세요.'
      },
      step2: {
        title: '설정',
        desc: '필요한 경우 알 수 없는 소스의 앱 설치를 허용하세요.'
      },
      step3: {
        title: '실행',
        desc: '파일을 열고 설치를 탭하여 Vivi와 함께 음악을 즐기세요.'
      }
    },
    contribute: {
      title: '기여하기',
      subtitle: '개발에 참여하여 Vivi Music을 더 좋게 만드는데 도움을 주세요.',
      fork: {
        title: '리포지토리 포크',
        desc: 'GitHub에서 프로젝트의 사본을 만드세요.'
      },
      debug: {
        title: '앱 디버깅',
        desc: 'Android Studio에서 프로젝트를 열고 로컬에서 실행하세요.'
      },
      pr: {
        title: '풀 리퀘스트',
        desc: '개선 사항이나 버그 수정을 제출하세요.'
      }
    },
    footer: {
      license: 'GPL v3.0 라이선스',
      based_on: 'InnerTune 기반',
      social: {
        discord: '디스코드 서버',
        telegram: '텔레그램 채널',
        github: 'GitHub 조직'
      }
    },
    faq: {
      title: '자주 묻는 질문',
      subtitle: '궁금한 점이 있으신가요? 답변해 드립니다.',
      cost: { q: '무료인가요?', a: '네, Vivi Music은 100% 무료이며 오픈 소스입니다.' },
      source: { q: '코드는 어디서 볼 수 있나요?', a: '모든 코드는 GitHub 조직에 공개되어 있습니다.' },
      ytmusic: { q: 'YouTube Premium이 필요한가요?', a: '아니요, InnerTube를 통해 구독 없이 작동합니다.' },
      download: { q: 'Play 스토어에 있나요?', a: 'Google 정책상 GitHub 및 IzzyOnDroid에서만 설치할 수 있습니다.' },
      safety: { q: '안전한가요?', a: '네, 오픈 소스 프로젝트이며 커뮤니티의 검증을 받았습니다.' }
    }
  },
  zh: {
    nav: {
      features: '功能',
      screenshots: '预览',
      install: '安装',
      contribute: '贡献',
      language: '语言',
      theme: {
        light: '切换到浅色模式',
        system: '跟随系统',
        dark: '切换到深色模式',
        github: '查看网页源码'
      }
    },
    hero: {
      tagline: 'v5.0.3-testing',
      title: '音乐，',
      subtitle: '破茧而出。',
      description: '集成 Innertube、同步歌词和 Material 3 设计的开源 Android 音乐播放器。',
      btn_download: '下载 App',
      btn_features: '查看功能',
      release_notes: '查看 {version} 的发布说明'
    },
    features: {
      title_part1: '强大',
      title_part2: '功能',
      description: '体验无限音乐。为性能与美学而生。',
      architecture: '现代架构',
      innertube: {
        title: 'Innertube API',
        desc: '直接集成 YouTube Music 客户端，实现无限流媒体播放。'
      },
      lyrics: {
        title: '同步歌词',
        desc: '几乎所有曲目都支持实时同步歌词。'
      },
      rpc: {
        title: 'Discord RPC',
        desc: '在您的 Discord 资料中直接展示您正在收听的内容。'
      },
      backup: {
        title: '云端备份',
        desc: '无缝备份和恢复您的设置及本地播放列表。'
      },
      playlists: {
        title: '魔法播放列表',
        desc: '导入 YouTube 播放列表或创建具有高级管理功能的本地列表。'
      },
      timer: {
        title: '睡眠定时器',
        desc: '在温柔的声音淡出中，伴随您喜爱的曲目入睡。'
      },
      cache: {
        title: '智能缓存',
        desc: '智能缓存策略，节省流量并支持离线播放。'
      },
      equalizer: {
        title: '音频精准度',
        desc: '通过内置均衡器和高级音效精细调整您的听觉体验。'
      },
      material: {
        title: 'Material 3 设计',
        desc: '通过最新的 Material You 设计体验流体动画和动态色彩。'
      },
      privacy: {
        title: '隐私至上',
        desc: '无追踪，无遥测。您的收听习惯只保留在您的设备上。'
      }
    },
    showcase: {
      title: '卓越视觉',
      subtitle: 'Material 3 Expressive 设计实战。',
      mockup: {
        welcome: '欢迎回来',
        discover: '发现',
        for_you: '为你推荐',
        relax: '放松',
        energy: '能量',
        now_playing: '正在播放',
        track_title: '宇宙共振',
        track_artist: 'Vivi 交响乐团',
        lyrics: {
          line1: '迷失在时间的余韵中',
          line2: '在星辰开始鸣响的地方',
          line3: '漂浮在无尽的黑夜'
        },
        library: '我的媒体库',
        search_title: '探索',
        search_placeholder: '艺人、歌曲、专辑...',
        trending: '当前流行',
        equalizer_title: '音频精准度',
        bass_boost: '低音增强',
        surround: '环绕音效',
        settings_title: '设置',
        backup_status: '云端备份：已激活',
        timer_label: '睡眠定时器：30分钟'
      }
    },
    install: {
      title: '获取 Vivi Music',
      subtitle: '选择您喜欢的方式来保持更新。',
      izzy: {
        title: 'IzzyOnDroid',
        desc: 'F-Droid 用户的推荐方式。安全、快速且易于更新。'
      },
      github: {
        title: 'GitHub Releases',
        desc: '如果您喜欢手动安装，直接从 GitHub 下载最新的 APK。'
      },
      btn_izzy: '从 IzzyOnDroid 获取',
      btn_github: '查看文件',
      safety_note: '经过验证且安全的 APK',
      step1: {
        title: '下载',
        desc: '从上方选择一个来源并将最新的 APK 文件下载到您的设备。'
      },
      step2: {
        title: '设置',
        desc: '如果系统提示，请允许浏览器或文件管理器安装来自未知来源的应用。'
      },
      step3: {
        title: '启动',
        desc: '打开下载的文件，点击安装，开始享受 Vivi。'
      }
    },
    contribute: {
      title: '参与贡献',
      subtitle: '加入开发，帮助我们让 Vivi Music 变得更好。',
      fork: {
        title: 'Fork 仓库',
        desc: '在 GitHub 上创建您自己的项目副本。'
      },
      debug: {
        title: '调试 App',
        desc: '在 Android Studio 中打开项目并本地运行。'
      },
      pr: {
        title: '拉取请求',
        desc: '提交您的改进或漏洞修复以供审核。'
      }
    },
    footer: {
      license: '基于 GPL v3.0 协议',
      based_on: '基于 InnerTune',
      social: {
        discord: '加入我们的 Discord',
        telegram: '加入我们的 Telegram',
        github: '访问 GitHub 组织'
      }
    },
    faq: {
      title: '常见问题',
      subtitle: '有问题吗？我们有答案。',
      cost: { q: '它是免费 premium 吗？', a: '是的，Vivi Music 是 100% 免费且开源的。' },
      source: { q: '源码在哪里？', a: '所有代码都在我们的 GitHub 组织中公开。' },
      ytmusic: { q: '需要 YouTube Premium 吗？', a: '不需要，它通过 InnerTube 运行，无需任何订阅。' },
      download: { q: '它在 Play 商店中吗？', a: '由于 Google 的政策，它仅通过 GitHub 和 IzzyOnDroid 提供。' },
      safety: { q: '安全吗？', a: '是的，该应用是开源的，并经过社区验证。' }
    }
  },
  ml: {
    nav: {
      features: 'ഫീച്ചറുകൾ',
      screenshots: 'സ്ക്രീൻഷോട്ടുകൾ',
      install: 'ഇൻസ്റ്റാൾ',
      contribute: 'സംഭാവന',
      language: 'ഭാഷ',
      theme: {
        light: 'ലൈറ്റ് മോഡിലേക്ക് മാറുക',
        system: 'സിസ്റ്റം മോഡിലേക്ക് മാറുക',
        dark: 'ഡാർക്ക് മോഡിലേക്ക് മാറുക',
        github: 'വെബ് റിപ്പോസിറ്ററി സന്ദർശിക്കുക'
      }
    },
    hero: {
      tagline: 'v5.0.3-പരിശോധനയിൽ',
      title: 'സംഗീതം,',
      subtitle: 'അഴിച്ചുവിട്ടു.',
      description: 'ഇന്നർട്യൂബ് ഇന്റഗ്രേഷൻ, സമന്വയിപ്പിച്ച വരികൾ, മെറ്റീരിയൽ 3 ഡിസൈൻ എന്നിവയുള്ള ഓപ്പൺ സോഴ്സ് ആൻഡ്രോയിഡ് പ്ലെയർ.',
      btn_download: 'ആപ്പ് ഡൗൺലോഡ് ചെയ്യുക',
      btn_features: 'ഫീച്ചറുകൾ കാണുക',
      release_notes: '{version} പതിപ്പിന്റെ റിലീസ് കുറിപ്പുകൾ'
    },
    features: {
      title_part1: 'ശക്തമായ',
      title_part2: 'ഫീച്ചറുകൾ',
      description: 'അതിരുകളില്ലാത്ത സംഗീതം അനുഭവിക്കുക. പ്രകടനത്തിനും സൗന്ദര്യത്തിനുമായി നിർമ്മിച്ചത്.',
      architecture: 'ആധുനിക ആർക്കിടെക്ചർ',
      innertube: {
        title: 'ഇന്നർട്യൂബ് API',
        desc: 'പരിധിയില്ലാത്ത സ്ട്രീമിംഗിനായി യൂട്യൂബ് മ്യൂസിക് ക്ലയന്റുമായി നേരിട്ടുള്ള സംയോജനം.'
      },
      lyrics: {
        title: 'സമന്വയിപ്പിച്ച വരികൾ',
        desc: 'മിക്കവാറും എല്ലാ ട്രാക്കുകൾക്കും തത്സമയ സമന്വയിപ്പിച്ച വരികൾ ലഭ്യമാണ്.'
      },
      rpc: {
        title: 'ഡിസ്‌കോർഡ് RPC',
        desc: 'നിങ്ങൾ കേൾക്കുന്നത് നിങ്ങളുടെ ഡിസ്‌കോർഡ് പ്രൊഫൈലിൽ നേരിട്ട് പങ്കിടുക.'
      },
      backup: {
        title: 'ക്ലൗഡ് ബാക്കപ്പ്',
        desc: 'നിങ്ങളുടെ ക്രമീകരണങ്ങളും പ്ലേലിസ്റ്റുകളും സുഗമമായി ബാക്കപ്പ് ചെയ്യുകയും പുനഃസ്ഥാപിക്കുകയും ചെയ്യുക.'
      },
      playlists: {
        title: 'പ്ലേലിസ്റ്റ് മാജിക്',
        desc: 'യൂട്യൂബ് പ്ലേലിസ്റ്റുകൾ ഇറക്കുമതി ചെയ്യുക അല്ലെങ്കിൽ മികച്ച മാനേജ്‌മെന്റോടെ ലോക്കൽ ലിസ്റ്റുകൾ സൃഷ്ടിക്കുക.'
      },
      timer: {
        title: 'സ്ലീപ്പ് ടൈമർ',
        desc: 'വോളിയം സാവധാനം കുറച്ചുകൊണ്ട് നിങ്ങളുടെ പ്രിയപ്പെട്ട ട്രാക്കുകൾ കേട്ട് ഉറങ്ങുക.'
      },
      cache: {
        title: 'സ്മാർട്ട് കാഷിംഗ്',
        desc: 'ഡാറ്റ ലാഭിക്കുന്നതിനും ഓഫ്‌ലൈൻ പ്ലേബാക്കിനുമുള്ള മികച്ച കാഷിംഗ് തന്ത്രം.'
      },
      equalizer: {
        title: 'ഓഡിയോ പ്രിസിഷൻ',
        desc: 'ഇൻബിൽറ്റ് ഇക്വലൈസറും മികച്ച ഓഡിയോ ഇഫക്റ്റുകളും ഉപയോഗിച്ച് നിങ്ങളുടെ സംഗീതം ട്യൂൺ ചെയ്യുക.'
      },
      material: {
        title: 'മെറ്റീരിയൽ 3 ഡിസൈൻ',
        desc: 'ഏറ്റവും പുതിയ മെറ്റീരിയൽ യു ഡിസൈൻ ഉപയോഗിച്ച് മികച്ച ആനിമേഷനുകളും നിറങ്ങളും അനുഭവിക്കുക.'
      },
      privacy: {
        title: 'സ്വകാര്യത ആദ്യം',
        desc: 'ട്രാക്കിംഗോ ടെലിമെട്രിയോ ഇല്ല. നിങ്ങളുടെ സംഗീത ശീലങ്ങൾ നിങ്ങളുടെ ഉപകരണത്തിൽ തന്നെ സുരക്ഷിതമാണ്.'
      }
    },
    showcase: {
      title: 'ദൃശ്യ മികവ്',
      subtitle: 'മെറ്റീരിയൽ 3 എക്സ്പ്രസീവ് ഡിസൈൻ പ്രവർത്തനത്തിൽ.',
      mockup: {
        welcome: 'സ്വാഗതം',
        discover: 'കണ്ടെത്തുക',
        for_you: 'നിങ്ങൾക്കായി',
        relax: 'വിശ്രമം',
        energy: 'ഊർജ്ജം',
        now_playing: 'ഇപ്പോൾ പ്ലേ ചെയ്യുന്നു',
        track_title: 'കോസ്മിക് റെസൊണൻസ്',
        track_artist: 'വിവി ഓർക്കസ്ട്ര',
        lyrics: {
          line1: 'സമയത്തിന്റെ നിഴലുകളിൽ നഷ്ടപ്പെട്ടു',
          line2: 'നക്ഷത്രങ്ങൾ മുഴങ്ങാൻ തുടങ്ങുന്നിടത്ത്',
          line3: 'അനന്തമായ രാത്രിയിലൂടെ ഒഴുകുന്നു'
        },
        library: 'നിങ്ങളുടെ ലൈബ്രറി',
        search_title: 'തിരയുക',
        search_placeholder: 'കലാകാരന്മാര്\u200D, പാട്ടുകള്\u200D, ആല്\u200Dബങ്ങള്\u200D...',
        trending: 'ട്രെൻഡിംഗ്',
        equalizer_title: 'ഓഡിയോ പ്രിസിഷൻ',
        bass_boost: 'ബാസ് ബൂസ്റ്റ്',
        surround: 'സറൗണ്ട് സൗണ്ട്',
        settings_title: 'ക്രമീകരണങ്ങൾ',
        backup_status: 'ക്ലൗഡ് ബാക്കപ്പ്: സജീവം',
        timer_label: 'സ്ലീപ്പ് ടൈമർ: 30 മിനിറ്റ്'
      }
    },
    install: {
      title: 'വിവി മ്യൂസിക് നേടുക',
      subtitle: 'പുതിയ പതിപ്പുകൾ ലഭിക്കുന്നതിന് നിങ്ങൾക്ക് ഇഷ്ടപ്പെട്ട രീതി തിരഞ്ഞെടുക്കുക.',
      izzy: {
        title: 'IzzyOnDroid',
        desc: 'എഫ്-ഡ്രോയിഡ് ഉപയോക്താക്കൾക്ക് ശുപാർശ ചെയ്യുന്ന രീതി. സുരക്ഷിതവും വേഗതയുള്ളതും.'
      },
      github: {
        title: 'GitHub റിലീസുകൾ',
        desc: 'മാനുവൽ ഇൻസ്റ്റാളേഷനായി ഗിറ്റ്ഹബ് റിലീസുകളിൽ നിന്ന് APK നേരിട്ട് ഡൗൺലോഡ് ചെയ്യുക.'
      },
      btn_izzy: 'IzzyOnDroid-ൽ നിന്ന് നേടുക',
      btn_github: 'അസറ്റുകൾ കാണുക',
      safety_note: 'പരിശോധിച്ചു ഉറപ്പുവруത്തിയ APK-കൾ',
      step1: {
        title: 'ഡൗൺലോഡ്',
        desc: 'മുകളിലുള്ള ഒരു ഉറവിടം തിരഞ്ഞെടുത്ത് APK ഫയൽ ഡൗൺലോഡ് ചെയ്യുക.'
      },
      step2: {
        title: 'ക്രമീകരണങ്ങൾ',
        desc: 'ആവശ്യമെങ്കിൽ അപരിചിത ഉറവിടങ്ങളിൽ നിന്നുള്ള ഇൻസ്റ്റാളേഷൻ അനുവദിക്കുക.'
      },
      step3: {
        title: 'തുടങ്ങുക',
        desc: 'ഡൗൺലോഡ് ചെയ്ത ഫയൽ തുറന്ന് ഇൻസ്റ്റാൾ ചെയ്യുക, വിവി ആസ്വദിക്കൂ.'
      }
    },
    contribute: {
      title: 'സംഭാവന ചെയ്യുക',
      subtitle: 'വിവി മ്യൂസിക് മെച്ചപ്പെടുത്താൻ ഞങ്ങളെ സഹായിക്കുക.',
      fork: {
        title: 'റിപ്പോസിറ്ററി ഫോർക്ക് ചെയ്യുക',
        desc: 'ഗിറ്റ്ഹബ്ബിൽ പ്രോജക്റ്റിന്റെ സ്വന്തм പകർപ്പ് സൃഷ്ടിക്കുക.'
      },
      debug: {
        title: 'ഡീബഗ് ആപ്പ്',
        desc: 'ആൻഡ്രോയിഡ് സ്റ്റുഡിയോയിൽ പ്രോജക്റ്റ് തുറന്ന് പ്രവർത്തിപ്പിക്കുക.'
      },
      pr: {
        title: 'പുൾ റിക്വസ്റ്റ്',
        desc: 'മെച്ചപ്പെടുത്തലുകൾ അവലോകനത്തിനായി സമർപ്പിക്കുക.'
      }
    },
    footer: {
      license: 'GPL v3.0 ലൈസൻസിന് കീഴിൽ',
      based_on: 'ഇന്നർട്യൂബിനെ അടിസ്ഥാനമാക്കി',
      social: {
        discord: 'ഡിസ്‌കോർഡ് സെർവർ',
        telegram: 'ടെലിഗ്രാം ചാനൽ',
        github: 'ഗിറ്റ്ഹബ് ഓർഗനൈസേഷൻ'
      }
    },
    faq: {
      title: 'പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ',
      subtitle: 'ചോദ്യങ്ങളുണ്ടോ? ഞങ്ങളുടെ പക്കൽ ഉത്തരങ്ങളുണ്ട്.',
      cost: { q: 'ഇത് സസൗജന്യമാണോ?', a: 'അതെ, വിവി മ്യൂസിക് 100% സൗജന്യവും ഓപ്പൺ സോഴ്സുമാണ്.' },
      source: { q: 'കോഡ് എവിടെ ലഭിക്കും?', a: 'എല്ലാം ഞങ്ങളുടെ GitHub ഓർഗനൈസേഷനിൽ ലഭ്യമാണ്.' },
      ytmusic: { q: 'യൂട്യൂബ് പ്രീമിയം ആവശ്യമാണോ?', a: 'അല്ല, ഇന്നർട്യൂബ് വഴി സബ്സ്ക്രിപ്ഷൻ ഇല്ലാതെ ഇത് പ്രവർത്തിക്കും.' },
      download: { q: 'ഇത് പ്ലേ സ്റ്റോറിൽ ലഭ്യമാണോ?', a: 'ഗൂഗിളിന്റെ നയങ്ങൾ കാരണം ഗിറ്റ്ഹബ്, ഇസിഓൺഡ്രോയിഡ് എന്നിവ വഴി മാത്രമേ ഇത് ലഭ്യമാകൂ.' },
      safety: { q: 'ഇത് സുരക്ഷിതമാണോ?', a: 'അതെ, ആപ്പ് ഓപ്പൺ സോഴ്സ് ആണ്, കമ്മ്യൂണിറ്റി ഇത് പരിശോധിച്ചതാണ്.' }
    }
  },
  tr: {
    nav: {
      features: 'Özellikler',
      screenshots: 'Ekran Görüntüleri',
      install: 'Yükle',
      contribute: 'Katkıda Bulun',
      language: 'Dil',
      theme: {
        light: 'Açık Moda Geç',
        system: 'Sistem Moduna Geç',
        dark: 'Karanlık Moda Geç',
        github: 'Web Deposunu Ziyaret Et'
      }
    },
    hero: {
      tagline: 'v5.0.3-testing',
      title: 'Müzik,',
      subtitle: 'Özgürleşti.',
      description: 'Innertube entegrasyonu, senkronize sözler ve Material 3 Expressive Design özellikli açık kaynaklı Android oynatıcı.',
      btn_download: 'Uygulamayı İndir',
      btn_features: 'Özellikleri Görüntüle',
      release_notes: '{version} için Sürüm Notlarını Aç'
    },
    features: {
      title_part1: 'Güçlü',
      title_part2: 'Özellikler',
      description: 'Sınır tanımayan müzik deneyimi. Performans ve estetik için tasarlandı.',
      architecture: 'Modern Mimari',
      innertube: {
        title: 'Innertube API',
        desc: 'Sınırsız yayın için YouTube Music InnerTube istemcisiyle doğrudan entegrasyon.'
      },
      lyrics: {
        title: 'Senkronize Sözler',
        desc: 'Hemen hemen her parça için gerçek zamanlı senkronize söz desteği.'
      },
      rpc: {
        title: 'Discord RPC',
        desc: 'Dinlediklerinizi doğrudan Discord profilinizde paylaşın.'
      },
      backup: {
        title: 'Bulut Yedekleme',
        desc: 'Ayarlarınızı ve yerel çalma listelerinizi sorunsuz bir şekilde yedekleyin ve geri yükleyin.'
      },
      playlists: {
        title: 'Çalma Listesi Sihri',
        desc: 'YouTube çalma listelerini içe aktarın veya gelişmiş yönetimle yerel çalma listeleri oluşturun.'
      },
      timer: {
        title: 'Uyku Zamanlayıcısı',
        desc: 'Hafif bir ses sönümleme ile en sevdiğiniz parçalarla uykuya dalın.'
      },
      cache: {
        title: 'Akıllı Önbelleğe Alma',
        desc: 'Veri tasarrufu sağlamak ve çevrimdışı oynatmayı etkinleştirmek için akıllı önbelleğe alma stratejisi.'
      },
      equalizer: {
        title: 'Ses Hassasiyeti',
        desc: 'Dahili ekolayzır ve gelişmiş ses efektleriyle dinleme deneyiminize ince ayar yapın.'
      },
      material: {
        title: 'Material 3 Tasarımı',
        desc: 'En son Material You tasarımı ile akıcı animasyonları ve dinamik renkleri deneyimleyin.'
      },
      privacy: {
        title: 'Gizlilik Odaklı',
        desc: 'Takip yok, telemetri yok. Dinleme alışkanlıklarınız ait olduğu yerde, cihazınızda kalır.'
      }
    },
    showcase: {
      title: 'Görsel Mükemmellik',
      subtitle: 'Material 3 Expressive Design İş Başında.',
      mockup: {
        welcome: 'Tekrar hoş geldin',
        discover: 'Keşfet',
        for_you: 'Senin İçin',
        relax: 'Rahatla',
        energy: 'Enerji',
        now_playing: 'Şimdi Oynatılıyor',
        track_title: 'Kozmik Rezonans',
        track_artist: 'Vivi Orkestrası',
        lyrics: {
          line1: 'Zamanın yankılarında kayboldum',
          line2: 'Yıldızların çınlamaya başladığı yerde',
          line3: 'Sonsuz gecede süzülüyorum'
        },
        library: 'Kitaplığın',
        search_title: 'Keşfet',
        search_placeholder: 'Sanatçılar, şarkılar, albümler...',
        trending: 'Şu An Trend',
        equalizer_title: 'Ses Hassasiyeti',
        bass_boost: 'Bas Güçlendirme',
        surround: 'Çevresel Ses',
        settings_title: 'Ayarlar',
        backup_status: 'Bulut Yedekleme: Aktif',
        timer_label: 'Uyku Zamanlayıcısı: 30dk'
      }
    },
    install: {
      title: 'Vivi Music\'i Edin',
      subtitle: 'Güncel kalmak için tercih ettiğiniz yolu seçin.',
      izzy: {
        title: 'IzzyOnDroid',
        desc: 'F-Droid kullanıcıları için önerilen yol. Güvenli, hızlı ve kolay.'
      },
      github: {
        title: 'GitHub Sürümleri',
        desc: 'Manuel kurulumu tercih ediyorsanız en son APK\'yı doğrudan GitHub sürümlerimizden indirin.'
      },
      btn_izzy: 'IzzyOnDroid\'den indir',
      btn_github: 'Varlıkları Görüntüle',
      safety_note: 'Doğrulanmış ve Güvenli APK\'lar',
      step1: {
        title: 'İndir',
        desc: 'Yukarıdaki bir kaynağı seçin ve en son APK dosyasını Android cihazınıza indirin.'
      },
      step2: {
        title: 'Ayarlar',
        desc: 'İstenirse, tarayıcınızın veya dosya yöneticinizin bilinmeyen kaynaklardan uygulama yüklemesine izin verin.'
      },
      step3: {
        title: 'Başlat',
        desc: 'İndirilen dosyayı açın, yükle\'ye dokunun ve Vivi ile müziğin keyfini çıkarın.'
      }
    },
    contribute: {
      title: 'Katkıda Bulun',
      subtitle: 'Geliştirmeye katılın ve Vivi Music\'i daha da iyi hale getirmemize yardımcı olun.',
      fork: {
        title: 'Depoyu Çatalla',
        desc: 'Projenin kendi kopyasını GitHub\'da oluşturun.'
      },
      debug: {
        title: 'Uygulamada Hata Ayıkla',
        desc: 'Projeyi Android Studio\'da açın ve yerel olarak çalıştırın.'
      },
      pr: {
        title: 'Çekme İsteği',
        desc: 'İyileştirmelerinizi veya hata düzeltmelerinizi inceleme için gönderin.'
      }
    },
    footer: {
      license: 'GPL v3.0 lisansı altında',
      based_on: 'InnerTune tabanlı',
      social: {
        discord: 'Discord Sunucumuza Katılın',
        telegram: 'Telegram Kanalımıza Katılın',
        github: 'GitHub Organizasyonunu Ziyaret Edin'
      }
    },
    faq: {
      title: 'SSS',
      subtitle: 'Sorularınız mı var? Cevaplarımız var.',
      cost: { q: 'Ücretsiz mi?', a: 'Evet, Vivi Music %100 ücretsiz ve açık kaynaktır.' },
      source: { q: 'Kodları nerede bulabilirim?', a: 'Her şey GitHub organizasyonumuzda herkese açıktır.' },
      ytmusic: { q: 'YouTube Premium gerektiriyor mu?', a: 'Hayır, InnerTube aracılığıyla herhangi bir abonelik olmadan çalışır.' },
      download: { q: 'Play Store\'da var mı?', a: 'Google\'ın politikaları nedeniyle yalnızca GitHub ve IzzyOnDroid üzerinden edinilebilir.' },
      safety: { q: 'Güvenli mi?', a: 'Evet, uygulama açık kaynaktır ve topluluk tarafından doğrulanmıştır.' }
    }
  },
  pt: {
    nav: {
      features: 'Recursos',
      screenshots: 'Prints',
      install: 'Instalar',
      contribute: 'Contribuir',
      language: 'Idioma',
      theme: {
        light: 'Mudar para Modo Claro',
        system: 'Mudar para Modo do Sistema',
        dark: 'Mudar para Modo Escuro',
        github: 'Visitar Repositório Web'
      }
    },
    hero: {
      tagline: 'v5.0.3-testing',
      title: 'Música,',
      subtitle: 'Libertada.',
      description: 'O player Android de código aberto com integração Innertube, letras sincronizadas e Material 3 Expressive Design.',
      btn_download: 'Baixar App',
      btn_features: 'Ver Recursos',
      release_notes: 'Abrir Notas de Lançamento da {version}'
    },
    features: {
      title_part1: 'Poderosos',
      title_part2: 'Recursos',
      description: 'Experimente música sem limites. Feito para performance e estética.',
      architecture: 'Arquitetura Moderna',
      innertube: {
        title: 'API Innertube',
        desc: 'Integração direta com o cliente YouTube Music InnerTube para streaming ilimitado.'
      },
      lyrics: {
        title: 'Letras Sincronizadas',
        desc: 'Suporte a letras sincronizadas em tempo real para quase todas as faixas.'
      },
      rpc: {
        title: 'Discord RPC',
        desc: 'Compartilhe o que você está ouvindo diretamente no seu perfil do Discord.'
      },
      backup: {
        title: 'Backup na Nuvem',
        desc: 'Faça backup e restaure suas configurações e playlists locais perfeitamente.'
      },
      playlists: {
        title: 'Magia das Playlists',
        desc: 'Importe playlists do YouTube ou crie playlists locais com gerenciamento avançado.'
      },
      timer: {
        title: 'Temporizador',
        desc: 'Adormeça com suas faixas favoritas com um suave fade-out de volume.'
      },
      cache: {
        title: 'Cache Inteligente',
        desc: 'Estratégia de cache inteligente para economizar dados e permitir reprodução offline.'
      },
      equalizer: {
        title: 'Precisão de Áudio',
        desc: 'Ajuste sua experiência de audição com um equalizador integrado e efeitos de áudio avançados.'
      },
      material: {
        title: 'Design Material 3',
        desc: 'Experimente animações fluidas e cores dinâmicas com o mais recente design Material You.'
      },
      privacy: {
        title: 'Privacidade Nativa',
        desc: 'Sem rastreamento, sem telemetria. Seus hábitos de audição ficam no seu dispositivo.'
      }
    },
    showcase: {
      title: 'Excelência Visual',
      subtitle: 'Design Material 3 Expressive em Ação.',
      mockup: {
        welcome: 'Bem-vindo de volta',
        discover: 'Descobrir',
        for_you: 'Para Você',
        relax: 'Relaxar',
        energy: 'Energia',
        now_playing: 'Tocando Agora',
        track_title: 'Ressonância Cósmica',
        track_artist: 'Orquestra Vivi',
        lyrics: {
          line1: 'Perdido nos ecos do tempo',
          line2: 'Onde as estrelas começam a tocar',
          line3: 'Flutuando pela noite infinita'
        },
        library: 'Sua Biblioteca',
        search_title: 'Explorar',
        search_placeholder: 'Artistas, músicas, álbuns...',
        trending: 'Tendências Agora',
        equalizer_title: 'Precisão de Áudio',
        bass_boost: 'Grave Extra',
        surround: 'Som Surround',
        settings_title: 'Configurações',
        backup_status: 'Backup na Nuvem: Ativo',
        timer_label: 'Temporizador: 30m'
      }
    },
    install: {
      title: 'Obtenha o Vivi Music',
      subtitle: 'Escolha sua forma preferida de se manter atualizado.',
      izzy: {
        title: 'IzzyOnDroid',
        desc: 'A forma recomendada para usuários do F-Droid. Seguro, rápido e fácil.'
      },
      github: {
        title: 'GitHub Releases',
        desc: 'Baixe o APK mais recente diretamente do nosso GitHub se preferir instalação manual.'
      },
      btn_izzy: 'Obtenha no IzzyOnDroid',
      btn_github: 'Ver Ativos',
      safety_note: 'APKs Verificados e Seguros',
      step1: {
        title: 'Baixar',
        desc: 'Escolha uma fonte acima e baixe o arquivo APK mais recente no seu dispositivo Android.'
      },
      step2: {
        title: 'Configurações',
        desc: 'Se solicitado, permita que seu navegador ou gerenciador de arquivos instale apps de fontes desconhecidas.'
      },
      step3: {
        title: 'Iniciar',
        desc: 'Abra o arquivo baixado, toque em instalar e aproveite sua música com o Vivi.'
      }
    },
    contribute: {
      title: 'Contribuir',
      subtitle: 'Junte-se ao desenvolvimento e nos ajude a tornar o Vivi Music ainda melhor.',
      fork: {
        title: 'Fork do Repositório',
        desc: 'Crie sua própria cópia do projeto no GitHub.'
      },
      debug: {
        title: 'Debugar App',
        desc: 'Abra o projeto no Android Studio e execute-o localmente.'
      },
      pr: {
        title: 'Pull Request',
        desc: 'Envie suas melhorias ou correções de bugs para revisão.'
      }
    },
    footer: {
      license: 'Licenciado sob GPL v3.0',
      based_on: 'Baseado no InnerTune',
      social: {
        discord: 'Junte-se ao nosso servidor no Discord',
        telegram: 'Junte-se ao nosso canal no Telegram',
        github: 'Visite a Organização no GitHub'
      }
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Tem perguntas? Nós temos as respostas.',
      cost: { q: 'É gratuito?', a: 'Sim, o Vivi Music é 100% gratuito e de código aberto.' },
      source: { q: 'Onde encontro o código?', a: 'Tudo é público em nossa organização no GitHub.' },
      ytmusic: { q: 'Requer YouTube Premium?', a: 'Não, funciona sem qualquer assinatura através do InnerTube.' },
      download: { q: 'Está na Play Store?', a: 'Devido às políticas do Google, está disponível apenas via GitHub e IzzyOnDroid.' },
      safety: { q: 'É seguro?', a: 'Sim, o aplicativo é de código aberto e verificado pela comunidade.' }
    }
  }
}

/**
 * Determines the best language to display based on:
 * 1. Previously saved user preference (localStorage)
 * 2. Browser language settings (navigator.language)
 * Defaults to English if no match is found.
 */
const getBrowserLocale = () => {
  const saved = localStorage.getItem('vivi-locale')
  if (saved && messages[saved]) return saved

  const navigatorLocale =
    navigator.languages !== undefined
      ? navigator.languages[0]
      : navigator.language

  if (!navigatorLocale) return 'en'
  const trimmedLocale = navigatorLocale.trim().split(/-|_/)[0].toLowerCase()
  
  return messages[trimmedLocale] ? trimmedLocale : 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: getBrowserLocale(),
  fallbackLocale: 'en',
  messages
})

export default i18n