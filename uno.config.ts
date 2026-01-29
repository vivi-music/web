import { defineConfig, presetUno, presetWebFonts, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/'
    }),
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
      primary: '#D0BCFF',
      onPrimary: '#381E72',
      surface: '#141218',
      surfaceContainer: '#1E1C24',
      surfaceVariant: '#49454F',
      secondary: '#CCC2DC',
      tertiary: '#EFB8C8',
      accent: '#7c4dff',
      success: '#4ADE80',
      warning: '#FBBC04'
    }
  },
  shortcuts: {
    'btn-primary': 'bg-primary text-onPrimary px-6 py-3 rounded-full font-bold hover:opacity-90 active:scale-95 transition-all shadow-[0_0_20px_rgba(208,188,255,0.2)] flex items-center gap-2 cursor-pointer',
    'btn-secondary': 'bg-surfaceVariant/30 text-primary border border-primary/20 px-6 py-3 rounded-full font-bold hover:bg-surfaceVariant/50 active:scale-95 transition-all flex items-center gap-2 cursor-pointer',
    'card-tech': 'bg-surfaceContainer p-6 rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all hover:-translate-y-1',
    'section-title': 'text-4xl md:text-5xl font-extrabold tracking-tight mb-6',
    'code-block': 'font-mono text-sm bg-[#0a0a0a] p-4 rounded-xl border border-white/10 text-gray-300 overflow-x-auto',
  }
})
