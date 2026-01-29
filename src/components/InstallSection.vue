<script setup>
/**
 * @file InstallSection.vue
 * @description Sektion für Download-Optionen mit Pfad-Korrektur für Unterverzeichnisse (/web/).
 */
import { Vue3Lottie } from 'vue3-lottie'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

/**
 * URLs für die Download-Buttons.
 */
const IZZY_URL = 'https://apt.izzysoft.de/fdroid/index/apk/com.vivi.vivimusic'
const GITHUB_URL = 'https://github.com/vivizzz007/vivi-music/releases'

/**
 * Pfade zu den Lottie-Dateien.
 * Basierend auf deiner lokalen URL /web/lottie/ angepasst.
 */
const steps = [
  { id: '1', animPath: '/web/lottie/download.json' },
  { id: '2', animPath: '/web/lottie/settings.json' },
  { id: '3', animPath: '/web/lottie/success.json' }
]
</script>

<template>
  <section id="install" class="py-24 bg-[rgb(var(--c-surface-container-rgb))] border-y border-[rgb(var(--c-border-rgb),0.1)]">
    <div class="max-w-7xl mx-auto px-6">

      <div class="grid md:grid-cols-2 gap-8 mb-24">

        <div class="p-8 rounded-[2.5rem] bg-[rgb(var(--c-surface-rgb))] border border-[rgb(var(--c-border-rgb),0.2)] flex flex-col items-center text-center transition-all hover:border-[rgb(var(--c-primary-rgb),0.5)]">
          <div class="w-20 h-20 rounded-2xl bg-white p-3 mb-6 shadow-sm flex items-center justify-center">
            <img src="/assets/izzy.jpg" alt="IzzyOnDroid" class="w-full h-full object-contain" />
          </div>
          <h3 class="text-2xl font-black text-[rgb(var(--c-text-rgb))] mb-2">IzzyOnDroid</h3>
          <p class="text-[rgb(var(--c-text-dim-rgb))] text-sm mb-8 flex-1 leading-relaxed">
            {{ t('install.izzy.desc') }}
          </p>
          <a :href="IZZY_URL"
             target="_blank"
             class="w-full py-4 rounded-2xl bg-[rgb(var(--c-primary-rgb))] text-[rgb(var(--c-on-primary-rgb))] font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95">
            <div class="i-fa6-solid-download"></div>
            {{ t('install.btn_izzy') }}
          </a>
        </div>

        <div class="p-8 rounded-[2.5rem] bg-[rgb(var(--c-surface-rgb))] border border-[rgb(var(--c-border-rgb),0.2)] flex flex-col items-center text-center transition-all hover:border-[rgb(var(--c-primary-rgb),0.5)]">
          <div class="w-20 h-20 rounded-2xl bg-[rgb(var(--c-surface-variant-rgb),0.3)] flex items-center justify-center mb-6 text-[rgb(var(--c-text-rgb))]">
            <div class="i-fa6-brands-github text-4xl"></div>
          </div>
          <h3 class="text-2xl font-black text-[rgb(var(--c-text-rgb))] mb-2">GitHub Releases</h3>
          <p class="text-[rgb(var(--c-text-dim-rgb))] text-sm mb-8 flex-1 leading-relaxed">
            {{ t('install.github.desc') }}
          </p>
          <a :href="GITHUB_URL"
             target="_blank"
             class="w-full py-4 rounded-2xl bg-[rgb(var(--c-surface-variant-rgb))] text-[rgb(var(--c-text-rgb))] font-bold flex items-center justify-center gap-2 hover:bg-[rgb(var(--c-surface-variant-rgb),0.8)] transition-all active:scale-95 border border-[rgb(var(--c-border-rgb),0.2)]">
            <div class="i-fa6-solid-box-archive"></div>
            {{ t('install.btn_github') }}
          </a>
        </div>
      </div>

      <div class="grid gap-12 md:grid-cols-3 relative">
        <div v-for="step in steps"
             :key="step.id"
             class="relative flex flex-col items-center text-center group z-10">

          <div class="w-28 h-28 mb-4 group-hover:scale-110 transition-transform duration-500 bg-[rgb(var(--c-surface-variant-rgb),0.1)] rounded-full flex items-center justify-center">
            <Vue3Lottie
                :animationLink="step.animPath"
                :height="100"
                :width="100"
                :loop="step.id !== '3'"
                :autoPlay="true"
            />
          </div>

          <h4 class="font-black text-[rgb(var(--c-text-rgb))] mb-2 text-lg uppercase tracking-wider">
            <span class="text-[rgb(var(--c-primary-rgb))] mr-2">{{ step.id }}.</span>
            {{ t(`install.step${step.id}.title`) }}
          </h4>
          <p class="text-xs text-[rgb(var(--c-text-dim-rgb))] leading-relaxed px-6 opacity-80">
            {{ t(`install.step${step.id}.desc`) }}
          </p>

          <div v-if="step.id !== '3'"
               class="hidden md:block absolute top-14 left-[calc(50%+4rem)] w-[calc(100%-8rem)] border-t-2 border-dashed border-[rgb(var(--c-border-rgb),0.2)]">
          </div>
        </div>
      </div>

    </div>
  </section>
</template>