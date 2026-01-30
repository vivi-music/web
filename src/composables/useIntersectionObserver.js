import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable zur Erkennung, ob ein Element im Sichtbereich ist.
 * @param {import('vue').Ref<HTMLElement>} target - Das zu beobachtende Element.
 * @param {Object} options - IntersectionObserver Optionen.
 * @returns {import('vue').Ref<boolean>} isVisible - Ob das Element sichtbar ist.
 */
export function useIntersectionObserver(target, options = { threshold: 0.1 }) {
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      isVisible.value = entry.isIntersecting
      // Wenn es einmal sichtbar war, können wir die Beobachtung stoppen (optional)
      if (entry.isIntersecting && options.once) {
        observer.unobserve(entry.target)
      }
    }, options)

    if (target.value) {
      observer.observe(target.value)
    }
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return isVisible
}
