<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <footer class="bg-surface py-12 border-t border-border">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded bg-surfaceContainer flex items-center justify-center border border-border">
          <div class="i-fa6-solid-music text-sm text-text"></div>
        </div>
        <span class="font-bold text-text">Vivi Music</span>
      </div>
      
      <div class="flex gap-6">
        <a href="SOON" class="w-10 h-10 rounded-full bg-text/5 flex items-center justify-center hover:bg-[#5865F2] hover:text-white transition-colors text-textDim">
          <div class="i-fa6-brands-discord"></div>
        </a>
        <a href="https://t.me/+8rh2S_eSL302MDA1" class="w-10 h-10 rounded-full bg-text/5 flex items-center justify-center hover:bg-[#0088cc] hover:text-white transition-colors text-textDim">
          <div class="i-fa6-brands-telegram"></div>
        </a>
        <a href="https://github.com/vivi-music" class="w-10 h-10 rounded-full bg-text/5 flex items-center justify-center hover:bg-text hover:text-surface transition-colors text-textDim">
          <div class="i-fa6-brands-github"></div>
        </a>
      </div>

      <p class="text-xs text-textDim text-center md:text-right">
        &copy; 2026 Vivi Music. {{ t('footer.license') }}<br>
        {{ t('footer.based_on') }}
      </p>
    </div>
  </footer>
</template>
