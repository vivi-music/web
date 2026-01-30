/**
 * @file useGithubRelease.js
 * @description Composable zur Interaktion mit der GitHub Releases API.
 * Kapselt die Logik zum Abrufen der neuesten Versionsinformationen.
 * * @module composables/useGithubRelease
 * @author Vivi Music Team
 */

import { ref } from 'vue'

// --- SHARED STATE ---
// We move these outside the function so that multiple components (e.g., Hero and Footer)
// share the same data and state without redundant API calls.
const latestVersion = ref(null)
const releaseName = ref('')
const releaseUrl = ref('https://github.com/vivizzz007/vivi-music/releases')
const releaseDescription = ref('')
const isLoading = ref(false)
const error = ref(null)
let isFetching = false

/**
 * Bereitstellung der GitHub Release Daten.
 * @returns {Object} Interface mit reaktiven Referenzen und Methoden.
 */
export function useGithubRelease() {

    /**
     * Ruft das neueste Release asynchron von der GitHub API ab.
     * Behandelt Fehler und setzt Fallback-Werte.
     * @async
     * @param {string} [fallbackVersion] - Ein initialer Wert, der angezeigt wird, bis die API antwortet.
     */
    const fetchLatestRelease = async (fallbackVersion) => {
        // Prevent multiple simultaneous or redundant fetches
        if (isFetching || (latestVersion.value && latestVersion.value !== fallbackVersion)) return
        
        isFetching = true
        isLoading.value = true
        error.value = null

        if (!latestVersion.value && fallbackVersion) {
            latestVersion.value = fallbackVersion
        }

        try {
            const response = await fetch(`https://api.github.com/repos/vivizzz007/vivi-music/releases/latest`)

            if (response.ok) {
                const data = await response.json()
                latestVersion.value = data.tag_name
                
                const name = data.name?.trim()
                const tag = data.tag_name?.trim()
                releaseName.value = (name && name !== tag) ? name : ''
                
                releaseUrl.value = data.html_url
                releaseDescription.value = data.body || ''
            } else {
                console.warn(`GitHub Release Fetch failed: ${response.status}`)
                error.value = `Error ${response.status}`
            }
        } catch (err) {
            console.error('GitHub API Network Error:', err)
            error.value = 'Network error'
        } finally {
            isLoading.value = false
            isFetching = false
        }
    }

    return {
        latestVersion,
        releaseName,
        releaseUrl,
        releaseDescription,
        isLoading,
        error,
        fetchLatestRelease
    }
}