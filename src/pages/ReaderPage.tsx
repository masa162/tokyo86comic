import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { batchesApi } from '@/lib/api';
import { imgBatchUrl } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import type { BatchWithImages } from '@/types';

export default function ReaderPage() {
  const { batchId } = useParams<{ batchId: string }>();
  const [batch, setBatch] = useState<BatchWithImages | null>(null);
  const [loading, setLoading] = useState(true);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (!batchId) return;
    batchesApi.get(batchId)
      .then((res) => {
        if (res.success && res.data) setBatch(res.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));

    const timer = setTimeout(() => setShowHeader(false), 3000);
    return () => clearTimeout(timer);
  }, [batchId]);

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', color: '#fff' }}>
        読み込み中...
      </div>
    );
  }

  if (!batch) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center', color: '#64748b' }}>
        見つかりませんでした
        <div style={{ marginTop: '1rem' }}>
          <Link to="/" style={{ color: '#94a3b8' }}>← 一覧に戻る</Link>
        </div>
      </div>
    );
  }

  const images = [...(batch.images || [])].sort((a, b) => a.sequence_number - b.sequence_number);

  return (
    <div
      style={{ background: '#000', minHeight: '100vh' }}
      onClick={() => setShowHeader((v) => !v)}
    >
      {/* ヘッダー */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '56px',
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(10px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          padding: '0 1rem',
          color: 'white',
          transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', color: 'white', padding: '0.5rem' }}
        >
          <ArrowLeft size={20} />
        </Link>
        <div style={{ marginLeft: '0.5rem', flex: 1, overflow: 'hidden' }}>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {batch.name || batch.batch_id}
          </div>
          <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{images.length}枚</div>
        </div>
      </header>

      {/* 画像（縦スクロール） */}
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
        {images.map((img) => (
          <img
            key={img.id}
            src={imgBatchUrl(batch.batch_id, img.sequence_number)}
            alt={`p${img.sequence_number}`}
            style={{ width: '100%', display: 'block', height: 'auto', marginBottom: '-1px' }}
            loading="lazy"
          />
        ))}

        {images.length === 0 && (
          <div style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
            画像がありません
          </div>
        )}

        {/* フッター */}
        <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              padding: '0.9rem 3rem',
              background: '#1e293b',
              color: '#e2e8f0',
              borderRadius: '99px',
              fontWeight: 700,
              fontSize: '0.9rem',
            }}
          >
            一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
