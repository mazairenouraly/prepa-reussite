'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

type FAQItem = {
  keywords: string[];
  question: string;
  answer: string;
};

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  time: string;
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant virtuel de Prépa Réussite. Comment puis-je vous aider aujourd'hui ?",
      sender: 'bot',
      time: '14:25'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickQuestions = [
    "Quels sont vos tarifs ?",
    "Comment s'inscrire ?",
    "Différence PASS/LAS ?",
    "Taux de réussite ?"
  ];

  // Base de données FAQ
  const faqDatabase: FAQItem[] = [
    // Formation
    {
      keywords: ["qui", "s'adresse", "prépa", "pour qui", "élèves", "étudiants", "terminale"],
      question: "À qui s'adresse votre prépa ?",
      answer: "Aux élèves de terminale qui souhaitent se préparer sérieusement à la PASS ou à la LAS, ainsi qu'aux étudiants déjà inscrits à l'université."
    },
    {
      keywords: ["présentiel", "cours", "physique", "ligne", "distance"],
      question: "Les cours sont-ils en présentiel ?",
      answer: "Oui, 100 %.\n\nLe présentiel fait partie de notre identité pédagogique : il favorise la concentration, l'échange et la rigueur."
    },
    {
      keywords: ["suivi", "accompagnement", "individualisé", "coaching", "entretien"],
      question: "Comment se déroule le suivi des élèves ?",
      answer: "Chaque élève bénéficie d'un accompagnement individualisé avec :\n• Entretiens réguliers\n• Coaching personnalisé\n• Retours sur colles et concours blancs"
    },
    {
      keywords: ["programme", "adapté", "pass", "las", "université", "réunion"],
      question: "Le programme est-il adapté à la PASS / LAS ?",
      answer: "Oui, notre accompagnement est aligné avec les attendus de l'Université de La Réunion pour la PASS, et adaptable à la LAS.\n\nIl combine méthode, rythme et préparation aux exigences des filières santé."
    },
    {
      keywords: ["filières", "médecine", "maïeutique", "odontologie", "kinésithérapie", "pharmacie", "sage-femme", "dentaire", "kiné"],
      question: "Quelles filières préparez-vous ?",
      answer: "Nous préparons aux 5 filières accessibles via PASS / LAS :\n• Médecine\n• Maïeutique (sage-femme)\n• Odontologie (dentaire)\n• Kinésithérapie\n• Pharmacie"
    },

    // Admissions
    {
      keywords: ["combien", "élèves", "promo", "effectif", "nombre", "places"],
      question: "Combien d'élèves prenez-vous par promo ?",
      answer: "30 élèves maximum par centre, pour garantir un accompagnement de qualité."
    },
    {
      keywords: ["candidater", "inscription", "quand", "délai", "sélection", "dossier"],
      question: "Quand faut-il candidater ?",
      answer: "Le plus tôt possible.\n\nLes places sont limitées à 30 élèves par centre.\n\nLa sélection se fait sur dossier, composé de :\n• Bulletins scolaires\n• Lettre de motivation"
    },

    // Infos pratiques
    {
      keywords: ["locaux", "adresse", "où", "centre", "nord", "sud", "sainte-clotilde", "saint-pierre"],
      question: "Où se trouvent vos locaux ?",
      answer: "Nous avons deux centres :\n\n**Sainte-Clotilde (Nord)**\n24 Rte Philibert Tsiranana, CS 61115 97495, La Réunion (CREPS REUNION)\n+262 692 71 30 84\n\n**Saint-Pierre (Sud)**\n149 C Rue Marius et Ary Leblond, Saint-Pierre 97410, La Réunion (Nova assurances)\n0262 98 76 54"
    },
    {
      keywords: ["paiement", "échelonné", "facilité", "prix", "tarif", "coût", "cher"],
      question: "Proposez-vous un paiement échelonné ?",
      answer: "Oui, des facilités de paiement sont possibles.\n\nNous en discutons avec vous lors de l'entretien ou sur demande."
    },

    // Questions supplémentaires courantes
    {
      keywords: ["tarifs", "prix", "coût", "combien", "cher"],
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs sont jusqu'à 4 fois moins chers que les prépas nationales (environ 14 000€). Nous proposons un accompagnement de qualité à un prix accessible, avec possibilité de paiement échelonné."
    },
    {
      keywords: ["taux", "réussite", "résultats", "statistiques", "pourcentage"],
      question: "Quel est votre taux de réussite ?",
      answer: "Nos étudiants obtiennent d'excellents résultats grâce à notre méthode personnalisée et nos effectifs réduits. Pour connaître nos statistiques détaillées, contactez-nous directement."
    },
    {
      keywords: ["différence", "pass", "las", "comparaison"],
      question: "Quelle est la différence entre PASS et LAS ?",
      answer: "La PASS (Parcours Accès Spécifique Santé) est dédiée aux études de santé avec une option mineure. La LAS (Licence Accès Santé) est une licence classique avec une option santé. Nous préparons aux deux parcours."
    },
    {
      keywords: ["horaires", "emploi", "temps", "planning", "heures"],
      question: "Quels sont les horaires de cours ?",
      answer: "Notre planning est pensé pour être équilibré et durable, compatible avec un emploi du temps de lycéen ou d'étudiant. Les détails vous seront communiqués lors de votre entretien."
    },
    {
      keywords: ["contact", "téléphone", "email", "joindre"],
      question: "Comment vous contacter ?",
      answer: "Vous pouvez nous joindre :\n• Par téléphone : +262 692 71 30 84\n• Par email : contact@prepa-reussite.com\n• Horaires : Du lundi au vendredi, 8h-17h30"
    }
  ];

  const findBestAnswer = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Recherche par correspondance de mots-clés
    let bestMatch: FAQItem | null = null;
    let maxScore = 0;

    for (const item of faqDatabase) {
      let score = 0;
      for (const keyword of item.keywords) {
        if (message.includes(keyword.toLowerCase())) {
          score += 1;
        }
      }
      
      if (score > maxScore) {
        maxScore = score;
        bestMatch = item;
      }
    }

    // Si on a trouvé une correspondance suffisante
    if (bestMatch && maxScore >= 1) {
      return bestMatch.answer;
    }

    // Réponses par défaut pour certains cas
    if (message.includes('bonjour') || message.includes('salut') || message.includes('hello')) {
      return "Bonjour ! Je suis ravi de vous aider. Que souhaitez-vous savoir sur Prépa Réussite ?";
    }

    if (message.includes('merci')) {
      return "Je vous en prie ! N'hésitez pas si vous avez d'autres questions.";
    }

    if (message.includes('au revoir') || message.includes('bye')) {
      return "Au revoir ! N'hésitez pas à revenir si vous avez d'autres questions. Bonne journée !";
    }

    // Réponse par défaut
    return "Je ne suis pas sûr de comprendre votre question. Voici ce que je peux vous aider à découvrir :\n\n• Nos formations (PASS, LAS, Terminale)\n• Les modalités d'inscription\n• Nos locaux et horaires\n• Les tarifs et facilités de paiement\n\nPour une réponse personnalisée, contactez-nous au +262 692 71 30 84 ou par email à contact@prepa-reussite.com";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');

    // Réponse automatique basée sur la FAQ
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: findBestAnswer(currentInput),
        sender: 'bot',
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: question,
      sender: 'user',
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);

    // Réponse automatique
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: findBestAnswer(question),
        sender: 'bot',
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  return (
    <div className="chatbot-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="chatbot-popup"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-custom-blue to-custom-rose rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-custom-blue">Prépa Réussite</h4>
                  <div className="flex items-center space-x-1 text-xs text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>En ligne • Répond instantanément</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-custom-gray hover:text-custom-blue transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto mb-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-br from-custom-blue to-custom-rose text-white'
                      : 'bg-gray-100 text-custom-dark'
                  }`}>
                    <p className="whitespace-pre-line">{message.text}</p>
                    <div className={`text-xs mt-1 flex items-center space-x-1 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-custom-gray'
                    }`}>
                      <Clock className="w-3 h-3" />
                      <span>{message.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="mb-4">
                <p className="text-xs text-custom-gray mb-2">Questions fréquentes :</p>
                <div className="space-y-1">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={`quick-${index}-${question.slice(0, 10)}`}
                      onClick={() => handleQuickQuestion(question)}
                      className="block w-full text-left text-xs text-custom-blue hover:bg-custom-background p-2 rounded transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Tapez votre message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-custom-blue"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-gradient-to-br from-custom-blue to-custom-rose hover:from-custom-rose hover:to-custom-blue text-white"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-br from-custom-blue to-custom-rose rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all cursor-pointer z-[9999]"
        style={{ zIndex: 9999 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};