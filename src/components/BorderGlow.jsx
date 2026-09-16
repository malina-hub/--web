import { useRef } from 'react';
import './BorderGlow.css';

export default function BorderGlow({ children, className = '', borderRadius = 28, colors = ['#c084fc', '#f472b6', '#38bdf8'] }) {
  const ref = useRef(null);
  const move = (event) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--glow-x', `${event.clientX - rect.left}px`);
    ref.current.style.setProperty('--glow-y', `${event.clientY - rect.top}px`);
  };
  return <div ref={ref} className={`border-glow ${className}`} style={{ '--border-radius': `${borderRadius}px`, '--glow-colors': colors.join(',') }} onPointerMove={move}><div className="border-glow__inner">{children}</div></div>;
}
