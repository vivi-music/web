import { ref, onMounted } from 'vue'

export function useDynamicColor() {
  const currentHue = ref('default')

  const colorSeeds = {
    default: {
      light: { primary: '103, 80, 164', secondary: '50, 95, 145', tertiary: '125, 82, 96', accent: '0, 104, 150' },
      dark: { primary: '208, 188, 255', secondary: '204, 226, 253', tertiary: '239, 184, 200', accent: '160, 200, 240' }
    },
    ocean: {
      light: { primary: '0, 103, 130', secondary: '74, 98, 103', tertiary: '81, 94, 123', accent: '0, 104, 150' },
      dark: { primary: '93, 212, 254', secondary: '177, 203, 209', tertiary: '186, 200, 237', accent: '160, 200, 240' }
    },
    forest: {
      light: { primary: '56, 107, 34', secondary: '84, 100, 71', tertiary: '56, 101, 106', accent: '0, 104, 150' },
      dark: { primary: '156, 214, 126', secondary: '188, 204, 172', tertiary: '156, 205, 210', accent: '160, 200, 240' }
    },
    candy: {
      light: { primary: '144, 74, 116', secondary: '116, 88, 104', tertiary: '138, 81, 57', accent: '0, 104, 150' },
      dark: { primary: '255, 176, 221', secondary: '226, 190, 209', tertiary: '255, 184, 158', accent: '160, 200, 240' }
    }
  }

  const applyColor = (hue) => {
    currentHue.value = hue
    const root = document.documentElement
    const colors = colorSeeds[hue]

    // Wir setzen Variablen für Light und Dark separat via CSS Selektoren
    // Aber hier im JS überschreiben wir sie direkt am Root (was beide überschreibt, wenn wir nicht aufpassen)
    // Besser: Wir nutzen separate Variablen --c-primary-rgb-dynamic etc.
    
    Object.entries(colors.light).forEach(([key, val]) => {
      root.style.setProperty(`--c-${key}-rgb-light`, val)
    })
    Object.entries(colors.dark).forEach(([key, val]) => {
      root.style.setProperty(`--c-${key}-rgb-dark`, val)
    })

    localStorage.setItem('vivi-hue', hue)
  }

  onMounted(() => {
    const saved = localStorage.getItem('vivi-hue') || 'default'
    if (saved !== 'default') applyColor(saved)
  })

  return { currentHue, colorSeeds, applyColor }
}
