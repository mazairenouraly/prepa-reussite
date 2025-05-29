'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Download, Mail, CheckCircle, AlertCircle, X, Send } from 'lucide-react';
import { EmailService } from '@/services/email';

interface BrochureButtonProps {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  children?: React.ReactNode;
}

export const BrochureButton = ({
  className = '',
  variant = 'outline',
  size = 'default',
  children
}: BrochureButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '' });

  // Fonction pour télécharger le PDF
  const downloadPDF = () => {
    try {
      const link = document.createElement('a');
      link.href = '/brochure.pdf';
      link.download = 'Prepa-Reussite-Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.warn('PDF download failed:', error);
    }
  };

  // Fonction pour rediriger vers le PDF
  const redirectToPDF = () => {
    try {
      window.open('/brochure.pdf', '_blank');
    } catch (error) {
      console.warn('PDF redirect failed:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setErrorMessage('');

    try {
      const success = await EmailService.sendBrochureRequest(formData.email, formData.name);

      if (success) {
        setIsSuccess(true);
        
        setTimeout(() => {
          downloadPDF();
        }, 500);
        
        setTimeout(() => {
          redirectToPDF();
        }, 1000);

        setTimeout(() => {
          setIsModalOpen(false);
          setIsSuccess(false);
          setFormData({ name: '', email: '' });
        }, 4000);
      } else {
        setIsError(true);
        setErrorMessage('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
      }
    } catch (error) {
      setIsError(true);
      setErrorMessage('Une erreur technique est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        variant={variant}
        size={size}
        className={className}
      >
        {children || (
          <>
            <BookOpen className="w-4 h-4 mr-2" />
            Brochure gratuite
          </>
        )}
      </Button>

      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isLoading && setIsModalOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className="w-full max-w-md bg-white rounded-lg shadow-2xl">
              {isSuccess ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-prepa-blue mb-2">Brochure envoyée !</h3>
                  <p className="text-prepa-gray mb-4">
                    Votre brochure est en cours de téléchargement et s'ouvrira automatiquement.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center justify-center space-x-2 text-sm text-prepa-blue mb-2">
                      <Download className="w-4 h-4" />
                      <span>Téléchargement en cours...</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-xs text-prepa-blue mb-2">
                      <Send className="w-4 h-4" />
                      <span>Template "brochure-template" envoyé via MailerSend</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-xs text-prepa-blue">
                      <Mail className="w-4 h-4" />
                      <span>FROM: contact.prepareussite@gmail.com TO: Votre email</span>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b">
                    <div>
                      <h2 className="text-xl font-bold text-prepa-blue">Recevoir notre brochure</h2>
                      <p className="text-prepa-gray text-base">Via template MailerSend "brochure-template"</p>
                    </div>
                    <button
                      onClick={() => !isLoading && setIsModalOpen(false)}
                      disabled={isLoading}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Avantages */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-prepa-blue mb-3">La brochure contient :</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-base">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Programmes détaillés de nos formations</span>
                        </div>
                        <div className="flex items-center space-x-2 text-base">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Tarifs et modalités de financement</span>
                        </div>
                        <div className="flex items-center space-x-2 text-base">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Témoignages d'anciens étudiants</span>
                        </div>
                        <div className="flex items-center space-x-2 text-base">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Statistiques de réussite</span>
                        </div>
                      </div>
                    </div>

                    {/* Message d'erreur */}
                    {isError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4"
                      >
                        <div className="flex items-center space-x-2 text-red-600">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-sm">{errorMessage}</span>
                        </div>
                      </motion.div>
                    )}

                    {/* Formulaire */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-base font-medium text-prepa-blue mb-1">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prepa-blue disabled:opacity-50"
                          placeholder="Votre nom complet"
                          disabled={isLoading}
                        />
                      </div>

                      <div>
                        <label className="block text-base font-medium text-prepa-blue mb-1">
                          Email * <span className="text-sm text-gray-500">(destinataire de la brochure)</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prepa-blue disabled:opacity-50"
                          placeholder="votre@email.com"
                          disabled={isLoading}
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-prepa-blue hover:bg-prepa-blue/90 text-white disabled:opacity-50"
                      >
                        {isLoading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4 mr-2" />
                            Recevoir la brochure
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                </>
              )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};