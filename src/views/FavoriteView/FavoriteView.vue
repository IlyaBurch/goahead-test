<script lang="ts" setup>
import { VideoList } from '@/widgets/VideoList'
import { useFavoriteStore } from './store'

const store = useFavoriteStore()
</script>

<template>
  <h2>
    <p class="p-3 text-xl">Избранные видео</p>
  </h2>
  <VideoList :items="store.items" :loading="false" />
</template>

<style></style>
