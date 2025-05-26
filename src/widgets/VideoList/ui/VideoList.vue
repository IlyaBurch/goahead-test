<script lang="ts" setup>
import { SkeletonVideoCard, VideoCard } from '@/entities/VideoCard'
import { ref, computed, onMounted } from 'vue'

const isActive = ref(false)

const toggleState = () => {
  isActive.value = true
  setTimeout(() => {
    isActive.value = false
  }, 1000)
}

// Запускаем при монтировании
onMounted(() => {
  toggleState()
})

// Вычисляемое свойство
const computedState = computed(() => isActive.value)

const items = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
]
</script>

<template>
  <section
    v-if="!computedState"
    class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
  >
    <VideoCard class="w-fullsm:w-md" v-for="item in items" :key="item.id" />
  </section>
  <section v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
    <SkeletonVideoCard class="w-fullsm:w-md" v-for="item in items" :key="item.id" />
  </section>
</template>

<style></style>
