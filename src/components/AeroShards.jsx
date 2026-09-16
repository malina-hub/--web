import { useEffect, useRef } from 'react';
import './AeroShards.css';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export default function AeroShards({
  backgroundColor = '#120F17',
  shardColor = '#ffffff',
  accentColor = '#020dad',
  placement = 'center',
  flow = 'stream',
  speed = 0.6,
  scale = 1.35,
  spread = 0.6,
  depth = 0.85,
  density = 0.6,
  shardSize = 1.3,
  stretch = 0.9,
  turbulence = 0.6,
  glow = 1,
  grain = 0.0375,
  chromaticAberration = 0.0065
}) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    let shards = [];
    let raf = 0;

    canvas.className = 'aero-shards__canvas';
    root.appendChild(canvas);

    const hex = value => {
      const color = value.replace('#', '');
      return [
        Number.parseInt(color.slice(0, 2), 16),
        Number.parseInt(color.slice(2, 4), 16),
        Number.parseInt(color.slice(4, 6), 16)
      ];
    };

    const base = hex(shardColor);
    const accent = hex(accentColor);

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = root.clientWidth * dpr;
      canvas.height = root.clientHeight * dpr;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      const count = Math.max(240, Math.round(760 * density));
      shards = Array.from({ length: count }, (_, index) => ({
        phase: Math.random(),
        lane: Math.sign(Math.random() - 0.5) * Math.pow(Math.random(), 0.72),
        depth: Math.random(),
        phaseOffset: Math.random() * Math.PI * 2,
        size: (0.0007 + Math.pow(Math.random(), 2.6) * 0.008) * shardSize * scale,
        aspect: 0.44 + Math.random() * 0.44,
        twist: (Math.random() - 0.5) * 0.48,
        accent: index % 9 === 0
      }));
    };

    const pointOnStream = (shard, elapsed) => {
      if (placement === 'center' && flow === 'stream') {
        const phase = (shard.phase + elapsed * speed * 0.038) % 1;
        const angle = phase * Math.PI * 2 - Math.PI * 0.25;
        const wobble = Math.sin(phase * Math.PI * 12 + shard.phaseOffset) * turbulence * 0.018;
        const radius = clamp(
          0.74 + shard.lane * spread * 0.4 + (shard.depth - 0.5) * depth * 0.2 + wobble,
          0.48,
          1.02
        );
        return {
          x: 0.5 + Math.cos(angle) * radius * 0.54,
          y: 0.5 + Math.sin(angle) * radius * 0.54,
          rotation: angle + Math.PI * 0.5 + shard.twist
        };
      }

      const phase = (shard.phase + elapsed * speed * 0.03) % 1;
      return {
        x: phase,
        y: 0.5 + Math.sin(phase * Math.PI * 2 + shard.phaseOffset) * 0.28,
        rotation: shard.twist
      };
    };

    const drawDiamond = (x, y, width, height, color, alpha) => {
      context.globalAlpha = alpha;
      context.fillStyle = color;
      context.beginPath();
      context.moveTo(x - width, y);
      context.lineTo(x, y - height);
      context.lineTo(x + width, y);
      context.lineTo(x, y + height);
      context.closePath();
      context.fill();
    };

    const draw = timestamp => {
      const width = root.clientWidth || 1;
      const height = root.clientHeight || 1;
      const elapsed = timestamp * 0.001;
      context.clearRect(0, 0, width, height);
      context.fillStyle = backgroundColor;
      context.fillRect(0, 0, width, height);

      const halo = context.createRadialGradient(width * 0.5, height * 0.5, 0, width * 0.5, height * 0.5, Math.max(width, height) * 0.65);
      halo.addColorStop(0, `rgba(${accent.join(',')},${0.025 * glow})`);
      halo.addColorStop(1, 'rgba(0,0,0,0)');
      context.fillStyle = halo;
      context.fillRect(0, 0, width, height);

      for (const shard of shards) {
        const point = pointOnStream(shard, elapsed);
        const perspective = 0.54 + shard.depth * depth;
        const shardWidth = shard.size * width * perspective * (1 + spread * 0.18);
        const shardHeight = shardWidth * shard.aspect * (1 + stretch * 0.12);
        const color = shard.accent ? accent : base;
        const alpha = 0.055 + shard.depth * 0.39;
        const ghost = Math.max(0.8, width * chromaticAberration * (0.26 + shard.depth * 0.22));

        context.save();
        context.translate(point.x * width, point.y * height);
        context.rotate(point.rotation);
        drawDiamond(-ghost, 0, shardWidth, shardHeight, 'rgba(255,54,76,.82)', alpha * 0.3);
        drawDiamond(ghost, 0, shardWidth, shardHeight, 'rgba(28,118,255,.86)', alpha * 0.34);
        context.shadowBlur = 6 * glow * perspective;
        context.shadowColor = `rgba(${color.join(',')},.42)`;
        drawDiamond(0, 0, shardWidth, shardHeight, `rgba(${color.join(',')},.92)`, alpha);
        context.restore();
      }

      if (grain > 0) {
        context.fillStyle = `rgba(255,255,255,${grain * 0.075})`;
        for (let index = 0; index < 130; index += 1) {
          context.fillRect(Math.random() * width, Math.random() * height, 1, 1);
        }
      }

      raf = window.requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(() => {
      resize();
      seed();
    });

    observer.observe(root);
    resize();
    seed();
    root.dataset.ready = 'true';
    raf = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(raf);
      observer.disconnect();
      canvas.remove();
    };
  }, [accentColor, backgroundColor, chromaticAberration, density, depth, flow, glow, grain, placement, scale, shardColor, shardSize, speed, spread, stretch, turbulence]);

  return <div ref={ref} className="aero-shards" aria-hidden="true" />;
}
