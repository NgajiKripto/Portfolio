'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: 'words' | 'chars';
  direction?: 'top' | 'bottom' | 'left' | 'right';
  onAnimationComplete?: () => void;
  className?: string;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 0,
  animateBy = 'words',
  direction = 'top',
  onAnimationComplete,
  className,
}) => {
  const getDirectionOffset = (dir: string) => {
    switch (dir) {
      case 'top':
        return { y: -20 };
      case 'bottom':
        return { y: 20 };
      case 'left':
        return { x: -20 };
      case 'right':
        return { x: 20 };
      default:
        return { y: -20 };
    }
  };

  const variants: Variants = {
    hidden: {
      filter: 'blur(10px)',
      opacity: 0,
      ...getDirectionOffset(direction),
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  const items = animateBy === 'words' ? text.split(' ') : text.split('');

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: (delay / 1000) * 0.2, delayChildren: 0 }}
      onAnimationComplete={onAnimationComplete}
      className={cn(
        'flex flex-wrap',
        className,
        animateBy === 'chars' ? 'gap-x-1' : 'gap-x-2'
      )}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          variants={variants}
          transition={{ duration: 0.5, ease: 'easeOut', delay: i * (delay / 1000 / items.length) }}
        >
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default BlurText;
