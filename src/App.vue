<script setup>
/**
 * Hauptkomponente der Anwendung.
 * Importiert alle Sektions-Komponenten und setzt das Grundlayout.
 */
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import FeatureGrid from './components/FeatureGrid.vue'
import ScreenshotShowcase from './components/ScreenshotShowcase.vue'
import InstallSection from './components/InstallSection.vue'
import ContributeSection from './components/ContributeSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen font-sans text-[#E6E1E5] selection:bg-primary selection:text-onPrimary">
    
    <AppNavbar />

    <main class="flex-grow">
      <HeroSection />

      <FeatureGrid />

      <ScreenshotShowcase />

      <InstallSection />

      <ContributeSection />
    </main>

    <AppFooter />
    
  </div>
</template>

<style src="./assets/css/base.css"></style>
