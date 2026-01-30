<script setup>
/**
 * @file InstallSection.vue
 * @description This section provides various installation methods for the app 
 * (GitHub, IzzyOnDroid) and includes animated SVG step-by-step instructions.
 */
import { useI18n } from 'vue-i18n'
import { shallowRef } from 'vue'
import { useIntersectionObserver } from '../composables'

defineOptions({
  name: 'InstallSection'
})

const { t } = useI18n()
const sectionRef = shallowRef(null)
const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, once: true })

const IZZY_URL = 'https://apt.izzysoft.de/fdroid/index/apk/com.vivi.vivimusic'
const GITHUB_URL = 'https://github.com/vivizzz007/vivi-music/releases'

const steps = [
  { id: '1', type: 'download', color: 'primary' },
  { id: '2', type: 'settings', color: 'secondary' },
  { id: '3', type: 'success', color: 'tertiary' }
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
            <img src="/assets/izzy.jpg" alt="IzzyOnDroid" width="56" height="56" loading="lazy" class="w-full h-full object-contain" />
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
            <div class="absolute -inset-4 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-glow-pulse"
                 :class="`bg-${step.color}/20`"></div>
            <div class="w-28 h-28 bg-surfaceVariant/10 rounded-[2rem] flex items-center justify-center overflow-hidden border border-border/10 group-hover:scale-110 transition-all duration-500 shadow-inner relative z-10"
                 :class="`group-hover:border-${step.color}/30`">
              
              <!-- Step 1: Download Animation (Bouncing Arrow) -->
              <div v-if="step.type === 'download' && isVisible" class="relative w-16 h-16 flex items-center justify-center">
                <div class="i-fa6-solid-arrow-down text-4xl text-primary animate-bounce-slow"></div>
                <div class="absolute bottom-0 w-8 h-1 bg-primary/30 rounded-full animate-pulse"></div>
              </div>

              <!-- Step 2: Settings Animation (Rotating Gear) -->
              <div v-if="step.type === 'settings' && isVisible" class="relative w-16 h-16 flex items-center justify-center">
                <div class="i-fa6-solid-gear text-4xl text-secondary animate-spin-slow"></div>
                <div class="absolute inset-0 bg-secondary/10 rounded-full animate-ping-slow"></div>
              </div>

              <!-- Step 3: Success Animation (Popping Checkmark) -->
              <div v-if="step.type === 'success' && isVisible" class="relative w-16 h-16 flex items-center justify-center">
                <div class="i-fa6-solid-check text-4xl text-tertiary animate-m3-pop"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-full h-full border-2 border-tertiary/30 rounded-full animate-m3-burst"></div>
                </div>
              </div>

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

<style scoped>
@keyframes bounce-slow {
  0%, 100% { transform: translateY(-5px) scaleY(1.1); }
  50% { transform: translateY(10px) scaleY(0.9); }
}
.animate-bounce-slow {
  animation: bounce-slow 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
}

.animate-spin-slow {
  animation: spin 4s linear infinite;
}

@keyframes ping-slow {
  0% { transform: scale(0.5); opacity: 0.8; }
  100% { transform: scale(1.5); opacity: 0; }
}
.animate-ping-slow {
  animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes m3-pop {
  0% { transform: scale(0) rotate(-45deg); opacity: 0; }
  70% { transform: scale(1.2) rotate(10deg); }
  100% { transform: scale(1) rotate(0); opacity: 1; }
}
.animate-m3-pop {
  animation: m3-pop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes m3-burst {
  0% { transform: scale(0.5); opacity: 1; border-width: 8px; }
  100% { transform: scale(2); opacity: 0; border-width: 1px; }
}
.animate-m3-burst {
  animation: m3-burst 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 0.2s;
}
</style>