import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar, Clock, User, Share2, BookOpen,
  ArrowLeft, ChevronRight, Heart, Brain,
  CheckCircle, Shield, Smile, Activity
} from 'lucide-react';
import Link from 'next/link';

export default function GererStressPage() {
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
              <span className="text-prepa-blue font-medium">Gérer le stress</span>
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
                <Badge className="bg-purple-500 text-white mb-6">Bien-être</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-prepa-blue mb-6 leading-tight">
                  Gérer le stress pendant les études de médecine
                </h1>
                <p className="text-xl text-prepa-gray leading-relaxed max-w-3xl mx-auto">
                  Techniques pratiques pour maintenir son équilibre mental et optimiser
                  ses performances durant la PASS/LAS. Guide complet pour bien vivre ses études.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-y border-gray-200 mb-12">
                <div className="flex items-center space-x-6 text-prepa-gray text-base">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Dr. Amélie Rousseau</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>5 avril 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>7 min de lecture</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  <Button variant="outline" size="sm" className="btn-outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                    <Heart className="w-4 h-4 mr-2" />
                    178
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Featured Image */}
            <AnimatedSection direction="scale" delay={0.3}>
              <div className="mb-12">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
                  alt="Gestion du stress études médecine"
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
                  Les études de médecine sont reconnues pour leur exigence et leur intensité.
                  Entre la charge de travail considérable, la compétition et la pression des enjeux,
                  <strong>le stress peut rapidement devenir contre-productif</strong>. Apprendre à le gérer
                  n'est pas un luxe, mais une nécessité pour réussir durablement.
                </p>

                <div className="card-light p-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-prepa-blue mb-2">Le stress : ami ou ennemi ?</h4>
                      <p className="text-prepa-gray">
                        Un peu de stress peut améliorer les performances, mais un stress chronique
                        nuit à la concentration, à la mémorisation et à la santé physique.
                        L'objectif est de trouver le bon équilibre.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Comprendre le stress des études médicales
                </h2>

                <h3 className="text-xl font-semibold text-prepa-blue mb-4">
                  Les sources de stress spécifiques
                </h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Stress académique</h4>
                    <ul className="space-y-2 text-base text-prepa-gray">
                      <li>• Volume de cours considérable</li>
                      <li>• Complexité des matières</li>
                      <li>• Rythme soutenu des évaluations</li>
                      <li>• Exigence de précision</li>
                      <li>• Concurrence entre étudiants</li>
                    </ul>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Stress personnel</h4>
                    <ul className="space-y-2 text-base text-prepa-gray">
                      <li>• Pression familiale</li>
                      <li>• Isolement social</li>
                      <li>• Problèmes financiers</li>
                      <li>• Incertitude sur l'avenir</li>
                      <li>• Fatigue chronique</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-prepa-blue mb-4">
                  Les signaux d'alarme à reconnaître
                </h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="card-base p-6 border-red-200">
                    <h4 className="font-semibold text-red-600 mb-3">Signaux physiques</h4>
                    <ul className="space-y-1 text-base">
                      <li>• Troubles du sommeil</li>
                      <li>• Maux de tête fréquents</li>
                      <li>• Tensions musculaires</li>
                      <li>• Problèmes digestifs</li>
                      <li>• Fatigue persistante</li>
                    </ul>
                  </div>
                  <div className="card-base p-6 border-orange-200">
                    <h4 className="font-semibold text-orange-600 mb-3">Signaux émotionnels</h4>
                    <ul className="space-y-1 text-base">
                      <li>• Anxiété constante</li>
                      <li>• Irritabilité</li>
                      <li>• Sentiment d'échec</li>
                      <li>• Perte de motivation</li>
                      <li>• Humeur dépressive</li>
                    </ul>
                  </div>
                  <div className="card-base p-6 border-yellow-200">
                    <h4 className="font-semibold text-yellow-600 mb-3">Signaux comportementaux</h4>
                    <ul className="space-y-1 text-base">
                      <li>• Procrastination</li>
                      <li>• Isolement social</li>
                      <li>• Difficultés de concentration</li>
                      <li>• Négligence de l'hygiène</li>
                      <li>• Consommations excessives</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Techniques de gestion du stress
                </h2>

                <h3 className="text-xl font-semibold text-prepa-blue mb-4">
                  1. Techniques de relaxation immédiate
                </h3>

                <div className="card-blue p-8 text-white rounded-lg mb-8">
                  <h4 className="text-xl font-bold mb-4">Exercice de respiration 4-7-8</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">4</div>
                      <p className="text-white/90 text-base">Inspirez par le nez</p>
                      <p className="text-white/80 text-s">Comptez jusqu'à 4</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">7</div>
                      <p className="text-white/90 text-base">Retenez votre souffle</p>
                      <p className="text-white/80 text-s">Comptez jusqu'à 7</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">8</div>
                      <p className="text-white/90 text-base">Expirez par la bouche</p>
                      <p className="text-white/80 text-s">Comptez jusqu'à 8</p>
                    </div>
                  </div>
                  <p className="text-white/90 text-base mt-4 text-center">
                    Répétez 4 cycles. Effet apaisant en 2 minutes.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-prepa-blue mb-4">
                  2. Organisation et planification anti-stress
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-prepa-blue">Planification réaliste</h4>
                      <p className="text-prepa-gray text-base">
                        Définissez des objectifs atteignables et prévoyez des marges de manœuvre
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-prepa-blue">Technique du time-boxing</h4>
                      <p className="text-prepa-gray text-base">
                        Limitez le temps consacré à chaque tâche pour éviter le perfectionnisme paralysant
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-prepa-blue">Priorisation intelligente</h4>
                      <p className="text-prepa-gray text-base">
                        Distinguez l'urgent de l'important avec la matrice d'Eisenhower
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-prepa-blue mb-4">
                  3. Activité physique et bien-être
                </h3>

                <p className="mb-6">
                  L'exercice physique est l'un des antistress les plus efficaces. Il libère des endorphines
                  et améliore la qualité du sommeil.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="card-base p-6">
                    <Activity className="w-8 h-8 text-prepa-blue mb-3" />
                    <h4 className="font-semibold text-prepa-blue mb-2">Cardio léger</h4>
                    <p className="text-prepa-gray text-base">
                      Marche rapide, vélo, natation<br />
                      <strong>20-30 min, 3x/semaine</strong>
                    </p>
                  </div>
                  <div className="card-base p-6">
                    <Brain className="w-8 h-8 text-prepa-blue mb-3" />
                    <h4 className="font-semibold text-prepa-blue mb-2">Yoga/Étirements</h4>
                    <p className="text-prepa-gray text-base">
                      Relaxation et flexibilité<br />
                      <strong>15 min quotidiens</strong>
                    </p>
                  </div>
                  <div className="card-base p-6">
                    <Shield className="w-8 h-8 text-prepa-blue mb-3" />
                    <h4 className="font-semibold text-prepa-blue mb-2">Méditation</h4>
                    <p className="text-prepa-gray text-base">
                      Pleine conscience<br />
                      <strong>10 min matin/soir</strong>
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Stratégies à long terme
                </h2>

                <h3 className="text-xl font-semibold text-prepa-blue mb-4">
                  Développer sa résilience
                </h3>

                <div className="card-light p-8 mb-8">
                  <h4 className="text-xl font-bold text-prepa-blue mb-4">Les 5 piliers de la résilience</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-prepa-blue mb-2">🧠 Mindset de croissance</h5>
                      <p className="text-prepa-gray text-base">
                        Voir les échecs comme des opportunités d'apprentissage
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-prepa-blue mb-2">🤝 Réseau de soutien</h5>
                      <p className="text-prepa-gray text-base">
                        Maintenir des relations sociales équilibrées
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-prepa-blue mb-2">⚖️ Équilibre vie-études</h5>
                      <p className="text-prepa-gray text-base">
                        Préserver du temps pour les loisirs et la famille
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-prepa-blue mb-2">🎯 Vision claire</h5>
                      <p className="text-prepa-gray text-base">
                        Se rappeler régulièrement ses motivations profondes
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-prepa-blue mb-2">🌱 Autocompassion</h5>
                      <p className="text-prepa-gray text-base">
                        Se traiter avec bienveillance lors des difficultés
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-prepa-blue mb-4">
                  Créer des rituels positifs
                </h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Routine matinale</h4>
                    <ul className="space-y-2 text-base">
                      <li>• Réveil à heure fixe</li>
                      <li>• 5 min de méditation</li>
                      <li>• Petit-déjeuner équilibré</li>
                      <li>• Visualisation positive de la journée</li>
                      <li>• Objectif principal du jour</li>
                    </ul>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Routine du soir</h4>
                    <ul className="space-y-2 text-base">
                      <li>• Bilan de la journée (3 réussites)</li>
                      <li>• Préparation du lendemain</li>
                      <li>• Déconnexion écrans 1h avant coucher</li>
                      <li>• Lecture ou musique relaxante</li>
                      <li>• Coucher à heure régulière</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Quand demander de l'aide ?
                </h2>

                <p className="mb-6">
                  Reconnaître ses limites n'est pas un échec, c'est de l'intelligence émotionnelle.
                  N'hésitez pas à consulter si :
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Le stress impacte significativement vos performances</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Vous ressentez des symptômes physiques persistants</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Votre humeur est durablement affectée</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Vous vous isolez socialement</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Vous avez des pensées négatives envahissantes</span>
                  </li>
                </ul>

                <div className="card-light p-6 mb-8">
                  <h4 className="font-semibold text-prepa-blue mb-3">Ressources d'aide disponibles</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-prepa-blue mb-1">💬 Service universitaire</h5>
                      <p className="text-base text-prepa-gray">Psychologues sur le campus</p>
                    </div>
                    <div>
                      <h5 className="text-prepa-blue mb-1">📞 Ligne d'écoute</h5>
                      <p className="text-base text-prepa-gray">SOS Amitié : 09 72 39 40 50</p>
                    </div>
                    <div>
                      <h5 className="text-prepa-blue mb-1">🏥 Médecin traitant</h5>
                      <p className="text-base text-prepa-gray">Premier interlocuteur de confiance</p>
                    </div>
                    <div>
                      <h5 className="text-prepa-blue mb-1">👥 Associations étudiantes</h5>
                      <p className="text-base text-prepa-gray">Entraide et conseils pairs</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Conclusion : faire du stress un allié
                </h2>

                <p className="mb-6">
                  Gérer le stress durant les études de médecine n'est pas optionnel, c'est une compétence
                  essentielle qui vous servira tout au long de votre carrière médicale. Les techniques
                  apprises maintenant vous aideront à être un professionnel de santé équilibré et efficace.
                </p>

                <p className="mb-8">
                  Chez Prépa Réussite, nous intégrons la gestion du stress dans notre accompagnement.
                  Nos étudiants apprennent non seulement à réussir leurs examens, mais aussi à préserver
                  leur bien-être mental tout au long de leur parcours.
                </p>

                {/* CTA Box */}
                <div className="card-blue p-8 text-white text-center rounded-lg">
                  <h4 className="text-xl font-bold mb-4">
                    Besoin d'un accompagnement bienveillant ?
                  </h4>
                  <p className="text-white/90 mb-6">
                    Notre équipe intègre le coaching mental dans la préparation.
                    Apprenez à gérer le stress tout en optimisant vos performances.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                      <Smile className="w-4 h-4 mr-2" />
                      Découvrir notre approche
                    </Button>
                    <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Guide bien-être étudiant
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
