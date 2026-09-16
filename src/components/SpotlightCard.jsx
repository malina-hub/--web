import { useRef } from 'react';
import './SpotlightCard.css';

export default function SpotlightCard({ children, className = '', spotlightColor = 'rgba(0, 229, 255, 0.2)' }) {
  const ref = useRef(null);
  const move = (event) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`);
    ref.current.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`);
  };
  return <div ref={ref} className={`spotlight-card ${className}`} style={{ '--spotlight-color': spotlightColor }} onPointerMove={move}>{children}</div>;
}
