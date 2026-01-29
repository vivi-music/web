<script setup>
/**
 * Zeigt die Hauptfeatures der App in einem Grid-Layout an.
 * Nutzt UnoCSS Icons (i-fa6-*) statt FontAwesome Klassen.
 */
</script>

<template>
  <section id="features" class="py-24 bg-surfaceContainer/50 border-y border-white/5">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-3 gap-12">
        
        <div class="lg:col-span-1 space-y-2">
          <h2 class="section-title">Engineered for <span class="text-primary">Performance</span></h2>
          <p class="text-white/60">
            Vivi Music kombiniert lokale Musikbibliotheken mit der Power von YouTube Music (Innertube).
          </p>
          
          <div class="mt-8 p-6 rounded-2xl bg-black/40 border border-white/5">
            <h4 class="font-bold mb-4 flex items-center gap-2">
              <div class="i-fa6-solid-server text-accent"></div> Architecture
            </h4>
            <ul class="space-y-3 text-sm text-gray-400 font-mono">
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
            <h3 class="text-xl font-bold mb-2">Innertube Client</h3>
            <p class="text-sm text-white/60">
              Direkter API-Zugriff auf `YouTubeRepository`. Streamt Audio in Opus/AAC ohne Werbung. Unterstützt "Mix", "Charts" und "New Releases".
            </p>
          </div>

          <div class="card-tech group">
            <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
              <div class="i-fa6-solid-microphone-lines text-2xl"></div>
            </div>
            <h3 class="text-xl font-bold mb-2">BetterLyrics</h3>
            <p class="text-sm text-white/60">
              Multi-Source Lyrics Engine (`BetterLyricsLyricsProvider`). Fetcht synchrone Texte von LRCLib, Musixmatch und KuGou.
            </p>
          </div>

          <div class="card-tech group">
            <div class="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
              <div class="i-fa6-brands-discord text-2xl"></div>
            </div>
            <h3 class="text-xl font-bold mb-2">Kizzy RPC</h3>
            <p class="text-sm text-white/60">
              Integrierter Discord Rich Presence Client (`KizzyRPC.kt`). Zeigt Song, Künstler und Album-Cover live in deinem Discord-Profil an.
            </p>
          </div>

          <div class="card-tech group">
            <div class="w-12 h-12 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
              <div class="i-fa6-solid-cloud-arrow-down text-2xl"></div>
            </div>
            <h3 class="text-xl font-bold mb-2">Smart Cache</h3>
            <p class="text-sm text-white/60">
              `ExoDownloadService` sorgt für nahtloses Caching. Songs werden automatisch gecacht, um Datenvolumen zu sparen.
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
