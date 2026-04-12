const IMG = 'https://img.tokyo86.com';

export function imgBatchUrl(batchId: string, seq: number): string {
  return `${IMG}/${batchId}/${String(seq).padStart(3, '0')}.webp`;
}

export function imgUrl(imageId: string): string {
  if (!imageId) return '';
  return `${IMG}/${imageId}`;
}

export function formatDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
