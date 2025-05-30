'use client';

import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search, HelpCircle, MessageCircle, Phone, Mail,
  GraduationCap, Users, MapPin, CreditCard, Clock
} from 'lucide-react';
import { useState } from 'react';

const faqCategories = [
  {
    id: 'formation',
    title: 'Formation',
    icon: GraduationCap,
    questions: [
      {
        question: "À qui s'adresse votre prépa ?",
        answer: "Aux élèves de terminale qui souhaitent se préparer sérieusement à la PASS ou à la LAS, ainsi qu'aux étudiants déjà inscrits à l'université."
      },
      {
        question: "Les cours sont-ils en présentiel ?",
        answer: "Oui, 100 %.\n\nLe présentiel fait partie de notre identité pédagogique : il favorise la concentration, l'échange et la rigueur."
      },
      {
        question: "Comment se déroule le suivi des élèves ?",
        answer: "Chaque élève bénéficie d'un accompagnement individualisé avec :\n• Entretiens réguliers\n• Coaching personnalisé\n• Retours sur colles et concours blancs"
      },
      {
        question: "Le programme est-il adapté à la PASS / LAS ?",
        answer: "Oui, notre accompagnement est aligné avec les attendus de l'Université de La Réunion pour la PASS, et adaptable à la LAS.\n\nIl combine méthode, rythme et préparation aux exigences des filières santé."
      },
      {
        question: "Quelles filières préparez-vous ?",
        answer: "Nous préparons aux 5 filières accessibles via PASS / LAS :\n• Médecine\n• Maïeutique (sage-femme)\n• Odontologie (dentaire)\n• Kinésithérapie\n• Pharmacie"
      }
    ]
  },
  {
    id: 'admissions',
    title: 'Admissions',
    icon: Users,
    questions: [
      {
        question: "Combien d'élèves prenez-vous par promo ?",
        answer: "30 élèves maximum par centre, pour garantir un accompagnement de qualité."
      },
      {
        question: "Quand faut-il candidater ?",
        answer: "Le plus tôt possible.\n\nLes places sont limitées à 30 élèves par centre.\n\nLa sélection se fait sur dossier, composé de :\n• Bulletins scolaires\n• Lettre de motivation"
      }
    ]
  },
  {
    id: 'pratique',
    title: 'Infos pratiques',
    icon: MapPin,
    questions: [
      {
        question: "Où se trouvent vos locaux ?",
        answer: "Nous avons deux centres :\n\n**Sainte-Clotilde (Nord)**\n24 Rte Philibert Tsiranana, CS 61115 97495, La Réunion (CREPS REUNION)\n+262 692 71 30 84\n\n**Saint-Pierre (Sud)**\n149 C Rue Marius et Ary Leblond, Saint-Pierre 97410, La Réunion (Nova assurances)\n0262 98 76 54"
      },
      {
        question: "Proposez-vous un paiement échelonné ?",
        answer: "Oui, des facilités de paiement sont possibles.\n\nNous en discutons avec vous lors de l'entretien ou sur demande."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('formation');

  const filteredQuestions = faqCategories
    .find(cat => cat.id === selectedCategory)
    ?.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const allQuestions = faqCategories.flatMap(cat => 
    cat.questions.map(q => ({ ...q, category: cat.title }))
  ).filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const questionsToShow = selectedCategory === 'toutes'
    ? allQuestions
    : filteredQuestions.map(q => ({
      ...q,
      category: faqCategories.find(cat => cat.id === selectedCategory)?.title || ''
  }));

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient-pages">
        <div className="hero-content">
          <div className="text-center text-white">
            <AnimatedSection direction="up">
              <h1 className="hero-title-pages mb-6">Questions fréquentes</h1>
              <p className="hero-subtitle-pages max-w-3xl mx-auto">
                Retrouvez les réponses aux questions les plus courantes sur notre prépa médecine à La Réunion.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-white border-b">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-custom-gray" />
                <input
                  type="text"
                  placeholder="Rechercher dans les questions fréquentes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-custom-blue transition-all"
                />
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setSelectedCategory('toutes')}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedCategory === 'toutes'
                      ? 'bg-custom-blue text-white'
                      : 'bg-gray-100 text-custom-gray hover:bg-custom-background'
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Toutes</span>
                </button>
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-custom-blue text-white'
                        : 'bg-gray-100 text-custom-gray hover:bg-custom-background'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.title}</span>
                  </button>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-custom-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-custom-blue text-center mb-2">
                  {selectedCategory === 'toutes' 
                    ? 'Toutes les questions' 
                    : faqCategories.find(cat => cat.id === selectedCategory)?.title
                  }
                </h2>
                <p className="text-custom-gray text-center">
                  {questionsToShow.length} question{questionsToShow.length > 1 ? 's' : ''}
                  {searchTerm && ' correspondant à votre recherche'}
                </p>
              </div>

              {questionsToShow.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-4">
                  {questionsToShow.map((item, index) => (
                    <AccordionItem
                      key={`${selectedCategory}-${index}`}
                      value={`item-${index}`}
                      className="card-base border-0 shadow-sm"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 text-custom-blue font-medium">
                        <div className="flex items-center space-x-3">
                          {selectedCategory === 'toutes' && (
                            <Badge variant="outline" className="text-xs">
                              {item.category}
                            </Badge>
                          )}
                          <span>{item.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-custom-gray">
                        <div className="whitespace-pre-line leading-relaxed">
                          {item.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-custom-gray mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-custom-blue mb-2">
                    Aucune question trouvée
                  </h3>
                  <p className="text-custom-gray mb-6">
                    Essayez d'autres mots-clés ou catégories
                  </p>
                  <Button
                    onClick={() => setSearchTerm('')}
                    variant="outline"
                    className="btn-outline"
                  >
                    Effacer la recherche
                  </Button>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <AnimatedSection direction="up">
            <div className="max-w-4xl mx-auto">
              <Card className="card-blue text-white">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <MessageCircle className="w-12 h-12 mx-auto mb-4 text-custom-rose" />
                    <h3 className="text-2xl font-bold mb-2 text-white">Une autre question ?</h3>
                    <p className="text-white/90">
                      Nous sommes là pour répondre à toutes vos interrogations
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="w-8 h-8" />
                      </div>
                      <h4 className="font-semibold mb-2 text-white">Appelez-nous</h4>
                      <p className="text-white/90 text-base mb-4">
                        Du lundi au vendredi, 8h-17h30
                      </p>
                      <div className="space-y-2 text-base">
                        <p><strong>Nord :</strong> +262 692 71 30 84</p>
                        <p><strong>Sud :</strong> +262 692 71 30 84</p>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8" />
                      </div>
                      <h4 className="font-semibold mb-2 text-white">Écrivez-nous</h4>
                      <p className="text-white/90 text-base mb-4">
                        Réponse sous 24h garantie
                      </p>
                      <p className="text-base">contact.prepareussite@gmail.com</p>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                      Nous contacter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-custom-background">
        <div className="section-container">
          <AnimatedSection direction="up">
            <div className="grid md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-custom-rose mb-2">24h</div>
                <p className="text-custom-gray text-base">Délai de réponse maximum</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-custom-rose mb-2">95%</div>
                <p className="text-custom-gray text-base">Questions résolues en 1 contact</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-custom-rose mb-2">8h-17h30</div>
                <p className="text-custom-gray text-base">Horaires d'accueil téléphonique</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
