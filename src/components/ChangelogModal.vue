<script setup>
import { defineProps, defineEmits, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  show: Boolean,
  version: String,
  content: String
})

const emit = defineEmits(['close'])

// Schließen mit ESC-Taste
const handleKeyup = (e) => {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keyup', handleKeyup))
onUnmounted(() => window.removeEventListener('keyup', handleKeyup))
</script>

<template>
  <Transition name="fade">
    <div v-if="show" class="fixed inset-0 z-[100] flex items-center justify-center p-4">

      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" @click="$emit('close')"></div>

      <div class="relative bg-surfaceContainer border border-border rounded-3xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        <div class="p-6 border-b border-border flex justify-between items-center bg-surface/50 backdrop-blur-md">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <div class="i-fa6-solid-rocket text-xl"></div>
            </div>
            <div>
              <h3 class="text-xl font-bold text-text">Release Notes</h3>
              <p class="text-xs text-textDim font-mono mt-0.5">{{ version }}</p>
            </div>
          </div>

          <button @click="$emit('close')" class="w-8 h-8 rounded-full hover:bg-surfaceVariant flex items-center justify-center text-textDim hover:text-text transition-colors cursor-pointer">
            <div class="i-fa6-solid-xmark text-lg"></div>
          </button>
        </div>

        <div class="p-6 overflow-y-auto custom-scrollbar">
          <div class="text-textDim text-sm leading-relaxed whitespace-pre-wrap font-sans">
            {{ content || 'Keine Beschreibung verfügbar.' }}
          </div>
        </div>

        <div class="p-4 border-t border-border bg-surface/50 flex justify-end gap-3">
          <button @click="$emit('close')" class="px-5 py-2 rounded-full text-sm font-bold text-textDim hover:text-text hover:bg-surfaceVariant transition-colors">
            Schließen
          </button>
          <a :href="`https://github.com/vivizzz007/vivi-music/releases/tag/${version}`" target="_blank" class="px-5 py-2 rounded-full text-sm font-bold bg-primary text-onPrimary shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all decoration-none flex items-center gap-2">
            GitHub <div class="i-fa6-solid-arrow-up-right-from-square text-xs"></div>
          </a>
        </div>

      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Transition Effekte */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Custom Scrollbar für das Modal */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(150, 150, 150, 0.2);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(150, 150, 150, 0.4);
}
</style>