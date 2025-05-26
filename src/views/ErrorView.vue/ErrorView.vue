<template>
  <div v-if="store.error">
    <h2 class="text-3xl">Ой, у нас поломка</h2>
    <p class="text-2xl">Код поломки: {{ store.error?.error.code }}</p>
    <p>{{ store.error?.error.message }}</p>
    {{ store.error.error }}
  </div>
  <div v-else>
    <h2>Такой страницы еще не существует</h2>
    <Button label="Вернуться на главную" @click="router.push({ name: 'home' })" />
  </div>
</template>

<script lang="ts" setup>
import { Button } from 'primevue'
import { useMainStore } from '../HomeView/store'
import router from '@/router'

const store = useMainStore()
</script>

<style></style>
