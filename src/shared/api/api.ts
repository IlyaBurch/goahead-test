import type { VideoResponse } from "@/shared/types/videos";
import type { IError } from "../types/error";

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_BASE_URL

export async function searchVideos(
  query: string,
  order: string = "relevance",
  maxResults: number = 12,
  pageToken?: string,
): Promise<VideoResponse | IError> {
  const url = `${BASE_URL}?part=snippet&q=${encodeURIComponent(query)}&maxResults=${maxResults}&key=${API_KEY}&type=video&order=${order}` + (pageToken ? `&pageToken=${pageToken}` : '');

  try {
    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
      console.log('API error:', data);
      return data;
    }

    return data;
  } catch (err) {
    console.error('Fetch error:', err);
    return {
      error: {
        code: 500,
        message: 'Failed to fetch videos',
      },
    };
  }
}

