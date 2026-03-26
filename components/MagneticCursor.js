import { useEffect } from 'react';

export default function MagneticCursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className =
      'pointer-events-none fixed z-[80] h-6 w-6 rounded-full border border-luxeCyan mix-blend-screen transition-transform duration-75';
    const glow = document.createElement('div');
    glow.className =
      'pointer-events-none fixed z-[79] h-24 w-24 rounded-full bg-luxeCyan/20 blur-2xl transition-transform duration-150';
    document.body.append(cursor, glow);

    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
      glow.style.transform = `translate(${e.clientX - 48}px, ${e.clientY - 48}px)`;
    };

    const magneticElements = () => document.querySelectorAll('.magnetic');
    const onEnter = (el) => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0,0)';
      });
    };

    magneticElements().forEach(onEnter);
    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
      cursor.remove();
      glow.remove();
    };
  }, []);

  return null;
}
