// stores/articles.ts
import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: [] as Array<{ id: number; title: string; body: string }>,
    selectedArticle: null as null | { id: number; title: string; body: string },
    currentPage: 1,
    perPage: 10
  }),
  getters: {
    paginatedArticles: (state) => {
      const start = (state.currentPage - 1) * state.perPage
      const end = start + state.perPage
      return state.articles.slice(start, end)
    },
    totalPages: (state) => Math.ceil(state.articles.length / state.perPage)
  },
  actions: {
    async fetchArticles() {

      const config = useRuntimeConfig()
      const apiUrl = config.public.API_URL || 'https://jsonplaceholder.typicode.com'
      const limit = Number(config.public.POSTS_LIMIT) || 25
      const res = await axios.get(`${apiUrl}/posts`)
      this.articles = res.data.slice(0, limit)
    },
    selectArticle(article: { id: number; title: string; body: string }) {
      this.selectedArticle = article
    },
    clearArticle() {
      this.selectedArticle = null
    },
    goToPage(page: number) {
      this.currentPage = page
    }
  }
})
