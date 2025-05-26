<script setup lang="ts">
import { VideoList } from '@/widgets/VideoList'
import { useMainStore } from '../HomeView/store'
import { watch } from 'vue'
import { Button } from 'primevue'

const props = defineProps({
  query: String,
})

const store = useMainStore()

watch(
  () => props.query,
  () => store.loadItems(props.query ?? ''),
  { immediate: true },
)
</script>

<template>
  <h2 class="p-2 text-2xl">Поиск по запросу: {{ props.query }}</h2>
  <VideoList :items="store.items" :loading="store.loading" />
  <div class="flex justify-center p-4">
    <Button @click="store.loadMore" label="Загрузить еще"></Button>
  </div>
</template>
