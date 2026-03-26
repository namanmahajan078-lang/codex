import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function LiquidTransitionWrapper({ children }) {
  const router = useRouter();

  return (
    <motion.main
      key={router.pathname}
      initial={{ clipPath: 'circle(0% at 50% 50%)', opacity: 0.4 }}
      animate={{ clipPath: 'circle(150% at 50% 50%)', opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="relative z-10"
    >
      <svg className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-20" viewBox="0 0 1440 800">
        <motion.path
          initial={{ d: 'M0,200 C480,420 960,20 1440,200 L1440,800 L0,800 Z' }}
          animate={{ d: 'M0,240 C360,40 1080,500 1440,220 L1440,800 L0,800 Z' }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          fill="url(#liquidGradient)"
        />
        <defs>
          <linearGradient id="liquidGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3de5ff" />
            <stop offset="100%" stopColor="#d4af37" />
          </linearGradient>
        </defs>
      </svg>
      {children}
    </motion.main>
  );
}
