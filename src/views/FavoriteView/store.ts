import type { Video } from "@/shared/types/videos";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoriteStore = defineStore('favorites', () => {
  const savedFavorites = localStorage.getItem('favorites')
  const items = ref<Video[]>(savedFavorites ? JSON.parse(savedFavorites) : [])

  const saveToLocalStorage = () => {
    localStorage.setItem('favorites', JSON.stringify(items.value))
  }

  function add(video: Video) {
    items.value.push(video)
    saveToLocalStorage()
  }

  function remove(video: Video) {
    items.value = items.value.filter(item => item.id !== video.id)
    saveToLocalStorage()
  }

  return { items, add, remove }
})