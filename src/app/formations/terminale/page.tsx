import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RendezVousButton } from '@/components/RendezVousButton';
import { BrochureButton } from '@/components/BrochureButton';
import { Calendar, Clock, Users, CheckCircle, Phone, Mail } from 'lucide-react';

export default function PrepaTerminalePage() {
  return (
    <Layout>
      <section className="hero-gradient-pages">
        <div className="hero-content">
          <div className="text-center text-white">
            <AnimatedSection direction="up">
              <h1 className="hero-title-pages mb-6">Prépa Terminale</h1>
              <p className="hero-subtitle-pages max-w-3xl mx-auto">
                Prendre de l'avance dès la terminale pour entrer en PASS/LAS avec méthode et confiance.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 section-bg-light overflow-hidden">
        <div className="flex justify-center items-center min-h-[60vh]">
          <AnimatedSection direction="up">
            <Card className="card-base custom-card-hover overflow-hidden custom-shadow-hover max-w-4xl mx-8">
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
                      <div className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-custom-dark text-sm md:text-base font-semibold font-roboto">Effectifs limités à 25 élèves</p>
                          <p className="text-custom-gray text-xs md:text-sm font-roboto">Suivi personnalisé et interactions permanentes</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 flex-grow">
                    <h4 className="font-semibold text-custom-dark text-sm md:text-base font-roboto">Ce que vous obtenez</h4>
                    <ul className="space-y-3 text-sm md:text-base text-custom-gray font-roboto">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-custom-rose mt-0.5 flex-shrink-0" />
                        <span>Supports de cours actualisés chaque semaine</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-custom-rose mt-0.5 flex-shrink-0" />
                        <span>Colles régulières et examens blancs</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-custom-rose mt-0.5 flex-shrink-0" />
                        <span>Coaching méthodologique et gestion du stress</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20 section-bg-light overflow-hidden">
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
