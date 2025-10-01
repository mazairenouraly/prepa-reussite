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

export default function NosParcoursPage() {
  return (
    <Layout>
      <section className="section-bg-gradient overflow-hidden">
        <div className="hero-content">
          <div className="text-center text-white">
            <AnimatedSection direction="up">
              <h1 className="hero-title-pages mb-8">Nos Prépas</h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-roboto font-medium max-w-4xl mx-auto px-4">
                Des parcours adaptés à chaque profil pour réussir vos études de santé à La Réunion
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Méthode Section */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
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

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-16">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="feature-card card-base custom-card-hover">
                <div className="feature-icon">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="feature-title">Gagnez du temps</h3>
                <div className="space-y-3 text-sm md:text-base text-custom-gray font-roboto">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-custom-rose flex-shrink-0" />
                    <span>Supports de cours actualisés</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-custom-rose flex-shrink-0" />
                    <span>Cours animés par des formateurs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-custom-rose flex-shrink-0" />
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
                <div className="space-y-3 text-sm md:text-base text-custom-gray font-roboto">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-custom-rose flex-shrink-0" />
                    <span>Techniques de révision</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-custom-rose flex-shrink-0" />
                    <span>Colles hebdomadaires</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-custom-rose flex-shrink-0" />
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
                <div className="space-y-3 text-sm md:text-base text-custom-gray font-roboto">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-custom-rose flex-shrink-0" />
                    <span>Coaching mental</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-custom-rose flex-shrink-0" />
                    <span>Planning hébdomadaire structuré</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-custom-rose flex-shrink-0" />
                    <span>Encadrement personnalisé</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up" delay={0.4}>
            <div className="card-base p-6 md:p-8 max-w-5xl mx-auto custom-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-custom-blue to-custom-rose rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-custom-dark mb-3 text-lg md:text-xl font-gyst">Notre promesse</h4>
                  <p className="text-custom-gray font-roboto text-base md:text-lg leading-relaxed">
                    Des effectifs limités à <strong>30 étudiants maximum par centre</strong> pour garantir un accompagnement
                    de qualité, une réelle disponibilité des enseignants et un environnement propice à la progression.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Formations Section */}
      <section className="py-16 md:py-20 section-bg-light overflow-hidden">
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

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {/* Prépa Terminale */}
            <AnimatedSection direction="up" delay={0.1}>
              <Card className="card-base custom-card-hover overflow-hidden h-full custom-shadow-hover">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
                    <Badge className="btn-secondary py-1 px-3 text-white w-fit">Lycéens</Badge>
                    <span className="text-sm md:text-base text-custom-gray font-roboto">Présentiel</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 font-gyst text-custom-dark">Prépa Terminale</h3>
                  <p className="text-base md:text-lg text-custom-gray mb-6 font-roboto">Anticiper, comprendre et prendre de l'avance.</p>

                  <div className="space-y-4 mb-8 flex-grow">
                    <h4 className="font-semibold text-custom-dark text-sm md:text-base font-roboto">Pour qui ?</h4>
                    <ul className="space-y-3 text-sm md:text-base text-custom-gray font-roboto">
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
                    <h4 className="font-semibold text-custom-dark text-sm md:text-base font-roboto">Points clés</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Calendar className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-custom-dark text-sm md:text-base font-semibold font-roboto">Prépa annuelle de septembre à mai</p>
                          <p className="text-custom-gray text-xs md:text-sm font-roboto">Compatible avec un emploi du temps de lycéen</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-custom-dark text-sm md:text-base font-semibold font-roboto">Préparation progressive aux exigences de la PASS/LAS</p>
                          <p className="text-custom-gray text-xs md:text-sm font-roboto">Approche méthodique pour renforcer rigueur et confiance</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <RendezVousButton className="w-full btn-primary text-white text-sm md:text-base">
                      Découvrir ce parcours
                    </RendezVousButton>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Prépa PASS */}
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="card-base custom-card-hover overflow-hidden h-full custom-shadow-hover">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
                    <Badge className="btn-secondary py-1 px-3 text-white w-fit">Universitaires</Badge>
                    <span className="text-sm md:text-base text-custom-gray font-roboto">Présentiel</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 font-gyst text-custom-dark">Prépa PASS</h3>
                  <p className="text-base md:text-lg text-custom-gray mb-6 font-roboto">Maîtriser l'année décisive et franchir le cap.</p>

                  <div className="space-y-4 mb-8 flex-grow">
                    <h4 className="font-semibold text-custom-dark text-sm md:text-base font-roboto">Pour qui ?</h4>
                    <ul className="space-y-3 text-sm md:text-base text-custom-gray font-roboto">
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
                    <h4 className="font-semibold text-custom-dark text-sm md:text-base font-roboto">Points clés</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Calendar className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-custom-dark text-sm md:text-base font-semibold font-roboto">Prépa intensive de août à mai</p>
                          <p className="text-custom-gray text-xs md:text-sm font-roboto">Entraînement continu : colles, TD, concours blancs</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-custom-dark text-sm md:text-base font-semibold font-roboto">Encadrement rigoureux et dynamique de groupe</p>
                          <p className="text-custom-gray text-xs md:text-sm font-roboto">Méthodologie claire pour viser les meilleurs classements</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <RendezVousButton className="w-full btn-primary text-white text-sm md:text-base">
                      Découvrir ce parcours
                    </RendezVousButton>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Prépa LAS */}
            <AnimatedSection direction="up" delay={0.3}>
              <Card className="card-base custom-card-hover overflow-hidden h-full custom-shadow-hover">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
                    <Badge className="btn-secondary py-1 px-3 text-white w-fit">Universitaires</Badge>
                    <span className="text-sm md:text-base text-custom-gray font-roboto">Présentiel</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 font-gyst text-custom-dark">Prépa LAS</h3>
                  <p className="text-base md:text-lg text-custom-gray mb-6 font-roboto">Réussir la voie alternative, avec méthode et rigueur.</p>

                  <div className="space-y-4 mb-8 flex-grow">
                    <h4 className="font-semibold text-custom-dark text-sm md:text-base font-roboto">Pour qui ?</h4>
                    <ul className="space-y-3 text-sm md:text-base text-custom-gray font-roboto">
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
                    <h4 className="font-semibold text-custom-dark text-sm md:text-base font-roboto">Points clés</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Calendar className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-custom-dark text-sm md:text-base font-semibold font-roboto">Prépa annuelle de août à mai</p>
                          <p className="text-custom-gray text-xs md:text-sm font-roboto">Accompagnement spécifique aux matières santé</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-custom-dark text-sm md:text-base font-semibold font-roboto">Encadrement adapté à la double exigence LAS</p>
                          <p className="text-custom-gray text-xs md:text-sm font-roboto">Progression régulière pour rester compétitif</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <RendezVousButton className="w-full btn-primary text-white text-sm md:text-base">
                      Découvrir ce parcours
                    </RendezVousButton>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up" delay={0.4}>
            <div className="text-center">
              <Button className="btn-secondary px-8 md:px-12 py-4 text-base md:text-lg text-white">
                <Target className="w-5 h-5 mr-3" />
                Voir les tarifs et modalités d'inscription
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="section-container">
          <AnimatedSection direction="up">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h3 className="text-2xl md:text-3xl font-bold text-custom-dark mb-6 font-gyst">
                Prêt à commencer votre parcours vers la réussite ?
              </h3>
              <p className="text-custom-gray mb-8 md:mb-10 text-base md:text-lg font-roboto leading-relaxed">
                Contactez-nous dès aujourd'hui pour découvrir la formation qui vous correspond
                et maximiser vos chances de réussir en médecine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <RendezVousButton className="btn-primary px-8 md:px-10 py-4 text-base md:text-lg text-white">
                  <Phone className="w-5 h-5 mr-3" />
                  Prendre rendez-vous
                </RendezVousButton>
                <BrochureButton className="btn-outline px-8 md:px-10 py-4 text-base md:text-lg">
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
