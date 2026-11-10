import { useEffect, useRef } from 'react';

/** Decorative network, drawn locally without an external animation dependency. */
export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let width = 0;
    let height = 0;
    let points: { x: number; y: number; dx: number; dy: number }[] = [];
    const draw = () => {
      context.clearRect(0, 0, width, height);
      points.forEach((point, i) => {
        if (!media.matches) {
          point.x += point.dx;
          point.y += point.dy;
          if (point.x < 0 || point.x > width) point.dx *= -1;
          if (point.y < 0 || point.y > height) point.dy *= -1;
        }
        points.slice(i + 1).forEach(other => {
          const distance = Math.hypot(point.x - other.x, point.y - other.y);
          if (distance < 175) {
            context.strokeStyle = `rgba(131, 155, 201, ${0.28 * (1 - distance / 175)})`;
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        });
        context.fillStyle = i % 3 === 0 ? '#38bdf8' : '#818cf8';
        context.beginPath();
        context.arc(point.x, point.y, i % 4 === 0 ? 2 : 1.2, 0, Math.PI * 2);
        context.fill();
      });
      if (!media.matches && !document.hidden) frame = requestAnimationFrame(draw);
    };
    const restart = () => {
      cancelAnimationFrame(frame);
      draw();
    };
    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      let seed = 42;
      const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
      points = Array.from({ length: Math.min(115, Math.round(width / 10)) }, (_, i) => ({
        x: random() * width,
        y: random() * height,
        dx: Math.sin(i + 1) * 0.15,
        dy: Math.cos(i + 1) * 0.15,
      }));
      restart();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    media.addEventListener('change', restart);
    document.addEventListener('visibilitychange', restart);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      media.removeEventListener('change', restart);
      document.removeEventListener('visibilitychange', restart);
    };
  }, []);
  return <canvas ref={canvasRef} className="particle-background" aria-hidden="true" />;
}
