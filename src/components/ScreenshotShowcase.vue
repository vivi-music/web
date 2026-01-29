<script setup>
/**
 * Visuelle Sektion mit statischen Mockups.
 */
</script>

<template>
  <section id="screenshots" class="py-24 overflow-hidden">
    <div class="text-center mb-16">
      <h2 class="section-title">Visual Excellence</h2>
      <p class="text-white/60">Material 3 Expressive Design in Action.</p>
    </div>

    <div class="flex justify-center gap-8 flex-wrap lg:flex-nowrap px-6">
      
      <div class="pixel-frame scale-90 lg:scale-100 hover:-translate-y-4 transition-transform duration-500">
        <div class="pixel-camera"></div>
        <div class="pixel-screen bg-[#1E1C24] p-4 pt-10 flex flex-col overflow-hidden">
          <div class="flex justify-between items-center mb-6">
            <span class="font-bold text-lg">Good Morning</span>
            <div class="w-8 h-8 rounded-full bg-primary/20"></div>
          </div>
          <div class="flex gap-2 mb-6 overflow-hidden">
            <div class="bg-primary text-onPrimary px-4 py-2 rounded-xl text-xs font-bold">Relax</div>
            <div class="bg-white/5 px-4 py-2 rounded-xl text-xs">Workout</div>
            <div class="bg-white/5 px-4 py-2 rounded-xl text-xs">Commute</div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="aspect-square bg-white/5 rounded-2xl p-3">
              <div class="w-full h-2/3 bg-tertiary/20 rounded-xl mb-2"></div>
              <div class="h-2 w-2/3 bg-white/20 rounded-full"></div>
            </div>
            <div class="aspect-square bg-white/5 rounded-2xl p-3">
              <div class="w-full h-2/3 bg-primary/20 rounded-xl mb-2"></div>
              <div class="h-2 w-1/2 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="pixel-frame scale-90 lg:scale-100 hover:-translate-y-4 transition-transform duration-500 delay-100">
        <div class="pixel-camera"></div>
        <div class="pixel-screen bg-[#141218] p-4 pt-10 flex flex-col">
          <div class="flex items-center gap-4 mb-8">
            <div class="i-fa6-solid-arrow-left"></div>
            <span class="font-bold text-xl">Backup & Restore</span>
          </div>
          <div class="space-y-4">
            <div class="p-4 rounded-2xl bg-surfaceVariant/20 border border-white/5 flex items-center gap-4">
              <div class="i-fa6-solid-cloud-arrow-up text-primary text-xl"></div>
              <div>
                <div class="font-bold text-sm">Create Backup</div>
                <div class="text-xs text-white/50">Save JSON to storage</div>
              </div>
            </div>
            <div class="p-4 rounded-2xl bg-surfaceVariant/20 border border-white/5 flex items-center gap-4">
              <div class="i-fa6-solid-file-import text-tertiary text-xl"></div>
              <div>
                <div class="font-bold text-sm">Restore</div>
                <div class="text-xs text-white/50">Restore from file</div>
              </div>
            </div>
            <div class="mt-8 border-t border-white/10 pt-4">
              <span class="text-xs font-mono text-white/30 uppercase">Sync Settings</span>
              <div class="flex justify-between items-center mt-4">
                <span>Auto-Sync</span>
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
/* Pixel Frame Styles lokal definiert */
.pixel-frame {
  width: 300px; height: 640px;
  border-radius: 3.5rem;
  background: #1a1a1a;
  box-shadow: inset 0 0 0 2px #3a3a3a, 0 0 0 4px #000, 0 20px 50px rgba(0,0,0,0.5);
  position: relative;
  padding: 10px;
  margin: auto;
}

.pixel-screen {
  width: 100%; height: 100%;
  border-radius: 2.8rem;
  overflow: hidden;
  position: relative;
  mask-image: radial-gradient(white, black);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}

.pixel-camera {
  position: absolute; top: 15px; left: 50%; transform: translateX(-50%);
  width: 10px; height: 10px; background: #000; border-radius: 50%; z-index: 50;
}
</style>
