import { ref, shallowRef, onMounted, onUnmounted } from 'vue'

/**
 * Composable für 3D-Kipp-Effekte basierend auf Mausposition oder Gyroskop.
 * Unterstützt iOS 13+ Permission-Requests.
 *
 * @param {import('vue').Ref<HTMLElement>} elementRef - Referenz auf das zu bewegende DOM-Element.
 * @returns {Object} Interface zur Steuerung der Sensoren.
 */
export function useTilt(elementRef) {
  // Konfiguration für Empfindlichkeit und Glättung
  const CONFIG = {
    maxRotation: 15,    // Max Neigung in Grad
    mouseFactor: 0.05,  // Empfindlichkeit Maus
    gyroFactor: 1.2,    // Verstärkung für Gyro
    smoothing: 0.1      // Glättungsfaktor (Lerp)
  }

  // shallowRef reicht hier aus, da wir keine tiefen Objekte tracken müssen
  const permissionGranted = shallowRef(null)

  // Aktuelle und Ziel-Werte für die Animation
  const current = { x: 0, y: 0 }
  const target = { x: 0, y: 0 }
  let rafId = null

  /**
   * Die Animationsschleife (flüssiger als direkte Events)
   */
  const animate = () => {
    // Lerp-Formel: current + (target - current) * factor
    current.x += (target.x - current.x) * CONFIG.smoothing
    current.y += (target.y - current.y) * CONFIG.smoothing

    if (elementRef.value) {
      updateTransform(current.x, current.y)
    }

    rafId = requestAnimationFrame(animate)
  }

  const handleMouseMove = (e) => {
    // Zielwerte basierend auf Mausposition berechnen (relativ zur Bildschirmmitte)
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    // Wir wollen X-Achse neigen wenn Maus Y bewegt und Y-Achse wenn Maus X bewegt
    target.y = (e.clientX - centerX) * CONFIG.mouseFactor
    target.x = (centerY - e.clientY) * CONFIG.mouseFactor

    // Begrenzung
    target.x = clamp(target.x, -CONFIG.maxRotation, CONFIG.maxRotation)
    target.y = clamp(target.y, -CONFIG.maxRotation, CONFIG.maxRotation)
  }

  const handleOrientation = (e) => {
    const { beta, gamma } = e
    if (beta === null || gamma === null) return

    // Mobile: Beta ist X-Rotation, Gamma ist Y-Rotation
    target.x = clamp(beta * CONFIG.gyroFactor - 45, -CONFIG.maxRotation, CONFIG.maxRotation) // -45 als Offset für Halte-Winkel
    target.y = clamp(gamma * CONFIG.gyroFactor, -CONFIG.maxRotation, CONFIG.maxRotation)
  }

  const updateTransform = (x, y) => {
    const el = elementRef.value
    if (!el) return
    
    // Kombinierte Transformation für 3D Effekt
    // Wir nutzen auch CSS Variablen für Parallax-Effekte in der Komponente
    el.style.setProperty('--tilt-x', `${x}deg`)
    el.style.setProperty('--tilt-y', `${y}deg`)
    el.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`
  }

  const clamp = (val, min, max) => Math.min(Math.max(val, min), max)

  const requestPermission = async () => {
    if (typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const response = await DeviceOrientationEvent.requestPermission()
        if (response === 'granted') {
          permissionGranted.value = true
          window.addEventListener('deviceorientation', handleOrientation, { passive: true })
        } else {
          permissionGranted.value = false
        }
      } catch (error) {
        console.error(error)
      }
    } else {
      permissionGranted.value = true
      window.addEventListener('deviceorientation', handleOrientation, { passive: true })
    }
  }

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    rafId = requestAnimationFrame(animate)

    if (typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      permissionGranted.value = false
    } else {
      window.addEventListener('deviceorientation', handleOrientation, { passive: true })
      permissionGranted.value = true
    }
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('deviceorientation', handleOrientation)
    if (rafId) cancelAnimationFrame(rafId)
  })

  return {
    requestPermission,
    permissionGranted
  }
}