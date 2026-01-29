<script setup>
/**
 * @file ChangelogModal.vue
 * @description Modal-Komponente zur Anzeige von Release-Notes.
 * Implementiert eine Teleport-Logik und Transition-Animationen.
 */
import { defineProps, defineEmits, onMounted, onUnmounted } from 'vue'

/**
 * @property {boolean} show - Steuert die Sichtbarkeit des Modals.
 * @property {string} version - Die anzuzeigende Versionsnummer.
 * @property {string} content - Der Changelog-Text (Markdown/Plaintext).
 */
const props = defineProps({
  show: Boolean,
  version: String,
  content: String
})

const emit = defineEmits(['close'])

/**
 * Schließt das Modal bei Druck auf die Escape-Taste.
 * @param {KeyboardEvent} e
 */
const handleKeyup = (e) => {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keyup', handleKeyup))
onUnmounted(() => window.removeEventListener('keyup', handleKeyup))
</script>

<template>
  <Transition name="fade">
    <div v-if="show" class="fixed inset-0 z-[100] flex items-center justify-center p-4">

      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="$emit('close')"></div>

      <div class="relative bg-surfaceContainer border border-border rounded-3xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl overflow-hidden">

        <header class="p-6 border-b border-border flex justify-between items-center bg-surface/50 backdrop-blur-md">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <div class="i-fa6-solid-rocket text-xl"></div>
            </div>
            <div>
              <h3 class="text-xl font-bold text-text">Release Notes</h3>
              <p class="text-xs text-textDim font-mono mt-0.5">{{ version }}</p>
            </div>
          </div>

          <button @click="$emit('close')"
                  class="w-8 h-8 rounded-full hover:bg-surfaceVariant flex items-center justify-center text-textDim hover:text-text transition-colors cursor-pointer"
                  aria-label="Close Modal">
            <div class="i-fa6-solid-xmark text-lg"></div>
          </button>
        </header>

        <main class="p-6 overflow-y-auto custom-scrollbar">
          <div class="text-textDim text-sm leading-relaxed whitespace-pre-wrap font-sans">
            {{ content || 'Keine Beschreibung verfügbar.' }}
          </div>
        </main>

        <footer class="p-4 border-t border-border bg-surface/50 flex justify-end gap-3">
          <button @click="$emit('close')"
                  class="px-5 py-2 rounded-full text-sm font-bold text-textDim hover:text-text hover:bg-surfaceVariant transition-colors cursor-pointer">
            Schließen
          </button>
          <a :href="`https://github.com/vivizzz007/vivi-music/releases/tag/${version}`"
             target="_blank"
             class="px-5 py-2 rounded-full text-sm font-bold bg-primary text-onPrimary shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all decoration-none flex items-center gap-2 cursor-pointer">
            GitHub <div class="i-fa6-solid-arrow-up-right-from-square text-xs"></div>
          </a>
        </footer>

      </div>
    </div>
  </Transition>
</template>

<style scoped>
/**
 * FIX: Die Selektoren wurden als ungenutzt markiert, da Vue's Transition-Komponente
 * die Klassen dynamisch zur Laufzeit anhängt.
 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Custom Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(var(--c-primary-rgb), 0.2);
  border-radius: 10px;
}
</style>