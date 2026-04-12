import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { batchesApi } from '@/lib/api';
import { imgBatchUrl, formatDate } from '@/lib/utils';
import type { Batch } from '@/types';

export default function FeedPage() {
  const [batches, setBatches] = useState<Batch[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    batchesApi.list()
      .then((res) => {
        if (res.success && res.data) {
          // created_at DESC（APIがそう返すが念のため）
          const sorted = [...res.data].sort((a, b) => b.created_at - a.created_at);
          setBatches(sorted);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#0f1115' }}>
      <header style={{
        padding: '2rem 1.5rem 1rem',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <h1 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#f1f5f9' }}>
          tokyo86
        </h1>
        <p style={{ margin: '0.25rem 0 0', fontSize: '0.8rem', color: '#64748b' }}>
          中山正之のwebtoon
        </p>
      </header>

      <main style={{ padding: '1.5rem', maxWidth: '960px', margin: '0 auto' }}>
        {loading && (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>読み込み中...</div>
        )}

        {!loading && batches.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>
            作品は準備中です
          </div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
        }}>
          {batches.map((batch) => (
            <Link
              key={batch.batch_id}
              to={`/b/${batch.batch_id}`}
              style={{ display: 'block', textDecoration: 'none' }}
            >
              <div
                className="glass"
                style={{ borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {/* サムネイル */}
                <div style={{ aspectRatio: '1/1', background: '#1e293b', overflow: 'hidden' }}>
                  {batch.total_images > 0 ? (
                    <img
                      src={imgBatchUrl(batch.batch_id, 1)}
                      alt={batch.name || batch.batch_id}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontSize: '0.75rem' }}>
                      no image
                    </div>
                  )}
                </div>

                {/* 情報 */}
                <div style={{ padding: '0.75rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.25rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {batch.name || batch.batch_id}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#64748b' }}>
                    <span>{formatDate(batch.created_at)}</span>
                    <span>{batch.total_images}枚</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
