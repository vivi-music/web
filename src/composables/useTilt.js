import { onMounted, onUnmounted } from 'vue'

export function useTilt(elementRef) {
  const handleMove = (e) => {
    if (!elementRef.value) return
    const x = (window.innerWidth / 2 - e.pageX) / 30
    const y = (window.innerHeight / 2 - e.pageY) / 30
    elementRef.value.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
  }

  onMounted(() => window.addEventListener('mousemove', handleMove))
  onUnmounted(() => window.removeEventListener('mousemove', handleMove))
}
