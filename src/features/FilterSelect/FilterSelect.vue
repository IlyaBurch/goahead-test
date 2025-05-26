<script setup lang="ts">
import { useMainStore } from '@/views/HomeView/store'
import { Select } from 'primevue'

const store = useMainStore()

const orderOptions = [
  { label: 'Релевантность', value: 'relevance' },
  { label: 'Дата', value: 'date' },
  { label: 'Популярность', value: 'viewCount' },
]
</script>

<template>
  <div class="flex gap-2">
    <Select
      v-model="store.order"
      :options="orderOptions"
      optionLabel="label"
      option-value="value"
      @change="store.updateFilters(store.order)"
    />
  </div>
</template>
