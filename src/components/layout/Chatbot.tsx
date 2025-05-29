'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
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

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Merci pour votre question ! Un conseiller va vous répondre dans les plus brefs délais. En attendant, n'hésitez pas à consulter notre FAQ ou à nous appeler au 0262 12 34 56.",
        sender: 'bot',
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    handleSendMessage();
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
                <div className="w-10 h-10 bg-prepa-blue rounded-full flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Logo Prépa Réussite"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-prepa-blue">Prépa Réussite</h4>
                  <div className="flex items-center space-x-1 text-s text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>En ligne • Répond rapidement</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-prepa-gray hover:text-prepa-blue transition-colors"
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
                  <div className={`max-w-xs px-3 py-2 rounded-lg text-base ${
                    message.sender === 'user'
                      ? 'bg-prepa-blue text-white'
                      : 'bg-gray-100 text-prepa-blue'
                  }`}>
                    <p>{message.text}</p>
                    <div className={`text-s mt-1 flex items-center space-x-1 ${
                      message.sender === 'user' ? 'text-blue-200' : 'text-prepa-gray'
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
                <p className="text-s text-prepa-gray mb-2">Questions fréquentes :</p>
                <div className="space-y-1">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={`quick-${index}-${question.slice(0, 10)}`}
                      onClick={() => handleQuickQuestion(question)}
                      className="block w-full text-left text-s text-prepa-blue hover:bg-prepa-light p-2 rounded transition-colors"
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
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-prepa-blue"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-prepa-blue hover:bg-prepa-blue/90"
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
        className="chatbot-trigger"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};
