import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RendezVousButton } from '@/components/RendezVousButton';
import { BrochureButton } from '@/components/BrochureButton';
import {
  Calendar, Clock, User, Share2, BookOpen,
  ArrowLeft, ChevronRight, Heart, MessageCircle,
  CheckCircle, AlertTriangle, Target, Scale
} from 'lucide-react';
import Link from 'next/link';

export default function LasVsPassPage() {
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
              <span className="text-prepa-blue font-medium">LAS vs PASS : quelle voie choisir ?</span>
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
                <Badge className="bg-prepa-blue text-white mb-6">Orientation</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-prepa-blue mb-6 leading-tight">
                  LAS vs PASS : quelle voie choisir pour réussir en médecine ?
                </h1>
                <p className="text-xl text-prepa-gray leading-relaxed max-w-3xl mx-auto">
                  Analyse comparative complète des deux parcours d'accès aux études de santé
                  pour vous aider à faire le bon choix selon votre profil et vos objectifs.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-y border-gray-200 mb-12">
                <div className="flex items-center space-x-6 text-prepa-gray text-base">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Dr. Paul Dubois</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>12 avril 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>8 min de lecture</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  <Button variant="outline" size="sm" className="btn-outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                    <Heart className="w-4 h-4 mr-2" />
                    89
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Featured Image */}
            <AnimatedSection direction="scale" delay={0.3}>
              <div className="mb-12">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop"
                  alt="Choix entre LAS et PASS"
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
                  Depuis la réforme de 2020, deux voies principales permettent d'accéder aux études de santé :
                  la <strong>PASS (Parcours Accès Spécifique Santé)</strong> et la <strong>LAS (Licence Accès Santé)</strong>.
                  Chacune présente des avantages et des contraintes spécifiques qu'il est essentiel de comprendre
                  pour faire le bon choix.
                </p>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  La PASS : la voie directe vers les études de santé
                </h2>

                <h3 className="text-xl font-semibold text-prepa-blue mb-4">
                  Principe et organisation
                </h3>

                <p className="mb-6">
                  La PASS est une année spécifiquement dédiée à la préparation aux études de santé.
                  Elle comprend :
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Un socle commun de matières scientifiques fondamentales</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Une option disciplinaire (mineure) au choix</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Une formation aux enjeux contemporains de la santé</span>
                  </li>
                </ul>

                <div className="card-blue p-8 text-white rounded-lg mb-8">
                  <h4 className="text-xl font-bold mb-4">Avantages de la PASS</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2">✅ Formation ciblée</h5>
                      <p className="text-white/90 text-base">
                        Programme entièrement dédié aux études de santé
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">✅ Immersion directe</h5>
                      <p className="text-white/90 text-base">
                        Contact immédiat avec l'environnement médical
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">✅ Communauté d'étudiants</h5>
                      <p className="text-white/90 text-base">
                        Entraide entre futurs professionnels de santé
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">✅ Preparation optimale</h5>
                      <p className="text-white/90 text-base">
                        Contenu parfaitement adapté aux concours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 bg-orange-50 p-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-orange-700 mb-2">Contraintes de la PASS</h4>
                      <ul className="text-orange-700 text-base space-y-1">
                        <li>• Pression intense et concurrence élevée</li>
                        <li>• Peu d'alternatives en cas d'échec</li>
                        <li>• Charge de travail très importante</li>
                        <li>• Une seule chance de candidature</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  La LAS : la voie sécurisée avec plan B intégré
                </h2>

                <h3 className="text-xl font-semibold text-prepa-blue mb-4">
                  Principe et organisation
                </h3>

                <p className="mb-6">
                  La LAS permet de suivre une licence disciplinaire classique tout en préparant
                  l'accès aux études de santé grâce à une option spécialisée.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Licences disponibles</h4>
                    <ul className="text-prepa-gray text-base space-y-2">
                      <li>• Licence de Biologie</li>
                      <li>• Licence de Chimie</li>
                      <li>• Licence de Physique</li>
                      <li>• Licence de Psychologie</li>
                      <li>• Licence STAPS</li>
                      <li>• Licence de Droit</li>
                    </ul>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Option santé</h4>
                    <ul className="text-prepa-gray text-base space-y-2">
                      <li>• Chimie générale et organique</li>
                      <li>• Biologie cellulaire</li>
                      <li>• Physique appliquée</li>
                      <li>• Anatomie de base</li>
                      <li>• Santé publique</li>
                    </ul>
                  </div>
                </div>

                <div className="card-light p-8 mb-8">
                  <h4 className="text-xl font-bold text-prepa-blue mb-4">Avantages de la LAS</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-prepa-blue mb-2">🛡️ Sécurité du parcours</h5>
                      <p className="text-prepa-gray text-base">
                        Diplôme de licence garanti même sans admission en santé
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-prepa-blue mb-2">🔄 Plusieurs chances</h5>
                      <p className="text-prepa-gray text-base">
                        Possibilité de candidater en L1, L2 ou L3
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-prepa-blue mb-2">⚖️ Charge répartie</h5>
                      <p className="text-prepa-gray text-base">
                        Pression moins intense, rythme plus gérable
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-prepa-blue mb-2">🌟 Profil diversifié</h5>
                      <p className="text-prepa-gray text-base">
                        Culture générale enrichie par la discipline choisie
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Comparaison détaillée : PASS vs LAS
                </h2>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                    <thead className="bg-prepa-blue text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Critères</th>
                        <th className="px-6 py-4 text-center font-semibold">PASS</th>
                        <th className="px-6 py-4 text-center font-semibold">LAS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="px-6 py-4 font-medium">Durée</td>
                        <td className="px-6 py-4 text-center">1 an</td>
                        <td className="px-6 py-4 text-center">1 à 3 ans</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <td className="px-6 py-4 font-medium">Nombre de candidatures</td>
                        <td className="px-6 py-4 text-center text-orange-600">1 seule</td>
                        <td className="px-6 py-4 text-center text-green-600">2 maximum</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-6 py-4 font-medium">Plan B</td>
                        <td className="px-6 py-4 text-center text-red-600">Mineure uniquement</td>
                        <td className="px-6 py-4 text-center text-green-600">Licence complète</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <td className="px-6 py-4 font-medium">Charge de travail</td>
                        <td className="px-6 py-4 text-center text-orange-600">Très élevée</td>
                        <td className="px-6 py-4 text-center text-green-600">Modérée</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-6 py-4 font-medium">Spécialisation santé</td>
                        <td className="px-6 py-4 text-center text-green-600">100%</td>
                        <td className="px-6 py-4 text-center text-orange-600">Partielle</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Comment choisir entre PASS et LAS ?
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="card-base p-6 border-blue-200">
                    <h4 className="font-bold text-prepa-blue mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Choisir la PASS si...
                    </h4>
                    <ul className="space-y-3 text-base">
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Vous êtes certain de votre projet médical</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Vous avez un excellent niveau scientifique</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Vous supportez bien la pression</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Vous préférez vous concentrer sur un objectif</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Vous avez une capacité de travail exceptionnelle</span>
                      </li>
                    </ul>
                  </div>

                  <div className="card-base p-6 border-green-200">
                    <h4 className="font-bold text-prepa-blue mb-4 flex items-center">
                      <Scale className="w-5 h-5 mr-2" />
                      Choisir la LAS si...
                    </h4>
                    <ul className="space-y-3 text-base">
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Vous voulez sécuriser votre parcours</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Vous hésitez encore sur votre orientation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Vous préférez un rythme plus gérable</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Vous souhaitez diversifier vos compétences</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Vous voulez plusieurs chances de réussir</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Conclusion : une décision personnelle
                </h2>

                <p className="mb-6">
                  Le choix entre PASS et LAS n'est pas une question de "meilleure" voie, mais de voie
                  la plus adaptée à votre profil, vos objectifs et votre personnalité. Les deux parcours
                  mènent aux mêmes études de santé et forment d'excellents professionnels.
                </p>

                <p className="mb-8">
                  Chez Prépa Réussite, nous accompagnons nos étudiants dans les deux parcours avec
                  des formations spécialement adaptées aux spécificités de chaque voie. Notre expérience
                  nous permet de vous conseiller dans votre choix et de maximiser vos chances de réussite,
                  quel que soit le parcours choisi.
                </p>

                {/* CTA Box */}
                <div className="card-light p-8 text-center">
                  <h4 className="text-xl font-bold text-prepa-blue mb-4">
                    Besoin d'aide pour choisir ?
                  </h4>
                  <p className="text-prepa-gray mb-6">
                    Rencontrez nos conseillers pour un bilan personnalisé et des recommandations adaptées à votre profil.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <RendezVousButton className="btn-primary">
                      <Target className="w-4 h-4 mr-2" />
                      Prendre rendez-vous
                    </RendezVousButton>
                    <BrochureButton variant="outline" className="btn-outline">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Guide d'orientation
                    </BrochureButton>
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
