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
  <div class="fixed inset-0 overflow-hidden pointer-events-none z-[-1] opacity-50 dark:opacity-30">
    <!-- Primary Blob -->
    <div class="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 blur-[100px] animate-morph animate-spin-slow"></div>
    
    <!-- Tertiary Blob -->
    <div class="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-tertiary/15 blur-[120px] animate-morph animate-spin-slow" style="animation-direction: reverse; animation-duration: 25s;"></div>
    
    <!-- Secondary Blob -->
    <div class="absolute top-[30%] right-[10%] w-[30vw] h-[30vw] bg-secondary/10 blur-[80px] animate-morph animate-glow-pulse"></div>
    
    <!-- Accent Blob -->
    <div class="absolute bottom-[20%] left-[10%] w-[40vw] h-[40vw] bg-accent/10 blur-[100px] animate-morph animate-float"></div>
  </div>
</template>

<style scoped>
/* Lokale Anpassungen falls nötig */
</style>
