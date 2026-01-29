<template>
    <div class="max-w-4xl mx-auto p-4">
        <button @click="$router.back()" class="mb-4 px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600">
            Volver
        </button>

        <h1 class="text-3xl font-bold mb-2">{{ post?.title }}</h1>
        <p>{{ post?.body }}</p>
    </div>
</template>

<script setup lang="ts">
import { useArticlesStore } from '~/stores/articles'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const store = useArticlesStore()
const route = useRoute()
const post = ref(store.articles.find(a => a.id === Number(route.params.id)))

onMounted(async () => {
    if (!post.value) {
        await store.fetchArticles()
        post.value = store.articles.find(a => a.id === Number(route.params.id))
    }
})
</script>
