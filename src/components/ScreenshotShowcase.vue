<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="screenshots" class="py-24 overflow-hidden">
    <div class="text-center mb-16">
      <h2 class="section-title text-text">{{ t('showcase.title') || 'Visual Excellence' }}</h2>
      <p class="text-textDim">{{ t('showcase.subtitle') || 'Material 3 Expressive Design in Action.' }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-6 max-w-[1400px] mx-auto justify-items-center">
      
      <div class="pixel-frame hover:-translate-y-4 transition-transform duration-500">
        <div class="pixel-camera"></div>
        <div class="pixel-screen bg-surfaceContainer p-4 pt-10 flex flex-col overflow-hidden">
          <div class="flex justify-between items-center mb-6">
            <span class="font-bold text-lg text-text">Good Morning</span>
            <div class="w-8 h-8 rounded-full bg-primary/20"></div>
          </div>
          <div class="flex gap-2 mb-6 overflow-hidden">
            <div class="bg-primary text-onPrimary px-4 py-2 rounded-xl text-xs font-bold">Relax</div>
            <div class="bg-surfaceVariant text-textDim px-4 py-2 rounded-xl text-xs border border-border">Workout</div>
            <div class="bg-surfaceVariant text-textDim px-4 py-2 rounded-xl text-xs border border-border">Commute</div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="aspect-square bg-surface rounded-2xl p-3 border border-border">
              <div class="w-full h-2/3 bg-tertiary/20 rounded-xl mb-2"></div>
              <div class="h-2 w-2/3 bg-surfaceVariant rounded-full"></div>
            </div>
            <div class="aspect-square bg-surface rounded-2xl p-3 border border-border">
              <div class="w-full h-2/3 bg-primary/20 rounded-xl mb-2"></div>
              <div class="h-2 w-1/2 bg-surfaceVariant rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="pixel-frame hover:-translate-y-4 transition-transform duration-500 delay-100">
        <div class="pixel-camera"></div>
        <div class="pixel-screen bg-surface p-0 flex flex-col relative">
          <div class="absolute inset-0 bg-primary/10"></div>
          
          <div class="relative z-10 flex flex-col h-full p-6 pt-12">
             <div class="flex justify-center mb-8">
                <div class="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-tertiary shadow-xl"></div>
             </div>
             
             <div class="flex-1 space-y-4 text-center my-auto overflow-hidden mask-linear">
                <p class="text-textDim text-lg blur-[1px]">Is this the real life?</p>
                <p class="text-text font-bold text-2xl scale-110 origin-center">Is this just fantasy?</p>
                <p class="text-textDim text-lg blur-[1px]">Caught in a landslide</p>
                <p class="text-textDim text-sm blur-[2px]">No escape from reality</p>
             </div>

             <div class="mt-4">
                <div class="w-full h-1 bg-surfaceVariant rounded-full overflow-hidden">
                  <div class="w-1/3 h-full bg-primary"></div>
                </div>
                <div class="flex justify-between items-center mt-4 text-2xl text-text">
                   <div class="i-fa6-solid-backward-step opacity-70"></div>
                   <div class="w-14 h-14 bg-primary text-onPrimary rounded-[1.2rem] flex items-center justify-center shadow-lg">
                      <div class="i-fa6-solid-pause"></div>
                   </div>
                   <div class="i-fa6-solid-forward-step opacity-70"></div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div class="pixel-frame hover:-translate-y-4 transition-transform duration-500 delay-200">
        <div class="pixel-camera"></div>
        <div class="pixel-screen bg-surfaceContainer p-4 pt-10 flex flex-col">
          <div class="bg-surfaceVariant/50 p-3 rounded-full flex items-center gap-3 mb-6 border border-border">
             <div class="i-fa6-solid-magnifying-glass text-textDim ml-2"></div>
             <span class="text-textDim text-sm">Search songs...</span>
          </div>

          <h4 class="font-bold text-text mb-4">Browse</h4>
          <div class="grid grid-cols-2 gap-3">
             <div class="h-20 rounded-xl bg-[#E91E63]/20 border border-[#E91E63]/30 flex items-end p-2 relative overflow-hidden">
                <span class="font-bold text-[#E91E63] relative z-10">Pop</span>
                <div class="absolute -right-2 -bottom-2 text-4xl text-[#E91E63]/20 rotate-12 font-black">P</div>
             </div>
             <div class="h-20 rounded-xl bg-[#2196F3]/20 border border-[#2196F3]/30 flex items-end p-2 relative overflow-hidden">
                <span class="font-bold text-[#2196F3] relative z-10">Rock</span>
                <div class="absolute -right-2 -bottom-2 text-4xl text-[#2196F3]/20 rotate-12 font-black">R</div>
             </div>
             <div class="h-20 rounded-xl bg-[#9C27B0]/20 border border-[#9C27B0]/30 flex items-end p-2 relative overflow-hidden">
                <span class="font-bold text-[#9C27B0] relative z-10">Jazz</span>
             </div>
             <div class="h-20 rounded-xl bg-[#FF9800]/20 border border-[#FF9800]/30 flex items-end p-2 relative overflow-hidden">
                <span class="font-bold text-[#FF9800] relative z-10">Hip-Hop</span>
             </div>
          </div>
          
          <h4 class="font-bold text-text mt-6 mb-3">Recent</h4>
          <div class="space-y-3">
             <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded bg-surfaceVariant"></div>
                <div class="flex-1">
                   <div class="h-2 w-20 bg-text/20 rounded mb-1"></div>
                   <div class="h-2 w-12 bg-text/10 rounded"></div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div class="pixel-frame hover:-translate-y-4 transition-transform duration-500 delay-300">
        <div class="pixel-camera"></div>
        <div class="pixel-screen bg-surface p-4 pt-10 flex flex-col">
          <div class="flex items-center gap-4 mb-8">
            <div class="i-fa6-solid-arrow-left text-text"></div>
            <span class="font-bold text-xl text-text">Backup</span>
          </div>
          <div class="space-y-4">
            <div class="p-4 rounded-2xl bg-surfaceContainer border border-border flex items-center gap-4">
              <div class="i-fa6-solid-cloud-arrow-up text-primary text-xl"></div>
              <div>
                <div class="font-bold text-sm text-text">Create Backup</div>
                <div class="text-xs text-textDim">Save JSON</div>
              </div>
            </div>
            <div class="p-4 rounded-2xl bg-surfaceContainer border border-border flex items-center gap-4">
              <div class="i-fa6-solid-file-import text-tertiary text-xl"></div>
              <div>
                <div class="font-bold text-sm text-text">Restore</div>
                <div class="text-xs text-textDim">From file</div>
              </div>
            </div>
            <div class="mt-auto mb-4 border-t border-border pt-4">
              <span class="text-xs font-mono text-textDim uppercase">Sync</span>
              <div class="flex justify-between items-center mt-4">
                <span class="text-text text-sm">Auto-Sync</span>
                <div class="w-10 h-6 bg-primary rounded-full relative">
                  <div class="w-4 h-4 bg-onPrimary rounded-full absolute top-1 right-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.pixel-frame {
  width: 280px; /* Leicht schmaler für 4-Spalten Layout */
  height: 600px;
  border-radius: 3rem;
  background: #1a1a1a;
  box-shadow: inset 0 0 0 2px #3a3a3a, 0 0 0 4px #000, 0 20px 50px rgba(0,0,0,0.5);
  position: relative;
  padding: 8px;
  flex-shrink: 0;
}

.pixel-screen {
  width: 100%; height: 100%;
  border-radius: 2.5rem;
  overflow: hidden;
  position: relative;
  /* Maske für abgerundete Ecken des Inhalts */
  mask-image: radial-gradient(white, black);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}

.pixel-camera {
  position: absolute; top: 15px; left: 50%; transform: translateX(-50%);
  width: 10px; height: 10px; background: #000; border-radius: 50%; z-index: 50;
}

.mask-linear {
  mask-image: linear-gradient(transparent, black 20%, black 80%, transparent);
  -webkit-mask-image: linear-gradient(transparent, black 20%, black 80%, transparent);
}
</style>
