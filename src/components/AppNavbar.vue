<script setup>
import { useTheme } from '../composables/useTheme'
const { currentTheme, thumbPosition, setTheme } = useTheme()
</script>

<template>
  <nav class="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5 bg-[#0f0d13]/80 transition-all">
    <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
      
      <a href="#" class="flex items-center gap-4 group">
        <img 
          src="/assets/Logo.png" 
          alt="Vivi Music" 
          class="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
        />
        <span class="font-bold text-xl tracking-tight text-[#E6E1E5] hidden sm:block">Vivi Music</span>
      </a>

      <div class="hidden md:flex items-center gap-2 bg-surfaceContainer/50 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
        <a href="#features" class="nav-item">Features</a>
        <a href="#screenshots" class="nav-item">Screenshots</a>
        <a href="#install" class="nav-item">Install</a>
        <a href="#contribute" class="nav-item">Contribute</a>
      </div>

      <div class="flex items-center gap-4">
        <div class="bg-[#2B2930] rounded-full relative w-[100px] h-[36px] flex items-center justify-between px-1 shadow-inner border border-white/5">
          <div class="absolute top-[3px] left-[3px] w-[30px] h-[30px] bg-[#D0BCFF] rounded-full transition-transform duration-300 z-10 shadow-md"
               :style="{ transform: `translateX(${thumbPosition}px)` }"></div>
          
          <div @click="setTheme('light', 0)" class="flex-1 text-center z-20 cursor-pointer text-[12px] flex items-center justify-center h-full" :class="currentTheme === 'light' ? 'text-[#381E72]' : 'text-[#938F99]'">
            <div class="i-fa6-solid-sun"></div>
          </div>
          <div @click="setTheme('system', 32)" class="flex-1 text-center z-20 cursor-pointer text-[12px] flex items-center justify-center h-full" :class="currentTheme === 'system' ? 'text-[#381E72]' : 'text-[#938F99]'">
            <div class="i-fa6-solid-circle-half-stroke"></div>
          </div>
          <div @click="setTheme('dark', 64)" class="flex-1 text-center z-20 cursor-pointer text-[12px] flex items-center justify-center h-full" :class="currentTheme === 'dark' ? 'text-[#381E72]' : 'text-[#938F99]'">
            <div class="i-fa6-solid-moon"></div>
          </div>
        </div>

        <a href="https://github.com/vivimusic-app-team/web" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all">
          <div class="i-fa6-brands-github text-xl"></div>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Material 3 Expressive Navigation Item Styles 
  - Pill shape
  - Hover state layer
  - Ripple effect simulation via active scale
*/
.nav-item {
  @apply px-5 py-2 rounded-full text-sm font-medium text-white/70 transition-all duration-200 relative overflow-hidden;
}

.nav-item:hover {
  @apply bg-white/10 text-white shadow-sm;
}

.nav-item:active {
  @apply bg-white/15 scale-95;
}
</style>
