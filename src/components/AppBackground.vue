<script setup>
/**
 * @file AppBackground.vue
 * @description Creates animated background elements (Blobs) following the 
 * Material 3 Expressive (M3E) design language. These shapes create depth and 
 * visual interest without being distracting.
 */
defineOptions({
  name: 'AppBackground'
})
</script>

<template>
  <div class="fixed inset-0 overflow-hidden pointer-events-none z-[-1] opacity-40 dark:opacity-20 transition-opacity duration-1000">
    <!-- Primary Blob: A large, soft shape that provides the main background tint. 
         Optimized for performance with hardware acceleration. -->
    <div class="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-primary/20 blur-[60px] md:blur-[120px] animate-morph md:animate-spin-slow will-change-transform"></div>
    
    <!-- Tertiary Blob: Provides complementary color accents, shown only on desktop 
         to save GPU resources on mobile devices. -->
    <div class="hidden md:block absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-tertiary/15 blur-[120px] animate-morph animate-spin-slow will-change-transform" style="animation-direction: reverse; animation-duration: 25s;"></div>
    
    <!-- Secondary Blob: A smaller accent blob that is optimized for both mobile and desktop. -->
    <div class="absolute top-[30%] right-[10%] w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-secondary/10 blur-[40px] md:blur-[80px] animate-morph md:animate-glow-pulse will-change-transform"></div>
    
    <!-- Accent Blob: Additional flair for large screens, featuring a subtle floating animation. -->
    <div class="hidden md:block absolute bottom-[20%] left-[10%] w-[40vw] h-[40vw] bg-accent/10 blur-[100px] animate-morph animate-float will-change-transform"></div>
  </div>
</template>

<style scoped>
/* Local style adjustments can be added here if needed */
</style>
