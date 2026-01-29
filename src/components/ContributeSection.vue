<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGithubContributors } from '../composables/useGithubContributors'

const { t } = useI18n()
const { contributors, fetchContributors } = useGithubContributors()

onMounted(() => {
  fetchContributors()
})
</script>

<template>
  <section id="contribute" class="py-24 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-tertiary/5 blur-[100px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">

      <div class="text-center mb-16">
        <h2 class="section-title mb-4">{{ t('contribute.title') }}</h2>
        <p class="text-textDim max-w-2xl mx-auto">{{ t('contribute.subtitle') }}</p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-24">
        <a href="https://github.com/vivizzz007/vivi-music/fork" target="_blank"
           class="group p-8 rounded-3xl bg-surfaceContainer border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 decoration-none">
          <div class="w-14 h-14 rounded-2xl bg-surfaceVariant flex items-center justify-center text-text mb-6 group-hover:bg-primary group-hover:text-onPrimary transition-colors">
            <div class="i-fa6-solid-code-branch text-2xl"></div>
          </div>
          <h3 class="text-xl font-bold text-text mb-2">{{ t('contribute.fork.title') }}</h3>
          <p class="text-sm text-textDim">{{ t('contribute.fork.desc') }}</p>
        </a>

        <a href="https://github.com/vivizzz007/vivi-music" target="_blank"
           class="group p-8 rounded-3xl bg-surfaceContainer border border-border hover:border-tertiary/50 transition-all duration-300 hover:-translate-y-1 decoration-none">
          <div class="w-14 h-14 rounded-2xl bg-surfaceVariant flex items-center justify-center text-text mb-6 group-hover:bg-tertiary group-hover:text-onTertiary transition-colors">
            <div class="i-fa6-solid-bug text-2xl"></div>
          </div>
          <h3 class="text-xl font-bold text-text mb-2">{{ t('contribute.debug.title') }}</h3>
          <p class="text-sm text-textDim">{{ t('contribute.debug.desc') }}</p>
        </a>

        <a href="https://github.com/vivizzz007/vivi-music/pulls" target="_blank"
           class="group p-8 rounded-3xl bg-surfaceContainer border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 decoration-none">
          <div class="w-14 h-14 rounded-2xl bg-surfaceVariant flex items-center justify-center text-text mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
            <div class="i-fa6-solid-code-pull-request text-2xl"></div>
          </div>
          <h3 class="text-xl font-bold text-text mb-2">{{ t('contribute.pr.title') }}</h3>
          <p class="text-sm text-textDim">{{ t('contribute.pr.desc') }}</p>
        </a>
      </div>

      <div v-if="contributors.length > 0" class="text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surfaceVariant/30 border border-border text-xs font-mono text-textDim uppercase tracking-widest mb-8">
          <div class="i-fa6-solid-heart text-red-400"></div>
          Powered by Community
        </div>

        <div class="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          <a v-for="user in contributors"
             :key="user.id"
             :href="user.html_url"
             target="_blank"
             class="relative group"
             :aria-label="user.login">

            <img
                :src="user.avatar_url"
                :alt="user.login"
                class="w-12 h-12 rounded-full border-2 border-surface bg-surfaceContainer object-cover transition-transform duration-300 group-hover:scale-125 group-hover:z-10 group-hover:border-primary relative z-0 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 shadow-sm"
            />

            <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 bg-surfaceContainer border border-border rounded text-[10px] font-bold text-text whitespace-nowrap pointer-events-none z-20 shadow-xl">
              {{ user.login }}
            </div>
          </a>

          <a href="https://github.com/vivizzz007/vivi-music" target="_blank"
             class="w-12 h-12 rounded-full border-2 border-dashed border-border flex items-center justify-center text-textDim hover:text-primary hover:border-primary hover:bg-primary/10 transition-colors rounded-full group">
            <div class="i-fa6-solid-plus text-sm group-hover:scale-125 transition-transform"></div>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Optional: Falls du spezielle Grid-Layouts willst */
</style>