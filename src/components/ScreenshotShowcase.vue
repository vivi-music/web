<script setup>
/**
 * ScreenshotShowcase.vue
 * Präsentiert die App-Oberfläche in stilisierten Smartphone-Frames.
 * Nutzt Intersection Observer für Performance und Einblend-Effekte.
 */
import { shallowRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { useIntersectionObserver } from '../composables'

defineOptions({
  name: 'ScreenshotShowcase'
})

const { t } = useI18n()
const sectionRef = shallowRef(null)
const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.05, once: true })
</script>

<template>
  <section id="screenshots" 
           ref="sectionRef"
           class="m3-section transition-all duration-1000"
           :class="isVisible ? 'opacity-100' : 'opacity-0 translate-y-20'">
    <!-- Background Decoration -->
    <div class="absolute top-1/2 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 blur-[60px] md:blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
    <div class="absolute top-1/2 right-0 w-64 h-64 md:w-96 md:h-96 bg-tertiary/5 blur-[60px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

    <div class="text-center mb-20 relative z-10">
      <h2 class="m3-title mb-4">{{ t('showcase.title') || 'Visual Excellence' }}</h2>
      <p class="text-textDim px-6 max-w-2xl mx-auto">{{ t('showcase.subtitle') || 'Material 3 Expressive Design in Action.' }}</p>
    </div>

    <div class="flex flex-wrap justify-center gap-12 px-6 max-w-[1400px] mx-auto relative z-10">

      <!-- Screen 1: Home / Discovery -->
      <div class="pixel-frame hover:-translate-y-4 transition-all duration-700 ease-out group will-change-transform">
        <div class="pixel-camera"></div>
        <div class="pixel-screen bg-surfaceContainer p-5 pt-12 flex flex-col overflow-hidden">
          <div class="flex justify-between items-center mb-8 px-2">
            <div class="space-y-1">
              <span class="block text-[10px] text-primary font-black uppercase tracking-widest">{{ t('showcase.mockup.welcome') }}</span>
              <span class="text-2xl font-black text-text">{{ t('showcase.mockup.discover') }}</span>
            </div>
            <div class="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <div class="i-fa6-solid-user text-primary"></div>
            </div>
          </div>
          
          <div class="flex gap-3 mb-8 overflow-hidden px-2">
            <div class="chip-active">{{ t('showcase.mockup.for_you') }}</div>
            <div class="chip-inactive">{{ t('showcase.mockup.relax') }}</div>
            <div class="chip-inactive">{{ t('showcase.mockup.energy') }}</div>
          </div>

          <div class="grid grid-cols-2 gap-4 px-2">
            <div class="aspect-[4/5] bg-surface rounded-[2rem] p-4 border border-border/50 shadow-sm group-hover:shadow-md transition-shadow">
              <div class="w-full h-3/4 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl mb-3 flex items-center justify-center">
                 <div class="i-fa6-solid-bolt text-primary/40 text-2xl"></div>
              </div>
              <div class="h-2 w-3/4 bg-textDim/20 rounded-full"></div>
            </div>
            <div class="aspect-[4/5] bg-surface rounded-[2rem] p-4 border border-border/50 shadow-sm group-hover:shadow-md transition-shadow">
              <div class="w-full h-3/4 bg-gradient-to-br from-tertiary/30 to-primary/30 rounded-2xl mb-3 flex items-center justify-center">
                 <div class="i-fa6-solid-heart text-tertiary/40 text-2xl"></div>
              </div>
              <div class="h-2 w-1/2 bg-textDim/20 rounded-full"></div>
            </div>
          </div>
          
          <div class="mt-8 px-2">
            <div class="h-16 w-full bg-surfaceVariant/30 rounded-[1.5rem] border border-border/30 p-3 flex items-center gap-3">
              <div class="w-10 h-10 bg-primary/20 rounded-xl"></div>
              <div class="space-y-1.5">
                <div class="h-2 w-24 bg-text/20 rounded-full"></div>
                <div class="h-1.5 w-16 bg-textDim/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Screen 2: Now Playing (The centerpiece) -->
      <div class="pixel-frame hover:-translate-y-4 transition-all duration-700 ease-out delay-75 scale-105 z-20 shadow-primary/20 will-change-transform">
        <div class="pixel-camera"></div>
        <div class="pixel-screen bg-surface p-0 flex flex-col relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5"></div>
          
          <div class="relative z-10 flex flex-col h-full p-8 pt-14">
            <div class="flex justify-between items-center mb-10 opacity-60">
              <div class="i-fa6-solid-chevron-down"></div>
              <span class="text-[9px] font-black uppercase tracking-[0.3em]">{{ t('showcase.mockup.now_playing') }}</span>
              <div class="i-fa6-solid-list-ul"></div>
            </div>

            <div class="flex justify-center mb-10 relative">
              <div class="absolute inset-0 bg-primary/20 blur-2xl rounded-full md:animate-glow-pulse"></div>
              <div class="w-48 h-48 rounded-[3rem] bg-gradient-to-tr from-primary via-tertiary to-secondary shadow-2xl shadow-primary/30 md:animate-float relative z-10 group cursor-pointer overflow-hidden">
                <div class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="w-full h-full flex items-center justify-center">
                  <div class="i-fa6-solid-music text-5xl text-white/20 md:animate-spin-slow"></div>
                </div>
              </div>
            </div>

            <div class="text-center mb-10">
              <h3 class="text-2xl font-black text-text mb-2 tracking-tight">{{ t('showcase.mockup.track_title') }}</h3>
              <p class="text-primary font-bold opacity-80">{{ t('showcase.mockup.track_artist') }}</p>
            </div>

            <div class="space-y-6 flex-grow flex flex-col justify-center mask-linear-large py-4">
              <p class="text-textDim text-sm blur-[0.3px] opacity-40">{{ t('showcase.mockup.lyrics.line1') }}</p>
              <p class="text-text font-black text-xl scale-110 tracking-tight">{{ t('showcase.mockup.lyrics.line2') }}</p>
              <p class="text-textDim text-sm blur-[0.3px] opacity-40">{{ t('showcase.mockup.lyrics.line3') }}</p>
            </div>

            <div class="mt-auto">
              <div class="w-full h-1.5 bg-surfaceVariant rounded-full mb-8 relative">
                <div class="absolute inset-y-0 left-0 w-1/3 bg-primary rounded-full">
                  <div class="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg border-2 border-surface"></div>
                </div>
              </div>
              
              <div class="flex justify-between items-center text-text px-2">
                <div class="i-fa6-solid-shuffle opacity-40 text-lg"></div>
                <div class="flex items-center gap-8">
                  <div class="i-fa6-solid-backward-step text-2xl"></div>
                  <div class="w-16 h-16 bg-primary text-onPrimary rounded-[2rem] flex items-center justify-center shadow-xl shadow-primary/20 active:scale-90 transition-transform">
                    <div class="i-fa6-solid-pause text-3xl"></div>
                  </div>
                  <div class="i-fa6-solid-forward-step text-2xl"></div>
                </div>
                <div class="i-fa6-solid-repeat opacity-40 text-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Screen 3: Library / Playlists -->
      <div class="pixel-frame hover:-translate-y-4 transition-all duration-700 ease-out delay-150">
        <div class="pixel-camera"></div>
        <div class="pixel-screen bg-surfaceContainer flex flex-col pt-12 px-6">
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center gap-4">
              <div class="i-fa6-solid-arrow-left text-text"></div>
              <span class="text-xl font-black text-text">{{ t('showcase.mockup.library') }}</span>
            </div>
            <div class="i-fa6-solid-magnifying-glass text-textDim"></div>
          </div>

          <div class="aspect-square w-full rounded-[2.5rem] bg-gradient-to-br from-accent/40 to-primary/20 mb-8 flex items-center justify-center border border-white/10 shadow-inner group">
            <div class="i-fa6-solid-wand-magic-sparkles text-accent text-5xl group-hover:rotate-12 transition-transform duration-500"></div>
          </div>

          <div class="space-y-5 overflow-hidden">
            <div v-for="i in 4" :key="i" class="flex items-center gap-4 group cursor-pointer">
              <div class="w-12 h-12 rounded-2xl bg-surfaceVariant border border-border group-hover:border-primary/50 transition-colors overflow-hidden">
                <div class="w-full h-full bg-gradient-to-tr from-surface to-surfaceVariant opacity-50"></div>
              </div>
              <div class="flex-1">
                <div class="h-2.5 w-28 bg-text/20 rounded-full mb-2 group-hover:bg-primary/20"></div>
                <div class="h-2 w-16 bg-textDim/10 rounded-full"></div>
              </div>
              <div class="i-fa6-solid-heart text-xs text-textDim/30 group-hover:text-tertiary"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Screen 4: Explore / Search -->
      <div class="pixel-frame hover:-translate-y-4 transition-all duration-700 ease-out delay-200">
        <div class="pixel-camera"></div>
        <div class="pixel-screen bg-surfaceContainer flex flex-col pt-12">
          <div class="px-6 mb-8">
            <h3 class="text-2xl font-black text-text mb-6">{{ t('showcase.mockup.search_title') }}</h3>
            <div class="w-full h-12 bg-surfaceVariant/30 rounded-2xl border border-border/20 flex items-center px-4 gap-3 text-textDim/60">
              <div class="i-fa6-solid-magnifying-glass text-sm"></div>
              <span class="text-xs">{{ t('showcase.mockup.search_placeholder') }}</span>
            </div>
          </div>

          <div class="px-6">
            <h4 class="text-[10px] font-black uppercase tracking-widest text-primary mb-4">{{ t('showcase.mockup.trending') }}</h4>
            <div class="grid grid-cols-2 gap-3">
              <div class="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-3 flex flex-col justify-end">
                <div class="h-2 w-12 bg-primary/40 rounded-full"></div>
              </div>
              <div class="aspect-video rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 p-3 flex flex-col justify-end">
                <div class="h-2 w-16 bg-secondary/40 rounded-full"></div>
              </div>
              <div class="aspect-video rounded-2xl bg-gradient-to-br from-tertiary/20 to-tertiary/5 border border-tertiary/20 p-3 flex flex-col justify-end">
                <div class="h-2 w-10 bg-tertiary/40 rounded-full"></div>
              </div>
              <div class="aspect-video rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 p-3 flex flex-col justify-end">
                <div class="h-2 w-14 bg-accent/40 rounded-full"></div>
              </div>
            </div>
          </div>

          <div class="mt-8 px-6 space-y-4">
            <div v-for="i in 3" :key="i" class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-surfaceVariant/20 border border-border/20"></div>
              <div class="flex-1 space-y-2">
                <div class="h-2 w-24 bg-text/10 rounded-full"></div>
                <div class="h-1.5 w-12 bg-textDim/5 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Screen 5: Audio Precision (Equalizer) -->
      <div class="pixel-frame hover:-translate-y-4 transition-all duration-700 ease-out delay-300">
        <div class="pixel-camera"></div>
        <div class="pixel-screen bg-surface flex flex-col pt-12 px-6">
          <div class="flex items-center gap-4 mb-10">
            <div class="i-fa6-solid-sliders text-primary"></div>
            <h3 class="text-xl font-black text-text tracking-tight">{{ t('showcase.mockup.equalizer_title') }}</h3>
          </div>

          <div class="flex-grow flex items-end justify-between gap-2 px-2 mb-12 h-40">
            <div class="w-2 bg-primary/20 rounded-t-full relative animate-eq-1" style="height: 40%">
               <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg"></div>
            </div>
            <div class="w-2 bg-primary/20 rounded-t-full relative animate-eq-2" style="height: 70%">
               <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg"></div>
            </div>
            <div class="w-2 bg-primary rounded-t-full relative animate-eq-3" style="height: 90%">
               <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg border-2 border-surface"></div>
            </div>
            <div class="w-2 bg-primary/20 rounded-t-full relative animate-eq-1" style="height: 60%">
               <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg"></div>
            </div>
            <div class="w-2 bg-primary/20 rounded-t-full relative animate-eq-2" style="height: 50%">
               <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg"></div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="p-5 rounded-[2rem] bg-surfaceVariant/10 border border-border/20 flex justify-between items-center">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                  <div class="i-fa6-solid-wave-square text-xs"></div>
                </div>
                <span class="text-xs font-bold text-textDim">{{ t('showcase.mockup.bass_boost') }}</span>
              </div>
              <div class="w-10 h-5 bg-secondary rounded-full relative">
                <div class="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>

            <div class="p-5 rounded-[2rem] bg-surfaceVariant/10 border border-border/20 flex justify-between items-center opacity-60">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center">
                  <div class="i-fa6-solid-bullseye text-xs"></div>
                </div>
                <span class="text-xs font-bold text-textDim">{{ t('showcase.mockup.surround') }}</span>
              </div>
              <div class="w-10 h-5 bg-surfaceVariant rounded-full relative">
                <div class="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Screen 6: Advanced Settings -->
      <div class="pixel-frame hover:-translate-y-4 transition-all duration-700 ease-out delay-500">
        <div class="pixel-camera"></div>
        <div class="pixel-screen bg-surfaceContainer flex flex-col pt-12 px-6">
          <h3 class="text-2xl font-black text-text mb-8">{{ t('showcase.mockup.settings_title') }}</h3>

          <div class="space-y-4">
            <div class="p-6 rounded-[2rem] bg-surface border border-border/30 flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <div class="i-fa6-solid-cloud-arrow-up"></div>
              </div>
              <div class="flex-1">
                <div class="h-2.5 w-24 bg-text/20 rounded-full mb-1.5"></div>
                <div class="text-[9px] font-bold text-primary">{{ t('showcase.mockup.backup_status') }}</div>
              </div>
            </div>

            <div class="p-6 rounded-[2rem] bg-surface border border-border/30 flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                <div class="i-fa6-solid-moon"></div>
              </div>
              <div class="flex-1">
                <div class="h-2.5 w-20 bg-text/20 rounded-full mb-1.5"></div>
                <div class="text-[9px] font-bold text-textDim/60">{{ t('showcase.mockup.timer_label') }}</div>
              </div>
            </div>

            <div v-for="i in 3" :key="i" class="p-6 rounded-[2rem] bg-surface/40 border border-border/10 flex items-center gap-4 opacity-40">
              <div class="w-12 h-12 rounded-2xl bg-surfaceVariant/20"></div>
              <div class="h-2 w-32 bg-textDim/20 rounded-full"></div>
            </div>
          </div>

          <div class="mt-auto pb-8 text-center">
            <div class="inline-block px-4 py-1.5 rounded-full bg-surfaceVariant/20 border border-border/10 text-[8px] font-mono text-textDim uppercase tracking-tighter">
              Vivi Music Alpha v5.0.3
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Helper Classes */
.chip-active {
  @apply bg-primary text-onPrimary px-5 py-2 rounded-2xl text-[10px] font-black shadow-lg shadow-primary/20;
}
.chip-inactive {
  @apply bg-surfaceVariant/50 text-textDim px-5 py-2 rounded-2xl text-[10px] font-bold border border-border/30;
}
.mask-linear-large {
  mask-image: linear-gradient(transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(transparent, black 15%, black 85%, transparent);
}
.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes eq {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.6); }
}
.animate-eq-1 { animation: eq 1.2s ease-in-out infinite; transform-origin: bottom; }
.animate-eq-2 { animation: eq 0.8s ease-in-out infinite; transform-origin: bottom; }
.animate-eq-3 { animation: eq 1.5s ease-in-out infinite; transform-origin: bottom; }
</style>