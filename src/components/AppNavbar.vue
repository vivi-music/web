<script setup>
/**
 * AppNavbar Komponente.
 * Steuert die Navigation, das Theme und die Sprachwahl.
 * Implementiert "Active State" Highlighting für Menüpunkte.
 */
import { ref, shallowRef, onMounted } from 'vue'
import { useTheme, useDynamicColor } from '../composables'
import { useI18n } from 'vue-i18n'

// Wir nutzen defineOptions für eine saubere Komponenten-Identifikation (Vue 3.3+)
defineOptions({
  name: 'AppNavbar'
})

const { currentTheme, thumbPosition, setTheme } = useTheme()
const { currentHue, colorSeeds, applyColor } = useDynamicColor()
const { t, locale } = useI18n()

// shallowRef reicht für einfache Strings völlig aus und spart Performance
const activeLink = shallowRef('#features')
const isLangMenuOpen = ref(false)
const isHueMenuOpen = ref(false)
const isMobileMenuOpen = ref(false)

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'ml', label: 'മലയാളം', flag: '🇮🇳' }
]

/**
 * Setzt den aktiven Menüpunkt.
 * @param {string} hash - Der Anker-Link (z.B. '#features')
 */
const setActive = (hash) => {
  activeLink.value = hash
}

/**
 * Wechselt die Sprache und speichert sie.
 */
const changeLang = (code) => {
  locale.value = code
  localStorage.setItem('vivi-locale', code)
  isLangMenuOpen.value = false
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
    <div class="m3-container h-24 flex justify-between items-center px-0">

      <a href="#" class="flex items-center gap-4 group select-none decoration-none" @click="setActive('')">
        <div class="relative">
          <div class="absolute -inset-2 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-glow-pulse"></div>
          <img
              src="/assets/LogoSmall.png"
              alt=""
              aria-hidden="true"
              class="w-10 h-10 object-contain group-hover:rotate-12 transition-transform duration-500 ease-out relative z-10"
          />
        </div>
        <span class="font-black text-xl tracking-tight text-text group-hover:text-primary transition-colors">Vivi Music</span>
      </a>

      <!-- Mobile Menu Button -->
      <button @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="md:hidden m3-icon-box-sm bg-surfaceContainer border border-border/50 text-text active:scale-90 transition-transform z-[60]"
              aria-label="Toggle Menu">
        <div :class="isMobileMenuOpen ? 'i-fa6-solid-xmark' : 'i-fa6-solid-bars-staggered'" class="text-xl"></div>
      </button>

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

        <!-- Mood Selector (Dynamic Color) -->
        <div class="relative hidden sm:block">
          <button @click="isHueMenuOpen = !isHueMenuOpen; isLangMenuOpen = false"
                  class="m3-icon-box-sm !w-10 h-10 bg-surfaceContainer border border-primary/20 text-primary hover:bg-surfaceVariant group cursor-pointer decoration-none"
                  aria-label="Change Mood">
            <div class="i-fa6-solid-palette text-base group-hover:rotate-12 transition-transform"></div>
          </button>

          <Transition name="fade">
            <div v-if="isHueMenuOpen" 
                 class="absolute top-14 right-0 min-w-[150px] bg-surfaceContainer border border-border/50 rounded-2xl shadow-2xl p-2 z-50 overflow-hidden backdrop-blur-3xl">
              <button v-for="(colors, hue) in colorSeeds" 
                      :key="hue"
                      @click="applyColor(hue); isHueMenuOpen = false"
                      class="w-full p-3 flex items-center gap-3 hover:bg-primary/10 transition-all rounded-xl cursor-pointer border-none bg-transparent active:scale-95"
                      :class="currentHue === hue ? 'text-primary' : 'text-text'">
                <div class="w-4 h-4 rounded-full" :style="{ backgroundColor: `rgb(${currentTheme === 'light' ? colors.light.primary : colors.dark.primary})` }"></div>
                <span class="text-xs font-black uppercase tracking-wider capitalize">{{ hue }}</span>
                <div v-if="currentHue === hue" class="i-fa6-solid-check text-[10px] ml-auto"></div>
              </button>
            </div>
          </Transition>

          <div v-if="isHueMenuOpen" class="fixed inset-0 z-40" @click="isHueMenuOpen = false"></div>
        </div>

        <!-- Language Selector -->
        <div class="relative">
          <button @click="isLangMenuOpen = !isLangMenuOpen"
                  class="m3-icon-box-sm !w-auto h-10 px-4 bg-surfaceContainer border border-primary/20 text-primary hover:bg-surfaceVariant group cursor-pointer decoration-none relative z-50"
                  :aria-label="t('nav.language')">
            <div class="i-fa6-solid-earth-americas text-base group-hover:scale-110 transition-transform"></div>
            <span class="text-xs font-bold uppercase tracking-wide ml-2">{{ locale }}</span>
          </button>

          <!-- Dropdown Menu (M3 Expressive) -->
          <Transition name="fade">
            <div v-if="isLangMenuOpen" 
                 class="absolute top-14 right-0 min-w-[180px] bg-surfaceContainer border border-border/50 rounded-2xl shadow-2xl py-3 z-50 overflow-hidden backdrop-blur-3xl">
              <button v-for="lang in languages" 
                      :key="lang.code"
                      @click="changeLang(lang.code)"
                      class="w-full px-5 py-2.5 flex items-center gap-3 hover:bg-primary/10 transition-all text-left cursor-pointer border-none bg-transparent active:scale-95"
                      :class="locale === lang.code ? 'text-primary' : 'text-text'">
                <span class="text-lg grayscale-[0.2] group-hover:grayscale-0">{{ lang.flag }}</span>
                <span class="text-xs font-black uppercase tracking-wider">{{ lang.label }}</span>
                <div v-if="locale === lang.code" class="i-fa6-solid-check text-[10px] ml-auto"></div>
              </button>
            </div>
          </Transition>

          <!-- Close Overlay -->
          <div v-if="isLangMenuOpen" 
               class="fixed inset-0 z-40" 
               @click="isLangMenuOpen = false"></div>
        </div>

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

    <!-- Mobile Menu Drawer (M3 Expressive) -->
    <Transition name="drawer">
      <div v-if="isMobileMenuOpen" 
           class="fixed inset-0 z-50 md:hidden flex justify-end">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="isMobileMenuOpen = false"></div>
        
        <!-- Drawer Panel -->
        <div class="relative w-80 h-full bg-surface border-l border-border/50 shadow-2xl p-8 flex flex-col gap-8 transition-all duration-500 ease-out translate-x-0">
          <div class="flex items-center gap-4 mb-4">
            <img src="/assets/LogoSmall.png" class="w-10 h-10 object-contain" alt="" />
            <span class="font-black text-xl tracking-tight text-text">Vivi Music</span>
          </div>

          <div class="flex flex-col gap-3">
            <a v-for="link in [
              { id: '#features', icon: 'i-fa6-solid-layer-group', label: t('nav.features') },
              { id: '#screenshots', icon: 'i-fa6-solid-images', label: t('nav.screenshots') },
              { id: '#install', icon: 'i-fa6-brands-android', label: t('nav.install') },
              { id: '#contribute', icon: 'i-fa6-solid-code-branch', label: t('nav.contribute') }
            ]" 
               :key="link.id"
               :href="link.id"
               @click="setActive(link.id); isMobileMenuOpen = false"
               class="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 decoration-none"
               :class="activeLink === link.id ? 'bg-primary/10 text-primary border border-primary/20' : 'text-textDim hover:bg-surfaceVariant/50'">
              <div :class="link.icon" class="text-xl"></div>
              <span class="font-bold">{{ link.label }}</span>
            </a>
          </div>

          <div class="mt-auto space-y-6">
            <div class="h-px bg-border/20 w-full"></div>
            <div class="flex justify-between items-center px-2">
              <span class="text-xs font-black uppercase tracking-widest text-textDim">{{ t('nav.language') }}</span>
              <button @click="isLangMenuOpen = !isLangMenuOpen" class="flex items-center gap-2 text-primary font-bold">
                 {{ languages.find(l => l.code === locale)?.flag }} {{ locale.toUpperCase() }}
              </button>
            </div>
            <a href="https://github.com/vivi-music" target="_blank" class="m3-btn-surface w-full !rounded-2xl">
              <div class="i-fa6-brands-github"></div>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from > div:last-child,
.drawer-leave-to > div:last-child {
  transform: translateX(100%);
}
</style>