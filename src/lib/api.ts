import type { Batch, BatchWithImages, Work, ApiResponse } from '@/types';

const API = import.meta.env.VITE_API_URL || 'https://tokyo86-api.belong2jazz.workers.dev';

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${API}${path}`);
  if (!res.ok) throw new Error(`API ${res.status}: ${path}`);
  return res.json();
}

export const batchesApi = {
  list: () => get<ApiResponse<Batch[]>>('/api/batches?purpose=toon'),
  get: (batchId: string) => get<ApiResponse<BatchWithImages>>(`/api/batches/${batchId}`),
};

export const worksApi = {
  list: () => get<ApiResponse<Work[]>>('/api/works?type=comic&status=published'),
  get: (slug: string) => get<ApiResponse<Work>>(`/api/works/${slug}`),
};
