<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <footer class="bg-surface py-16 border-t border-border/50 relative overflow-hidden">
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-primary/5 blur-[80px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
      
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-2xl bg-surfaceContainer flex items-center justify-center border border-white/10 shadow-lg group">
          <div class="i-fa6-solid-music text-xl text-primary group-hover:scale-110 transition-transform"></div>
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-xl text-text leading-tight">Vivi Music</span>
          <span class="text-xs text-textDim font-medium tracking-wide">Open Source Audio</span>
        </div>
      </div>
      
      <div class="flex gap-4">
        <a href="SOON" class="w-12 h-12 rounded-full bg-surfaceContainer border border-border flex items-center justify-center text-textDim transition-all duration-300 hover:bg-[#5865F2] hover:border-[#5865F2] hover:text-white hover:-translate-y-1 hover:shadow-xl">
          <div class="i-fa6-brands-discord text-xl"></div>
        </a>
        
        <a href="https://t.me/+8rh2S_eSL302MDA1" class="w-12 h-12 rounded-full bg-surfaceContainer border border-border flex items-center justify-center text-textDim transition-all duration-300 hover:bg-[#24A1DE] hover:border-[#24A1DE] hover:text-white hover:-translate-y-1 hover:shadow-xl">
          <div class="i-fa6-brands-telegram text-xl"></div>
        </a>
        
        <a href="https://github.com/vivi-music" class="w-12 h-12 rounded-full bg-surfaceContainer border border-border flex items-center justify-center text-textDim transition-all duration-300 hover:bg-text hover:border-text hover:text-surface hover:-translate-y-1 hover:shadow-xl">
          <div class="i-fa6-brands-github text-xl"></div>
        </a>
      </div>

      <div class="text-center md:text-right">
        <p class="text-sm text-textDim font-medium">
          &copy; 2026 Vivi Music. 
        </p>
        <p class="text-xs text-textDim/60 mt-1">
          {{ t('footer.license') }} • {{ t('footer.based_on') }}
        </p>
      </div>
    </div>
  </footer>
</template>