'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const usePageTransition = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    try {
      // Déclencher une transition très courte pour un effet de fluidité
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 100);

      return () => clearTimeout(timer);
    } catch (error) {
      console.warn('Page transition error:', error);
      setIsLoading(false);
    }
  }, [pathname]); // On veut déclencher sur le changement de pathname

  return { isLoading };
};
