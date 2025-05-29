import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RendezVousButton } from '@/components/RendezVousButton';
import { BrochureButton } from '@/components/BrochureButton';
import {
  Calendar, Clock, User, Share2, BookOpen,
  ArrowLeft, ChevronRight, Heart, Briefcase,
  CheckCircle, MapPin, TrendingUp, Users
} from 'lucide-react';
import Link from 'next/link';

export default function DebouchesReunionPage() {
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
              <span className="text-prepa-blue font-medium">Débouchés à La Réunion</span>
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
                <Badge className="bg-indigo-500 text-white mb-6">Carrière</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-prepa-blue mb-6 leading-tight">
                  Les débouchés après les études de santé à La Réunion
                </h1>
                <p className="text-xl text-prepa-gray leading-relaxed max-w-3xl mx-auto">
                  Panorama des opportunités professionnelles pour les futurs médecins, pharmaciens
                  et professionnels de santé dans l'océan Indien. Perspectives locales et régionales.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-y border-gray-200 mb-12">
                <div className="flex items-center space-x-6 text-prepa-gray text-base">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Dr. Jean-Claude Hoarau</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>2 avril 2025</span>
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
                    142
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Featured Image */}
            <AnimatedSection direction="scale" delay={0.3}>
              <div className="mb-12">
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=400&fit=crop"
                  alt="Débouchés santé La Réunion"
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
                  La Réunion offre des perspectives d'emploi particulièrement attractives pour les professionnels
                  de santé. Entre <strong>besoins démographiques croissants</strong>, développement de l'offre
                  de soins et position stratégique dans l'océan Indien, l'île présente de nombreuses opportunités
                  pour les jeunes diplômés en santé.
                </p>

                <div className="card-light p-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-prepa-blue mb-2">Un secteur en pleine expansion</h4>
                      <p className="text-prepa-gray">
                        <strong>+15% d'emplois en santé prévus d'ici 2030</strong> à La Réunion,
                        selon l'Agence Régionale de Santé, avec des besoins particulièrement marqués
                        en médecine générale, spécialités et pharmacie.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Médecine : des besoins importants dans toutes les spécialités
                </h2>

                <h3 className="text-xl font-semibold text-prepa-blue mb-4">
                  Médecine générale : un secteur en tension
                </h3>

                <p className="mb-6">
                  La médecine générale reste le secteur avec les plus forts besoins. L'île compte actuellement
                  un déficit de près de <strong>200 médecins généralistes</strong>, particulièrement marqué
                  dans les zones rurales et les Hauts.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Opportunités d'installation</h4>
                    <ul className="space-y-2 text-base text-prepa-gray">
                      <li>• <strong>Zones sous-dotées :</strong> Aides à l'installation jusqu'à 50 000€</li>
                      <li>• <strong>Maisons de santé pluridisciplinaires :</strong> 15 nouvelles prévues</li>
                      <li>• <strong>Télémédecine :</strong> Développement rapide, nouvelles pratiques</li>
                      <li>• <strong>Salariat hospitalier :</strong> Postes disponibles dans tous les établissements</li>
                    </ul>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Revenus et conditions</h4>
                    <ul className="space-y-2 text-base text-prepa-gray">
                      <li>• <strong>Libéral :</strong> 90 000 à 150 000€ annuels</li>
                      <li>• <strong>Salariat hospitalier :</strong> 55 000 à 80 000€ annuels</li>
                      <li>• <strong>Mixte :</strong> Cumul possible public/privé</li>
                      <li>• <strong>Dépassements d'honoraires :</strong> Encadrés mais possibles</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-prepa-blue mb-4">
                  Spécialités médicales : des besoins ciblés
                </h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Spécialités prioritaires</h4>
                    <ul className="space-y-1 text-base">
                      <li>• Psychiatrie</li>
                      <li>• Pédiatrie</li>
                      <li>• Gynécologie-obstétrique</li>
                      <li>• Anesthésie-réanimation</li>
                      <li>• Radiologie</li>
                      <li>• Cardiologie</li>
                    </ul>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Spécialités émergentes</h4>
                    <ul className="space-y-1 text-base">
                      <li>• Médecine tropicale</li>
                      <li>• Gériatrie</li>
                      <li>• Médecine d'urgence</li>
                      <li>• Addictologie</li>
                      <li>• Médecine du sport</li>
                      <li>• Nutrition</li>
                    </ul>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Spécialités saturées</h4>
                    <ul className="space-y-1 text-base">
                      <li>• Dermatologie</li>
                      <li>• Ophtalmologie</li>
                      <li>• ORL</li>
                      <li>• Chirurgie esthétique</li>
                    </ul>
                    <p className="text-s text-orange-600 mt-2">
                      Installation plus difficile mais pas impossible
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Pharmacie : un secteur dynamique et diversifié
                </h2>

                <p className="mb-6">
                  Le secteur pharmaceutique réunionnais connaît une croissance soutenue, portée par
                  le vieillissement de la population et l'augmentation des pathologies chroniques.
                </p>

                <div className="card-blue p-8 text-white rounded-lg mb-8">
                  <h4 className="text-xl font-bold mb-4">Panorama du secteur pharmaceutique</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2">📊 Chiffres clés</h5>
                      <ul className="text-white/90 text-base space-y-1">
                        <li>• 180 pharmacies d'officine</li>
                        <li>• 15 pharmacies hospitalières</li>
                        <li>• 3 grossistes-répartiteurs</li>
                        <li>• Croissance annuelle +3%</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">💰 Opportunités financières</h5>
                      <ul className="text-white/90 text-base space-y-1">
                        <li>• Rachat d'officine : 500k à 2M€</li>
                        <li>• ROI moyen : 8-12%</li>
                        <li>• Salariat : 45-65k€/an</li>
                        <li>• Collaboration : 35-50k€/an</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Pharmacie d'officine</h4>
                    <p className="text-prepa-gray text-base mb-4">
                      Secteur traditionnel avec de nouvelles missions de santé publique.
                    </p>
                    <ul className="space-y-2 text-base">
                      <li>• <strong>Nouvelles missions :</strong> Vaccination, dépistages, téléconsultation</li>
                      <li>• <strong>Spécialisations :</strong> Orthopédie, dermocosmétique, phytothérapie</li>
                      <li>• <strong>Zones d'opportunité :</strong> Zones commerciales, centres-villes rénovés</li>
                    </ul>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Pharmacie hospitalière</h4>
                    <p className="text-prepa-gray text-base mb-4">
                      Secteur en expansion avec la modernisation des établissements.
                    </p>
                    <ul className="space-y-2 text-base">
                      <li>• <strong>CHU Sud :</strong> Nouveau plateau technique</li>
                      <li>• <strong>Cliniques privées :</strong> Développement des services</li>
                      <li>• <strong>Spécialisations :</strong> Oncologie, stérilisation, nutrition</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Autres professions de santé : des besoins croissants
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Maïeutique (Sage-femme)</h4>
                    <ul className="space-y-2 text-base">
                      <li>• <strong>Besoins :</strong> +20 postes/an</li>
                      <li>• <strong>Secteurs :</strong> Hospitalier, libéral, PMI</li>
                      <li>• <strong>Évolutions :</strong> Suivi gynécologique, contraception</li>
                      <li>• <strong>Revenus :</strong> 35-55k€ (salarié), 60-80k€ (libéral)</li>
                    </ul>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Kinésithérapie</h4>
                    <ul className="space-y-2 text-base">
                      <li>• <strong>Besoins :</strong> +30 postes/an</li>
                      <li>• <strong>Spécialités :</strong> Sport, respiratoire, pédiatrie</li>
                      <li>• <strong>Nouveautés :</strong> Télérééducation, domicile</li>
                      <li>• <strong>Revenus :</strong> 40-70k€ selon secteur</li>
                    </ul>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Odontologie</h4>
                    <ul className="space-y-2 text-base">
                      <li>• <strong>Besoins :</strong> Modérés mais constants</li>
                      <li>• <strong>Opportunités :</strong> Zones rurales, orthodontie</li>
                      <li>• <strong>Innovations :</strong> Implantologie, esthétique</li>
                      <li>• <strong>Revenus :</strong> 80-150k€</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Spécificités réunionnaises et opportunités régionales
                </h2>

                <h3 className="text-xl font-semibold text-prepa-blue mb-4">
                  Médecine tropicale et océan Indien
                </h3>

                <p className="mb-6">
                  La position géographique de La Réunion en fait un centre de référence pour
                  la médecine tropicale dans l'océan Indien.
                </p>

                <div className="card-light p-8 mb-8">
                  <h4 className="text-xl font-bold text-prepa-blue mb-4">Opportunités dans l'océan Indien</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-prepa-blue mb-2">🌍 Coopération régionale</h5>
                      <ul className="text-prepa-gray text-base space-y-1">
                        <li>• Missions médicales à Madagascar, Comores, Mayotte</li>
                        <li>• Expertise en maladies vectorielles</li>
                        <li>• Formation des professionnels régionaux</li>
                        <li>• Télémédecine transfrontalière</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-prepa-blue mb-2">🏥 Centres d'excellence</h5>
                      <ul className="text-prepa-gray text-base space-y-1">
                        <li>• Centre de référence diabète</li>
                        <li>• Institut de recherche vaccinale</li>
                        <li>• Plateforme de télémédecine</li>
                        <li>• Centre de formation continue</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-prepa-blue mb-4">
                  Innovation et e-santé
                </h3>

                <p className="mb-6">
                  La Réunion développe rapidement son écosystème d'innovation en santé,
                  créant de nouvelles opportunités professionnelles.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Secteurs innovants</h4>
                    <ul className="space-y-2 text-base">
                      <li>• <strong>Télémédecine :</strong> 50% des établissements équipés</li>
                      <li>• <strong>IA médicale :</strong> Radiologie, aide au diagnostic</li>
                      <li>• <strong>Objets connectés :</strong> Suivi patients chroniques</li>
                      <li>• <strong>Biotech :</strong> Recherche sur plantes endémiques</li>
                    </ul>
                  </div>
                  <div className="card-base p-6">
                    <h4 className="font-semibold text-prepa-blue mb-3">Écosystème de soutien</h4>
                    <ul className="space-y-2 text-base">
                      <li>• <strong>Technopole :</strong> Incubateur santé-tech</li>
                      <li>• <strong>Fonds d'investissement :</strong> Aides à la création</li>
                      <li>• <strong>Partenariats :</strong> Universités, CHU, entreprises</li>
                      <li>• <strong>Formation :</strong> Masters spécialisés</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Conseils pour réussir son installation
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-prepa-blue">Anticipez votre projet</h4>
                      <p className="text-prepa-gray text-base">
                        Dès la 4ème année, commencez à explorer les opportunités et créer votre réseau
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-prepa-blue">Profitez des stages</h4>
                      <p className="text-prepa-gray text-base">
                        Multipliez les stages dans différents secteurs pour identifier vos préférences
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-prepa-blue">Développez votre réseau</h4>
                      <p className="text-prepa-gray text-base">
                        Participez aux événements professionnels, rejoignez les associations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-prepa-blue">Étudiez les aides disponibles</h4>
                      <p className="text-prepa-gray text-base">
                        Renseignez-vous sur les dispositifs d'aide à l'installation et les exonérations
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">
                  Conclusion : un avenir prometteur dans l'océan Indien
                </h2>

                <p className="mb-6">
                  La Réunion offre des perspectives d'emploi exceptionnelles pour les professionnels
                  de santé. Entre besoins locaux importants, innovations technologiques et position
                  stratégique dans l'océan Indien, l'île constitue un territoire d'avenir pour
                  les jeunes diplômés motivés.
                </p>

                <p className="mb-8">
                  Chez Prépa Réussite, nous préparons nos étudiants non seulement à réussir leurs études,
                  mais aussi à comprendre les enjeux professionnels de demain. Notre ancrage local
                  nous permet d'offrir une vision claire des opportunités réunionnaises.
                </p>

                {/* CTA Box */}
                <div className="card-blue p-8 text-white text-center rounded-lg">
                  <h4 className="text-xl font-bold mb-4">
                    Construisez votre avenir médical à La Réunion !
                  </h4>
                  <p className="text-white/90 mb-6">
                    Rejoignez nos formations et bénéficiez de notre expertise locale
                    pour réussir vos études et votre carrière dans l'océan Indien.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/formations">
                      <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                        <Briefcase className="w-4 h-4 mr-2" />
                        Découvrir nos formations
                      </Button>
                    </Link>
                    <RendezVousButton className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                      <MapPin className="w-4 h-4 mr-2" />
                      Prendre rendez-vous
                    </RendezVousButton>
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
