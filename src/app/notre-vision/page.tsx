import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { RendezVousButton } from '@/components/RendezVousButton';
import { BrochureButton } from '@/components/BrochureButton';
import { Phone, Mail, Award, Zap, BarChart3, Shield } from 'lucide-react';

export default function NotreVisionPage() {
  return (
    <Layout>
      <section className="hero-gradient-pages">
        <div className="hero-content">
          <div className="text-center text-white">
            <AnimatedSection direction="up">
              <h1 className="hero-title-pages mb-6">Notre vision</h1>
              <p className="hero-subtitle-pages max-w-3xl mx-auto">
                Une prépa à taille humaine, exigeante et bienveillante, pensée pour les étudiants réunionnais.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 section-bg-light overflow-hidden">
        <div className="section-container text-center">
          <AnimatedSection direction="scale" delay={0.2}>
            <div className="card-white p-6 md:p-8 mb-16 max-w-4xl mx-auto custom-shadow">
              <blockquote className="text-xl md:text-2xl italic leading-relaxed font-roboto font-medium">
                <span className="text-gradient-blue">
                  "Chaque étudiant réunionnais motivé mérite toutes les chances de réussir en médecine,
                  sans avoir à quitter son île ou se ruiner."
                </span>
              </blockquote>
              <p className="text-custom-gray text-base mt-6 font-roboto">Notre conviction fondatrice</p>

              <div className="bg-gradient-to-r from-blue-50 to-rose-50 p-4 md:p-6 rounded-xl mt-8">
                <p className="text-base md:text-lg font-medium text-custom-dark leading-relaxed">
                  Chez Prépa Réussite, nous avons créé une prépa à taille humaine, ancrée localement, 
                  exigeante mais bienveillante, pour accompagner ceux qui veulent s'engager dans les filières de santé.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-custom-blue mb-2 font-gyst">44%</div>
                <div className="text-base md:text-lg font-semibold font-roboto text-gradient-blue">réussite aux concours de médecine</div>
                <div className="text-sm md:text-base text-custom-gray font-roboto">(promo 2025)</div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-custom-blue mb-2 font-gyst">2</div>
                <div className="text-base md:text-lg font-semibold font-roboto text-gradient-blue">campus à La Réunion</div>
                <div className="text-sm md:text-base text-custom-gray font-roboto">Nord et Sud</div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-custom-blue mb-2 font-gyst">97%</div>
                <div className="text-base md:text-lg font-semibold font-roboto text-gradient-blue">de nos anciens étudiants</div>
                <div className="text-sm md:text-base text-custom-gray font-roboto">nous recommandent</div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Le mérite',
                description: "Reconnaître la valeur de l'effort et célébrer l'excellence de chacun.",
                delay: 0.1
              },
              {
                icon: Zap,
                title: "L'effort",
                description: "Encourager la persévérance au quotidien pour bâtir une progression durable.",
                delay: 0.2
              },
              {
                icon: BarChart3,
                title: 'La régularité',
                description: "Instaurer des routines claires pour avancer sereinement, semaine après semaine.",
                delay: 0.3
              },
              {
                icon: Shield,
                title: 'La confiance',
                description: "Créer un climat bienveillant et structuré pour révéler le potentiel de chaque élève.",
                delay: 0.4
              }
            ].map((value) => (
              <AnimatedSection key={value.title} direction="up" delay={value.delay}>
                <div className="feature-card card-base custom-card-hover">
                  <div className="feature-icon">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="feature-title">{value.title}</h3>
                  <p className="feature-description">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection direction="up" delay={0.5}>
            <div className="card-base p-8 md:p-10 mt-16 max-w-4xl mx-auto custom-shadow bg-gradient-to-br from-blue-50/50 to-rose-50/50">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-medium text-custom-dark mb-6 font-gyst">Notre Mission</h3>
                <p className="text-lg md:text-xl leading-relaxed font-roboto">
                  <span className="text-gradient-blue font-medium">
                    Derrière chaque inscription, il y a un rêve : devenir médecin, sage-femme, kiné, pharmacien ou dentiste.
                  </span>
                  <br />
                  <span className="text-custom-dark font-normal mt-4 block">
                    Notre mission : transformer ce rêve en méthode, en progression, en réussite.
                  </span>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="section-container">
          <AnimatedSection direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-custom-dark mb-4 font-gyst">Allons plus loin ensemble</h3>
              <p className="text-custom-gray mb-8 text-base md:text-lg font-roboto">
                Parlons de votre projet, de vos ambitions et du parcours le plus adapté pour réussir vos études de santé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <RendezVousButton className="btn-primary text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Prendre rendez-vous
                </RendezVousButton>
                <BrochureButton variant="outline" className="btn-outline">
                  <Mail className="w-4 h-4 mr-2" />
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
