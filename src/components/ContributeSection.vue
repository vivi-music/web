<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="contribute" class="py-24">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="section-title text-text">{{ t('contribute.title') }}</h2>
      <p class="text-textDim mb-12">
        {{ t('contribute.subtitle') }}
      </p>

      <div class="grid md:grid-cols-3 gap-4 text-left">
        <div class="p-6 rounded-2xl bg-surfaceContainer border border-border">
          <div class="i-fa6-solid-code-branch text-3xl text-primary mb-4"></div>
          <h4 class="font-bold mb-2 text-text">{{ t('contribute.fork.title') }}</h4>
          <p class="text-sm text-textDim">{{ t('contribute.fork.desc') }}</p>
        </div>
        <div class="p-6 rounded-2xl bg-surfaceContainer border border-border">
          <div class="i-fa6-brands-android text-3xl text-success mb-4"></div>
          <h4 class="font-bold mb-2 text-text">{{ t('contribute.debug.title') }}</h4>
          <p class="text-sm text-textDim">{{ t('contribute.debug.desc') }}</p>
        </div>
        <div class="p-6 rounded-2xl bg-surfaceContainer border border-border">
          <div class="i-fa6-solid-code-pull-request text-3xl text-tertiary mb-4"></div>
          <h4 class="font-bold mb-2 text-text">{{ t('contribute.pr.title') }}</h4>
          <p class="text-sm text-textDim">{{ t('contribute.pr.desc') }}</p>
        </div>
      </div>

      <div class="mt-12 bg-surfaceContainer p-6 rounded-2xl inline-block text-left max-w-2xl w-full border border-border">
        <div class="flex items-center gap-2 mb-4 text-sm text-textDim">
          <div class="i-fa6-regular-folder-open"></div>
          <span>{{ t('contribute.directories') }}</span>
        </div>
        <div class="space-y-2 font-mono text-xs text-primary">
          <p>├── app/src/main/java/com/music/vivi/ui/screens/ <span class="text-textDim">// Compose Screens</span></p>
          <p>├── innertube/ <span class="text-textDim">// YouTube Music API Client</span></p>
          <p>├── betterlyrics/ <span class="text-textDim">// Lyrics Provider Logic</span></p>
          <p>└── kizzy/ <span class="text-textDim">// Discord RPC Implementation</span></p>
        </div>
      </div>
    </div>
  </section>
</template>
