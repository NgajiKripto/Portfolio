'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CountUp from '@/components/ui/CountUp';

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [visible, setVisible] = useState(true);
  const [countDone, setCountDone] = useState(false);

  useEffect(() => {
    if (countDone) {
      const t = setTimeout(() => {
        setVisible(false);
        onComplete?.();
      }, 400);
      return () => clearTimeout(t);
    }
  }, [countDone, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#170C79]"
          role="status"
          aria-live="polite"
          aria-label="Loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="flex items-end gap-1 font-heading text-8xl font-bold text-white md:text-9xl">
            <CountUp
              from={0}
              to={100}
              duration={2}
              delay={0.1}
              startWhen={true}
              onEnd={() => setCountDone(true)}
            />
            <span className="text-4xl md:text-5xl">%</span>
          </div>
          <p className="mt-4 text-sm tracking-widest text-muted-foreground uppercase">
            Loading…
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
