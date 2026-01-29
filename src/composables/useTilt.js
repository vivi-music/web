import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable für 3D-Kipp-Effekte basierend auf Mausposition oder Gyroskop.
 * Unterstützt iOS 13+ Permission-Requests.
 *
 * @param {import('vue').Ref<HTMLElement>} elementRef - Referenz auf das zu bewegende DOM-Element.
 * @returns {Object} Interface zur Steuerung der Sensoren.
 */
export function useTilt(elementRef) {
  // Konfiguration für Empfindlichkeit
  const CONFIG = {
    maxRotation: 20, // Max Neigung in Grad
    mouseFactor: 30, // Dämpfung für Maus
    gyroFactor: 1.5  // Verstärkung für Gyro
  }

  /**
   * Speichert den aktuellen Status der Berechtigung.
   * null = unbekannt/nicht nötig, false = verweigert/nötig, true = erlaubt
   */
  const permissionGranted = ref(null)

  /**
   * Event-Handler für Mausbewegungen (Desktop Fallback).
   * @param {MouseEvent} e
   */
  const handleMouseMove = (e) => {
    if (!elementRef.value) return

    const x = (window.innerWidth / 2 - e.pageX) / CONFIG.mouseFactor
    const y = (window.innerHeight / 2 - e.pageY) / CONFIG.mouseFactor

    updateTransform(x, y)
  }

  /**
   * Event-Handler für Gyroskop-Daten (Mobile).
   * @param {DeviceOrientationEvent} e
   */
  const handleOrientation = (e) => {
    if (!elementRef.value) return

    // Beta: x-Achse (-180 bis 180), Gamma: y-Achse (-90 bis 90)
    const { beta, gamma } = e
    if (beta === null || gamma === null) return

    // Werte begrenzen und skalieren
    const rotateX = clamp(-beta * CONFIG.gyroFactor, -CONFIG.maxRotation, CONFIG.maxRotation)
    const rotateY = clamp(gamma * CONFIG.gyroFactor, -CONFIG.maxRotation, CONFIG.maxRotation)

    updateTransform(rotateY, rotateX) // Achsen tauschen für CSS rotateX/Y
  }

  /**
   * Wendet die Transformation auf das Element an.
   * @param {number} rotateY - Rotation um Y-Achse (links/rechts)
   * @param {number} rotateX - Rotation um X-Achse (oben/unten)
   */
  const updateTransform = (rotateY, rotateX) => {
    // requestAnimationFrame könnte hier für Performance ergänzt werden
    elementRef.value.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
  }

  /**
   * Hilfsfunktion: Begrenzt Werte auf Min/Max.
   */
  const clamp = (val, min, max) => Math.min(Math.max(val, min), max)

  /**
   * Fordert Berechtigung für Sensoren an (iOS 13+).
   * Muss durch User-Interaktion (Klick) ausgelöst werden.
   */
  const requestPermission = async () => {
    if (typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const response = await DeviceOrientationEvent.requestPermission()
        if (response === 'granted') {
          permissionGranted.value = true
          window.addEventListener('deviceorientation', handleOrientation)
        } else {
          permissionGranted.value = false
          alert('Berechtigung verweigert. Tilt-Effekt deaktiviert.')
        }
      } catch (error) {
        console.error(error)
      }
    } else {
      // Android / ältere iOS benötigen keine explizite Berechtigung
      permissionGranted.value = true
      window.addEventListener('deviceorientation', handleOrientation)
    }
  }

  onMounted(() => {
    // Standardmäßig Maus aktivieren
    window.addEventListener('mousemove', handleMouseMove)

    // Prüfen ob wir auf iOS sind (Permission API existiert)
    if (typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      permissionGranted.value = false // Button anzeigen
    } else {
      // Versuche direkt Gyro zu binden (Android/Desktop DevTools)
      window.addEventListener('deviceorientation', handleOrientation)
      permissionGranted.value = true // Kein Button nötig
    }
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('deviceorientation', handleOrientation)
  })

  return {
    requestPermission,
    permissionGranted
  }
}