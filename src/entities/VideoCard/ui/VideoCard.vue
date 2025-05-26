<script lang="ts" setup>
import Card from 'primevue/card'

import Image from 'primevue/image'

// const { thumbnail, channel, name, views } = defineProps<{
//   thumbnail: string
//   channel: string
//   name: string
//   views: string
// }>()

const _name = 'Never gonna give you up'
const _channel = 'Rick Roll'
const _views = '3.5M'
</script>

<template>
  <Card>
    <template #header>
      <Image src="src/assets/maxresdefault.jpg" :alt="_name" />
    </template>
    <template #title>
      <span class="title">{{ _name }}</span>
    </template>
    <template #subtitle>
      <span class="subtitle">{{ `${_channel} • ${_views} просмотров` }}</span>
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
