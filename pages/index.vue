<template>
    <div class="bg-gray-100">
        <div class="max-w-5xl mx-auto p-6 min-h-screen">
            <!-- Título principal -->
            <h1 class="text-4xl sm:text-5xl font-extrabold mb-6 text-center text-gray-800">
                Artículos
            </h1>

            <!-- Buscador -->
            <div class="mb-6 flex justify-center">
                <input v-model="search" type="text" placeholder="Buscar por título..."
                    class="w-full sm:w-1/2 p-3 border bg-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400" />
            </div>

            <!-- Lista de artículos -->
            <ul v-if="!selectedArticle" class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <li v-for="article in filteredArticles" :key="article.id"
                    class="p-5 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
                    <div>
                        <h2 class="text-xl font-semibold mb-2 text-gray-900">{{ article.title }}</h2>
                        <p class="text-gray-700">{{ article.body.substring(0, 100) }}...</p>
                    </div>
                    <NuxtLink :to="`/posts/${article.id}`"
                        class="mt-4 inline-block text-center px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors duration-200">
                        Ver más detalles
                    </NuxtLink>
                </li>
            </ul>

            <!-- Paginador -->
            <div v-if="!selectedArticle && totalPages > 1" class="flex justify-center mt-6 space-x-2">
                <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="[
                    'px-4 py-2 rounded-lg border',
                    page === currentPage ? 'bg-red-500 text-white border-red-500' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-200'
                ]">
                    {{ page }}
                </button>
            </div>



        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useArticlesStore } from '~/stores/articles'

const store = useArticlesStore()

const search = ref('')


onMounted(() => {
    store.fetchArticles()
})


watch(search, () => {
    store.goToPage(1)
})


const filteredArticles = computed(() => {
    let articles = store.articles
    if (search.value) {
        articles = articles.filter(a =>
            a.title.toLowerCase().includes(search.value.toLowerCase())
        )
    }

    const start = (store.currentPage - 1) * store.perPage
    const end = start + store.perPage
    return articles.slice(start, end)
})


const totalPages = computed(() => {
    let articles = store.articles
    if (search.value) {
        articles = articles.filter(a =>
            a.title.toLowerCase().includes(search.value.toLowerCase())
        )
    }
    return Math.ceil(articles.length / store.perPage)
})

const currentPage = computed(() => store.currentPage)
const goToPage = (page: number) => store.goToPage(page)
const selectedArticle = computed(() => store.selectedArticle)
</script>
