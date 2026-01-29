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
      // FIX: Nutzung von RGB-Vars mit %alpha Platzhalter für korrekte Transparenz
      primary: 'rgba(var(--c-primary-rgb), %alpha)',
      
      onPrimary: 'var(--c-on-primary)',
      surface: 'var(--c-surface)',
      surfaceContainer: 'var(--c-surface-container)',
      surfaceVariant: 'var(--c-surface-variant)',
      
      text: 'var(--c-text)',
      textDim: 'var(--c-text-dim)',
      border: 'var(--c-border)',
      
      // Falls 'tertiary' auch genutzt wird (z.B. im Gradient), sollte es idealerweise auch definiert werden:
      // tertiary: 'rgba(var(--c-tertiary-rgb), %alpha)', 
    }
  }
})