import router from "@/router";
import { searchVideos } from "@/shared/api";
import type { IError } from "@/shared/types/error";
import type { Video } from "@/shared/types/videos";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore('main', () => {
  const loading = ref(false);
  const items = ref<Video[]>([]);
  const error = ref<IError | null>(null);
  const query = ref('');
  const order = ref<string>('relevance');
  const nextPageToken = ref<string | null>(null);

  const maxResults = 12;

  async function loadItems(newQuery: string, newOrder?: typeof order.value) {
    loading.value = true;
    error.value = null;

    if (newOrder) order.value = newOrder;
    query.value = newQuery;
    nextPageToken.value = null;
    items.value = [];

    try {
      const response = await searchVideos(query.value, order.value, maxResults, undefined);

      if ('error' in response) {
        error.value = response;
        router.push({ name: 'error' });
        return;
      }

      items.value = response.items;
      nextPageToken.value = response.nextPageToken ?? null;
    } catch (err) {
      console.error('Unexpected error:', err);
    } finally {
      loading.value = false;
    }
  }

  async function loadMore() {
    if (!nextPageToken.value || loading.value) return;

    loading.value = true;
    error.value = null;

    try {
      const response = await searchVideos(query.value, order.value, maxResults, nextPageToken.value);

      if ('error' in response) {
        error.value = response;
        router.push({ name: 'error' });
        return;
      }

      items.value.push(...response.items);
      nextPageToken.value = response.nextPageToken ?? null;
    } catch (err) {
      console.error('Unexpected error:', err);
    } finally {
      loading.value = false;
    }
  }

  function updateFilters(newOrder: typeof order.value) {
    order.value = newOrder;
    console.log(newOrder)
    loadItems(query.value);
  }



  return {
    loading,
    items,
    error,
    query,
    order,
    loadItems,
    loadMore,
    updateFilters,
  };
});
