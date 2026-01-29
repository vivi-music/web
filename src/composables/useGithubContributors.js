import { ref } from 'vue'

export function useGithubContributors() {
    const contributors = ref([])
    const isLoading = ref(true)

    // API Endpunkt (max 30 Contributors per Default, kann via ?per_page=100 erhöht werden)
    const API_URL = 'https://api.github.com/repos/vivizzz007/vivi-music/contributors?per_page=100'

    const fetchContributors = async () => {
        try {
            const response = await fetch(API_URL)
            if (response.ok) {
                const data = await response.json()
                // Wir filtern Bots heraus (optional, oft haben Bots 'type': 'Bot')
                contributors.value = data.filter(user => user.type !== 'Bot')
            }
        } catch (error) {
            console.error('Failed to fetch contributors:', error)
        } finally {
            isLoading.value = false
        }
    }

    return {
        contributors,
        isLoading,
        fetchContributors
    }
}