<script setup>
</script>

<template>
  <footer class="bg-black py-12 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
          <div class="i-fa6-solid-music text-sm"></div>
        </div>
        <span class="font-bold">Vivi Music</span>
      </div>
      
      <div class="flex gap-6">
        <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#5865F2] hover:text-white transition-colors text-white/50">
          <div class="i-fa6-brands-discord"></div>
        </a>
        <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0088cc] hover:text-white transition-colors text-white/50">
          <div class="i-fa6-brands-telegram"></div>
        </a>
        <a href="https://github.com/t-boyke/vivi-music" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-white/50">
          <div class="i-fa6-brands-github"></div>
        </a>
      </div>

      <p class="text-xs text-white/30 text-center md:text-right">
        &copy; 2026 Vivi Music. Licensed under GPL v3.0.<br>
        Based on `innertube` and `Compose`.
      </p>
    </div>
  </footer>
</template>
