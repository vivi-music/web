import { ref, shallowRef, onMounted, onUnmounted } from 'vue'

/**
 * Composable for 3D tilt effects based on mouse position or device gyroscope.
 * Includes support for iOS 13+ permission requests for orientation sensors.
 *
 * @param {import('vue').Ref<HTMLElement>} elementRef - Reference to the DOM element to be tilted.
 * @returns {Object} Control interface for the sensors and permission state.
 */
export function useTilt(elementRef) {
  // Configuration for tilt sensitivity and animation smoothing.
  const CONFIG = {
    maxRotation: 15,    // Maximum tilt angle in degrees.
    mouseFactor: 0.05,  // Sensitivity multiplier for mouse movement.
    gyroFactor: 1.2,    // Sensitivity multiplier for the gyroscope.
    smoothing: 0.1      // Linear interpolation (Lerp) factor for smooth transitions.
  }

  // shallowRef is sufficient here as we only need to track the boolean/null permission state.
  const permissionGranted = shallowRef(null)

  // Tracking current (interpolated) and target (raw) values for the 3D rotation.
  const current = { x: 0, y: 0 }
  const target = { x: 0, y: 0 }
  let rafId = null
  let isAnimating = false

  /**
   * The animation loop using requestAnimationFrame.
   * This is much smoother than updating the DOM directly on every input event.
   */
  const animate = () => {
    // Lerp Formula: current + (target - current) * smoothingFactor
    const dx = target.x - current.x
    const dy = target.y - current.y

    // Stop the animation if the difference is negligible to save CPU resources.
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
    // Calculate target values based on mouse position relative to the screen center.
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    // Cross-axis mapping: moving mouse horizontally (X) rotates around the Y-axis, and vice versa.
    target.y = (e.clientX - centerX) * CONFIG.mouseFactor
    target.x = (centerY - e.clientY) * CONFIG.mouseFactor

    // Clamp the rotation to the defined maximum angle.
    target.x = clamp(target.x, -CONFIG.maxRotation, CONFIG.maxRotation)
    target.y = clamp(target.y, -CONFIG.maxRotation, CONFIG.maxRotation)

    startAnimation()
  }

  const handleOrientation = (e) => {
    const { beta, gamma } = e
    if (beta === null || gamma === null) return

    // On mobile devices: Beta represents X-axis rotation, Gamma represents Y-axis rotation.
    // We adjust the sensitivity slightly for a calmer user experience on handhelds.
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
    
    // Apply the 3D rotation transform.
    // We also set CSS custom properties so the component can use them for parallax effects.
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