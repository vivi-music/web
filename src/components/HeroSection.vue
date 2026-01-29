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
          <a href="#install" class="btn-m3-primary group">
            <div class="i-fa6-brands-android text-xl transition-transform group-hover:-translate-y-0.5 group-hover:rotate-12"></div> 
            <span>{{ t('hero.btn_download') }}</span>
          </a>
          
          <a href="#features" class="btn-m3-secondary group">
            <div class="i-fa6-solid-layer-group text-lg transition-transform group-hover:scale-110"></div> 
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
                <div class="i-fa6-solid-chevron-down cursor