<script setup>
/**
 * @file QrCodeModal.vue
 * @description A modal dialog that displays a QR code for easy mobile installation.
 * Uses an external API to generate the QR code based on the provided URL.
 */
import { useI18n } from 'vue-i18n'

defineProps({
  show: Boolean,
  url: {
    type: String,
    default: 'https://github.com/vivizzz007/vivi-music/releases/latest'
  }
})

defineEmits(['close'])

const { t } = useI18n()
</script>

<template>
  <Transition name="m3-modal">
    <div v-if="show" class="fixed inset-0 z-[200] flex items-center justify-center p-6">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="$emit('close')"></div>
      
      <!-- Modal Content -->
      <div class="relative bg-surfaceContainer border border-border/50 w-full max-w-sm rounded-[2.5rem] shadow-2xl p-8 flex flex-col items-center text-center overflow-hidden">
        <div class="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary via-tertiary to-secondary"></div>
        
        <button @click="$emit('close')" 
                class="absolute top-6 right-6 w-10 h-10 rounded-full bg-surfaceVariant/30 flex items-center justify-center text-text hover:bg-surfaceVariant transition-colors cursor-pointer">
          <div class="i-fa6-solid-xmark"></div>
        </button>

        <div class="m3-icon-box bg-primary/10 text-primary mb-6">
          <div class="i-fa6-solid-qrcode text-3xl"></div>
        </div>

        <h3 class="text-2xl font-black text-text mb-2">{{ t('install.qr.title') }}</h3>
        <p class="text-sm text-textDim mb-8 leading-relaxed">
          {{ t('install.qr.desc') }}
        </p>

        <!-- QR Code Image -->
        <div class="p-4 bg-white rounded-3xl shadow-inner mb-8 group relative">
          <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
          <img :src="`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`" 
               alt="QR Code"
               width="200"
               height="200"
               class="relative z-10 rounded-xl" />
        </div>

        <div class="w-full p-4 bg-surfaceVariant/30 rounded-2xl border border-border/20 flex items-center gap-3 text-left">
          <div class="i-fa6-solid-link text-primary text-sm shrink-0"></div>
          <span class="text-[10px] font-mono text-textDim truncate flex-1">{{ url }}</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.m3-modal-enter-active,
.m3-modal-leave-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.m3-modal-enter-from,
.m3-modal-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}
</style>
