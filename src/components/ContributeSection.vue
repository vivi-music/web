
<script setup>
</script>

<template>
  <section id="contribute" class="py-24">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="section-title">Contribute Code</h2>
      <p class="text-white/60 mb-12">
        Vivi Music is built with **Kotlin** and **Jetpack Compose**. Join us in shaping the future of audio on Android.
      </p>

      <div class="grid md:grid-cols-3 gap-4 text-left">
        <div class="p-6 rounded-2xl bg-surfaceContainer border border-white/5">
          <div class="i-fa6-solid-code-branch text-3xl text-primary mb-4"></div>
          <h4 class="font-bold mb-2">Fork & Branch</h4>
          <p class="text-sm text-white/50">Clone the repo and create a feature branch from `main`.</p>
        </div>
        <div class="p-6 rounded-2xl bg-surfaceContainer border border-white/5">
          <div class="i-fa6-brands-android text-3xl text-success mb-4"></div>
          <h4 class="font-bold mb-2">Build Debug</h4>
          <p class="text-sm text-white/50">Run `./gradlew assembleDebug` to verify your environment.</p>
        </div>
        <div class="p-6 rounded-2xl bg-surfaceContainer border border-white/5">
          <div class="i-fa6-solid-code-pull-request text-3xl text-tertiary mb-4"></div>
          <h4 class="font-bold mb-2">Pull Request</h4>
          <p class="text-sm text-white/50">Submit your PR. Ensure lint checks pass via `.editorconfig`.</p>
        </div>
      </div>

      <div class="mt-12 bg-surfaceVariant/20 p-6 rounded-2xl inline-block text-left max-w-2xl w-full">
        <div class="flex items-center gap-2 mb-4 text-sm text-white/70">
          <div class="i-fa6-regular-folder-open"></div>
          <span>Key Directories</span>
        </div>
        <div class="space-y-2 font-mono text-xs text-primary">
          <p>├── app/src/main/java/com/music/vivi/ui/screens/ <span class="text-white/40">// Compose Screens</span></p>
          <p>├── innertube/ <span class="text-white/40">// YouTube Music API Client</span></p>
          <p>├── betterlyrics/ <span class="text-white/40">// Lyrics Provider Logic</span></p>
          <p>└── kizzy/ <span class="text-white/40">// Discord RPC Implementation</span></p>
        </div>
      </div>
    </div>
  </section>
</template>
