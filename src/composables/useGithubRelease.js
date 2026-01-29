/**
 * @file useGithubRelease.js
 * @description Composable zur Interaktion mit der GitHub Releases API.
 * Kapselt die Logik zum Abrufen der neuesten Versionsinformationen.
 * * @module composables/useGithubRelease
 * @author Vivi Music Team
 */

import { ref } from 'vue'

// --- KONFIGURATION ---
// Zentralisierte Konstanten verhindern "Magic Strings" und erleichtern Wartung.
const GITHUB_OWNER = 'vivizzz007'
const GITHUB_REPO = 'vivi-music'
const BASE_API_URL = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`
const BASE_WEB_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases`

/**
 * Bereitstellung der GitHub Release Daten.
 * * @returns {Object} Interface mit reaktiven Referenzen und Methoden.
 * @property {import('vue').Ref<string|null>} latestVersion - Die neueste Version (Tag Name), z.B. "v5.0.3".
 * @property {import('vue').Ref<string>} releaseName - Der Titel des Releases (Codename), falls abweichend vom Tag.
 * @property {import('vue').Ref<string>} releaseUrl - Die URL zur Release-Seite auf GitHub.
 * @property {import('vue').Ref<string>} releaseDescription - Der Body-Text des Releases (Markdown/Changelog).
 * @property {import('vue').Ref<boolean>} isLoading - Status-Flag, ob Daten geladen werden.
 * @property {import('vue').Ref<string|null>} error - Fehlermeldung, falls der Abruf scheitert.
 * @property {function(string): Promise<void>} fetchLatestRelease - Funktion zum Starten des API-Abrufs.
 */
export function useGithubRelease() {

    // --- STATE ---
    const latestVersion = ref(null)
    const releaseName = ref('')
    const releaseUrl = ref(BASE_WEB_URL) // Fallback auf Übersicht, falls Fetch fehlschlägt
    const releaseDescription = ref('')

    // UI-States für bessere User Experience (UX)
    const isLoading = ref(false)
    const error = ref(null)

    /**
     * Ruft das neueste Release asynchron von der GitHub API ab.
     * Behandelt Fehler und setzt Fallback-Werte.
     * * @async
     * @param {string} fallbackVersion - Ein initialer Wert (z.B. aus config/i18n), der angezeigt wird, bis die API antwortet.
     * @returns {Promise<void>}
     */
    const fetchLatestRelease = async (fallbackVersion) => {
        // Reset States
        isLoading.value = true
        error.value = null

        // Optimistisches UI: Fallback sofort setzen
        if (!latestVersion.value) {
            latestVersion.value = fallbackVersion
        }

        try {
            const response = await fetch(BASE_API_URL)

            if (response.ok) {
                const data = await response.json()

                // 1. Version (Tag)
                latestVersion.value = data.tag_name

                // 2. Codename (Title)
                // Logik: GitHub nutzt oft den Tag als Titel. Wir wollen den Titel nur,
                // wenn er *nicht* identisch mit dem Tag ist (Redundanzvermeidung).
                // Optional Chaining (?.) schützt vor null/undefined.
                const name = data.name?.trim()
                const tag = data.tag_name?.trim()
                releaseName.value = (name && name !== tag) ? name : ''

                // 3. Metadaten
                releaseUrl.value = data.html_url
                releaseDescription.value = data.body || '' // Fallback auf leeren String

            } else {
                // HTTP-Fehler behandeln (z.B. 403 Rate Limit, 404 Not Found)
                const msg = `GitHub Release Fetch failed with status: ${response.status}`
                console.warn(msg)
                error.value = msg
            }
        } catch (err) {
            // Netzwerkfehler behandeln
            console.error('GitHub API Network Error:', err)
            error.value = 'Network error while fetching release.'
        } finally {
            // Loading State immer beenden
            isLoading.value = false
        }
    }

    return {
        latestVersion,
        releaseName,
        releaseUrl,
        releaseDescription,
        isLoading, // Neu: Für Lade-Spinner nutzbar
        error,     // Neu: Für Fehleranzeigen nutzbar
        fetchLatestRelease
    }
}