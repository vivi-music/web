<script setup>
/**
 * @file InstallSection.vue
 * @description Sektion für Download-Optionen.
 * Nutzt das lokale IzzyOnDroid-Logo für maximale Stabilität.
 */
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

/** @constant {string} IZZY_URL - Link zum IzzyOnDroid Repository */
const IZZY_URL = 'https://apt.izzysoft.de/fdroid/index/apk/com.vivi.vivimusic'

/** @constant {string} GITHUB_URL - Link zu den GitHub Releases */
const GITHUB_URL = 'https://github.com/vivizzz007/vivi-music/releases'
</script>

<template>
  <section id="install" class="py-24 bg-surfaceContainer/30 relative">
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-16">
        <h2 class="section-title text-text">{{ t('install.title') }}</h2>
        <p class="text-textDim max-w-2xl mx-auto">{{ t('install.subtitle') }}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-stretch">

        <div class="group p-8 rounded-[2.5rem] bg-surfaceContainer border-2 border-primary/20 hover:border-primary transition-all duration-500 shadow-xl flex flex-col items-center text-center">

          <div class="mb-6 w-20 h-20 rounded-3xl bg-white p-3 flex items-center justify-center shadow-inner relative z-10 overflow-hidden">
            <img
                src="/assets/izzy.jpg"
                alt="IzzyOnDroid Logo"
                class="w-full h-full object-contain"
            />
          </div>

          <h3 class="text-2xl font-bold text-text mb-2">IzzyOnDroid</h3>
          <p class="text-textDim text-sm mb-8 flex-1">
            {{ t('install.izzy.desc') }}
          </p>

          <a :href="IZZY_URL"
             target="_blank"
             class="w-full py-4 rounded-2xl bg-primary text-onPrimary font-bold flex items-center justify-center gap-3 hover:shadow-[0_8px_20px_rgba(var(--c-primary-rgb),0.4)] transition-all active:scale-95 decoration-none cursor-pointer">
            <div class="i-fa6-solid-download text-lg"></div>
            <span>{{ t('install.btn_izzy') }}</span>
          </a>
        </div>

        <div class="group p-8 rounded-[2.5rem] bg-surfaceContainer/50 border border-border hover:border-tertiary/50 transition-all duration-500 flex flex-col items-center text-center">
          <div class="w-20 h-20 rounded-3xl bg-surfaceVariant flex items-center justify-center mb-6 group-hover:bg-tertiary/10 group-hover:text-tertiary transition-colors">
            <div class="i-fa6-brands-github text-4xl"></div>
          </div>

          <h3 class="text-2xl font-bold text-text mb-2">GitHub Releases</h3>
          <p class="text-textDim text-sm mb-8 flex-1">
            {{ t('install.github.desc') }}
          </p>

          <a :href="GITHUB_URL"
             target="_blank"
             class="w-full py-4 rounded-2xl bg-surfaceVariant text-text font-bold flex items-center justify-center gap-3 hover:bg-border transition-all active:scale-95 decoration-none cursor-pointer">
            <div class="i-fa6-solid-box-archive text-lg"></div>
            <span>{{ t('install.btn_github') }}</span>
          </a>
        </div>

      </div>

      <div class="mt-12 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surfaceVariant/50 border border-border text-[10px] font-bold text-textDim uppercase tracking-widest">
          <div class="i-fa6-solid-shield-halved text-primary"></div>
          {{ t('install.safety_note') }}
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Strukturierung der Titel-Klasse */
.section-title {
  @apply text-4xl md:text-5xl font-black tracking-tight mb-4;
}
</style>