export interface Batch {
  id: string;
  batch_id: string;
  name: string | null;
  description: string | null;
  episode_id: string | null;
  total_images: number;
  created_at: number;
  updated_at: number;
}

export interface BatchImage {
  id: string;
  filename: string;
  batch_id: string;
  sequence_number: number;
  created_at: number;
  updated_at: number;
}

export interface BatchWithImages extends Batch {
  images: BatchImage[];
}

export interface Work {
  id: string;
  type: 'comic' | 'illustration';
  title: string;
  slug: string;
  description: string | null;
  author: string;
  status: 'draft' | 'published' | 'archived';
  thumbnail_image_id: string | null;
  created_at: number;
  updated_at: number;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
