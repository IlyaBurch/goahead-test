<script lang="ts" setup>
import { AutoComplete, Button } from 'primevue'

const input = defineModel('input')
</script>
<template>
  <div class="flex w-full">
    <div class="w-full">
      <AutoComplete fluid v-model="input" placeholder="Поиск видео" />
    </div>
    <Button icon="pi pi-search" iconPos="top" />
  </div>
</template>

<style scoped></style>
