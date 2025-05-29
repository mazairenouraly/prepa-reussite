// Instructions: Créer le bouton qui ouvre la modal Calendly

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CalendlyModal } from '@/components/CalendlyModal';
import { Phone } from 'lucide-react';

interface RendezVousButtonProps {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  children?: React.ReactNode;
}

export const RendezVousButton = ({
  className = '',
  variant = 'default',
  size = 'default',
  children
}: RendezVousButtonProps) => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsCalendlyOpen(true)}
        variant={variant}
        size={size}
        className={className}
      >
        {children || (
          <>
            <Phone className="w-4 h-4 mr-2" />
            Prendre RDV
          </>
        )}
      </Button>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </>
  );
};
