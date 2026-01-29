<script setup>
/**
 * AppNavbar Komponente.
 * Steuert die Navigation, das Theme und die Sprachwahl.
 * Implementiert "Active State" Highlighting für Menüpunkte.
 */
import { ref, onMounted } from 'vue'
import { useTheme } from '../composables/useTheme'
import { useI18n } from 'vue-i18n'

const { currentTheme, thumbPosition, setTheme } = useTheme()
const { t, locale } = useI18n()

// Speichert den aktuell aktiven Link (Hash)
const activeLink = ref('#features')

/**
 * Setzt den aktiven Menüpunkt.
 * @param {string} hash - Der Anker-Link (z.B. '#features')
 */
const setActive = (hash) => {
  activeLink.value = hash
}

/**
 * Schaltet zwischen DE und EN um.
 */
const toggleLang = () => {
  locale.value = locale.value === 'en' ? 'de' : 'en'
}

/**
 * Beim Laden der Seite prüfen, ob ein Hash in der URL steht.
 */
onMounted(() => {
  if (window.location.hash) {
    activeLink.value = window.location.hash
  }
})
</script>

<template>
  <nav class="fixed top-0 w-full z-50 backdrop-blur-2xl bg-surface/80 border-b border-border transition-all duration-500">
    <div class="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">

      <a href="#" class="flex items-center gap-4 group select-none decoration-none" @click="setActive('')">
        <img
            src="/assets/LogoSmall.png"
            alt=""
            aria-hidden="true"
            class="w-10 h-10 object-contain group-hover:rotate-12 transition-transform duration-500 ease-out"
        />
        <span class="font-bold text-xl tracking-tight text-text group-hover:text-primary transition-colors">Vivi Music</span>
      </a>

      <div class="hidden md:flex items-center gap-2 p-1 bg-surfaceContainer/50 rounded-full border border-border/50 backdrop-blur-md">

        <a href="#features"
           @click="setActive('#features')"
           class="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 decoration-none"
           :class="activeLink === '#features'
             ? 'bg-primary text-onPrimary shadow-md'
             : 'text-textDim hover:text-text hover:bg-surfaceVariant/50'">
          <div class="i-fa6-solid-layer-group text-sm"></div>
          {{ t('nav.features') }}
        </a>

        <a href="#screenshots"
           @click="setActive('#screenshots')"
           class="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 decoration-none"
           :class="activeLink === '#screenshots'
             ? 'bg-primary text-onPrimary shadow-md'
             : 'text-textDim hover:text-text hover:bg-surfaceVariant/50'">
          <div class="i-fa6-solid-images text-sm"></div>
          {{ t('nav.screenshots') }}
        </a>

        <a href="#install"
           @click="setActive('#install')"
           class="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 decoration-none"
           :class="activeLink === '#install'
             ? 'bg-primary text-onPrimary shadow-md'
             : 'text-textDim hover:text-text hover:bg-surfaceVariant/50'">
          <div class="i-fa6-brands-android text-sm"></div>
          {{ t('nav.install') }}
        </a>

        <a href="#contribute"
           @click="setActive('#contribute')"
           class="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 decoration-none"
           :class="activeLink === '#contribute'
             ? 'bg-primary text-onPrimary shadow-md'
             : 'text-textDim hover:text-text hover:bg-surfaceVariant/50'">
          <div class="i-fa6-solid-code-branch text-sm"></div>
          {{ t('nav.contribute') }}
        </a>
      </div>

      <div class="flex items-center gap-3">

        <button @click="toggleLang"
                class="h-10 px-4 rounded-full bg-surfaceContainer border border-primary/20 text-primary hover:bg-surfaceVariant transition-all flex items-center gap-2 group active:scale-95 cursor-pointer decoration-none"
                :aria-label="t('nav.language')">
          <div class="i-fa6-solid-earth-americas text-base group-hover:scale-110 transition-transform"></div>
          <span class="text-xs font-bold uppercase tracking-wide">{{ locale }}</span>
        </button>

        <div class="bg-surfaceContainer rounded-full relative w-[104px] h-[40px] flex items-center justify-between px-1 border border-border">
          <div class="absolute top-[4px] left-[4px] w-[32px] h-[32px] bg-primary rounded-full transition-transform duration-300 z-10 shadow-[0_2px_8px_rgba(var(--c-primary-rgb),0.3)]"
               :style="{ transform: `translateX(${thumbPosition}px)` }"></div>

          <button @click="setTheme('light', 0)"
                  class="flex-1 h-full flex items-center justify-center z-20 cursor-pointer transition-colors duration-300 bg-transparent border-none p-0 outline-none"
                  :class="currentTheme === 'light' ? 'text-onPrimary' : 'text-text/60 hover:text-text'"
                  :aria-label="t('nav.theme.light')">
            <div class="i-fa6-solid-sun text-sm transition-transform active:scale-90"></div>
          </button>

          <button @click="setTheme('system', 32)"
                  class="flex-1 h-full flex items-center justify-center z-20 cursor-pointer transition-colors duration-300 bg-transparent border-none p-0 outline-none"
                  :class="currentTheme === 'system' ? 'text-onPrimary' : 'text-text/60 hover:text-text'"
                  :aria-label="t('nav.theme.system')">
            <div class="i-fa6-solid-circle-half-stroke text-sm transition-transform active:scale-90"></div>
          </button>

          <button @click="setTheme('dark', 64)"
                  class="flex-1 h-full flex items-center justify-center z-20 cursor-pointer transition-colors duration-300 bg-transparent border-none p-0 outline-none"
                  :class="currentTheme === 'dark' ? 'text-onPrimary' : 'text-text/60 hover:text-text'"
                  :aria-label="t('nav.theme.dark')">
            <div class="i-fa6-solid-moon text-sm transition-transform active:scale-90"></div>
          </button>
        </div>

        <a href="https://github.com/vivimusic-app-team/web" target="_blank"
           class="w-10 h-10 flex items-center justify-center rounded-full text-text/60 hover:text-text hover:bg-surfaceVariant transition-all active:scale-95 decoration-none"
           :aria-label="t('nav.theme.github')">
          <div class="i-fa6-brands-github text-xl"></div>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Keine lokalen Styles benötigt, alles über Utility Classes */
</style>