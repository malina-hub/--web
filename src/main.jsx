import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import HomePage from './App';
import CarnivalPage from './pages/CarnivalPage';
import FrameworkPage from './pages/FrameworkPage';
import LightProductPage from './pages/LightProductPage';
import './index.css';

function SiteRouter() {
  const [hash, setHash] = useState(window.location.hash);
  const captureView = new URLSearchParams(window.location.search).get('capture');

  useEffect(() => {
    const syncRoute = () => {
      setHash(window.location.hash);
      window.requestAnimationFrame(() => {
        const section = new URLSearchParams(window.location.hash.split('?')[1] || '').get('section');
        if (section) document.getElementById(section)?.scrollIntoView();
        else window.scrollTo({ top: 0 });
      });
    };
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  useEffect(() => {
    const currentPath = (hash.replace(/^#/, '').split('?')[0] || '/').replace(/\/$/, '') || '/';
    if (currentPath === '/galaxy') {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#/`);
      setHash('#/');
    }
  }, [hash]);

  const path = (hash.replace(/^#/, '').split('?')[0] || '/').replace(/\/$/, '') || '/';
  if (captureView === 'tianguang-capabilities') return <LightProductPage capabilityOnly />;
  if (path === '/products/carnival') return <CarnivalPage />;
  if (path === '/products/tianguang') return <LightProductPage />;
  if (path === '/figma/tianguang-capabilities') return <LightProductPage capabilityOnly />;
  if (path === '/') return <HomePage />;
  return <FrameworkPage path={path} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><SiteRouter /></React.StrictMode>
);
