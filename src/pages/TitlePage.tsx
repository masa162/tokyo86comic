import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// 将来: /title/:slug で特定作品のエピソード一覧を表示
// 今はスケルトンのみ
export default function TitlePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0f1115', padding: '2rem 1.5rem' }}>
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', marginBottom: '2rem' }}>
        <ArrowLeft size={16} />
        <span style={{ fontSize: '0.85rem' }}>一覧に戻る</span>
      </Link>
      <div style={{ textAlign: 'center', padding: '4rem 0', color: '#475569' }}>
        準備中
      </div>
    </div>
  );
}
