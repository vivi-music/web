// uno.config.ts
import { defineConfig, presetUno, presetWebFonts, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({ scale: 1.2 }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Plus Jakarta Sans:300,400,500,600,700,800',
        mono: 'JetBrains Mono:400,700',
      },
    }),
  ],
  theme: {
    colors: {
      // Magie: Wir verweisen auf die Variablen aus base.css
      primary: 'var(--c-primary)',
      onPrimary: 'var(--c-on-primary)',
      surface: 'var(--c-surface)',
      surfaceContainer: 'var(--c-surface-container)',
      surfaceVariant: 'var(--c-surface-variant)',
      
      // Neue semantische Farben
      text: 'var(--c-text)',          // Haupttextfarbe
      textDim: 'var(--c-text-dim)',   // Nebentextfarbe
      border: 'var(--c-border)',      // Rahmenfarbe
    }
  }
})
