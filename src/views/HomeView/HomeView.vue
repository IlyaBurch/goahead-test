<script setup lang="ts">
import { VideoList } from '@/widgets/VideoList'
import { onMounted } from 'vue'
import { useMainStore } from './store'
import { Button } from 'primevue'

const store = useMainStore()

onMounted(async () => {
  await store.loadItems('')
})
</script>

<template>
  <h2 class="p-2 text-2xl">Главная страница</h2>
  <VideoList :items="store.items" :loading="store.loading" />
  <div class="flex justify-center p-4">
    <Button @click="store.loadMore" label="Загрузить еще"></Button>
  </div>
</template>
