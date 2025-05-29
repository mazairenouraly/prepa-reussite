'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RendezVousButton } from '@/components/RendezVousButton';

interface MobileMenuProps {
  className?: string;
}

export const MobileMenu = ({ className = '' }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Nos Prépas', href: '/formations' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.3
      }
    })
  };

  return (
    <div className={`md:hidden ${className}`}>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-prepa-blue hover:text-prepa-cyan transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Prépa Réussite Logo"
                    width="48"
                    height="48"
                    className="object-contain rounded-full shadow-md"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md"><span class="text-custom-blue font-bold text-lg font-gyst">PR</span></div>';
                      }
                    }}
                  />
                </div>
                  <div>
                    <h2 className="font-bold text-prepa-blue">Prépa Réussite</h2>
                    <p className="text-s text-prepa-gray">La prépa médecine de référence</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-prepa-gray hover:text-prepa-blue transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 py-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    custom={index}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-4 text-prepa-blue hover:bg-prepa-light hover:text-prepa-cyan transition-all duration-200 border-b border-gray-100"
                  >
                    <span className="font-medium">{item.label}</span>
                  </motion.a>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 border-t"
              >
                <RendezVousButton className="w-full bg-prepa-blue hover:bg-prepa-blue/90 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Prendre RDV
                </RendezVousButton>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
