<script setup>
/**
 * @file AppBackground.vue
 * @description Erzeugt animierte Hintergrund-Elemente für das M3E-Design.
 */
defineOptions({
  name: 'AppBackground'
})
</script>

<template>
  <div class="fixed inset-0 overflow-hidden pointer-events-none z-[-1] opacity-40 dark:opacity-20 transition-opacity duration-1000">
    <!-- Primary Blob (Immer sichtbar, aber optimiert) -->
    <div class="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-primary/20 blur-[60px] md:blur-[120px] animate-morph md:animate-spin-slow will-change-transform"></div>
    
    <!-- Tertiary Blob (Nur auf Desktop) -->
    <div class="hidden md:block absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-tertiary/15 blur-[120px] animate-morph animate-spin-slow will-change-transform" style="animation-direction: reverse; animation-duration: 25s;"></div>
    
    <!-- Secondary Blob (Optimiert für mobile) -->
    <div class="absolute top-[30%] right-[10%] w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-secondary/10 blur-[40px] md:blur-[80px] animate-morph md:animate-glow-pulse will-change-transform"></div>
    
    <!-- Accent Blob (Nur auf Desktop) -->
    <div class="hidden md:block absolute bottom-[20%] left-[10%] w-[40vw] h-[40vw] bg-accent/10 blur-[100px] animate-morph animate-float will-change-transform"></div>
  </div>
</template>

<style scoped>
/* Lokale Anpassungen falls nötig */
</style>
