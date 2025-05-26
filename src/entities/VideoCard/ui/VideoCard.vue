<script lang="ts" setup>
import { FavoritesButton } from '@/features/FavoritesButton'
import type { Video } from '@/shared/types/videos'
import Card from 'primevue/card'

import Image from 'primevue/image'

const { video } = defineProps<{
  video: Video
}>()
</script>

<template>
  <Card>
    <template #header>
      <Image :src="video.snippet.thumbnails.high.url" :alt="video.snippet.title" />
    </template>
    <template #title>
      <span class="title">{{ video.snippet.title }}</span>
    </template>
    <template #subtitle>
      <span class="subtitle">{{
        `${video.snippet.channelTitle} • ${video.snippet.liveBroadcastContent} просмотров`
      }}</span>
    </template>
    <template #footer>
      <FavoritesButton :video />
    </template>
  </Card>
</template>

<style scoped>
.title {
  font-size: min(5vw, 1rem);
  padding: 0;
}
.subtitle {
  font-size: min(5vw, 0.8rem);
}
</style>
