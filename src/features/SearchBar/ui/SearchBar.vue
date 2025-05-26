<script lang="ts" setup>
import { AutoComplete } from 'primevue'

const input = defineModel('input')
</script>
<template>
  <section class="w-full">
    <AutoComplete fluid v-model="input" placeholder="Поиск видео" />
  </section>
</template>

<style scoped></style>
