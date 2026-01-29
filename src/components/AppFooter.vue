<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGithubRelease } from '../composables/useGithubRelease'
import ChangelogModal from './ChangelogModal.vue'

const { t } = useI18n()

// GitHub Daten holen
const { latestVersion, releaseDescription, fetchLatestRelease } = useGithubRelease()

// Modal State
const showChangelog = ref(false)

onMounted(() => {
  // Version laden (Fallback 'v5.0.3' falls API offline)
  fetchLatestRelease('v5.0.3')
})
</script>

<template>
  <footer class="bg-surface py-16 border-t border-border/50 relative overflow-hidden">
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-primary/5 blur-[80px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">

      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-2xl bg-surfaceContainer flex items-center justify-center border border-white/10 shadow-lg group">
          <img
              src="/assets/LogoSmall.png"
              alt="Vivi Music Logo"
              class="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div class="flex flex-col items-start">
          <span class="font-bold text-xl text-text leading-tight">Vivi Music</span>
          <span class="text-xs text-textDim font-medium tracking-wide">Open Source Audio</span>

          <button
              v-if="latestVersion"
              @click="showChangelog = true"
              class="mt-2 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-surfaceContainer border border-border text-[10px] font-mono text-textDim hover:text-primary hover:border-primary/50 transition-all cursor-pointer"
              :aria-label="'Open Changelog ' + latestVersion"
          >
            <div class="i-fa6-solid-code-branch text-[10px]"></div>
            {{ latestVersion }}
          </button>
        </div>
      </div>

      <div class="flex gap-4">
        <a href="SOON"
           class="w-12 h-12 rounded-full bg-surfaceContainer border border-border flex items-center justify-center text-textDim transition-all duration-300 hover:bg-[#5865F2] hover:border-[#5865F2] hover:text-white hover:-translate-y-1 hover:shadow-xl decoration-none"
           :aria-label="t('footer.social.discord')">
          <div class="i-fa6-brands-discord text-xl"></div>
        </a>

        <a href="https://t.me/+8rh2S_eSL302MDA1"
           class="w-12 h-12 rounded-full bg-surfaceContainer border border-border flex items-center justify-center text-textDim transition-all duration-300 hover:bg-[#24A1DE] hover:border-[#24A1DE] hover:text-white hover:-translate-y-1 hover:shadow-xl decoration-none"
           :aria-label="t('footer.social.telegram')">
          <div class="i-fa6-brands-telegram text-xl"></div>
        </a>

        <a href="https://github.com/vivi-music"
           class="w-12 h-12 rounded-full bg-surfaceContainer border border-border flex items-center justify-center text-textDim transition-all duration-300 hover:bg-text hover:border-text hover:text-surface hover:-translate-y-1 hover:shadow-xl decoration-none"
           :aria-label="t('footer.social.github')">
          <div class="i-fa6-brands-github text-xl"></div>
        </a>
      </div>

      <div class="text-center md:text-right">
        <p class="text-sm text-textDim font-medium">
          &copy; 2026 Vivi Music.
        </p>
        <p class="text-xs text-textDim/60 mt-1 mb-3">
          {{ t('footer.license') }} • {{ t('footer.based_on') }}
        </p>

        <div class="text-[10px] text-textDim/80 font-medium flex items-center justify-center md:justify-end gap-1.5">
          <span>Created by</span>
          <a href="https://github.com/T-Boyke" target="_blank" class="text-primary hover:underline hover:text-primary/80 transition-colors font-bold decoration-none">
            T-Boyke
          </a>
          <span>with Love</span>
          <div class="i-fa6-solid-heart text-red-500 text-[10px] animate-heartbeat"></div>
          <span>and Coffee</span>
          <div class="i-fa6-solid-mug-hot text-amber-500 text-[10px] animate-wiggle"></div>
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
  </footer>
</template>

<style scoped>
/* Herzschlag Animation */
@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.25); }
}
.animate-heartbeat {
  animation: heartbeat 1.5s ease-in-out infinite;
}

/* Wackel Animation für den Kaffee */
@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-8deg); }
  75% { transform: rotate(8deg); }
}
.animate-wiggle {
  animation: wiggle 2s ease-in-out infinite;
  transform-origin: bottom center; /* Wackelt vom Boden aus */
}
</style>