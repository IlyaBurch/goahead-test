<script lang="ts" setup>
import { SearchBar } from '@/features/SearchBar'
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
  <header
    class="sticky top-0 flex items-center justify-between gap-3 border-b-2 border-black bg-white p-3"
  >
    <div class="flex items-center-safe">
      <YoutubeLogo height="2rem" width="3rem" />
      <h1 class="md: hidden text-2xl font-bold antialiased sm:block">Поиск видео на youtube</h1>
    </div>
    <SearchBar class="max-w-5xl" />
    <MenuButtonPopup :items />
  </header>
</template>

<style></style>
