<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="features" class="py-24 bg-surfaceContainer/50 border-y border-border">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-3 gap-12">
        
        <div class="lg:col-span-1 space-y-2">
          <h2 class="section-title">{{ t('features.title_part1') }} <span class="text-primary">{{ t('features.title_part2') }}</span></h2>
          <p class="text-textDim">
            {{ t('features.description') }}
          </p>
          
          <div class="mt-8 p-6 rounded-2xl bg-surface border border-border">
            <h4 class="font-bold mb-4 flex items-center gap-2 text-text">
              <div class="i-fa6-solid-server text-accent"></div> {{ t('features.architecture') }}
            </h4>
            <ul class="space-y-3 text-sm text-textDim font-mono">
              <li>> MVVM Pattern (Jetpack Compose)</li>
              <li>> Single Activity (MainActivity.kt)</li>
              <li>> Room Database (MusicDatabase)</li>
              <li>> Offline-First Strategy</li>
            </ul>
          </div>
        </div>

        <div class="lg:col-span-2 grid md:grid-cols-2 gap-6">
          
          <div class="card-tech group">
            <div class="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
              <div class="i-fa6-brands-youtube text-2xl"></div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-text">{{ t('features.innertube.title') }}</h3>
            <p class="text-sm text-textDim">
              {{ t('features.innertube.desc') }}
            </p>
          </div>

          <div class="card-tech group">
            <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
              <div class="i-fa6-solid-microphone-lines text-2xl"></div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-text">{{ t('features.lyrics.title') }}</h3>
            <p class="text-sm text-textDim">
               {{ t('features.lyrics.desc') }}
            </p>
          </div>

          <div class="card-tech group">
            <div class="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
              <div class="i-fa6-brands-discord text-2xl"></div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-text">{{ t('features.rpc.title') }}</h3>
            <p class="text-sm text-textDim">
               {{ t('features.rpc.desc') }}
            </p>
          </div>

          <div class="card-tech group">
            <div class="w-12 h-12 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
              <div class="i-fa6-solid-cloud-arrow-down text-2xl"></div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-text">{{ t('features.cache.title') }}</h3>
            <p class="text-sm text-textDim">
               {{ t('features.cache.desc') }}
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
