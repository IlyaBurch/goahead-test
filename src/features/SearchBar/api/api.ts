// async function searchAutocomplete(query: string) {

import type { VideoResponse } from "@/shared/types/videos";

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_BASE_URL

export async function autocompleteSearch(query: string) {
  const url = `${BASE_URL}?part=snippet&q=${encodeURIComponent(query)}&maxResults=${10}&key=${API_KEY}&type=video`;

  const response = await fetch(url);
  if (response.ok) {
    const data = response.json();
    const list = data as Promise<VideoResponse>;
    return (await list).items.map((item) => item.snippet.title)
  }
  throw new Error();
}