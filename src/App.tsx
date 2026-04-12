import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedPage from './pages/FeedPage';
import ReaderPage from './pages/ReaderPage';
import TitlePage from './pages/TitlePage';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/b/:batchId" element={<ReaderPage />} />
          <Route path="/title/:slug" element={<TitlePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
