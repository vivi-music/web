<script setup>
</script>

<template>
  <section id="install" class="py-24 bg-surfaceContainer border-y border-white/5">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
      
      <div>
        <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
          <div class="i-fa6-brands-android text-primary"></div>
          Install & Use
        </h2>
        <div class="space-y-8">
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-onPrimary font-bold flex-shrink-0">1</div>
            <div>
              <h4 class="font-bold text-lg">Download APK</h4>
              <p class="text-white/60 text-sm mb-2">Get the latest `universal` build from Releases.</p>
              <a href="#" class="text-primary text-sm hover:underline flex items-center gap-1">
                Go to Releases <div class="i-fa6-solid-arrow-right text-xs"></div>
              </a>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-surfaceVariant flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
            <div>
              <h4 class="font-bold text-lg">Grant Permissions</h4>
              <p class="text-white/60 text-sm">
                On first launch, allow <b>Notification</b> (for playback controls) and <b>Storage</b> (for local file access).
              </p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-surfaceVariant flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
            <div>
              <h4 class="font-bold text-lg">Import & Sync</h4>
              <p class="text-white/60 text-sm">
                Go to Settings > Content. You can import YouTube Playlists via URL or scan local folders.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="test">
        <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
          <div class="i-fa6-solid-vial text-tertiary"></div>
          Testing & QA
        </h2>
        <div class="bg-[#0f0d13] p-6 rounded-3xl border border-white/5 space-y-6">
          <div>
            <h5 class="text-sm font-bold text-white/80 mb-2">Unit Tests</h5>
            <p class="text-xs text-white/50 mb-2">Testing core logic like `LyricsParser` and `StringUtils`.</p>
            <div class="code-block">
              ./gradlew testDebugUnitTest
            </div>
          </div>
          <div>
            <h5 class="text-sm font-bold text-white/80 mb-2">UI Tests (Espresso)</h5>
            <p class="text-xs text-white/50 mb-2">Automated UI testing for `SettingsScreen` and Navigation.</p>
            <div class="code-block">
              ./gradlew connectedAndroidTest
            </div>
          </div>
          <div class="text-xs text-yellow-500/80 bg-yellow-500/10 p-3 rounded-lg flex gap-2">
            <div class="i-fa6-solid-triangle-exclamation mt-0.5"></div>
            <span>Note: Use `vivi-music-testing` branch for latest experimental features.</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
