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
      // WICHTIG: %alpha ermöglicht Opacity (z.B. text-primary/80)
      primary: 'rgba(var(--c-primary-rgb), %alpha)',
      onPrimary: 'rgba(var(--c-on-primary-rgb), %alpha)',
      
      surface: 'rgba(var(--c-surface-rgb), %alpha)',
      surfaceContainer: 'rgba(var(--c-surface-container-rgb), %alpha)',
      surfaceVariant: 'rgba(var(--c-surface-variant-rgb), %alpha)',
      
      text: 'rgba(var(--c-text-rgb), %alpha)',
      textDim: 'rgba(var(--c-text-dim-rgb), %alpha)',
      border: 'rgba(var(--c-border-rgb), %alpha)',
    }
  }
})