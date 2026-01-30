<script setup>
/**
 * @file ChangelogModal.vue
 * @description Modal-Komponente zur Anzeige von Release-Notes.
 * Implementiert eine Teleport-Logik und Transition-Animationen.
 */
import { defineProps, defineEmits, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { marked } from 'marked'

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

const { t } = useI18n()
const emit = defineEmits(['close'])

/**
 * Konvertiert Markdown in sicheres HTML.
 */
const renderedMarkdown = computed(() => {
  if (!props.content) return ''
  return marked.parse(props.content, {
    breaks: true,
    gfm: true
  })
})

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
  <Transition name="modal">
    <div v-if="show" class="fixed inset-0 z-[100] flex items-center justify-center p-4">

      <div class="absolute inset-0 bg-black/70 backdrop-blur-md" @click="$emit('close')"></div>

      <div class="relative w-full max-w-2xl max-h-[85vh] flex flex-col">
        <!-- Background Glow -->
        <div class="absolute -inset-6 bg-gradient-to-tr from-primary/20 via-secondary/10 to-tertiary/10 blur-3xl opacity-60 pointer-events-none"></div>

        <div class="relative bg-surfaceContainer border border-border/50 rounded-[2.5rem] flex flex-col shadow-2xl overflow-hidden h-full">

          <header class="p-8 border-b border-border/30 flex justify-between items-start bg-surface/30 backdrop-blur-xl">
          <div class="flex items-center gap-5">
            <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
              <div class="i-fa6-solid-rocket text-3xl"></div>
            </div>
            <div>
              <h3 class="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-tertiary tracking-tight leading-none">
                Release Notes
              </h3>
              <div class="flex items-center gap-2 mt-2">
                <span class="px-2.5 py-0.5 rounded-full bg-primary text-onPrimary text-[9px] font-black uppercase tracking-widest shadow-sm shadow-primary/20">
                  Stable
                </span>
                <p class="text-sm text-textDim font-mono font-bold opacity-80">{{ version }}</p>
              </div>
            </div>
          </div>

          <button @click="$emit('close')"
                  class="w-10 h-10 rounded-full hover:bg-surfaceVariant/50 flex items-center justify-center text-textDim hover:text-text transition-all cursor-pointer active:scale-90"
                  aria-label="Close Modal">
            <div class="i-fa6-solid-xmark text-xl"></div>
          </button>
        </header>

        <main class="p-8 overflow-y-auto custom-scrollbar flex-grow">
          <div class="markdown-body text-textDim text-base leading-relaxed font-sans opacity-90"
               v-html="renderedMarkdown || 'No content available.'">
          </div>
        </main>

        <footer class="p-6 border-t border-border/30 bg-surface/30 backdrop-blur-xl flex justify-between items-center">
          <div class="text-[10px] text-textDim/50 font-mono uppercase tracking-tighter hidden sm:block">
            Vivi Music Project &copy; 2024
          </div>
          <div class="flex gap-4 w-full sm:w-auto">
            <button @click="$emit('close')"
                    class="flex-1 sm:flex-none px-6 py-3 rounded-2xl text-sm font-bold text-text hover:bg-surfaceVariant transition-all cursor-pointer active:scale-95">
              {{ t('nav.language') === 'de' ? 'Schließen' : 'Close' }}
            </button>
            <a :href="`https://github.com/vivizzz007/vivi-music/releases/tag/${version}`"
               target="_blank"
               class="flex-1 sm:flex-none px-8 py-3 rounded-2xl text-sm font-bold bg-primary text-onPrimary shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all decoration-none flex items-center justify-center gap-2 cursor-pointer active:scale-95">
              GitHub <div class="i-fa6-solid-arrow-up-right-from-square text-xs"></div>
            </a>
          </div>
        </footer>

        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/**
 * M3E Modal Transition
 */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(30px);
}

/* Custom Scrollbar M3 Style */
.custom-scrollbar::-webkit-scrollbar {
  width: 10px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(var(--c-primary-rgb), 0.1);
  border: 3px solid transparent;
  background-clip: padding-box;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(var(--c-primary-rgb), 0.3);
}
/* Markdown Styling */
.markdown-body :deep(h1),
.markdown-body :deep(h2),
.markdown-body :deep(h3) {
  @apply font-black text-text mt-6 mb-4;
}

.markdown-body :deep(h1) { @apply text-2xl; }
.markdown-body :deep(h2) { @apply text-xl; }
.markdown-body :deep(h3) { @apply text-lg; }

.markdown-body :deep(p) {
  @apply mb-4 leading-relaxed;
}

.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  @apply mb-4 pl-6 list-disc;
}

.markdown-body :deep(li) {
  @apply mb-2;
}

.markdown-body :deep(code) {
  @apply bg-surfaceVariant/30 px-1.5 py-0.5 rounded font-mono text-sm text-primary;
}

.markdown-body :deep(pre) {
  @apply bg-surfaceVariant/20 p-4 rounded-2xl mb-4 overflow-x-auto border border-border/20;
}

.markdown-body :deep(pre code) {
  @apply bg-transparent p-0 text-textDim;
}

.markdown-body :deep(a) {
  @apply text-primary hover:underline decoration-primary;
}

.markdown-body :deep(blockquote) {
  @apply border-l-4 border-primary/30 pl-4 italic text-textDim/80 mb-4;
}
</style>