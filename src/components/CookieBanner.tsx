'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // Délai pour laisser la page se charger
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 left-4 right-4 sm:left-4 sm:right-auto sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-lg shadow-2xl border border-gray-200 z-40 overflow-hidden"
        >
          <div className="p-4 sm:p-6">
            {/* Header avec icône */}
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-custom-blue to-custom-rose rounded-full flex items-center justify-center flex-shrink-0">
                <Cookie className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-custom-dark mb-2">
                  Cookies et confidentialité
                </h3>
                <p className="text-sm sm:text-base text-custom-gray leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site et analyser notre trafic. 
                  Ces données nous aident à mieux comprendre vos besoins.
                </p>
              </div>
              <button
                onClick={declineCookies}
                className="text-custom-gray hover:text-custom-dark transition-colors p-1 flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
              <Button
                onClick={acceptCookies}
                className="btn-primary text-white text-sm sm:text-base py-2 px-4 sm:px-6 order-1 sm:order-1"
              >
                Accepter
              </Button>
              <Button
                onClick={declineCookies}
                variant="outline"
                className="border-custom-gray text-custom-gray hover:bg-custom-background text-sm sm:text-base py-2 px-4 sm:px-6 order-2 sm:order-2"
              >
                Refuser
              </Button>
            </div>

            {/* Lien politique de confidentialité */}
            <div className="mt-3 text-center sm:text-left">
              <a
                href="/privacy"
                className="text-xs sm:text-sm text-custom-blue hover:text-custom-rose underline"
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};