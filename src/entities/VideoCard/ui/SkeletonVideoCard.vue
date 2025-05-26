<script lang="ts" setup>
import { Skeleton } from 'primevue'
import Card from 'primevue/card'
</script>

<template>
  <Card>
    <template #header>
      <Skeleton class="aspect-video" height="100%" />
    </template>
    <template #title>
      <Skeleton />
    </template>
    <template #subtitle>
      <Skeleton width="10rem" />
    </template>
  </Card>
</template>

<style scoped></style>
