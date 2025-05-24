<script lang="ts" setup>
import YoutubeLogo from '@/shared/ui/icons/YoutubeLogo/YoutubeLogo.vue'
import { MenuButtonPopup } from '@/shared/ui/MenuButtonPopup'

import { ref } from 'vue'

const items = ref([
  {
    label: 'Поиск видео',
    icon: 'pi pi-search',
    route: '/',
  },
  {
    label: 'Избранные видео',
    icon: 'pi pi-heart',
    route: '/favorite',
  },
])
</script>

<template>
  <header class="flex items-center justify-between border-b-2 border-black p-3">
    <div class="flex items-center-safe">
      <YoutubeLogo height="2rem" width="3rem" />
      <h1 class="text-3xl font-bold antialiased">Поиск видео на youtube</h1>
    </div>
    <MenuButtonPopup :items />
  </header>
</template>

<style></style>
