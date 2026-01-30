<script setup>
/**
 * Main App component.
 * This is the root layout that organizes all sections and handles global features like 
 * the scroll progress bar and the 'Scroll to Top' button.
 * 
 * We use Async Components (Lazy Loading) for sections that are not immediately visible 
 * to improve initial loading speed (Performance Optimization).
 */
import { defineAsyncComponent, ref, onMounted, onUnmounted } from 'vue'
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AppBackground from './components/AppBackground.vue'

// Below-the-fold components are loaded only when needed (Code Splitting).
// This keeps the initial JavaScript bundle small and makes the page load faster.
const FeatureGrid = defineAsyncComponent(() => import('./components/FeatureGrid.vue'))
const ScreenshotShowcase = defineAsyncComponent(() => import('./components/ScreenshotShowcase.vue'))
const InstallSection = defineAsyncComponent(() => import('./components/InstallSection.vue'))
const FaqSection = defineAsyncComponent(() => import('./components/FaqSection.vue'))
const ContributeSection = defineAsyncComponent(() => import('./components/ContributeSection.vue'))
const AppFooter = defineAsyncComponent(() => import('./components/AppFooter.vue'))

const showScrollTop = ref(false)
const scrollProgress = ref(0)
let isScrolling = false

const handleScroll = () => {
  if (isScrolling) return
  isScrolling = true
  
  requestAnimationFrame(() => {
    showScrollTop.value = window.scrollY > 500
    
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    scrollProgress.value = height > 0 ? (winScroll / height) * 100 : 0
    
    isScrolling = false
  })
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

    <!-- Scroll to Top Button (Material 3 FAB style) -->
    <!-- This button only appears when the user has scrolled down significantly -->
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
