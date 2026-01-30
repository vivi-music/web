<script setup>
import { shallowRef, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGithubContributors, useIntersectionObserver, useGithubRepo } from '../composables'

defineOptions({
  name: 'ContributeSection'
})

const { t } = useI18n()
const { contributors, fetchContributors } = useGithubContributors()
const { stats } = useGithubRepo()

const sectionRef = shallowRef(null)
const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, once: true })

onMounted(() => {
  fetchContributors()
})
</script>

<template>
  <section id="contribute" 
           ref="sectionRef"
           class="m3-section transition-all duration-1000"
           :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'">
    <!-- Expressive Decorative Background Elements -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-tertiary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

    <div class="m3-container">

      <div class="text-center mb-20">
        <h2 class="m3-title mb-4">{{ t('contribute.title') }}</h2>
        <p class="text-textDim max-w-2xl mx-auto text-lg leading-relaxed">{{ t('contribute.subtitle') }}</p>
      </div>

      <div class="m3-grid-3 mb-32">
        <!-- Fork Card: Encourages users to fork the repository on GitHub -->
        <a href="https://github.com/vivizzz007/vivi-music/fork" target="_blank" rel="noopener noreferrer"
           class="group p-10 m3-card-expressive decoration-none flex flex-col items-center text-center"
           :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'">
          <div class="m3-icon-box bg-primary/10 text-primary mb-8 group-hover:bg-primary group-hover:text-onPrimary group-hover:rotate-6">
            <div class="i-fa6-solid-code-branch text-3xl"></div>
          </div>
          <h3 class="text-2xl font-black text-text mb-4 tracking-tight group-hover:text-primary transition-colors">{{ t('contribute.fork.title') }}</h3>
          <p class="text-sm text-textDim leading-relaxed opacity-80">{{ t('contribute.fork.desc') }}</p>
        </a>

        <!-- Debug Card: Direct link to the source code for local debugging -->
        <a href="https://github.com/vivizzz007/vivi-music" target="_blank" rel="noopener noreferrer"
           class="group p-10 m3-card-expressive hover:border-tertiary/50 hover:shadow-tertiary/20 decoration-none flex flex-col items-center text-center delay-100"
           :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'">
          <div class="m3-icon-box bg-tertiary/10 text-tertiary mb-8 group-hover:bg-tertiary group-hover:text-onTertiary group-hover:-rotate-6">
            <div class="i-fa6-solid-bug text-3xl"></div>
          </div>
          <h3 class="text-2xl font-black text-text mb-4 tracking-tight group-hover:text-tertiary transition-colors">{{ t('contribute.debug.title') }}</h3>
          <p class="text-sm text-textDim leading-relaxed opacity-80">{{ t('contribute.debug.desc') }}</p>
        </a>

        <!-- PR Card: Guides users to submit pull requests -->
        <a href="https://github.com/vivizzz007/vivi-music/pulls" target="_blank" rel="noopener noreferrer"
           class="group p-10 m3-card-expressive hover:border-accent/50 hover:shadow-accent/20 decoration-none flex flex-col items-center text-center delay-200"
           :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'">
          <div class="m3-icon-box bg-accent/10 text-accent mb-8 group-hover:bg-accent group-hover:text-onAccent group-hover:rotate-6">
            <div class="i-fa6-solid-code-pull-request text-3xl"></div>
          </div>
          <h3 class="text-2xl font-black text-text mb-4 tracking-tight group-hover:text-accent transition-colors">{{ t('contribute.pr.title') }}</h3>
          <p class="text-sm text-textDim leading-relaxed opacity-80">{{ t('contribute.pr.desc') }}</p>
        </a>
      </div>

      <div v-if="contributors.length > 0" class="relative transition-all duration-1000 delay-300"
           :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'">
        <!-- Community Section Background Decoration -->
        <div class="absolute inset-0 bg-surfaceVariant/5 rounded-[3.5rem] border border-border/20 blur-sm -z-10"></div>
        
        <div class="p-12 text-center">
          <!-- Live Repository Stats: Shows real-time data fetched from GitHub -->
          <div class="flex flex-wrap justify-center gap-8 mb-12">
            <div v-for="stat in [
              { label: 'Stars', value: stats.stars, icon: 'i-fa6-solid-star', color: 'text-yellow-500' },
              { label: 'Forks', value: stats.forks, icon: 'i-fa6-solid-code-branch', color: 'text-primary' },
              { label: 'Contributors', value: contributors.length, icon: 'i-fa6-solid-users', color: 'text-secondary' }
            ]" :key="stat.label" class="flex flex-col items-center">
              <div :class="stat.color" class="flex items-center gap-2 mb-1">
                <div :class="stat.icon" class="text-xs"></div>
                <span class="text-2xl font-black text-text">{{ stat.value || '...' }}</span>
              </div>
              <span class="text-[10px] font-black uppercase tracking-widest text-textDim opacity-60">{{ stat.label }}</span>
            </div>
          </div>

          <div class="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-surface border border-border shadow-sm text-xs font-black text-text uppercase tracking-widest mb-12 animate-glow-pulse">
            <div class="i-fa6-solid-heart text-red-500"></div>
            Powered by Community
          </div>

          <div class="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            <a v-for="user in contributors"
               :key="user.id"
               :href="user.html_url"
               target="_blank"
               rel="noopener noreferrer"
               class="relative group"
               :aria-label="user.login">

              <div class="relative">
                <div class="absolute -inset-2 bg-gradient-to-tr from-primary to-tertiary rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
                <img
                    :src="user.avatar_url + '&s=64'"
                    :alt="user.login"
                    width="64"
                    height="64"
                    loading="lazy"
                    class="w-16 h-16 rounded-full border-4 border-surface bg-surfaceContainer object-cover transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 relative z-10 shadow-xl grayscale-[50%] group-hover:grayscale-0"
                />
              </div>

              <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 px-3 py-1.5 bg-surface border border-border rounded-xl text-[10px] font-black text-text whitespace-nowrap pointer-events-none z-30 shadow-2xl translate-y-2 group-hover:translate-y-0">
                @{{ user.login }}
              </div>
            </a>

            <a href="https://github.com/vivizzz007/vivi-music" target="_blank" rel="noopener noreferrer"
               class="w-16 h-16 rounded-full border-4 border-dashed border-border/50 flex items-center justify-center text-textDim hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-500 group relative overflow-hidden">
              <div class="i-fa6-solid-plus text-xl group-hover:scale-125 group-hover:rotate-90 transition-transform"></div>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Optional: Falls du spezielle Grid-Layouts willst */
</style>