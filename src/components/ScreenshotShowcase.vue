<script setup>
/**
 * ScreenshotShowcase.vue
 * Präsentiert die App-Oberfläche in stilisierten Smartphone-Frames.
 * Nutzt CSS-Grid für responsives Layout (1, 2, oder 4 Spalten).
 */
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="screenshots" class="py-24 overflow-hidden">
    <div class="text-center mb-16">
      <h2 class="section-title text-text">{{ t('showcase.title') || 'Visual Excellence' }}</h2>
      <p class="text-textDim px-6">{{ t('showcase.subtitle') || 'Material 3 Expressive Design in Action.' }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 px-6 max-w-[1200px] mx-auto justify-items-center">

      <div class="pixel-frame hover:-translate-y-4 transition-transform duration-500">
        <div class="pixel-camera"></div>
        <div class="pixel-screen bg-surfaceContainer p-4 pt-10 flex flex-col overflow-hidden">
          <div class="flex justify-between items-center mb-6 px-2">
            <span class="font-bold text-lg text-text">Good Morning</span>
            <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <div class="i-fa6-solid-user text-xs text-primary"></div>
            </div>
          </div>
          <div class="flex gap-2 mb-6 overflow-hidden px-2">
            <div class="chip-active">Relax</div>
            <div class="chip-inactive">Workout</div>
            <div class="chip-inactive">Commute</div>
          </div>
          <div class="grid grid-cols-2 gap-4 px-2">
            <div class="aspect-square bg-surface rounded-2xl p-3 border border-border">
              <div class="w-full h-2/3 bg-tertiary/20 rounded-xl mb-2"></div>
              <div class="h-1.5 w-2/3 bg-textDim/20 rounded-full"></div>
            </div>
            <div class="aspect-square bg-surface rounded-2xl p-3 border border-border">
              <div class="w-full h-2/3 bg-primary/20 rounded-xl mb-2"></div>
              <div class="h-1.5 w-1/2 bg-textDim/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="pixel-frame hover:-translate-y-4 transition-transform duration-500 delay-75">
        <div class="pixel-camera"></div>
        <div class="pixel-screen bg-surface p-0 flex flex-col relative">
          <div class="absolute inset-0 bg-primary/5"></div>
          <div class="relative z-10 flex flex-col h-full p-6 pt-12">
            <div class="flex justify-center mb-8">
              <div class="w-36 h-36 rounded-3xl bg-gradient-to-br from-primary via-tertiary to-primary shadow-2xl animate-pulse-slow"></div>
            </div>
            <div class="flex-1 space-y-4 text-center my-auto overflow-hidden mask-linear">
              <p class="text-textDim text-lg blur-[0.5px]">Is this the real life?</p>
              <p class="text-text font-bold text-2xl scale-110">Is this just fantasy?</p>
              <p class="text-textDim text-lg blur-[0.5px]">Caught in a landslide</p>
            </div>
            <div class="mt-4">
              <div class="w-full h-1 bg-surfaceVariant rounded-full mb-6">
                <div class="w-1/3 h-full bg-primary relative">
                  <div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-lg"></div>
                </div>
              </div>
              <div class="flex justify-between items-center text-2xl text-text px-4">
                <div class="i-fa6-solid-backward-step opacity-50"></div>
                <div class="w-16 h-16 bg-primary text-onPrimary rounded-2xl flex items-center justify-center shadow-lg">
                  <div class="i-fa6-solid-pause text-3xl"></div>
                </div>
                <div class="i-fa6-solid-forward-step opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pixel-frame hover:-translate-y-4 transition-transform duration-500 delay-150">
        <div class="pixel-camera"></div>
        <div class="pixel-screen bg-surfaceContainer flex flex-col pt-10 px-4">
          <div class="flex items-center gap-4 mb-6">
            <div class="i-fa6-solid-arrow-left text-text"></div>
            <span class="font-bold text-text">Favorites</span>
          </div>
          <div class="aspect-video w-full rounded-2xl bg-gradient-to-r from-secondary/30 to-primary/30 mb-6 flex items-center justify-center border border-white/5">
            <div class="i-fa6-solid-heart text-white/40 text-4xl"></div>
          </div>
          <div class="space-y-4 overflow-hidden">
            <div v-for="i in 5" :key="i" class="flex items-center gap-3 opacity-80">
              <div class="w-10 h-10 rounded-lg bg-surfaceVariant border border-border"></div>
              <div class="flex-1">
                <div class="h-2 w-24 bg-text/20 rounded"></div>
                <div class="h-1.5 w-16 bg-textDim/10 rounded mt-1"></div>
              </div>
              <div class="i-fa6-solid-ellipsis-vertical text-textDim text-xs"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="pixel-frame hover:-translate-y-4 transition-transform duration-500 delay-200">
        <div class="pixel-camera"></div>
        <div class="pixel-screen bg-surfaceContainer p-4 pt-10 flex flex-col">
          <div class="bg-surfaceVariant/50 p-3 rounded-full flex items-center gap-3 mb-6 border border-border">
            <div class="i-fa6-solid-magnifying-glass text-textDim ml-2 text-xs"></div>
            <span class="text-textDim text-sm">Search artists...</span>
          </div>
          <h4 class="font-bold text-text text-sm mb-4">Categories</h4>
          <div class="grid grid-cols-2 gap-3">
            <div class="category-card bg-pink-500/20 border-pink-500/30 text-pink-500">Pop</div>
            <div class="category-card bg-blue-500/20 border-blue-500/30 text-blue-500">Rock</div>
            <div class="category-card bg-purple-500/20 border-purple-500/30 text-purple-500">Jazz</div>
            <div class="category-card bg-orange-500/20 border-orange-500/30 text-orange-500">Indie</div>
          </div>
        </div>
      </div>

      <div class="pixel-frame hover:-translate-y-4 transition-transform duration-500 delay-300">
        <div class="pixel-camera"></div>
        <div class="pixel-screen bg-surface p-4 pt-10 flex flex-col">
          <div class="flex items-center gap-4 mb-8">
            <div class="i-fa6-solid-sliders text-text"></div>
            <span class="font-bold text-text">Audio FX</span>
          </div>
          <div class="space-y-8">
            <div v-for="level in [70, 40, 90, 60]" :key="level" class="flex flex-col gap-2 px-2">
              <div class="flex justify-between text-[10px] font-bold text-textDim uppercase">
                <span>{{ level }}Hz</span>
                <span>+2dB</span>
              </div>
              <div class="w-full h-8 bg-surfaceVariant rounded-xl relative overflow-hidden flex items-center px-1">
                <div class="h-6 rounded-lg bg-primary/40 border border-primary/20" :style="{ width: level + '%' }"></div>
              </div>
            </div>
            <div class="p-4 rounded-2xl bg-primary/10 border border-primary/20 flex justify-between items-center">
              <span class="text-xs font-bold text-primary">Bass Boost</span>
              <div class="w-8 h-4 bg-primary rounded-full relative"><div class="w-2.5 h-2.5 bg-onPrimary rounded-full absolute top-0.75 right-0.75"></div></div>
            </div>
          </div>
        </div>
      </div>

      <div class="pixel-frame hover:-translate-y-4 transition-transform duration-500 delay-500">
        <div class="pixel-camera"></div>
        <div class="pixel-screen bg-surface p-4 pt-10 flex flex-col">
          <div class="flex items-center gap-4 mb-8">
            <div class="i-fa6-solid-gear text-text"></div>
            <span class="font-bold text-text">System</span>
          </div>
          <div class="space-y-4">
            <div class="setting-item">
              <div class="i-fa6-solid-cloud-arrow-up text-primary"></div>
              <div class="text-xs font-bold">Cloud Backup</div>
            </div>
            <div class="setting-item">
              <div class="i-fa6-solid-palette text-tertiary"></div>
              <div class="text-xs font-bold">Dynamic Colors</div>
            </div>
            <div class="mt-8 border-t border-border pt-6">
              <div class="flex justify-between items-center opacity-80">
                <span class="text-text text-xs font-bold">Incognito Mode</span>
                <div class="w-8 h-4 bg-surfaceVariant rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.pixel-frame {
  width: 270px;
  height: 580px;
  border-radius: 3rem;
  background: #111;
  box-shadow:
      inset 0 0 0 2px #333,
      0 0 0 4px #000,
      0 30px 60px rgba(0,0,0,0.6);
  position: relative;
  padding: 8px;
  flex-shrink: 0;
}

.pixel-screen {
  width: 100%; height: 100%;
  border-radius: 2.4rem;
  overflow: hidden;
  position: relative;
  mask-image: radial-gradient(white, black);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}

.pixel-camera {
  position: absolute; top: 14px; left: 50%; transform: translateX(-50%);
  width: 8px; height: 8px; background: #000; border-radius: 50%; z-index: 50;
}

/* Helper Classes */
.chip-active {
  @apply bg-primary text-onPrimary px-4 py-1.5 rounded-xl text-[10px] font-bold shadow-md;
}
.chip-inactive {
  @apply bg-surfaceVariant text-textDim px-4 py-1.5 rounded-xl text-[10px] border border-border;
}
.category-card {
  @apply h-20 rounded-xl border flex items-end p-2 font-bold text-xs relative overflow-hidden;
}
.setting-item {
  @apply p-4 rounded-2xl bg-surfaceContainer border border-border flex items-center gap-4 hover:bg-surfaceVariant transition-colors cursor-pointer;
}

.mask-linear {
  mask-image: linear-gradient(transparent, black 20%, black 80%, transparent);
  -webkit-mask-image: linear-gradient(transparent, black 20%, black 80%, transparent);
}
.animate-pulse-slow {
  animation: pulse 4s infinite;
}
</style>