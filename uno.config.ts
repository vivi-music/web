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
      // Verweis auf CSS Variablen
      primary: 'var(--c-primary)',
      onPrimary: 'var(--c-on-primary)',
      surface: 'var(--c-surface)',
      surfaceContainer: 'var(--c-surface-container)',
      surfaceVariant: 'var(--c-surface-variant)',
      // Utility Farben
      border: 'var(--c-border)',
      text: 'var(--c-text)',
      textDim: 'var(--c-text-dim)'
    }
  },
  shortcuts: {
    'btn-primary': 'bg-primary text-onPrimary px-6 py-3 rounded-full font-bold hover:opacity-90 active:scale-95 transition-all shadow-lg flex items-center gap-2 cursor-pointer',
    'btn-secondary': 'bg-surfaceVariant text-primary border border-border px-6 py-3 rounded-full font-bold hover:opacity-80 active:scale-95 transition-all flex items-center gap-2 cursor-pointer',
    // Hier nutzen wir border-border statt border-white/5 für Theme-Support
    'card-tech': 'bg-surfaceContainer p-6 rounded-[2rem] border border-border hover:border-primary/50 transition-all hover:-translate-y-1',
    'section-title': 'text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-text',
    'code-block': 'font-mono text-sm bg-surfaceContainer p-4 rounded-xl border border-border text-textDim overflow-x-auto',
  }
})
