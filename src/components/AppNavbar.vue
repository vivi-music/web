<script setup>
import { useTheme } from '../composables/useTheme'
const { currentTheme, thumbPosition, setTheme } = useTheme()
</script>

<template>
  <nav class="fixed top-0 w-full z-50 backdrop-blur-2xl bg-surface/60 border-b border-border transition-all duration-500">
    <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
      
      <a href="#" class="flex items-center gap-4 group select-none">
        <img 
          src="/assets/Logo.png" 
          alt="Vivi Music" 
          class="w-10 h-10 object-contain group-hover:rotate-12 transition-transform duration-500 ease-out"
        />
        <span class="font-bold text-xl tracking-tight text-text group-hover:text-primary transition-colors">Vivi Music</span>
      </a>

      <div class="hidden md:flex items-center gap-1">
        <a href="#features" class="nav-item">Features</a>
        <a href="#screenshots" class="nav-item">Screenshots</a>
        <a href="#install" class="nav-item">Install</a>
        <a href="#contribute" class="nav-item">Contribute</a>
      </div>

      <div class="flex items-center gap-3">
        
        <div class="bg-surfaceContainer/50 rounded-full relative w-[96px] h-[40px] flex items-center justify-between px-1 border border-border">
          <div class="absolute top-[4px] left-[4px] w-[32px] h-[32px] bg-primary rounded-full transition-transform duration-300 z-10 shadow-[0_2px_8px_rgba(var(--c-primary-rgb),0.3)]"
               :style="{ transform: `translateX(${thumbPosition}px)` }"></div>
          
          <button @click="setTheme('light', 0)" class="switch-btn" 
            :class="currentTheme === 'light' ? 'text-onPrimary' : 'text-textDim'">
            <div class="i-fa6-solid-sun text-xs"></div>
          </button>
          
          <button @click="setTheme('system', 28)" class="switch-btn" 
            :class="currentTheme === 'system' ? 'text-onPrimary' : 'text-textDim'">
            <div class="i-fa6-solid-circle-half-stroke text-xs"></div>
          </button>
          
          <button @click="setTheme('dark', 56)" class="switch-btn" 
            :class="currentTheme === 'dark' ? 'text-onPrimary' : 'text-textDim'">
            <div class="i-fa6-solid-moon text-xs"></div>
          </button>
        </div>

        <a href="https://github.com/vivimusic-app-team/web" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full text-textDim hover:text-text hover:bg-text/5 transition-all active:scale-95">
          <div class="i-fa6-brands-github text-xl"></div>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-item {
  @apply px-5 py-2.5 rounded-full text-sm font-semibold text-textDim transition-all duration-300 relative overflow-hidden;
}

.nav-item:hover {
  @apply text-primary bg-text/5;
}

.nav-item:active {
  @apply scale-95 bg-text/10;
}

.switch-btn {
  @apply flex-1 h-full flex items-center justify-center z-20 cursor-pointer transition-colors duration-300 bg-transparent border-none p-0;
}
</style>
