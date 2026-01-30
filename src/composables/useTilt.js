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
  let isAnimating = false

  /**
   * Die Animationsschleife (flüssiger als direkte Events)
   */
  const animate = () => {
    // Lerp-Formel: current + (target - current) * factor
    const dx = target.x - current.x
    const dy = target.y - current.y

    // Wenn die Differenz winzig ist, stoppen wir das Update
    if (Math.abs(dx) < 0.01 && Math.abs(dy) < 0.01) {
      if (current.x !== target.x || current.y !== target.y) {
        current.x = target.x
        current.y = target.y
        updateTransform(current.x, current.y)
      }
      isAnimating = false
      rafId = null
      return
    }

    current.x += dx * CONFIG.smoothing
    current.y += dy * CONFIG.smoothing

    if (elementRef.value) {
      updateTransform(current.x, current.y)
    }

    rafId = requestAnimationFrame(animate)
  }

  const startAnimation = () => {
    if (!isAnimating) {
      isAnimating = true
      rafId = requestAnimationFrame(animate)
    }
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

    startAnimation()
  }

  const handleOrientation = (e) => {
    const { beta, gamma } = e
    if (beta === null || gamma === null) return

    // Mobile: Beta ist X-Rotation, Gamma ist Y-Rotation
    // Wir drosseln die Empfindlichkeit auf mobilen Geräten etwas für mehr Ruhe
    const nextX = clamp(beta * CONFIG.gyroFactor - 45, -CONFIG.maxRotation, CONFIG.maxRotation)
    const nextY = clamp(gamma * CONFIG.gyroFactor, -CONFIG.maxRotation, CONFIG.maxRotation)

    if (Math.abs(target.x - nextX) > 0.5 || Math.abs(target.y - nextY) > 0.5) {
      target.x = nextX
      target.y = nextY
      startAnimation()
    }
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