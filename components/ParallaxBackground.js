import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = Array.from({ length: 40 }, (_, i) => `https://picsum.photos/seed/naman-${i + 1}/1200/800`);

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      {images.map((src, idx) => {
        const y = useTransform(scrollYProgress, [0, 1], [0, -(idx + 1) * 30]);
        const opacity = useTransform(scrollYProgress, [idx / 40, (idx + 2) / 40], [0.1, 0.3]);
        return (
          <motion.div
            key={src}
            style={{ y, opacity }}
            className="absolute left-0 top-0 h-full w-full"
            data-placeholder-image="true"
          >
            <Image
              src={src}
              alt="Parallax texture"
              fill
              unoptimized
              className="object-cover"
              loading={idx < 4 ? 'eager' : 'lazy'}
            />
          </motion.div>
        );
      })}
      <div className="absolute inset-0 bg-black/65" />
    </div>
  );
}
