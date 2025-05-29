import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar, Clock, User, Share2, BookOpen,
  ArrowLeft, ChevronRight, Heart, Quote,
  CheckCircle, Star, Award, Target
} from 'lucide-react';
import Link from 'next/link';

export default function TemoignageThomasPage() {
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
              <span className="text-prepa-blue font-medium">Témoignage de Thomas</span>
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
                <Badge className="bg-green-500 text-white mb-6">Témoignages</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-prepa-blue mb-6 leading-tight">
                  Témoignage : de la terminale à la deuxième année de médecine
                </h1>
                <p className="text-xl text-prepa-gray leading-relaxed max-w-3xl mx-auto">
                  Le parcours inspirant de Thomas, ancien élève de Prépa Réussite,
                  aujourd'hui en deuxième année de médecine à l'Université de La Réunion.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-y border-gray-200 mb-12">
                <div className="flex items-center space-x-6 text-prepa-gray text-base">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Thomas Leclerc</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>8 avril 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>4 min de lecture</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  <Button variant="outline" size="sm" className="btn-outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                    <Heart className="w-4 h-4 mr-2" />
                    203
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Featured Image */}
            <AnimatedSection direction="scale" delay={0.3}>
              <div className="mb-12">
                <img
                  src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&h=400&fit=crop"
                  alt="Thomas Leclerc, étudiant en médecine"
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
                {/* Citation d'introduction */}
                <div className="card-blue p-8 text-white rounded-lg mb-12">
                  <Quote className="w-12 h-12 mb-4 text-prepa-gold" />
                  <blockquote className="text-xl italic leading-relaxed mb-4">
                    "Prépa Réussite a complètement changé ma façon d'apprendre. Grâce à leur méthode
                    et à l'accompagnement personnalisé, j'ai non seulement réussi ma PASS du premier coup,
                    mais j'ai aussi développé des habitudes de travail qui me servent encore aujourd'hui."
                  </blockquote>
                  <p className="text-white/90">Thomas Leclerc, 20 ans, étudiant en 2ème année de médecine</p>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Le point de départ : une terminale comme les autres
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  En terminale S au lycée de Saint-Denis, Thomas était un bon élève sans être exceptionnel.
                  Avec une moyenne de 14/20, il rêvait de devenir médecin mais s'interrogeait sur ses chances
                  de réussir la redoutable première année.
                </p>

                <div className="card-light p-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-prepa-blue italic mb-2">
                        "J'avais peur de ne pas être à la hauteur. Mes parents me poussaient vers
                        une prépa parisienne, mais l'idée de quitter La Réunion me terrifiait.
                        C'est alors que j'ai découvert Prépa Réussite."
                      </p>
                      <p className="text-prepa-gray text-base">Thomas, sur sa décision d'intégrer la prépa</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  L'année de prépa terminale : prendre de l'avance
                </h2>

                <p className="mb-6">
                  Thomas a intégré la prépa terminale de Prépa Réussite en septembre 2022.
                  Rapidement, il a découvert un nouvel univers d'apprentissage.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      Ce qui l'a marqué
                    </h4>
                    <ul className="space-y-2 text-base text-prepa-gray">
                      <li>• La méthode de travail structurée</li>
                      <li>• L'accompagnement individualisé</li>
                      <li>• La bienveillance de l'équipe</li>
                      <li>• L'émulation du groupe</li>
                      <li>• Les techniques de mémorisation</li>
                    </ul>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-prepa-gold" />
                      Ses résultats
                    </h4>
                    <ul className="space-y-2 text-base text-prepa-gray">
                      <li>• +3 points de moyenne générale</li>
                      <li>• Mention Bien au baccalauréat</li>
                      <li>• Confiance en soi retrouvée</li>
                      <li>• Méthode de travail maîtrisée</li>
                      <li>• Vision claire de son projet</li>
                    </ul>
                  </div>
                </div>

                <div className="card-light p-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-prepa-blue italic mb-2">
                        "Le plus important, ce n'étaient pas seulement les cours, mais surtout
                        la méthode qu'ils m'ont apprise. J'ai appris à apprendre efficacement,
                        et ça a tout changé."
                      </p>
                      <p className="text-prepa-gray text-base">Thomas, sur l'apport de la prépa terminale</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  La PASS : une année intense mais maîtrisée
                </h2>

                <p className="mb-6">
                  Fort de sa préparation, Thomas a abordé sa PASS avec confiance. Il a continué
                  à bénéficier de l'accompagnement de Prépa Réussite pendant cette année cruciale.
                </p>

                <h3 className="text-xl font-semibold text-prepa-blue mb-4">
                  Premier semestre : prendre ses marques
                </h3>

                <p className="mb-6">
                  Contrairement à beaucoup de ses camarades, Thomas n'a pas été déstabilisé par
                  le rythme universitaire. Sa préparation l'avait habitué à la charge de travail
                  et aux méthodes d'apprentissage spécifiques.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-prepa-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">15.2</span>
                    </div>
                    <h4 className="font-semibold text-prepa-blue">Moyenne S1</h4>
                    <p className="text-prepa-gray text-base">Classé 45e/280</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-prepa-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-prepa-blue font-bold text-lg">16.8</span>
                    </div>
                    <h4 className="font-semibold text-prepa-blue">Moyenne S2</h4>
                    <p className="text-prepa-gray text-base">Classé 18e/280</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-prepa-blue">Résultat final</h4>
                    <p className="text-prepa-gray text-base">Admis en médecine</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-prepa-blue mb-4">
                  Les clés de sa réussite selon Thomas
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-prepa-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-prepa-blue">Organisation rigoureuse</h4>
                      <p className="text-prepa-gray text-base">
                        Planning hebdomadaire précis avec objectifs quotidiens et révisions planifiées
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-prepa-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-prepa-blue">Techniques apprises en prépa</h4>
                      <p className="text-prepa-gray text-base">
                        Répétition espacée, cartes mentales et méthode Feynman systématiquement appliquées
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-prepa-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-prepa-blue">Suivi personnalisé</h4>
                      <p className="text-prepa-gray text-base">
                        Entretiens réguliers avec son coach pour ajuster sa stratégie et maintenir la motivation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-prepa-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-prepa-blue">Équilibre vie/études</h4>
                      <p className="text-prepa-gray text-base">
                        Maintien d'activités sportives et sociales pour préserver sa santé mentale
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Aujourd'hui : étudiant en 2ème année de médecine
                </h2>

                <p className="mb-6">
                  Thomas poursuit brillamment ses études de médecine. Les habitudes prises
                  chez Prépa Réussite continuent de porter leurs fruits.
                </p>

                <div className="card-light p-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-prepa-blue italic mb-2">
                        "Je recommande Prépa Réussite à tous les futurs étudiants en santé.
                        Ce n'est pas juste une prépa, c'est une école de la réussite qui vous accompagne
                        bien au-delà du concours."
                      </p>
                      <p className="text-prepa-gray text-base">Thomas, conseil aux futurs candidats</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Ses conseils aux futurs étudiants
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-4">Pour les terminales</h4>
                    <ul className="space-y-2 text-base">
                      <li>• N'ayez pas peur de commencer tôt</li>
                      <li>• La prépa terminale est un investissement rentable</li>
                      <li>• Profitez de l'accompagnement personnalisé</li>
                      <li>• Travaillez votre méthode avant tout</li>
                    </ul>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-4">Pour les PASS</h4>
                    <ul className="space-y-2 text-base">
                      <li>• Restez régulier dans vos efforts</li>
                      <li>• N'hésitez pas à demander de l'aide</li>
                      <li>• Gardez du temps pour vous détendre</li>
                      <li>• Croyez en vos capacités</li>
                    </ul>
                  </div>
                </div>

                {/* CTA Box */}
                <div className="card-blue p-8 text-white text-center rounded-lg">
                  <h4 className="text-xl font-bold mb-4">
                    Vous aussi, écrivez votre réussite !
                  </h4>
                  <p className="text-white/90 mb-6">
                    Rejoignez Thomas et tous nos anciens étudiants qui ont réalisé leur rêve
                    grâce à l'accompagnement de Prépa Réussite.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                      <Target className="w-4 h-4 mr-2" />
                      Découvrir nos formations
                    </Button>
                    <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Lire d'autres témoignages
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
