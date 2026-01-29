<script setup>
import { ref } from 'vue'
import { useTilt } from '../composables/useTilt'

const phoneRef = ref(null)
useTilt(phoneRef)
</script>

<template>
  <header class="pt-32 pb-20 px-6 relative overflow-hidden">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div class="z-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
          <div class="i-fa6-solid-code-commit"></div> v5.0.3-testing
        </div>
        <h1 class="text-6xl md:text-7xl font-bold leading-tight mb-6">
          Music, <br>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-tertiary">Unleashed.</span>
        </h1>
        <p class="text-xl text-white/60 mb-8 max-w-lg leading-relaxed">
          Der Open-Source Android Player mit <b>Innertube</b> Integration, synchronen Lyrics und Material 3 Expressive Design.
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="#install" class="btn-primary">
            <div class="i-fa6-brands-android text-lg"></div> Download App
          </a>
          <a href="#features" class="btn-secondary">
            <div class="i-fa6-solid-layer-group"></div> View Features
          </a>
        </div>
      </div>

      <div class="perspective-1000 flex justify-center lg:justify-end relative">
        <div class="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30 pointer-events-none"></div>
        
        <div ref="phoneRef" class="w-[300px] h-[640px] rounded-[3.5rem] bg-[#1a1a1a] relative p-[10px] m-auto transform-style-3d transition-transform duration-100 ease-out shadow-[inset_0_0_0_2px_#3a3a3a,0_0_0_4px_#000,0_20px_50px_rgba(0,0,0,0.5)]">
          <div class="absolute top-[15px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-black rounded-full z-50"></div>
          
          <div class="w-full h-full bg-surface rounded-[2.8rem] overflow-hidden relative flex flex-col mask-radial">
            <div class="absolute inset-0 bg-[url('https://source.unsplash.com/random/400x800/?abstract,purple')] bg-cover"></div>
            <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            
            <div class="relative z-10 flex flex-col h-full p-6 pt-10">
              <div class="flex justify-between text-white/80 mb-8">
                <div class="i-fa6-solid-chevron-down"></div>
                <span class="text-xs uppercase tracking-widest font-bold">Playing from Chart</span>
                <div class="i-fa6-solid-ellipsis-vertical"></div>
              </div>
              <div class="aspect-square rounded-[2rem] bg-gradient-to-tr from-gray-800 to-gray-700 shadow-2xl mb-8 relative border border-white/10 flex items-center justify-center">
                 <div class="i-fa6-solid-music text-6xl text-white/20"></div>
              </div>
              <div class="mt-auto space-y-6">
                <div class="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div class="w-2/3 h-full bg-primary"></div>
                </div>
                <div class="flex justify-between items-center text-2xl px-2">
                  <div class="i-fa6-solid-backward-step text-white/70"></div>
                  <div class="w-16 h-16 bg-primary rounded-[1.5rem] flex items-center justify-center text-onPrimary shadow-lg">
                    <div class="i-fa6-solid-pause"></div>
                  </div>
                  <div class="i-fa6-solid-forward-step text-white/70"></div>
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
</style>
