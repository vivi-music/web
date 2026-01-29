import { ref, onMounted } from 'vue'

export function useTheme() {
  const currentTheme = ref('system')
  const thumbPosition = ref(32) // Standard Mitte

  const setTheme = (mode, pos) => {
    thumbPosition.value = pos
    currentTheme.value = mode
    
    const isDark = mode === 'dark' || 
      (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

    document.body.style.backgroundColor = isDark ? '#0f0d13' : '#fdf7ff'
    document.body.style.color = isDark ? '#E6E1E5' : '#1d1b20'
  }

  onMounted(() => {
    setTheme('system', 32)
  })

  return { currentTheme, thumbPosition, setTheme }
}
