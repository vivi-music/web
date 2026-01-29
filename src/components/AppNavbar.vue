<script setup>
import { useTheme } from '../composables/useTheme'
const { currentTheme, thumbPosition, setTheme } = useTheme()
</script>

<template>
  <nav class="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5 bg-[#0f0d13]/80 transition-all">
    <div class="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
      <a href="#" class="flex items-center gap-3 group">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-onPrimary shadow-lg group-hover:scale-110 transition-transform">
          <div class="i-fa6-solid-wave-square text-xs"></div>
        </div>
        <span class="font-bold text-lg tracking-tight text-[#E6E1E5]">Vivi Music</span>
      </a>

      <div class="hidden md:flex items-center gap-6 text-sm font-medium text-white/70">
        <a href="#features" class="hover:text-primary transition-colors">Features</a>
        <a href="#screenshots" class="hover:text-primary transition-colors">Screenshots</a>
        <a href="#install" class="hover:text-primary transition-colors">Install</a>
        <a href="#contribute" class="hover:text-primary transition-colors">Contribute</a>
      </div>

      <div class="flex items-center gap-4">
        <div class="bg-[#2B2930] rounded-full relative w-[100px] h-[36px] flex items-center justify-between px-1 shadow-inner">
          <div class="absolute top-[3px] left-[3px] w-[30px] h-[30px] bg-[#D0BCFF] rounded-full transition-transform duration-300 z-10 shadow-md"
               :style="{ transform: `translateX(${thumbPosition}px)` }"></div>
          
          <div @click="setTheme('light', 0)" class="flex-1 text-center z-20 cursor-pointer text-[12px]" :class="currentTheme === 'light' ? 'text-[#381E72]' : 'text-[#938F99]'">
            <div class="i-fa6-solid-sun mx-auto"></div>
          </div>
          <div @click="setTheme('system', 32)" class="flex-1 text-center z-20 cursor-pointer text-[12px]" :class="currentTheme === 'system' ? 'text-[#381E72]' : 'text-[#938F99]'">
            <div class="i-fa6-solid-circle-half-stroke mx-auto"></div>
          </div>
          <div @click="setTheme('dark', 64)" class="flex-1 text-center z-20 cursor-pointer text-[12px]" :class="currentTheme === 'dark' ? 'text-[#381E72]' : 'text-[#938F99]'">
            <div class="i-fa6-solid-moon mx-auto"></div>
          </div>
        </div>

        <a href="https://github.com/t-boyke/vivi-music" target="_blank" class="text-2xl text-white/50 hover:text-white transition-colors">
          <div class="i-fa6-brands-github"></div>
        </a>
      </div>
    </div>
  </nav>
</template>
