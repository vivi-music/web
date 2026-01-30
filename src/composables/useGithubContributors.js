import { ref } from 'vue'

export function useGithubContributors() {
    const contributors = ref([])
    const isLoading = ref(true)

    // API Endpoint for fetching contributors.
    // By default, GitHub returns 30 items. We increase this to 100 to ensure we catch everyone.
    const API_URL = 'https://api.github.com/repos/vivizzz007/vivi-music/contributors?per_page=100'

    const fetchContributors = async () => {
        try {
            const response = await fetch(API_URL)
            if (response.ok) {
                const data = await response.json()
                // Filter out automated accounts (Bots) to only show human contributors.
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