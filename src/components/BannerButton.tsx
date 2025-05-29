'use client';

import { useState } from 'react';
import { CalendlyModal } from '@/components/CalendlyModal';

export const BannerButton = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <div
        className="header-banner cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => setIsCalendlyOpen(true)}
      >
        <span className="font-roboto font-medium">
          ⭐ Inscriptions ouvertes - Places limitées ⭐ Je candidate →
        </span>
      </div>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </>
  );
};
