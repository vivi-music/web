import { ref, onMounted } from 'vue'

export function useTheme() {
  const currentTheme = ref('system')
  const thumbPosition = ref(32) // Standard auf Mitte (32px)

  const applyTheme = (mode) => {
    const isDark = mode === 'dark' || 
      (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

    if (isDark) {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }

  const setTheme = (mode, pos) => {
    thumbPosition.value = pos
    currentTheme.value = mode
    applyTheme(mode)
    
    // Position im LocalStorage speichern (optional)
    localStorage.setItem('vivi-theme', mode)
  }

  onMounted(() => {
    // Check System Listener
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (currentTheme.value === 'system') applyTheme('system')
    })
    
    // Init
    const saved = localStorage.getItem('vivi-theme') || 'system'
    
    // FIX: Positionen aktualisiert: light=0, system=32, dark=64
    const pos = saved === 'light' ? 0 : (saved === 'dark' ? 64 : 32)
    setTheme(saved, pos)
  })

  return { currentTheme, thumbPosition, setTheme }
}