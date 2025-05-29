import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar, Clock, User, Share2, BookOpen,
  ArrowLeft, ChevronRight, Heart, MessageCircle,
  CheckCircle, AlertTriangle, Lightbulb, Target
} from 'lucide-react';
import Link from 'next/link';

export default function BlogArticlePage() {
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
              <span className="text-prepa-blue font-medium">Comment réussir sa PASS</span>
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
                <Badge className="bg-prepa-gold text-prepa-blue mb-6">PASS/LAS</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-prepa-blue mb-6 leading-tight">
                  Comment réussir sa PASS : nos conseils d'experts
                </h1>
                <p className="text-xl text-prepa-gray leading-relaxed max-w-3xl mx-auto">
                  Découvrez nos meilleures astuces pour optimiser vos chances de réussite en première année
                  des études de santé. Guide complet basé sur l'expérience de nos enseignants et le retour
                  de nos anciens étudiants.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-y border-gray-200 mb-12">
                <div className="flex items-center space-x-6 text-prepa-gray text-base">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Dr. Marie Laurent</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>15 avril 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>6 min de lecture</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  <Button variant="outline" size="sm" className="btn-outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                    <Heart className="w-4 h-4 mr-2" />
                    124
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Featured Image */}
            <AnimatedSection direction="scale" delay={0.3}>
              <div className="mb-12">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=400&fit=crop"
                  alt="Étudiants en médecine travaillant ensemble"
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
                  La <strong>PASS (Parcours Accès Spécifique Santé)</strong> représente un défi majeur pour tous les étudiants
                  qui souhaitent intégrer les études de santé. Avec un taux de réussite national autour de 20%,
                  il est essentiel de bien se préparer et d'adopter les bonnes stratégies dès le début de l'année.
                </p>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  1. Comprendre les enjeux de la PASS
                </h2>

                <p className="mb-6">
                  La PASS n'est pas seulement une année d'études intensive, c'est un véritable marathon qui demande
                  une préparation méthodique et une organisation rigoureuse. Contrairement aux idées reçues,
                  la réussite ne dépend pas uniquement du nombre d'heures de travail, mais de la qualité
                  de votre méthode et de votre régularité.
                </p>

                {/* Info Box */}
                <div className="card-light p-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-prepa-blue mb-2">Point clé</h4>
                      <p className="text-prepa-gray">
                        <strong>85% de nos étudiants</strong> qui suivent notre méthode de travail structurée
                        réussissent leur PASS dès la première tentative, contre 20% en moyenne nationale.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  2. Les piliers de la réussite en PASS
                </h2>

                <h3 className="text-xl font-semibold text-prepa-blue mb-4">
                  A. L'organisation et la planification
                </h3>

                <p className="mb-6">
                  Dès la rentrée, établissez un planning hebdomadaire réaliste qui intègre :
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Les cours magistraux obligatoires</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Les séances de travail dirigé (TD)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Les temps de révision personnelle (minimum 4h/jour)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Les moments de détente et de sport (essentiels !)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Le sommeil de qualité (7-8h par nuit minimum)</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-prepa-blue mb-4">
                  B. Les techniques d'apprentissage efficaces
                </h3>

                <p className="mb-6">
                  La mémorisation en PASS nécessite des techniques spécifiques adaptées au volume
                  important d'informations à retenir :
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Méthode des répétitions espacées</h4>
                    <p className="text-prepa-gray text-base">
                      Révisez une notion à J+1, J+3, J+7, puis J+15. Cette technique optimise
                      la rétention à long terme.
                    </p>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Cartes mentales (Mind Maps)</h4>
                    <p className="text-prepa-gray text-base">
                      Structurez vos cours sous forme de schémas pour faciliter la mémorisation
                      et créer des liens entre les concepts.
                    </p>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Technique Feynman</h4>
                    <p className="text-prepa-gray text-base">
                      Expliquez chaque concept comme si vous l'enseigniez à un débutant.
                      Cela révèle vos lacunes de compréhension.
                    </p>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">QCM réguliers</h4>
                    <p className="text-prepa-gray text-base">
                      Entraînez-vous quotidiennement avec des QCM pour vous habituer au format
                      et identifier vos points faibles.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  3. Gérer la pression et maintenir sa motivation
                </h2>

                <p className="mb-6">
                  La PASS est autant un défi mental que intellectuel. Voici nos conseils pour maintenir
                  un équilibre psychologique optimal :
                </p>

                {/* Warning Box */}
                <div className="border-l-4 border-orange-500 bg-orange-50 p-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-orange-700 mb-2">Attention au burn-out</h4>
                      <p className="text-orange-700 text-base">
                        Un étudiant épuisé n'est pas un étudiant efficace. Respectez vos temps de pause
                        et n'hésitez pas à demander de l'aide si vous vous sentez dépassé.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li>
                    <strong>Fixez-vous des objectifs réalistes :</strong> Ne visez pas la perfection,
                    mais la progression constante.
                  </li>
                  <li>
                    <strong>Créez un réseau de soutien :</strong> Entourez-vous d'autres étudiants motivés
                    et de votre famille.
                  </li>
                  <li>
                    <strong>Célébrez vos petites victoires :</strong> Chaque chapitre maîtrisé est un pas
                    vers votre objectif final.
                  </li>
                  <li>
                    <strong>Gardez votre "pourquoi" en tête :</strong> Rappelez-vous régulièrement pourquoi
                    vous voulez devenir professionnel de santé.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  4. L'importance de l'accompagnement
                </h2>

                <p className="mb-6">
                  Contrairement à ce que certains peuvent penser, demander de l'aide n'est pas un signe
                  de faiblesse, mais une stratégie intelligente. Les étudiants accompagnés ont statistiquement
                  plus de chances de réussir leur PASS.
                </p>

                <div className="card-blue p-8 text-white rounded-lg mb-8">
                  <h4 className="text-xl font-bold mb-4">Pourquoi choisir un accompagnement personnalisé ?</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2">Gain de temps</h5>
                      <p className="text-white/90 text-base">
                        Méthodes éprouvées et conseils ciblés pour optimiser votre apprentissage.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Suivi régulier</h5>
                      <p className="text-white/90 text-base">
                        Évaluation continue de vos progrès et ajustement de votre stratégie.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Motivation</h5>
                      <p className="text-white/90 text-base">
                        Soutien moral et encouragements dans les moments difficiles.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Réseau</h5>
                      <p className="text-white/90 text-base">
                        Accès à une communauté d'étudiants partageant les mêmes objectifs.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Conclusion : Votre réussite commence aujourd'hui
                </h2>

                <p className="mb-6">
                  Réussir sa PASS n'est pas une question de chance ou de talent exceptionnel.
                  C'est le résultat d'une préparation méthodique, d'une organisation rigoureuse
                  et d'une persévérance sans faille. Chaque jour compte, chaque effort vous rapproche
                  de votre objectif.
                </p>

                <p className="mb-8">
                  Chez Prépa Réussite, nous avons accompagné des centaines d'étudiants vers la réussite.
                  Notre méthode éprouvée et notre approche personnalisée peuvent faire la différence
                  dans votre parcours.
                </p>

                {/* CTA Box */}
                <div className="card-light p-8 text-center">
                  <h4 className="text-xl font-bold text-prepa-blue mb-4">
                    Prêt à maximiser vos chances de réussite ?
                  </h4>
                  <p className="text-prepa-gray mb-6">
                    Découvrez notre méthode et bénéficiez de l'expérience de nos enseignants experts.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="btn-primary">
                      <Target className="w-4 h-4 mr-2" />
                      Découvrir nos formations
                    </Button>
                    <Button variant="outline" className="btn-outline">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Télécharger notre guide
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-prepa-light">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up">
              <Card className="card-base">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <img
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
                      alt="Dr. Marie Laurent"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-prepa-blue mb-2">Dr. Marie Laurent</h4>
                      <p className="text-prepa-gray mb-4">
                        Médecin généraliste et enseignante en sciences médicales, Dr. Laurent accompagne
                        les étudiants en PASS depuis plus de 8 ans. Elle a développé plusieurs méthodes
                        d'apprentissage innovantes spécifiquement adaptées aux études de santé.
                      </p>
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline" className="text-prepa-blue border-prepa-blue">
                          Médecin généraliste
                        </Badge>
                        <Badge variant="outline" className="text-prepa-blue border-prepa-blue">
                          Enseignante PASS
                        </Badge>
                        <Badge variant="outline" className="text-prepa-blue border-prepa-blue">
                          8 ans d'expérience
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up">
              <h3 className="text-2xl font-bold text-prepa-blue mb-8 text-center">
                Articles similaires
              </h3>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection direction="left" delay={0.1}>
                <Card className="card-base overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop"
                    alt="LAS vs PASS"
                    className="w-full h-40 object-cover"
                  />
                  <CardContent className="p-6">
                    <Badge className="bg-prepa-blue text-white mb-3">Orientation</Badge>
                    <h4 className="font-bold text-prepa-blue mb-2">
                      LAS vs PASS : quelle voie choisir ?
                    </h4>
                    <p className="text-prepa-gray text-base mb-4">
                      Analyse comparative des deux parcours d'accès aux études de santé...
                    </p>
                    <Link href="/blog/las-vs-pass-quelle-voie-choisir">
                      <Button variant="ghost" size="sm" className="text-prepa-blue">
                        Lire l'article
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.1}>
                <Card className="card-base overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop"
                    alt="Méthodes de révision"
                    className="w-full h-40 object-cover"
                  />
                  <CardContent className="p-6">
                    <Badge className="bg-prepa-gold text-prepa-blue mb-3">Méthodes</Badge>
                    <h4 className="font-bold text-prepa-blue mb-2">
                      Méthodes de révision efficaces
                    </h4>
                    <p className="text-prepa-gray text-base mb-4">
                      Techniques d'apprentissage basées sur les neurosciences...
                    </p>
                    <Link href="/blog/methodes-revision-efficaces">
                      <Button variant="ghost" size="sm" className="text-prepa-blue">
                        Lire l'article
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
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
