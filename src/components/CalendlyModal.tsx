'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal = ({ isOpen, onClose }: CalendlyModalProps) => {
  useEffect(() => {
    if (isOpen) {
      // Charge le script Calendly dynamiquement
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      // Empêche le scroll du body quand la modal est ouverte
      document.body.style.overflow = 'hidden';

      return () => {
        try {
          if (document.body.contains(script)) {
            document.body.removeChild(script);
          }
          // Restaure le scroll
          document.body.style.overflow = 'unset';
        } catch (error) {
          console.warn('Error removing Calendly script:', error);
        }
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      // Attendre que le script soit chargé avant d'initialiser
      const checkCalendly = () => {
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/contact-prepareussite',
            parentElement: document.getElementById('calendly-inline-widget'),
            prefill: {},
            utm: {}
          });
        } else {
          // Réessayer après 100ms si Calendly n'est pas encore chargé
          setTimeout(checkCalendly, 100);
        }
      };

      setTimeout(checkCalendly, 200); // Délai initial pour laisser le DOM se rendre
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Modal - Responsive pour mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-2 sm:inset-4 md:inset-8 lg:inset-16 bg-white rounded-lg shadow-2xl z-50 flex flex-col max-h-[calc(100vh-1rem)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b flex-shrink-0">
              <h2 className="text-lg sm:text-xl font-bold text-custom-blue">Prendre rendez-vous</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Calendly Widget Container */}
            <div className="flex-1 p-2 sm:p-4 overflow-hidden">
              <div
                id="calendly-inline-widget"
                className="w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]"
                data-url="https://calendly.com/contact-prepareussite"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Déclaration TypeScript pour Calendly
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
        prefill: object;
        utm: object;
      }) => void;
    };
  }
}