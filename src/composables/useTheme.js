import { ref, onMounted } from 'vue'

export function useTheme() {
  const currentTheme = ref('system')
  
  // thumbPosition tracks the X-coordinate (in pixels) for the visual slider 
  // indicator in the theme switcher UI. Default is 32px (middle/system).
  const thumbPosition = ref(32) 

  const applyTheme = (mode) => {
    // Check if we should use dark mode. If 'system' is selected, we query 
    // the browser's preferred color scheme.
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
    
    // Persist the user's theme choice in localStorage for future visits.
    localStorage.setItem('vivi-theme', mode)
  }

  onMounted(() => {
    // Listen for changes in the system's color scheme (e.g., when the OS 
    // automatically switches from light to dark at sunset).
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (currentTheme.value === 'system') applyTheme('system')
    })
    
    // Initialize the theme on page load.
    const saved = localStorage.getItem('vivi-theme') || 'system'
    
    // Map the saved theme string to its corresponding UI slider position:
    // Light = 0px, System = 32px, Dark = 64px.
    const pos = saved === 'light' ? 0 : (saved === 'dark' ? 64 : 32)
    setTheme(saved, pos)
  })

  return { currentTheme, thumbPosition, setTheme }
}