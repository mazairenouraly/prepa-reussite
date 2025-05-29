'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
}

export const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const variants = {
    hidden: {
      opacity: 0,
      //y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      //x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      scale: direction === 'scale' ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
