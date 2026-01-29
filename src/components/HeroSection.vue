<script setup>
import { ref } from 'vue'
import { useTilt } from '../composables/useTilt'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const phoneRef = ref(null)
useTilt(phoneRef)
</script>

<template>
  <header class="pt-32 pb-20 px-6 relative overflow-hidden">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div class="z-10">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-8">
          <div class="i-fa6-solid-code-commit"></div> {{ t('hero.tagline') }}
        </div>
        
        <h1 class="text-6xl md:text-7xl font-extrabold leading-tight mb-6 text-text tracking-tight">
          {{ t('hero.title') }} <br>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#D0BCFF] to-tertiary animate-pulse-slow">{{ t('hero.subtitle') }}</span>
        </h1>
        
        <p class="text-xl text-textDim mb-10 max-w-lg leading-relaxed font-medium">
          {{ t('hero.description') }}
        </p>
        
        <div class="flex flex-wrap gap-5">
          <a href="#install" 
             class="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-onPrimary font-bold text-lg transition-all duration-300 shadow-[0_4px_10px_rgba(var(--c-primary-rgb),0.3)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(var(--c-primary-rgb),0.5)] active:scale-95 active:translate-y-0">
            <div class="i-fa6-brands-android text-2xl group-hover:rotate-12 transition-transform"></div> 
            <span>{{ t('hero.btn_download') }}</span>
          </a>
          
          <a href="#features" 
             class="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-surfaceContainer border border-primary/20 text-primary font-bold text-lg transition-all duration-300 hover:bg-surfaceVariant hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg active:scale-95 active:translate-y-0">
            <div class="i-fa6-solid-layer-group text-xl group-hover:scale-110 transition-transform"></div> 
            <span>{{ t('hero.btn_features') }}</span>
          </a>
        </div>
      </div>

      <div class="perspective-1000 flex justify-center lg:justify-end relative mt-12 lg:mt-0">
        <div class="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full opacity-40 pointer-events-none"></div>
        
        <div ref="phoneRef" class="w-[300px] h-[640px] rounded-[3.5rem] bg-[#1a1a1a] relative p-[10px] m-auto transform-style-3d transition-transform duration-100 ease-out shadow-[inset_0_0_0_2px_#3a3a3a,0_0_0_4px_#000,0_30px_60px_rgba(0,0,0,0.6)]">
          <div class="absolute top-[15px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-black rounded-full z-50"></div>
          
          <div class="w-full h-full bg-surface rounded-[2.8rem] overflow-hidden relative flex flex-col mask-radial border border-white/5">
            <div class="absolute inset-0 bg-[url('https://source.unsplash.com/random/400x800/?abstract,purple,dark')] bg-cover opacity-60"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90"></div>
            
            <div class="relative z-10 flex flex-col h-full p-6 pt-12">
              <div class="flex justify-between text-white/90 mb-8 px-2">
                <div class="i-fa6-solid-chevron-down cursor-pointer hover:text-primary transition-colors"></div>
                <span class="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80">Playing from Chart</span>
                <div class="i-fa6-solid-ellipsis-vertical cursor-pointer hover:text-primary transition-colors"></div>
              </div>
              
              <div class="aspect-square rounded-[2rem] bg-surfaceContainer/50 backdrop-blur-md shadow-2xl mb-8 relative border border-white/10 flex items-center justify-center overflow-hidden group">
                 <div class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                 <div class="i-fa6-solid-music text-7xl text-white/10 group-hover:scale-110 transition-transform duration-500"></div>
              </div>
              
              <div class="mt-auto space-y-8 px-2">
                 <div>
                    <h3 class="text-white text-2xl font-bold mb-1">Unknown Track</h3>
                    <p class="text-white/60 text-sm font-medium">Vivi Artist</p>
                 </div>

                <div class="w-full h-1.5 bg-white/10 rounded-full overflow-hidden cursor-pointer group">
                  <div class="w-2/3 h-full bg-primary relative">
                     <div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
                
                <div class="flex justify-between items-center text-3xl">
                  <div class="i-fa6-solid-backward-step text-white/70 hover:text-white transition-colors cursor-pointer active:scale-90"></div>
                  <div class="w-20 h-20 bg-primary rounded-[1.8rem] flex items-center justify-center text-onPrimary shadow-[0_8px_24px_rgba(var(--c-primary-rgb),0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer">
                    <div class="i-fa6-solid-pause text-3xl"></div>
                  </div>
                  <div class="i-fa6-solid-forward-step text-white/70 hover:text-white transition-colors cursor-pointer active:scale-90"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.mask-radial {
  mask-image: radial-gradient(white, black);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}
.animate-pulse-slow {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>