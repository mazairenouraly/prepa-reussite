'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  endValue: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter = ({
  endValue,
  duration = 2,
  suffix = '',
  className = ''
}: AnimatedCounterProps) => {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const [count, setCount] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

        const easeOutQuart = 1 - (1 - progress) ** 4;
        const currentCount = Math.floor(easeOutQuart * endValue);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, endValue, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {count}{suffix}
    </motion.div>
  );
};
