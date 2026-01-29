<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="features" class="py-24 bg-surfaceContainer/50 border-y border-border">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-3 gap-12">

        <div class="lg:col-span-1 space-y-6">
          <div class="space-y-2">
            <h2 class="section-title text-4xl font-black tracking-tight">
              {{ t('features.title_part1') }} <span class="text-primary">{{ t('features.title_part2') }}</span>
            </h2>
            <p class="text-textDim leading-relaxed">
              {{ t('features.description') }}
            </p>
          </div>

          <div class="p-6 rounded-3xl bg-surface border border-border shadow-sm">
            <h4 class="font-bold mb-4 flex items-center gap-2 text-text">
              <div class="i-fa6-solid-server text-accent"></div> {{ t('features.architecture') }}
            </h4>
            <ul class="space-y-3 text-sm text-textDim font-mono">
              <li>> MVVM Pattern (Jetpack Compose)</li>
              <li>> Material 3 Expressive UI</li>
              <li>> Room Database (MusicDatabase)</li>
              <li>> Exoplayer / Media3 Backend</li>
            </ul>
          </div>
        </div>

        <div class="lg:col-span-2 grid md:grid-cols-2 gap-6">

          <div class="card-tech group bg-surface p-6 rounded-[2rem] border border-border hover:border-primary/50 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <div class="i-fa6-brands-youtube text-2xl"></div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-text">{{ t('features.innertube.title') }}</h3>
            <p class="text-sm text-textDim leading-relaxed">{{ t('features.innertube.desc') }}</p>
          </div>

          <div class="card-tech group bg-surface p-6 rounded-[2rem] border border-border hover:border-primary/50 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <div class="i-fa6-solid-microphone-lines text-2xl"></div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-text">{{ t('features.lyrics.title') }}</h3>
            <p class="text-sm text-textDim leading-relaxed">{{ t('features.lyrics.desc') }}</p>
          </div>

          <div class="card-tech group bg-surface p-6 rounded-[2rem] border border-border hover:border-primary/50 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <div class="i-fa6-solid-sliders text-2xl"></div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-text">{{ t('features.equalizer.title') }}</h3>
            <p class="text-sm text-textDim leading-relaxed">{{ t('features.equalizer.desc') }}</p>
          </div>

          <div class="card-tech group bg-surface p-6 rounded-[2rem] border border-border hover:border-primary/50 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <div class="i-fa6-solid-palette text-2xl"></div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-text">{{ t('features.material.title') }}</h3>
            <p class="text-sm text-textDim leading-relaxed">{{ t('features.material.desc') }}</p>
          </div>

          <div class="card-tech group bg-surface p-6 rounded-[2rem] border border-border hover:border-primary/50 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <div class="i-fa6-solid-cloud-arrow-down text-2xl"></div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-text">{{ t('features.cache.title') }}</h3>
            <p class="text-sm text-textDim leading-relaxed">{{ t('features.cache.desc') }}</p>
          </div>

          <div class="card-tech group bg-surface p-6 rounded-[2rem] border border-border hover:border-primary/50 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <div class="i-fa6-solid-user-shield text-2xl"></div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-text">{{ t('features.privacy.title') }}</h3>
            <p class="text-sm text-textDim leading-relaxed">{{ t('features.privacy.desc') }}</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>