import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import HomePage from './App';
import CarnivalPage from './pages/CarnivalPage';
import FrameworkPage from './pages/FrameworkPage';
import './index.css';

function SiteRouter() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const syncRoute = () => setHash(window.location.hash);
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  const path = (hash.replace(/^#/, '').split('?')[0] || '/').replace(/\/$/, '') || '/';
  if (path === '/products/carnival') return <CarnivalPage />;
  if (path === '/') return <HomePage />;
  return <FrameworkPage path={path} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><SiteRouter /></React.StrictMode>
);
