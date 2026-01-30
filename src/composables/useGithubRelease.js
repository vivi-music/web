/**
 * @file useGithubRelease.js
 * @description Composable for interacting with the GitHub Releases API.
 * This module encapsulates the logic for fetching the latest version information 
 * and release notes for the Vivi Music app.
 * @module composables/useGithubRelease
 */

import { ref } from 'vue'

// --- SHARED STATE ---
// These variables are defined outside the function so that they maintain a global 
// singleton state across the entire application. Multiple components (e.g., Hero 
// and Footer) can use this composable simultaneously without triggering 
// redundant network requests.
const latestVersion = ref(null)
const releaseName = ref('')
const releaseUrl = ref('https://github.com/vivizzz007/vivi-music/releases')
const releaseDescription = ref('')
const isLoading = ref(false)
const error = ref(null)
let isFetching = false

/**
 * Provides access to GitHub release data and the fetching logic.
 * @returns {Object} An interface containing reactive references and the fetch method.
 */
export function useGithubRelease() {

    /**
     * Asynchronously fetches the latest release details from the GitHub API.
     * Handles error states and provides fallback values during the loading process.
     * @async
     * @param {string} [fallbackVersion] - An initial version string to display until the API responds.
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