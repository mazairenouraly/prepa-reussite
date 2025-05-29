import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar, Clock, User, Share2, BookOpen,
  ArrowLeft, ChevronRight, Heart, Brain,
  CheckCircle, Lightbulb, Target, RefreshCw, Timer
} from 'lucide-react';
import Link from 'next/link';

export default function MethodesRevisionPage() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="py-4 bg-prepa-light border-b">
        <div className="section-container">
          <AnimatedSection direction="right">
            <nav className="flex items-center space-x-2 text-base">
              <Link href="/" className="text-prepa-gray hover:text-prepa-blue">Accueil</Link>
              <ChevronRight className="w-4 h-4 text-prepa-gray" />
              <Link href="/blog" className="text-prepa-gray hover:text-prepa-blue">Blog</Link>
              <ChevronRight className="w-4 h-4 text-prepa-gray" />
              <span className="text-prepa-blue font-medium">Méthodes de révision efficaces</span>
            </nav>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up">
              <div className="text-center mb-12">
                <Badge className="bg-prepa-gold text-prepa-blue mb-6">Méthodes</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-prepa-blue mb-6 leading-tight">
                  Méthodes de révision efficaces pour les sciences médicales
                </h1>
                <p className="text-xl text-prepa-gray leading-relaxed max-w-3xl mx-auto">
                  Techniques d'apprentissage basées sur les neurosciences pour mémoriser durablement
                  les cours de médecine et optimiser vos performances aux concours.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-y border-gray-200 mb-12">
                <div className="flex items-center space-x-6 text-prepa-gray text-base">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Prof. Sophie Martin</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>10 avril 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>5 min de lecture</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  <Button variant="outline" size="sm" className="btn-outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                    <Heart className="w-4 h-4 mr-2" />
                    156
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Featured Image */}
            <AnimatedSection direction="scale" delay={0.3}>
              <div className="mb-12">
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop"
                  alt="Méthodes de révision efficaces"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up">
              <div className="content-area">
                <p className="text-lg leading-relaxed mb-8">
                  Les études de médecine demandent de mémoriser une quantité considérable d'informations
                  en peu de temps. Heureusement, les recherches en neurosciences nous offrent des méthodes
                  d'apprentissage éprouvées pour <strong>optimiser la mémorisation et la compréhension</strong>.
                  Voici les techniques les plus efficaces pour réussir vos révisions.
                </p>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  1. La répétition espacée : la clé de la mémorisation durable
                </h2>

                <p className="mb-6">
                  La répétition espacée est la technique d'apprentissage la plus efficace selon les neurosciences.
                  Elle consiste à réviser les informations à des intervalles croissants.
                </p>

                <div className="card-blue p-8 text-white rounded-lg mb-8">
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <RefreshCw className="w-6 h-6 mr-2" />
                    Planning de répétition espacée
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2">1ère révision</h5>
                      <p className="text-white/90 text-base">Le jour même (J+0)</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">2ème révision</h5>
                      <p className="text-white/90 text-base">Le lendemain (J+1)</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">3ème révision</h5>
                      <p className="text-white/90 text-base">3 jours plus tard (J+3)</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">4ème révision</h5>
                      <p className="text-white/90 text-base">7 jours plus tard (J+7)</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">5ème révision</h5>
                      <p className="text-white/90 text-base">15 jours plus tard (J+15)</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">6ème révision</h5>
                      <p className="text-white/90 text-base">1 mois plus tard (J+30)</p>
                    </div>
                  </div>
                </div>

                <div className="card-light p-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-prepa-blue mb-2">Résultats prouvés</h4>
                      <p className="text-prepa-gray">
                        Cette méthode permet de <strong>retenir 90% des informations</strong> après un mois,
                        contre seulement 20% avec des révisions massées sur une courte période.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  2. La technique Feynman : apprendre en enseignant
                </h2>

                <p className="mb-6">
                  Cette méthode, développée par le prix Nobel de physique Richard Feynman, consiste à
                  expliquer un concept comme si vous l'enseigniez à un débutant.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Les 4 étapes
                    </h4>
                    <ol className="space-y-3 text-base">
                      <li className="flex items-start space-x-3">
                        <span className="bg-prepa-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-s">1</span>
                        <span>Choisissez un concept à apprendre</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="bg-prepa-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-s">2</span>
                        <span>Expliquez-le avec des mots simples</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="bg-prepa-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-s">3</span>
                        <span>Identifiez vos lacunes</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="bg-prepa-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-s">4</span>
                        <span>Retournez aux sources et répétez</span>
                      </li>
                    </ol>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Exemple pratique</h4>
                    <div className="space-y-3 text-base">
                      <p><strong>Concept :</strong> La mitose</p>
                      <p><strong>Explication simple :</strong></p>
                      <p className="text-prepa-gray italic">
                        "La mitose, c'est comme si une cellule se dupliquait parfaitement.
                        Imagine une photocopieuse qui fait une copie exacte d'un document..."
                      </p>
                      <p className="text-prepa-blue">
                        Si vous n'arrivez pas à l'expliquer simplement, c'est que vous ne le maîtrisez pas !
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  3. Les cartes mentales : structurer visuellement l'information
                </h2>

                <p className="mb-6">
                  Les cartes mentales (ou mind maps) exploitent notre capacité naturelle à traiter
                  l'information de manière visuelle et hiérarchique.
                </p>

                <div className="card-light p-8 mb-8">
                  <h4 className="text-xl font-bold text-prepa-blue mb-4">Comment créer une carte mentale efficace</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-prepa-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h5 className="font-semibold text-prepa-blue mb-2">Concept central</h5>
                      <p className="text-prepa-gray text-base">Placez le sujet principal au centre</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-prepa-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h5 className="font-semibold text-prepa-blue mb-2">Branches principales</h5>
                      <p className="text-prepa-gray text-base">Ajoutez les thèmes majeurs</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-prepa-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <h5 className="font-semibold text-prepa-blue mb-2">Détails</h5>
                      <p className="text-prepa-gray text-base">Développez avec sous-branches</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">✅ Bonnes pratiques</h4>
                    <ul className="space-y-2 text-base">
                      <li>• Utilisez des couleurs différentes</li>
                      <li>• Ajoutez des pictogrammes</li>
                      <li>• Limitez à 7 branches par niveau</li>
                      <li>• Utilisez des mots-clés, pas des phrases</li>
                      <li>• Dessinez à la main si possible</li>
                    </ul>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">❌ À éviter</h4>
                    <ul className="space-y-2 text-base">
                      <li>• Trop de détails dans une carte</li>
                      <li>• Texte trop dense</li>
                      <li>• Manque de hiérarchie visuelle</li>
                      <li>• Cartes trop complexes</li>
                      <li>• Oublier les révisions régulières</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  4. La technique Pomodoro : optimiser la concentration
                </h2>

                <p className="mb-6">
                  Cette technique de gestion du temps améliore la concentration et réduit la fatigue mentale
                  en alternant périodes de travail intense et pauses régulières.
                </p>

                <div className="card-blue p-8 text-white rounded-lg mb-8">
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <Timer className="w-6 h-6 mr-2" />
                    Un cycle Pomodoro
                  </h4>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">25min</div>
                      <p className="text-white/90 text-base">Travail concentré</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">5min</div>
                      <p className="text-white/90 text-base">Pause courte</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">25min</div>
                      <p className="text-white/90 text-base">Travail concentré</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">15-30min</div>
                      <p className="text-white/90 text-base">Pause longue</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  5. L'auto-questionnement : tester sa compréhension
                </h2>

                <p className="mb-6">
                  Plutôt que de relire passivement, testez activement vos connaissances
                  en vous posant des questions.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Questions factuelles</h4>
                    <ul className="text-prepa-gray text-base space-y-2">
                      <li>• Quoi ?</li>
                      <li>• Qui ?</li>
                      <li>• Quand ?</li>
                      <li>• Où ?</li>
                    </ul>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Questions de compréhension</h4>
                    <ul className="text-prepa-gray text-base space-y-2">
                      <li>• Comment ?</li>
                      <li>• Pourquoi ?</li>
                      <li>• Quel est le lien avec... ?</li>
                      <li>• Que se passe-t-il si... ?</li>
                    </ul>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Questions d'application</h4>
                    <ul className="text-prepa-gray text-base space-y-2">
                      <li>• Comment l'appliquer ?</li>
                      <li>• Quels sont les exemples ?</li>
                      <li>• Dans quels cas l'utiliser ?</li>
                      <li>• Quelles sont les limites ?</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Conclusion : combiner les techniques pour maximiser l'efficacité
                </h2>

                <p className="mb-6">
                  Chaque technique a ses avantages et peut être adaptée selon le type de contenu à apprendre.
                  L'idéal est de <strong>combiner plusieurs méthodes</strong> :
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Utilisez les cartes mentales pour structurer vos cours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Appliquez la répétition espacée pour mémoriser</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Pratiquez la technique Feynman pour vérifier votre compréhension</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Organisez vos sessions avec la technique Pomodoro</span>
                  </li>
                </ul>

                <p className="mb-8">
                  Chez Prépa Réussite, nous enseignons ces méthodes dès le début de la formation
                  et aidons chaque étudiant à trouver la combinaison qui lui convient le mieux.
                  Nos résultats parlent d'eux-mêmes : nos étudiants retiennent mieux et plus longtemps !
                </p>

                {/* CTA Box */}
                <div className="card-light p-8 text-center">
                  <h4 className="text-xl font-bold text-prepa-blue mb-4">
                    Envie de maîtriser ces techniques ?
                  </h4>
                  <p className="text-prepa-gray mb-6">
                    Rejoignez nos ateliers méthodologiques et apprenez à optimiser
                    votre apprentissage avec nos experts.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="btn-primary">
                      <Brain className="w-4 h-4 mr-2" />
                      Découvrir nos ateliers
                    </Button>
                    <Button variant="outline" className="btn-outline">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Guide méthodologique
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-8 bg-prepa-light border-t">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up">
              <div className="text-center">
                <Link href="/blog">
                  <Button variant="outline" className="btn-outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour au blog
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
