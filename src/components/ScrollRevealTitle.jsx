import { useEffect, useRef, useState } from 'react';
import './ScrollRevealTitle.css';

export default function ScrollRevealTitle({ as: Tag = 'h2', children, className = '' }) {
  const titleRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const text = String(children);

  useEffect(() => {
    const node = titleRef.current;
    if (!node) return undefined;

    if (!('IntersectionObserver' in window)) {
      setIsRevealed(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsRevealed(true);
        observer.disconnect();
      }
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.18 });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={titleRef}
      className={`scroll-reveal-title ${isRevealed ? 'is-revealed' : ''} ${className}`.trim()}
      aria-label={text}
    >
      {Array.from(text).map((character, index) => (
        <span key={`${character}-${index}`} aria-hidden="true" style={{ '--reveal-index': index }}>
          {character === ' ' ? '\u00a0' : character}
        </span>
      ))}
    </Tag>
  );
}
