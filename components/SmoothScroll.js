import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function SmoothScroll() {
  useEffect(() => {
    let smoother;
    gsap.registerPlugin(ScrollTrigger);

    (async () => {
      try {
        const mod = await import('gsap/dist/ScrollSmoother');
        const ScrollSmoother = mod.ScrollSmoother || mod.default;
        if (ScrollSmoother?.create) {
          gsap.registerPlugin(ScrollSmoother);
          smoother = ScrollSmoother.create({ smooth: 1, effects: true, normalizeScroll: true });
        }
      } catch (_err) {
        // Fallback gracefully when ScrollSmoother isn't available.
      }
    })();

    return () => smoother?.kill();
  }, []);

  return null;
}
