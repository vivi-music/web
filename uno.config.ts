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
  shortcuts: {
    // Layout & Struktur (OOCSS Objects)
    'm3-section': 'py-24 relative overflow-hidden',
    'm3-container': 'max-w-7xl mx-auto px-6 relative z-10',
    'm3-grid-2': 'grid md:grid-cols-2 gap-8',
    'm3-grid-3': 'grid md:grid-cols-3 gap-8',
    
    // Komponenten (OOCSS Objects + Skins)
    'm3-card': 'rounded-[2.5rem] bg-surface/50 backdrop-blur-xl border border-border/50 transition-all duration-500',
    'm3-card-hover': 'hover:-translate-y-3 hover:shadow-2xl',
    'm3-card-expressive': 'm3-card m3-card-hover hover:border-primary/50',
    
    'm3-icon-box': 'w-20 h-20 rounded-[1.5rem] flex items-center justify-center shadow-inner transition-all duration-500',
    'm3-icon-box-sm': 'w-12 h-12 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300',
    
    'm3-btn': 'px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 decoration-none',
    'm3-btn-primary': 'm3-btn bg-primary text-onPrimary shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1',
    'm3-btn-surface': 'm3-btn bg-surfaceContainer border border-border/50 text-text hover:bg-surfaceVariant hover:-translate-y-1',
    
    'm3-title': 'text-5xl font-black tracking-tight leading-tight',
    'm3-title-gradient': 'm3-title bg-clip-text text-transparent bg-gradient-to-r from-primary via-tertiary to-secondary',
    
    // Animationen & Effekte
    'hover-bounce': 'hover:scale-[1.02] active:scale-[0.98]',
    'glass-panel': 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl',
  },
  theme: {
    colors: {
      // WICHTIG: %alpha ermöglicht Opacity (z.B. text-primary/80)
      primary: 'rgba(var(--c-primary-rgb), %alpha)',
      onPrimary: 'rgba(var(--c-on-primary-rgb), %alpha)',
      
      secondary: 'rgba(var(--c-secondary-rgb), %alpha)',
      onSecondary: 'rgba(var(--c-on-secondary-rgb), %alpha)',
      
      tertiary: 'rgba(var(--c-tertiary-rgb), %alpha)',
      onTertiary: 'rgba(var(--c-on-tertiary-rgb), %alpha)',
      accent: 'rgba(var(--c-accent-rgb), %alpha)',
      onAccent: 'rgba(var(--c-on-accent-rgb), %alpha)',
      
      surface: 'rgba(var(--c-surface-rgb), %alpha)',
      surfaceContainer: 'rgba(var(--c-surface-container-rgb), %alpha)',
      surfaceVariant: 'rgba(var(--c-surface-variant-rgb), %alpha)',
      
      text: 'rgba(var(--c-text-rgb), %alpha)',
      textDim: 'rgba(var(--c-text-dim-rgb), %alpha)',
      border: 'rgba(var(--c-border-rgb), %alpha)',
    }
  }
})