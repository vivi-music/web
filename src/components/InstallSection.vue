<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="install" class="py-24 bg-surfaceContainer border-y border-border">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
      
      <div>
        <h2 class="text-3xl font-bold mb-8 flex items-center gap-3 text-text">
          <div class="i-fa6-brands-android text-primary"></div>
          {{ t('install.title') }}
        </h2>
        <div class="space-y-8">
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-onPrimary font-bold flex-shrink-0">1</div>
            <div>
              <h4 class="font-bold text-lg text-text">{{ t('install.step1.title') }}</h4>
              <p class="text-textDim text-sm mb-2">{{ t('install.step1.desc') }}</p>
              <a href="#" class="text-primary text-sm hover:underline flex items-center gap-1">
                {{ t('install.step1.link') }} <div class="i-fa6-solid-arrow-right text-xs"></div>
              </a>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-surfaceVariant flex items-center justify-center text-text font-bold flex-shrink-0">2</div>
            <div>
              <h4 class="font-bold text-lg text-text">{{ t('install.step2.title') }}</h4>
              <p class="text-textDim text-sm">
                {{ t('install.step2.desc') }}
              </p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-surfaceVariant flex items-center justify-center text-text font-bold flex-shrink-0">3</div>
            <div>
              <h4 class="font-bold text-lg text-text">{{ t('install.step3.title') }}</h4>
              <p class="text-textDim text-sm">
                {{ t('install.step3.desc') }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="test">
        <h2 class="text-3xl font-bold mb-8 flex items-center gap-3 text-text">
          <div class="i-fa6-solid-vial text-tertiary"></div>
          {{ t('test.title') }}
        </h2>
        <div class="bg-surface p-6 rounded-3xl border border-border space-y-6">
          <div>
            <h5 class="text-sm font-bold text-text mb-2">Unit Tests</h5>
            <p class="text-xs text-textDim mb-2">Testing core logic like `LyricsParser` and `StringUtils`.</p>
            <div class="code-block">
              ./gradlew testDebugUnitTest
            </div>
          </div>
          <div>
            <h5 class="text-sm font-bold text-text mb-2">UI Tests (Espresso)</h5>
            <p class="text-xs text-textDim mb-2">Automated UI testing for `SettingsScreen` and Navigation.</p>
            <div class="code-block">
              ./gradlew connectedAndroidTest
            </div>
          </div>
          <div class="text-xs text-yellow-500/80 bg-yellow-500/10 p-3 rounded-lg flex gap-2">
            <div class="i-fa6-solid-triangle-exclamation mt-0.5"></div>
            <span>{{ t('test.note') }}</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
