'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Download, Mail, CheckCircle, AlertCircle, X, Send, Star } from 'lucide-react';
import { EmailService } from '@/services/email';

interface BrochureSuccessButtonProps {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  children?: React.ReactNode;
}

export const BrochureSuccessButton = ({
  className = '',
  variant = 'outline',
  size = 'default',
  children
}: BrochureSuccessButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '' });

  // Fonction pour télécharger le PDF success story
  const downloadPDF = () => {
    try {
      const link = document.createElement('a');
      link.href = '/brochure-tasnime.pdf';
      link.download = 'Prepa-Reussite-Success-Story-Tasnime.pdf';
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
      window.open('/brochure-tasnime.pdf', '_blank');
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
      const success = await EmailService.sendSuccessStoryRequest(formData.email, formData.name);

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
      <motion.div
        whileHover={{ 
          scale: 1.02,
          y: -2,
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 25 
        }}
        className="relative"
      >
        <Button
          onClick={() => setIsModalOpen(true)}
          variant={variant}
          size={size}
          className={`${className} success-story-btn text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
        >
          {/* Contenu du bouton simplifié */}
          <div className="relative z-10 flex items-center">
            {children || (
              <>
                <TrendingUp className="w-4 h-4 mr-2 trending-icon" />
                🚀 De 144ème à 57ème !
              </>
            )}
          </div>

        </Button>
      </motion.div>

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
                  <h3 className="text-xl font-bold text-prepa-blue mb-2">Success Story envoyée !</h3>
                  <p className="text-prepa-gray mb-4">
                    Le témoignage de Tasnime est en cours de téléchargement et s'ouvrira automatiquement.
                  </p>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center justify-center space-x-2 text-sm text-prepa-blue mb-2">
                      <Download className="w-4 h-4" />
                      <span>Téléchargement en cours...</span>
                    </div>
                    <motion.div 
                      className="flex items-center justify-center space-x-2 text-xs text-prepa-blue mb-2"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Send className="w-4 h-4" />
                      <span>Template "0p7kx4x8n2eg9yjr" (Success Story) envoyé via MailerSend</span>
                    </motion.div>
                    <div className="flex items-center justify-center space-x-2 text-xs text-prepa-blue">
                      <Mail className="w-4 h-4" />
                      <span>FROM: contact.prepareussite@gmail.com TO: Votre email</span>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Header avec badge premium */}
                  <div className="flex items-center justify-between p-6 border-b" style={{ background: 'linear-gradient(124deg, rgba(0, 79, 218, 0.1), rgba(209, 74, 129, 0.1))' }}>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className="text-white" style={{ background: '#d14a81' }}>
                          <Star className="w-3 h-3 mr-1" />
                          Success Story
                        </Badge>
                        <Badge className="text-white" style={{ background: 'linear-gradient(124deg, #004fda, #d14a81)' }}>
                          EXCLUSIVE
                        </Badge>
                      </div>
                      <h2 className="text-xl font-bold text-prepa-blue">🚀 De 144ème à 57ème !</h2>
                      <p className="text-prepa-gray text-base">
                        Découvrez comment <strong>Tasnime</strong> a réalisé cette remontée spectaculaire en PASS
                      </p>
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
                    {/* Success story highlights */}
                    <div className="mb-6 p-4 rounded-lg" style={{ background: 'linear-gradient(135deg, rgba(0, 79, 218, 0.1), rgba(209, 74, 129, 0.1))' }}>
                      <h4 className="font-semibold text-prepa-blue mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" style={{ color: '#d14a81' }} />
                        Cette remontée incroyable révèle :
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4" style={{ color: '#d14a81' }} />
                          <span><strong>Sa méthode de travail</strong> qui a tout changé</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4" style={{ color: '#d14a81' }} />
                          <span><strong>Les erreurs qu'elle évitait</strong> au début</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4" style={{ color: '#d14a81' }} />
                          <span><strong>Son planning quotidien</strong> détaillé</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4" style={{ color: '#d14a81' }} />
                          <span><strong>Comment elle gérait le stress</strong> des concours</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4" style={{ color: '#d14a81' }} />
                          <span><strong>Les conseils de nos profs</strong> qui ont fait la différence</span>
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
                        <label className="block text-sm font-medium text-prepa-blue mb-1">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 disabled:opacity-50"
                          placeholder="Votre nom complet"
                          disabled={isLoading}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-prepa-blue mb-1">
                          Email * <span className="text-xs text-gray-500">(pour recevoir le témoignage)</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 disabled:opacity-50"
                          placeholder="votre@email.com"
                          disabled={isLoading}
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full text-white disabled:opacity-50"
                        style={{ 
                          background: 'linear-gradient(124deg, #004fda, #d14a81)',
                        }}
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
                            <TrendingUp className="w-4 h-4 mr-2" />
                            🔥 Recevoir la Success Story
                          </>
                        )}
                      </Button>
                    </form>

                    <p className="text-xs text-center text-gray-500 mt-3">
                      📈 Témoignage exclusif • 💯 Méthode authentique • ⚡ Résultats concrets
                    </p>
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