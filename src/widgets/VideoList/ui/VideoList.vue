<script lang="ts" setup>
import { SkeletonVideoCard, VideoCard } from '@/entities/VideoCard'
import type { Video } from '@/shared/types/videos'

const { items, loading } = defineProps<{ items: Video[]; loading: boolean }>()

const skeletonItems = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
]
</script>

<template>
  <section
    v-if="!loading && items"
    class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
  >
    <VideoCard class="w-fullsm:w-md" v-for="video in items" :key="video.id.videoId" :video />
  </section>
  <section
    v-if="loading && items"
    class="grid grid-cols-1 gap-4 overflow-hidden sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
  >
    <SkeletonVideoCard class="w-fullsm:w-md" v-for="item in skeletonItems" :key="item.id" />
  </section>
  <p v-if="!items">Ничего не найдено</p>
</template>

<style></style>
