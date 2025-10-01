import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { RendezVousButton } from '@/components/RendezVousButton';
import { BrochureButton } from '@/components/BrochureButton';
import {
  Users, Target, Star, Phone, Mail
} from 'lucide-react';

export default function NotrePhilosophiePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-bg-gradient overflow-hidden">
        <div className="hero-content">
          <div className="text-center text-white">
            <AnimatedSection direction="up">
              <h1 className="hero-title-pages mb-8">Notre Philosophie</h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-roboto font-medium max-w-4xl mx-auto px-4">
                L'Esprit Prépa Réussite : une approche exigeante, humaine et accessible
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* L'Esprit Prépa Réussite Section */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="section-container">
          <AnimatedSection direction="up">
            <div className="section-header">
              <p className="section-eyebrow">Notre philosophie</p>
              <h2 className="section-title">L'Esprit Prépa Réussite</h2>
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <AnimatedSection direction="up" delay={0.2}>
              <div className="card-base p-6 md:p-10 custom-shadow mb-12">
                <div className="text-center mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-custom-dark mb-6 font-gyst">
                    Chez Prépa Réussite, nous défendons une idée simple, mais essentielle :
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold text-gradient-blue font-gyst">
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

                  <div className="bg-gradient-to-r from-blue-50 to-rose-50 p-6 md:p-8 rounded-xl my-8">
                    <p className="text-base md:text-lg font-medium text-custom-dark text-center leading-relaxed">
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

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
              <AnimatedSection direction="up" delay={0.3}>
                <div className="text-center card-base p-6 md:p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-custom-blue to-custom-rose rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-custom-dark mb-4 text-lg md:text-xl font-gyst">Exigeante, mais accessible</h4>
                  <p className="text-custom-gray font-roboto text-sm md:text-base">
                    Un niveau d'excellence sans compromis, dans un cadre financier raisonnable
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.4}>
                <div className="text-center card-base p-6 md:p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-custom-blue to-custom-rose rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-custom-dark mb-4 text-lg md:text-xl font-gyst">Sérieuse, mais humaine</h4>
                  <p className="text-custom-gray font-roboto text-sm md:text-base">
                    La rigueur académique alliée à un accompagnement bienveillant et personnalisé
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.5}>
                <div className="text-center card-base p-6 md:p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-custom-blue to-custom-rose rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-custom-dark mb-4 text-lg md:text-xl font-gyst">Ambitieuse, mais lucide</h4>
                  <p className="text-custom-gray font-roboto text-sm md:text-base">
                    Des objectifs ambitieux fondés sur la réalité du travail et des capacités de chacun
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection direction="up" delay={0.6}>
              <div className="card-base p-6 md:p-10 custom-shadow text-center">
                <div className="max-w-3xl mx-auto">
                  <blockquote className="text-lg md:text-xl italic text-gradient-blue leading-relaxed font-roboto mb-6">
                    "Parce que la vraie méritocratie commence quand on donne à chacun les moyens de son ambition, 
                    pas quand on la réserve à ceux qui peuvent se l'offrir."
                  </blockquote>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 section-bg-light overflow-hidden">
        <div className="section-container">
          <AnimatedSection direction="up">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h3 className="text-2xl md:text-3xl font-bold text-custom-dark mb-6 font-gyst">
                Rejoignez une prépa qui vous ressemble
              </h3>
              <p className="text-custom-gray mb-8 md:mb-10 text-base md:text-lg font-roboto leading-relaxed">
                Découvrez notre approche unique et commencez votre parcours vers la réussite
                dans un environnement exigeant et bienveillant.
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