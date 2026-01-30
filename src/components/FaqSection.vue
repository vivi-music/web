<script setup>
import { ref, shallowRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { useIntersectionObserver } from '../composables'

defineOptions({
  name: 'FaqSection'
})

const { t } = useI18n()
const sectionRef = shallowRef(null)
const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, once: true })

const activeIndex = ref(null)

const faqs = [
  { id: 'cost', icon: 'i-fa6-solid-hand-holding-dollar' },
  { id: 'source', icon: 'i-fa6-solid-code' },
  { id: 'ytmusic', icon: 'i-fa6-brands-youtube' },
  { id: 'download', icon: 'i-fa6-solid-cloud-arrow-down' },
  { id: 'safety', icon: 'i-fa6-solid-shield-halved' }
]

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" 
           ref="sectionRef"
           class="m3-section transition-all duration-1000"
           :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'">
    <div class="m3-container max-w-4xl">
      
      <div class="text-center mb-16">
        <h2 class="m3-title mb-4">{{ t('faq.title') }}</h2>
        <p class="text-textDim text-lg opacity-80">{{ t('faq.subtitle') }}</p>
      </div>

      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" 
             :key="faq.id"
             class="m3-card overflow-hidden transition-all duration-500"
             :class="activeIndex === index ? 'border-primary/50 shadow-lg shadow-primary/10' : 'hover:border-primary/20'">
          
          <button @click="toggleFaq(index)"
                  class="w-full p-6 flex items-center justify-between text-left cursor-pointer border-none bg-transparent">
            <div class="flex items-center gap-4">
              <div class="m3-icon-box-sm" 
                   :class="activeIndex === index ? 'bg-primary text-onPrimary' : 'bg-surfaceVariant/30 text-primary'">
                <div :class="faq.icon"></div>
              </div>
              <span class="text-lg font-black text-text tracking-tight">{{ t(`faq.${faq.id}.q`) }}</span>
            </div>
            <div class="i-fa6-solid-chevron-down transition-transform duration-500 text-textDim"
                 :class="{ 'rotate-180 text-primary': activeIndex === index }"></div>
          </button>

          <Transition name="expand">
            <div v-if="activeIndex === index" class="px-6 pb-8 pt-2">
              <div class="h-px bg-border/10 w-full mb-6"></div>
              <p class="text-textDim leading-relaxed pl-16 pr-4">
                {{ t(`faq.${faq.id}.a`) }}
              </p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s cubic-bezier(0.3, 0, 0.2, 1);
  max-height: 500px;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}
</style>
