import { ref, onMounted } from 'vue'

export function useGithubRepo() {
  const stats = ref({
    stars: 0,
    forks: 0,
    watchers: 0
  })
  const isLoading = ref(true)

  const fetchRepoStats = async () => {
    try {
      const response = await fetch('https://api.github.com/repos/vivizzz007/vivi-music')
      if (response.ok) {
        const data = await response.json()
        stats.value = {
          stars: data.stargazers_count,
          forks: data.forks_count,
          watchers: data.subscribers_count
        }
      }
    } catch (error) {
      console.error('Failed to fetch repo stats:', error)
    } finally {
      isLoading.value = false
    }
  }

  onMounted(fetchRepoStats)

  return { stats, isLoading }
}
