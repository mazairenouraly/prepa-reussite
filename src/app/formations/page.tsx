import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RendezVousButton } from '@/components/RendezVousButton';
import { BrochureButton } from '@/components/BrochureButton';
import {
  Users, CheckCircle, Target, Clock, Award,
  BookOpen, Zap, BarChart3, Calendar,
  Star, ArrowRight, Phone, Mail, X
} from 'lucide-react';

export default function FormationsPage() {
  return (
    <Layout>
      {/* Hero Section - Style Cours custom */}
      <section className="section-bg-gradient">
        <div className="hero-content">
          <div className="text-center text-white">
            <AnimatedSection direction="up">
              <h1 className="hero-title-pages mb-8">Nos Prépas</h1>
              <p className="text-lg lg:text-xl xl:text-2xl font-roboto font-medium max-w-4xl mx-auto">
                Des parcours adaptés à chaque profil pour réussir vos études de santé à La Réunion
              </p>
            </AnimatedSection>
          </div>
        </div>


      </section>

      {/* Méthode Section - Style Cours custom */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection direction="up">
            <div className="section-header">
              <p className="section-eyebrow">Notre méthode</p>
              <h2 className="section-title">La méthode Prépa Réussite</h2>
              <p className="section-subtitle">
                Chez Prépa Réussite, nous avons développé une <strong>approche pédagogique unique</strong>,
                adaptée aux spécificités des études de santé et aux besoins des étudiants réunionnais.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="feature-card card-base custom-card-hover">
                <div className="feature-icon">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="feature-title">Gagnez du temps</h3>
                <div className="space-y-3 text-base text-custom-gray font-roboto">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-custom-rose" />
                    <span>Supports de cours actualisés</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-custom-rose" />
                    <span>Cours animés par des professeurs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-custom-rose" />
                    <span>Ateliers méthodologiques</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="feature-card card-base custom-card-hover">
                <div className="feature-icon">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="feature-title">Améliorez votre mémoire</h3>
                <div className="space-y-3 text-base text-custom-gray font-roboto">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-custom-rose" />
                    <span>Techniques de révision</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-custom-rose" />
                    <span>Colles hebdomadaires</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-custom-rose" />
                    <span>Examens blancs</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="feature-card card-base custom-card-hover">
                <div className="feature-icon">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="feature-title">Restez motivé</h3>
                <div className="space-y-3 text-base text-custom-gray font-roboto">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-custom-rose" />
                    <span>Coaching mental</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-custom-rose" />
                    <span>Salles en libre-service 7j/7j</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-custom-rose" />
                    <span>Encadrement personnalisé</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up" delay={0.4}>
            <div className="card-base p-8 max-w-5xl mx-auto custom-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-custom-blue to-custom-rose rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-custom-dark mb-3 text-xl font-gyst">Notre promesse</h4>
                  <p className="text-custom-gray font-roboto text-lg leading-relaxed">
                    Des effectifs limités à <strong>30 étudiants maximum par centre</strong> pour garantir un accompagnement
                    de qualité, une réelle disponibilité des enseignants et un environnement propice à la progression.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Formations Section - Style Cours custom */}
      <section className="py-20 section-bg-light">
        <div className="section-container">
          <AnimatedSection direction="up">
            <div className="section-header">
              <p className="section-eyebrow">Nos prépas</p>
              <h2 className="section-title">Formations adaptées à votre profil</h2>
              <p className="section-subtitle">
                Choisissez la prépa qui correspond à votre parcours.
              </p>
              <p className="section-subtitle">
                Trois préparations ciblées, pour trois profils exigeants.
              </p>
              <p className="section-subtitle">
                Chaque programme est pensé pour maximiser vos chances de réussite selon votre niveau, votre parcours et vos objectifs.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Prépa Terminale */}
            <AnimatedSection direction="up" delay={0.1}>
              <Card className="card-base custom-card-hover overflow-hidden h-full custom-shadow-hover">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center space-x-3 mb-6">
                    <Badge className="btn-secondary py-1 px-1 text-white">Lycéens</Badge>
                    <span className="text-base text-custom-gray font-roboto">Présentiel</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-gyst text-custom-dark">Prépa Terminale</h3>
                  <p className="text-lg text-custom-gray mb-6 font-roboto">Anticiper, comprendre et prendre de l'avance.</p>

                  <div className="space-y-4 mb-8 flex-grow">
                    <h4 className="font-semibold text-custom-dark text-base font-roboto">Pour qui ?</h4>
                    <ul className="space-y-3 text-base text-custom-gray font-roboto">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-custom-rose mt-0.5 flex-shrink-0" />
                        <span>Élèves de Terminale motivés par les études de santé</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-custom-rose mt-0.5 flex-shrink-0" />
                        <span>Futurs bacheliers souhaitant se préparer sérieusement</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-custom-rose mt-0.5 flex-shrink-0" />
                        <span>Profils déterminés à structurer leurs méthodes dès le lycée</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    <h4 className="font-semibold text-custom-dark text-base font-roboto">Points clés</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Calendar className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-custom-dark text-base font-semibold font-roboto">Prépa annuelle de septembre à mai</p>
                          <p className="text-custom-gray text-s font-roboto">Compatible avec un emploi du temps de lycéen</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-custom-dark text-base font-semibold font-roboto">Préparation progressive aux exigences de la PASS/LAS</p>
                          <p className="text-custom-gray text-s font-roboto">Approche méthodique pour renforcer rigueur et confiance</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <RendezVousButton className="w-full btn-primary text-white">
                      Découvrir ce parcours
                    </RendezVousButton>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Prépa PASS */}
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="card-base custom-card-hover overflow-hidden h-full custom-shadow-hover">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center space-x-3 mb-6">
                    <Badge className="btn-secondary py-1 px-1 text-white">Universitaires</Badge>
                    <span className="text-base text-custom-gray font-roboto">Présentiel</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-gyst text-custom-dark">Prépa PASS</h3>
                  <p className="text-lg text-custom-gray mb-6 font-roboto">Maîtriser l'année décisive et franchir le cap.</p>

                  <div className="space-y-4 mb-8 flex-grow">
                    <h4 className="font-semibold text-custom-dark text-base font-roboto">Pour qui ?</h4>
                    <ul className="space-y-3 text-base text-custom-gray font-roboto">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-custom-rose mt-0.5 flex-shrink-0" />
                        <span>Étudiants inscrits en PASS à l'Université de La Réunion</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-custom-rose mt-0.5 flex-shrink-0" />
                        <span>Profils souhaitant structurer leur travail et rester constants</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-custom-rose mt-0.5 flex-shrink-0" />
                        <span>Étudiants cherchant un cadre présentiel pour progresser efficacement</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    <h4 className="font-semibold text-custom-dark text-base font-roboto">Points clés</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Calendar className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-custom-dark text-base font-semibold font-roboto">Prépa intensive de août à mai</p>
                          <p className="text-custom-gray text-s font-roboto">Entraînement continu : colles, TD, concours blancs</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-custom-dark text-base font-semibold font-roboto">Encadrement rigoureux et dynamique de groupe</p>
                          <p className="text-custom-gray text-s font-roboto">Méthodologie claire pour viser les meilleurs classements</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <RendezVousButton className="w-full btn-primary text-white">
                      Découvrir ce parcours
                    </RendezVousButton>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Prépa LAS */}
            <AnimatedSection direction="up" delay={0.3}>
              <Card className="card-base custom-card-hover overflow-hidden h-full custom-shadow-hover">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center space-x-3 mb-6">
                    <Badge className="btn-secondary py-1 px-1 text-white">Universitaires</Badge>
                    <span className="text-base text-custom-gray font-roboto">Présentiel</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-gyst text-custom-dark">Prépa LAS</h3>
                  <p className="text-lg text-custom-gray mb-6 font-roboto">Réussir la voie alternative, avec méthode et rigueur.</p>

                  <div className="space-y-4 mb-8 flex-grow">
                    <h4 className="font-semibold text-custom-dark text-base font-roboto">Pour qui ?</h4>
                    <ul className="space-y-3 text-base text-custom-gray font-roboto">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-custom-rose mt-0.5 flex-shrink-0" />
                        <span>Étudiants en Licence Accès Santé (LAS)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-custom-rose mt-0.5 flex-shrink-0" />
                        <span>Profils engagés dans un double parcours</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-custom-rose mt-0.5 flex-shrink-0" />
                        <span>Étudiants recherchant structure et accompagnement ciblé</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    <h4 className="font-semibold text-custom-dark text-base font-roboto">Points clés</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Calendar className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-custom-dark text-base font-semibold font-roboto">Prépa annuelle de août à mai</p>
                          <p className="text-custom-gray text-s font-roboto">Accompagnement spécifique aux matières santé</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-custom-dark text-base font-semibold font-roboto">Encadrement adapté à la double exigence LAS</p>
                          <p className="text-custom-gray text-s font-roboto">Progression régulière pour rester compétitif</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                  <RendezVousButton className="w-full btn-primary text-white">
                    Découvrir ce parcours
                  </RendezVousButton>
                </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up" delay={0.4}>
            <div className="text-center">
              <Button className="btn-secondary px-12 py-4 text-lg text-white">
                <Target className="w-5 h-5 mr-3" />
                Voir les tarifs et modalités d'inscription
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* L'Esprit Prépa Réussite Section - Style Cours custom */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection direction="up">
            <div className="section-header">
              <p className="section-eyebrow">Notre philosophie</p>
              <h2 className="section-title">L'Esprit Prépa Réussite</h2>
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <AnimatedSection direction="up" delay={0.2}>
              <div className="card-base p-10 custom-shadow mb-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-custom-dark mb-6 font-gyst">
                    Chez Prépa Réussite, nous défendons une idée simple, mais essentielle :
                  </h3>
                  <p className="text-3xl font-bold text-gradient-blue font-gyst">
                    La réussite ne s'achète pas. Elle se construit.
                  </p>
                </div>

                <div className="content-area space-y-6">
                  <p>
                    Trop souvent, on associe les grandes prépas – parfois facturées jusqu'à <strong>14 000 € par an</strong> – 
                    à un ticket d'entrée vers la réussite. Pourtant, le véritable moteur d'un étudiant, c'est le travail régulier, 
                    la discipline personnelle et la volonté de progresser. Aucun tarif, aussi élevé soit-il, ne remplacera jamais 
                    la force d'un engagement quotidien.
                  </p>

                  <p>
                    Une prépa ne garantit rien. Elle est là pour <strong>structurer, encadrer, encourager</strong>. 
                    Elle fournit des repères, des outils, une dynamique : des cours en présentiel, des colles, des concours blancs, 
                    une exigence collective. Mais tout cela ne devient efficace que lorsque l'étudiant décide d'en faire quelque chose.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-rose-50 p-8 rounded-xl my-8">
                    <p className="text-lg font-medium text-custom-dark text-center leading-relaxed">
                      <strong>Chez nous, l'étudiant est au centre.</strong><br/>
                      Il avance, nous encadrons. Il travaille, nous structurons. Il doute, nous soutenons.<br/>
                      <span className="text-gradient-blue font-semibold">
                        C'est ce lien-là, humain et exigeant, qui fait la différence.
                      </span>
                    </p>
                  </div>

                  <p>
                    Et puis il y a le prix. Chez Prépa Réussite, nous avons fait un choix fort : 
                    <strong>offrir un accompagnement de haut niveau, à un tarif responsable</strong>. 
                    Parce que nous refusons que le sérieux, la qualité, et la structure soient réservés à une élite économique.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <AnimatedSection direction="up" delay={0.3}>
                <div className="text-center card-base p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-custom-blue to-custom-rose rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-custom-dark mb-4 text-xl font-gyst">Exigeante, mais accessible</h4>
                  <p className="text-custom-gray font-roboto">
                    Un niveau d'excellence sans compromis, dans un cadre financier raisonnable
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.4}>
                <div className="text-center card-base p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-custom-blue to-custom-rose rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-custom-dark mb-4 text-xl font-gyst">Sérieuse, mais humaine</h4>
                  <p className="text-custom-gray font-roboto">
                    La rigueur académique alliée à un accompagnement bienveillant et personnalisé
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.5}>
                <div className="text-center card-base p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-custom-blue to-custom-rose rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-custom-dark mb-4 text-xl font-gyst">Ambitieuse, mais lucide</h4>
                  <p className="text-custom-gray font-roboto">
                    Des objectifs ambitieux fondés sur la réalité du travail et des capacités de chacun
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection direction="up" delay={0.6}>
              <div className="card-base p-10 custom-shadow text-center">
                <div className="max-w-3xl mx-auto">
                  <blockquote className="text-xl italic text-gradient-blue leading-relaxed font-roboto mb-6">
                    "Parce que la vraie méritocratie commence quand on donne à chacun les moyens de son ambition, 
                    pas quand on la réserve à ceux qui peuvent se l'offrir."
                  </blockquote>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Comparaison Section - Style Cours custom */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection direction="up">
            <div className="section-header">
              <p className="section-eyebrow">Comparatif</p>
              <h2 className="section-title">Pourquoi choisir Prépa Réussite ?</h2>
              <p className="section-subtitle">
                Découvrez ce qui nous distingue des autres prépas et pourquoi nos étudiants réussissent mieux.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <div className="comparison-table custom-shadow">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="comparison-header">
                      <th className="comparison-cell text-left font-bold font-gyst">Critères</th>
                      <th className="comparison-cell font-bold font-gyst">Prépa Réussite</th>
                      <th className="comparison-cell font-bold font-gyst">Prépas locales à 14 000€</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="comparison-row">
                      <td className="comparison-cell font-semibold font-roboto">Effectif par promo</td>
                      <td className="comparison-cell text-custom-blue font-semibold font-roboto">30 élèves max (Nord & Sud)</td>
                      <td className="comparison-cell text-custom-rose font-roboto">Souvent 100 à 150 élèves</td>
                    </tr>
                    <tr className="comparison-row bg-custom-background">
                      <td className="comparison-cell font-semibold font-roboto">Encadrement</td>
                      <td className="comparison-cell text-custom-blue font-semibold font-roboto">Proximité réelle avec l'équipe pédagogique</td>
                      <td className="comparison-cell text-custom-rose font-roboto">Suivi impersonnel, élève noyé dans la masse</td>
                    </tr>
                    <tr className="comparison-row">
                      <td className="comparison-cell font-semibold font-roboto">Mode d'enseignement</td>
                      <td className="comparison-cell text-custom-blue font-semibold font-roboto">100% présentiel en petit groupe</td>
                      <td className="comparison-cell text-custom-rose font-roboto">Présentiel magistral, peu interactif</td>
                    </tr>
                    <tr className="comparison-row bg-custom-background">
                      <td className="comparison-cell font-semibold font-roboto">Lien avec les familles</td>
                      <td className="comparison-cell text-custom-blue font-semibold font-roboto">Bilans réguliers, vraie transparence</td>
                      <td className="comparison-cell text-custom-rose font-roboto">Peu ou pas de communication pédagogique directe</td>
                    </tr>
                    <tr className="comparison-row">
                      <td className="comparison-cell font-semibold font-roboto">Structure de l'année</td>
                      <td className="comparison-cell text-custom-blue font-semibold font-roboto">Planning clair, équilibré pensé pour durer</td>
                      <td className="comparison-cell text-custom-rose font-roboto">Rythme dense, parfois épuisant</td>
                    </tr>
                    <tr className="comparison-row bg-custom-background">
                      <td className="comparison-cell font-semibold font-roboto">Souplesse pour le travail personnel</td>
                      <td className="comparison-cell text-custom-blue font-semibold font-roboto">Organisation qui laisse du temps pour s'entraîner efficacement</td>
                      <td className="comparison-cell text-custom-rose font-roboto">Emploi du temps surchargé, peu de place pour le travail personnel</td>
                    </tr>
                    <tr className="comparison-row">
                      <td className="comparison-cell font-semibold font-roboto">Coût annuel</td>
                      <td className="comparison-cell text-custom-blue font-semibold font-roboto">Accessible - jusqu'à 4 fois moins cher</td>
                      <td className="comparison-cell text-custom-rose font-roboto">Environ 14 000€ l'année</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-10 mt-16">
            <AnimatedSection direction="left" delay={0.3}>
              <div className="card-base p-8 custom-shadow">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-custom-blue to-custom-rose rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-custom-blue mb-4 text-xl font-gyst">Les points forts de Prépa Réussite</h4>
                    <ul className="space-y-3 text-custom-gray text-base font-roboto">
                      <li><strong>Suivi régulier de qualité</strong> : un accompagnement constant assuré par nos formateurs, pour suivre les progrès et garder le cap tout au long de l'année</li>
                      <li><strong>Petits effectifs</strong> : 30 élèves maximum par promo pour garantir l'écoute, l'interaction et la disponibilité</li>
                      <li><strong>Présentiel à 100 %</strong> : tous les cours, TD et colles se font en direct, avec une vraie dynamique de groupe</li>
                      <li><strong>Tarifs raisonnables</strong> : des prix cohérents avec la réalité locale, sans compromis sur la qualité</li>
                      <li><strong>Pédagogie structurée</strong> : un programme clair, balisé, avec un rythme soutenu mais équilibré</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="card-base p-8 custom-shadow">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-custom-rose to-orange-500 rounded-full flex items-center justify-center">
                    <X className="w-8 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-custom-rose mb-4 text-xl font-gyst">Ce que nous n'offrons pas</h4>
                    <ul className="space-y-3 text-custom-gray text-base font-roboto">
                      <li><strong>Pas de formule 100% en ligne</strong> : nous privilégions l'interaction humaine, pas les écrans</li>
                      <li><strong>Pas de promesses irréalistes</strong> : la réussite se construit avec méthode, pas avec des illusions</li>
                      <li><strong>Pas de classes surchargées</strong> : nous refusons l'effet "usine" pour préserver l'efficacité de l'encadrement</li>
                      <li><strong>Pas de frais cachés</strong> : tout est inclus, clair, sans surprise</li>
                      <li><strong>Pas de modèle standardisé</strong> : notre équipe s'adapte aux besoins de la promo, avec réactivité et exigence</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section - Style Cours custom */}
      <section className="py-20 section-bg-light">
        <div className="section-container">
          <AnimatedSection direction="up">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-custom-dark mb-6 font-gyst">
                Prêt à commencer votre parcours vers la réussite ?
              </h3>
              <p className="text-custom-gray mb-10 text-lg font-roboto leading-relaxed">
                Contactez-nous dès aujourd'hui pour découvrir la formation qui vous correspond
                et maximiser vos chances de réussir en médecine.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <RendezVousButton className="btn-primary px-10 py-4 text-lg text-white">
                  <Phone className="w-5 h-5 mr-3" />
                  Prendre rendez-vous
                </RendezVousButton>
                <BrochureButton className="btn-outline px-10 py-4 text-lg">
                  <Mail className="w-5 h-5 mr-3" />
                  Demander la brochure
                </BrochureButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}