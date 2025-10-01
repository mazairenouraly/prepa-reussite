import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RendezVousButton } from '@/components/RendezVousButton';
import { BrochureButton } from '@/components/BrochureButton';
import { Calendar, Clock, Users, CheckCircle, Phone, Mail } from 'lucide-react';

export default function PrepaLASPage() {
  return (
    <Layout>
      <section className="hero-gradient-pages">
        <div className="hero-content">
          <div className="text-center text-white">
            <AnimatedSection direction="up">
              <h1 className="hero-title-pages mb-6">Prépa LAS</h1>
              <p className="hero-subtitle-pages max-w-3xl mx-auto">
                Optimiser sa Licence Accès Santé avec un soutien sur-mesure et un plan B sécurisé.
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
                    <Badge className="btn-secondary py-1 px-3 text-white w-fit">Universitaires</Badge>
                    <span className="text-sm md:text-base text-custom-gray font-roboto">Présentiel</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 font-gyst text-custom-dark">Prépa LAS</h3>
                  <p className="text-base md:text-lg text-custom-gray mb-6 font-roboto">Sécuriser votre option santé tout en validant votre licence.</p>

                  <div className="space-y-4 mb-8 flex-grow">
                    <h4 className="font-semibold text-custom-dark text-sm md:text-base font-roboto">Pour qui ?</h4>
                    <ul className="space-y-3 text-sm md:text-base text-custom-gray font-roboto">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-custom-rose mt-0.5 flex-shrink-0" />
                        <span>Étudiants en Licence avec option santé</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-custom-rose mt-0.5 flex-shrink-0" />
                        <span>Profils souhaitant une alternative sécurisée à la PASS</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-custom-rose mt-0.5 flex-shrink-0" />
                        <span>Étudiants qui visent la réussite dès la première candidature LAS</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    <h4 className="font-semibold text-custom-dark text-sm md:text-base font-roboto">Points clés</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Calendar className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-custom-dark text-sm md:text-base font-semibold font-roboto">Accompagnement modulable selon votre licence</p>
                          <p className="text-custom-gray text-xs md:text-sm font-roboto">Focus sur les matières santé et les oraux</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-custom-dark text-sm md:text-base font-semibold font-roboto">15h de suivi par semaine</p>
                          <p className="text-custom-gray text-xs md:text-sm font-roboto">En complément de votre licence principale</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-custom-dark text-sm md:text-base font-semibold font-roboto">Groupes restreints</p>
                          <p className="text-custom-gray text-xs md:text-sm font-roboto">Suivi individualisé et retours réguliers</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 flex-grow">
                    <h4 className="font-semibold text-custom-dark text-sm md:text-base font-roboto">Ce que vous obtenez</h4>
                    <ul className="space-y-3 text-sm md:text-base text-custom-gray font-roboto">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-custom-rose mt-0.5 flex-shrink-0" />
                        <span>Préparation aux épreuves écrites et orales</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-custom-rose mt-0.5 flex-shrink-0" />
                        <span>Suivi sur votre projet professionnel et votre dossier</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-custom-rose mt-0.5 flex-shrink-0" />
                        <span>Accompagnement continu pour valider votre licence</span>
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
