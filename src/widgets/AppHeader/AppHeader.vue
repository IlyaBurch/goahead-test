<script lang="ts" setup>
import { FilterSelect } from '@/features/FilterSelect'
import { SearchBar } from '@/features/SearchBar'
import YoutubeLogo from '@/shared/ui/icons/YoutubeLogo/YoutubeLogo.vue'
import { MenuButtonPopup } from '@/shared/ui/MenuButtonPopup'
import type { MenuItem } from 'primevue/menuitem'
import router from '@/router'

import { ref } from 'vue'

const items = ref<MenuItem[]>([
  {
    label: 'Домашняя страница',
    icon: 'pi pi-home',
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
    class="sticky top-0 z-50 flex items-center justify-between gap-3 border-b-2 border-black bg-white p-3"
  >
    <button class="point flex cursor-pointer items-center-safe" @click="router.push('/')">
      <YoutubeLogo height="2rem" width="3rem" />
      <h1 class="md: hidden text-2xl font-bold antialiased sm:block">Поиск видео на youtube</h1>
    </button>
    <SearchBar class="max-w-5xl" />
    <FilterSelect />
    <MenuButtonPopup :items />
  </header>
</template>
<style></style>
