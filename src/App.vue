<script setup>
/**
 * Hauptkomponente der Anwendung.
 * Nutzt Async Components für verbesserte Performance (Code Splitting).
 */
import { defineAsyncComponent, ref, onMounted, onUnmounted } from 'vue'
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AppBackground from './components/AppBackground.vue'

// Below-the-fold Komponenten werden erst bei Bedarf geladen
const FeatureGrid = defineAsyncComponent(() => import('./components/FeatureGrid.vue'))
const ScreenshotShowcase = defineAsyncComponent(() => import('./components/ScreenshotShowcase.vue'))
const InstallSection = defineAsyncComponent(() => import('./components/InstallSection.vue'))
const FaqSection = defineAsyncComponent(() => import('./components/FaqSection.vue'))
const ContributeSection = defineAsyncComponent(() => import('./components/ContributeSection.vue'))
const AppFooter = defineAsyncComponent(() => import('./components/AppFooter.vue'))

const showScrollTop = ref(false)
const scrollProgress = ref(0)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 500
  
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = height > 0 ? (winScroll / height) * 100 : 0
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="flex flex-col min-h-screen font-sans text-text selection:bg-primary selection:text-onPrimary relative overflow-x-hidden">
    
    <div class="fixed top-0 left-0 h-1.5 bg-primary z-[100] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(var(--c-primary-rgb),0.5)]" 
         :style="{ width: scrollProgress + '%' }"></div>

    <AppBackground />
    <AppNavbar />

    <main class="flex-grow">
      <HeroSection />

      <FeatureGrid />

      <ScreenshotShowcase />

      <InstallSection />

      <FaqSection />

      <ContributeSection />
    </main>

    <AppFooter />

    <!-- Scroll to Top Button (M3 Fab style) -->
    <Transition name="fade">
      <button
          v-if="showScrollTop"
          @click="scrollToTop"
          class="fixed bottom-8 right-8 m3-icon-box !w-14 !h-14 bg-primary text-onPrimary shadow-2xl shadow-primary/40 z-[100] cursor-pointer group"
          aria-label="Scroll to top"
      >
        <div class="i-fa6-solid-arrow-up text-xl group-hover:-translate-y-1 transition-transform"></div>
      </button>
    </Transition>
    
  </div>
</template>

<style>
@import "./assets/css/base.css";

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.5) translateY(20px);
}
</style>
