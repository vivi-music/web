<script setup>
import { shallowRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { useIntersectionObserver } from '../composables'

defineOptions({
  name: 'FeatureGrid'
})

const { t } = useI18n()
const sectionRef = shallowRef(null)
const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, once: true })

const techFeatures = [
  { id: 'innertube', icon: 'i-fa6-brands-youtube', color: 'bg-red-500/10 text-red-400', border: 'hover:border-red-500/50', shadow: 'hover:shadow-red-500/10' },
  { id: 'lyrics', icon: 'i-fa6-solid-microphone-lines', color: 'bg-secondary/10 text-secondary', border: 'hover:border-secondary/50', shadow: 'hover:shadow-secondary/10' },
  { id: 'rpc', icon: 'i-fa6-brands-discord', color: 'bg-tertiary/10 text-tertiary', border: 'hover:border-tertiary/50', shadow: 'hover:shadow-tertiary/10' },
  { id: 'playlists', icon: 'i-fa6-solid-wand-magic-sparkles', color: 'bg-accent/10 text-accent', border: 'hover:border-accent/50', shadow: 'hover:shadow-accent/10' },
  { id: 'backup', icon: 'i-fa6-solid-cloud-arrow-up', color: 'bg-primary/10 text-primary', border: 'hover:border-primary/50', shadow: 'hover:shadow-primary/10' },
  { id: 'timer', icon: 'i-fa6-solid-moon', color: 'bg-secondary/10 text-secondary', border: 'hover:border-secondary/50', shadow: 'hover:shadow-secondary/10' },
  { id: 'equalizer', icon: 'i-fa6-solid-sliders', color: 'bg-tertiary/10 text-tertiary', border: 'hover:border-tertiary/50', shadow: 'hover:shadow-tertiary/10' },
  { id: 'material', icon: 'i-fa6-solid-palette', color: 'bg-accent/10 text-accent', border: 'hover:border-accent/50', shadow: 'hover:shadow-accent/10' },
  { id: 'cache', icon: 'i-fa6-solid-bolt', color: 'bg-primary/10 text-primary', border: 'hover:border-primary/50', shadow: 'hover:shadow-primary/10' },
  { id: 'privacy', icon: 'i-fa6-solid-shield-halved', color: 'bg-secondary/10 text-secondary', border: 'hover:border-secondary/50', shadow: 'hover:shadow-secondary/10' }
]
</script>

<template>
  <section id="features" 
           ref="sectionRef"
           class="m3-section bg-surfaceContainer/30 border-y border-border/10 relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/5 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

    <div class="m3-container">
      <div class="grid lg:grid-cols-3 gap-12">

        <div class="lg:col-span-1 space-y-6 transition-all duration-1000"
             :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'">
          <div class="space-y-2">
            <h2 class="m3-title">
              {{ t('features.title_part1') }} <br>
              <span class="m3-title-gradient">{{ t('features.title_part2') }}</span>
            </h2>
            <p class="text-textDim text-lg leading-relaxed opacity-80 pt-4">
              {{ t('features.description') }}
            </p>
          </div>

          <div class="p-8 m3-card bg-surface/50 border-border/30 shadow-2xl shadow-black/10">
            <h4 class="font-black mb-6 flex items-center gap-3 text-text uppercase tracking-widest text-xs opacity-60">
              <div class="i-fa6-solid-server text-accent text-lg"></div> {{ t('features.architecture') }}
            </h4>
            <ul class="space-y-4 text-sm text-textDim font-mono">
              <li v-for="(item, idx) in [
                { text: 'MVVM Pattern (Jetpack Compose)', color: 'text-primary' },
                { text: 'Material 3 Expressive UI', color: 'text-secondary' },
                { text: 'Room Database (MusicDatabase)', color: 'text-tertiary' },
                { text: 'Exoplayer / Media3 Backend', color: 'text-accent' }
              ]" :key="idx" class="flex items-start gap-3 group">
                <span :class="item.color" class="font-black group-hover:translate-x-1 transition-transform">›</span>
                <span class="group-hover:text-text transition-colors">{{ item.text }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="lg:col-span-2 grid md:grid-cols-2 gap-6">
          <div v-for="(feat, index) in techFeatures" 
               :key="feat.id"
               class="group m3-card-expressive p-8"
               :class="[
                 feat.border,
                 feat.shadow,
                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
               ]"
               :style="{ transitionDelay: `${index * 100}ms` }">
            
            <div :class="feat.color" 
                 class="m3-icon-box mb-6 group-hover:rotate-6">
              <div :class="feat.icon" class="text-3xl"></div>
            </div>
            
            <h3 class="text-2xl font-black mb-3 text-text tracking-tight group-hover:text-primary transition-colors">
              {{ t(`features.${feat.id}.title`) }}
            </h3>
            <p class="text-sm text-textDim leading-relaxed opacity-80 line-clamp-3">
              {{ t(`features.${feat.id}.desc`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>