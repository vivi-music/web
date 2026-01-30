<script setup>
/**
 * @file HeroSection.vue
 * @description Hauptbereich der Landing Page mit 3D-Smartphone und dynamischen Release-Daten.
 */
import { ref, shallowRef, onMounted, defineAsyncComponent } from 'vue'
import { useTilt, useGithubRelease } from '../composables'
import { useI18n } from 'vue-i18n'

const ChangelogModal = defineAsyncComponent(() => import('./ChangelogModal.vue'))

defineOptions({
  name: 'HeroSection'
})

const { t } = useI18n()
// shallowRef für DOM-Elemente spart Overhead
const phoneRef = shallowRef(null)
const showChangelog = ref(false)

const {
  latestVersion,
  releaseName,
  releaseDescription,
  isLoading,
  fetchLatestRelease
} = useGithubRelease()

const { requestPermission, permissionGranted } = useTilt(phoneRef)

const isPlaying = ref(false)
const currentTrackIndex = ref(0)
const tracks = [
  { title: 'showcase.mockup.track_title', artist: 'showcase.mockup.track_artist' },
  { title: 'Vivi Vibes', artist: 'The Alpha Team' },
  { title: 'Material Motion', artist: 'Design System' }
]

const nextTrack = () => {
  currentTrackIndex.value = (currentTrackIndex.value + 1) % tracks.length
}

const prevTrack = () => {
  currentTrackIndex.value = (currentTrackIndex.value - 1 + tracks.length) % tracks.length
}

onMounted(() => {
  fetchLatestRelease()
})
</script>

<template>
  <header class="pt-32 pb-20 px-6 relative overflow-hidden">
    <div class="m3-container grid lg:grid-cols-2 gap-16 items-center">

      <div class="z-10">

        <div class="h-8 mb-8"> <div v-if="isLoading"
                                    class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider animate-pulse">
          <div class="i-fa6-solid-circle-notch animate-spin"></div>
          Checking Version...
        </div>

          <button
              v-else-if="latestVersion"
              @click="showChangelog = true"
              class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider hover:bg-primary/20 transition-colors cursor-pointer"
              :aria-label="t('hero.release_notes', { version: latestVersion })">
            <div class="i-fa6-solid-code-commit"></div>
            <span>{{ latestVersion }}</span>

            <template v-if="releaseName">
              <span class="opacity-30 mx-1">|</span>
              <span class="opacity-80">{{ releaseName }}</span>
            </template>
          </button>

          <div v-else
               class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <div class="i-fa6-solid-tag"></div>
            {{ t('hero.tagline') }}
          </div>
        </div>

        <h1 class="text-6xl md:text-7xl font-extrabold leading-tight mb-6 text-text tracking-tight">
          {{ t('hero.title') }} <br>
          <span class="m3-title-gradient">{{ t('hero.subtitle') }}</span>
        </h1>

        <p class="text-xl text-textDim mb-10 max-w-lg leading-relaxed font-medium">
          {{ t('hero.description') }}
        </p>

        <div class="flex flex-wrap gap-5">
          <a href="#install"
             class="m3-btn-primary !px-8 !py-4 !text-lg shadow-[0_4px_10px_rgba(var(--c-primary-rgb),0.3)] hover:shadow-[0_15px_30px_rgba(var(--c-primary-rgb),0.5)]">
            <div class="i-fa6-brands-android text-2xl group-hover:rotate-12 transition-transform"></div>
            <span>{{ t('hero.btn_download') }}</span>
          </a>

          <a href="#features"
             class="m3-btn-surface !px-8 !py-4 !text-lg">
            <div class="i-fa6-solid-layer-group text-xl group-hover:scale-110 transition-transform"></div>
            <span>{{ t('hero.btn_features') }}</span>
          </a>
        </div>

        <button
            v-if="permissionGranted === false"
            @click="requestPermission"
            class="mt-8 px-4 py-2 rounded-full bg-surfaceContainer border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider hover:bg-surfaceVariant transition-colors flex items-center gap-2 cursor-pointer"
        >
          <div class="i-fa6-solid-mobile-screen-button"></div>
          Enable 3D Motion
        </button>
      </div>

      <div class="perspective-1000 flex justify-center lg:justify-end relative mt-12 lg:mt-0">
        <div class="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full opacity-40 pointer-events-none"></div>

        <div class="md:animate-float">
          <div ref="phoneRef" class="pixel-frame m-auto transform-style-3d shadow-2xl will-change-transform">
            <div class="pixel-camera"></div>

            <!-- Glossy Glare Effect -->
            <div class="absolute inset-0 rounded-[4rem] overflow-hidden pointer-events-none z-50">
              <div class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div class="glare-effect"></div>
            </div>

            <div class="pixel-screen bg-surface flex flex-col border border-white/5">

              <div class="absolute inset-0 bg-gradient-to-br from-primary/30 via-tertiary/20 to-surfaceContainer opacity-60"></div>
              <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90"></div>

              <div class="relative z-10 flex flex-col h-full p-6 pt-12 transform-style-3d">
                <div class="flex justify-between text-white/90 mb-8 px-2">
                  <div class="i-fa6-solid-chevron-down cursor-pointer hover:text-primary transition-colors" role="button" aria-label="Minimize"></div>
                  <span class="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80">Playing from Chart</span>
                  <div class="i-fa6-solid-ellipsis-vertical cursor-pointer hover:text-primary transition-colors" role="button" aria-label="Options"></div>
                </div>

                <!-- Album Art with Parallax -->
                <div class="aspect-square rounded-[2rem] bg-surfaceContainer/50 backdrop-blur-md shadow-2xl mb-8 relative border border-white/10 flex items-center justify-center overflow-hidden group parallax-element" 
                     style="--parallax-depth: 60px">
                  <div class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div class="i-fa6-solid-music text-7xl text-white/10 group-hover:scale-110 transition-transform duration-500"
                       :class="{ 'animate-spin-slow': isPlaying }"></div>
                </div>

                <div class="mt-auto space-y-8 px-2 parallax-element" style="--parallax-depth: 40px">
                  <div class="transition-all duration-300 transform" :key="currentTrackIndex">
                    <h3 class="text-white text-2xl font-bold mb-1 tracking-tight">{{ tracks[currentTrackIndex].title.includes('.') ? t(tracks[currentTrackIndex].title) : tracks[currentTrackIndex].title }}</h3>
                    <p class="text-primary font-medium">{{ tracks[currentTrackIndex].artist.includes('.') ? t(tracks[currentTrackIndex].artist) : tracks[currentTrackIndex].artist }}</p>
                  </div>

                  <div class="w-full h-1.5 bg-white/10 rounded-full overflow-hidden cursor-pointer group">
                    <div class="h-full bg-primary relative transition-all duration-1000" :style="{ width: isPlaying ? '60%' : '30%' }">
                      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center text-3xl">
                    <div class="i-fa6-solid-shuffle text-white/30 text-lg hover:text-primary transition-colors cursor-pointer" role="button"></div>
                    <div class="flex items-center gap-8">
                      <div @click="prevTrack" class="i-fa6-solid-backward-step text-white/70 hover:text-white transition-colors cursor-pointer active:scale-90" role="button" aria-label="Previous"></div>
                      <div @click="isPlaying = !isPlaying" class="w-20 h-20 bg-primary rounded-[1.8rem] flex items-center justify-center text-onPrimary shadow-[0_8px_24px_rgba(var(--c-primary-rgb),0.4)] hover:scale-110 active:scale-95 transition-all cursor-pointer group/play" role="button" aria-label="Play/Pause">
                        <div :class="isPlaying ? 'i-fa6-solid-pause' : 'i-fa6-solid-play pl-1'" class="text-3xl group-hover/play:scale-110 transition-transform"></div>
                      </div>
                      <div @click="nextTrack" class="i-fa6-solid-forward-step text-white/70 hover:text-white transition-colors cursor-pointer active:scale-90" role="button" aria-label="Next"></div>
                    </div>
                    <div class="i-fa6-solid-repeat text-white/30 text-lg hover:text-primary transition-colors cursor-pointer" role="button"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <ChangelogModal
          :show="showChangelog"
          :version="latestVersion"
          :content="releaseDescription"
          @close="showChangelog = false"
      />
    </Teleport>
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

/* Glare Effect */
.glare-effect {
  --tilt-x: 0deg;
  --tilt-y: 0deg;
  position: absolute;
  top: -100%;
  left: -100%;
  width: 300%;
  height: 300%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: 60;
  transform: translate(calc(var(--tilt-y) * -2), calc(var(--tilt-x) * -2));
  transition: transform 0.1s ease-out;
}

/* Parallax Elements */
.parallax-element {
  transform: translateZ(var(--parallax-depth, 20px));
  transition: transform 0.1s ease-out;
}
</style>