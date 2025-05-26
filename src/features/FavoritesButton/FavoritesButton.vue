<script setup lang="ts">
import { computed } from 'vue'
import { useFavoriteStore } from '@/views/FavoriteView/store'
import type { Video } from '@/shared/types/videos'
import { Button } from 'primevue'

const props = defineProps<{
  video: Video
}>()

const favoriteStore = useFavoriteStore()

const isFavorite = computed(() => favoriteStore.items.some((item) => item.id === props.video.id))

function toggleFavorite() {
  if (isFavorite.value) {
    favoriteStore.remove(props.video)
  } else {
    favoriteStore.add(props.video)
  }
}
</script>

<template>
  <Button @click="toggleFavorite">
    {{ isFavorite ? '★ Удалить из избранного' : '☆ В избранное' }}
  </Button>
</template>
