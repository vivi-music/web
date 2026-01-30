<script setup>
/**
 * @file InstallSection.vue
 * @description Sektion für Download-Optionen mit Lottie-Animationen.
 */
import { useI18n } from 'vue-i18n'
import { Vue3Lottie } from 'vue3-lottie'
import { shallowRef } from 'vue'
import { useIntersectionObserver } from '../composables'

defineOptions({
  name: 'InstallSection'
})

const { t } = useI18n()
const sectionRef = shallowRef(null)
const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, once: true })

const base = import.meta.env.BASE_URL

const IZZY_URL = 'https://apt.izzysoft.de/fdroid/index/apk/com.vivi.vivimusic'
const GITHUB_URL = 'https://github.com/vivizzz007/vivi-music/releases'

const steps = [
  { id: '1', animLink: `${base}lottie/download.json`.replace(/\/+/g, '/') },
  { id: '2', animLink: `${base}lottie/settings.json`.replace(/\/+/g, '/') },
  { id: '3', animLink: `${base}lottie/success.json`.replace(/\/+/g, '/') }
]
</script>

<template>
  <section id="install" 
           ref="sectionRef"
           class="m3-section bg-surfaceContainer border-y border-border/10 transition-all duration-1000"
           :class="isVisible ? 'opacity-100' : 'opacity-0 translate-y-12'">
    <div class="m3-container">

      <div class="m3-grid-2 mb-24">

        <div class="p-8 m3-card-expressive flex flex-col items-center text-center group">
          <div class="m3-icon-box bg-white p-3 mb-6 group-hover:scale-110">
            <img src="/assets/izzy.jpg" alt="IzzyOnDroid" class="w-full h-full object-contain" />
          </div>
          <h3 class="text-2xl font-black text-text mb-2 group-hover:text-primary transition-colors">{{ t('install.izzy.title') }}</h3>
          <p class="text-textDim text-sm mb-8 flex-1 leading-relaxed opacity-80">
            {{ t('install.izzy.desc') }}
          </p>
          <a :href="IZZY_URL"
             target="_blank"
             rel="noopener noreferrer"
             class="m3-btn-primary w-full">
            <div class="i-fa6-solid-download text-lg" aria-hidden="true"></div>
            {{ t('install.btn_izzy') }}
          </a>
        </div>

        <div class="p-8 m3-card-expressive hover:border-secondary/50 hover:shadow-secondary/10 flex flex-col items-center text-center group">
          <div class="m3-icon-box bg-surfaceVariant/30 mb-6 group-hover:scale-110">
            <div class="i-fa6-brands-github text-4xl group-hover:text-primary transition-colors" aria-hidden="true"></div>
          </div>
          <h3 class="text-2xl font-black text-text mb-2 group-hover:text-primary transition-colors">{{ t('install.github.title') }}</h3>
          <p class="text-textDim text-sm mb-8 flex-1 leading-relaxed opacity-80">
            {{ t('install.github.desc') }}
          </p>
          <a :href="GITHUB_URL"
             target="_blank"
             rel="noopener noreferrer"
             class="w-full py-4 rounded-2xl bg-surfaceVariant text-text font-bold flex items-center justify-center gap-2 hover:bg-surfaceVariant/80 transition-all active:scale-95 border border-border/20 decoration-none shadow-lg">
            <div class="i-fa6-solid-box-archive text-lg" aria-hidden="true"></div>
            {{ t('install.btn_github') }}
          </a>
        </div>
      </div>

      <div class="grid gap-12 md:grid-cols-3 relative">
        <div v-for="(step, index) in steps"
             :key="step.id"
             class="relative flex flex-col items-center text-center group z-10 transition-all duration-1000"
             :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
             :style="{ transitionDelay: `${(index + 2) * 200}ms` }">

          <div class="relative mb-6">
            <div class="absolute -inset-4 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-glow-pulse"></div>
            <div class="w-28 h-28 bg-surfaceVariant/10 rounded-full flex items-center justify-center overflow-hidden border border-border/10 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500 shadow-inner relative z-10">
              <Vue3Lottie
                  v-if="isVisible"
                  :animationLink="step.animLink"
                  :height="112"
                  :width="112"
                  :loop="step.id !== '3'"
                  :autoPlay="true"
                  :pauseOnHover="true"
              />
            </div>
          </div>

          <h4 class="font-black text-text mb-2 text-lg uppercase tracking-wider group-hover:text-primary transition-colors">
            <span class="text-primary mr-2 opacity-50">{{ step.id.toString() }}.</span>
            {{ t(`install.step${step.id}.title`) }}
          </h4>
          <p class="text-xs text-textDim leading-relaxed px-6 opacity-70 group-hover:opacity-100 transition-opacity">
            {{ t(`install.step${step.id}.desc`) }}
          </p>

          <div v-if="step.id !== '3'"
               class="hidden md:block absolute top-14 left-[calc(50%+4.5rem)] w-[calc(100%-9rem)] pointer-events-none overflow-hidden">
             <svg class="w-full h-1" viewBox="0 0 100 2" preserveAspectRatio="none">
               <line x1="0" y1="1" x2="100" y2="1" 
                     class="stroke-primary/30 stroke-2 animate-line-flow" 
                     stroke-dasharray="4 4" />
             </svg>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>