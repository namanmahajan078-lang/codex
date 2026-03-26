import { AnimatePresence, motion } from 'framer-motion';

export default function PricingModal({ open, onClose, selectedPackage, onCheckout }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[75] flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="glass relative w-full max-w-lg overflow-hidden rounded-3xl p-8"
            initial={{ y: 40, scale: 0.9 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className="absolute -top-8 left-0 h-24 w-full bg-luxeCyan/30 blur-2xl"
              animate={{ x: ['-20%', '10%', '-20%'] }}
              transition={{ duration: 2.3, repeat: Infinity }}
            />
            <h3 className="text-2xl font-semibold">{selectedPackage?.title}</h3>
            <p className="mt-2 text-white/80">{selectedPackage?.price} · Choose your preferred path.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary magnetic"
              >
                DM on Instagram
              </a>
              <button className="btn-primary magnetic" onClick={() => onCheckout(selectedPackage?.id)}>
                Order with Stripe
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
