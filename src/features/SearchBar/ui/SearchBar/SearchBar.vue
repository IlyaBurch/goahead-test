<script lang="ts" setup>
import router from '@/router'
import { Button, InputText } from 'primevue'
import { type ModelRef } from 'vue'

const goToSearch = () => {
  router.push({
    name: 'search',
    params: {
      query: input.value,
    },
  })
}

const input: ModelRef<string | undefined> = defineModel('input')
</script>

<template>
  <div class="flex w-full" @keyup.enter="goToSearch">
    <div class="w-full">
      <InputText fluid v-model="input" placeholder="Поиск видео" />
    </div>
    <Button icon="pi pi-search" iconPos="top" @click="goToSearch" title="Поиск" />
  </div>
</template>

<style scoped></style>
