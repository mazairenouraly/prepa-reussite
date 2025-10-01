import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { RendezVousButton } from '@/components/RendezVousButton';
import { BrochureButton } from '@/components/BrochureButton';
import { CheckCircle, X, Phone, Mail } from 'lucide-react';

export default function ComparatifPage() {
  return (
    <Layout>
      <section className="hero-gradient-pages">
        <div className="hero-content">
          <div className="text-center text-white">
            <AnimatedSection direction="up">
              <h1 className="hero-title-pages mb-6">Comparatif des prépas</h1>
              <p className="hero-subtitle-pages max-w-3xl mx-auto">
                Comprenez en un coup d'œil ce qui différencie Prépa Réussite
                des autres préparations médecine de l'île.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white overflow-hidden">
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
                      <th className="comparison-cell text-left font-bold font-gyst text-sm md:text-base">Critères</th>
                      <th className="comparison-cell font-bold font-gyst text-sm md:text-base">Prépa Réussite</th>
                      <th className="comparison-cell font-bold font-gyst text-sm md:text-base">Prépas locales à 14 000€</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="comparison-row">
                      <td className="comparison-cell font-semibold font-roboto text-sm md:text-base">Effectif par promo</td>
                      <td className="comparison-cell text-custom-blue font-semibold font-roboto text-sm md:text-base">30 élèves max (Nord & Sud)</td>
                      <td className="comparison-cell text-custom-rose font-roboto text-sm md:text-base">Souvent 100 à 150 élèves</td>
                    </tr>
                    <tr className="comparison-row bg-custom-background">
                      <td className="comparison-cell font-semibold font-roboto text-sm md:text-base">Encadrement</td>
                      <td className="comparison-cell text-custom-blue font-semibold font-roboto text-sm md:text-base">Proximité réelle avec l'équipe pédagogique</td>
                      <td className="comparison-cell text-custom-rose font-roboto text-sm md:text-base">Suivi impersonnel, élève noyé dans la masse</td>
                    </tr>
                    <tr className="comparison-row">
                      <td className="comparison-cell font-semibold font-roboto text-sm md:text-base">Mode d'enseignement</td>
                      <td className="comparison-cell text-custom-blue font-semibold font-roboto text-sm md:text-base">100% présentiel en petit groupe</td>
                      <td className="comparison-cell text-custom-rose font-roboto text-sm md:text-base">Présentiel magistral, peu interactif</td>
                    </tr>
                    <tr className="comparison-row bg-custom-background">
                      <td className="comparison-cell font-semibold font-roboto text-sm md:text-base">Lien avec les familles</td>
                      <td className="comparison-cell text-custom-blue font-semibold font-roboto text-sm md:text-base">Bilans réguliers, vraie transparence</td>
                      <td className="comparison-cell text-custom-rose font-roboto text-sm md:text-base">Peu ou pas de communication pédagogique directe</td>
                    </tr>
                    <tr className="comparison-row">
                      <td className="comparison-cell font-semibold font-roboto text-sm md:text-base">Structure de l'année</td>
                      <td className="comparison-cell text-custom-blue font-semibold font-roboto text-sm md:text-base">Planning clair, équilibré pensé pour durer</td>
                      <td className="comparison-cell text-custom-rose font-roboto text-sm md:text-base">Rythme dense, parfois épuisant</td>
                    </tr>
                    <tr className="comparison-row bg-custom-background">
                      <td className="comparison-cell font-semibold font-roboto text-sm md:text-base">Souplesse pour le travail personnel</td>
                      <td className="comparison-cell text-custom-blue font-semibold font-roboto text-sm md:text-base">Organisation qui laisse du temps pour s'entraîner efficacement</td>
                      <td className="comparison-cell text-custom-rose font-roboto text-sm md:text-base">Emploi du temps surchargé, peu de place pour le travail personnel</td>
                    </tr>
                    <tr className="comparison-row">
                      <td className="comparison-cell font-semibold font-roboto text-sm md:text-base">Coût annuel</td>
                      <td className="comparison-cell text-custom-blue font-semibold font-roboto text-sm md:text-base">Accessible - jusqu'à 2 à 3 fois moins cher</td>
                      <td className="comparison-cell text-custom-rose font-roboto text-sm md:text-base">Environ 14 000€ l'année</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 mt-16">
            <AnimatedSection direction="left" delay={0.3}>
              <div className="card-base p-6 md:p-8 custom-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-custom-blue to-custom-rose rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="font-bold text-custom-blue mb-4 text-lg md:text-xl font-gyst">Les points forts de Prépa Réussite</h4>
                    <ul className="space-y-3 text-custom-gray text-sm md:text-base font-roboto text-left">
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
              <div className="card-base p-6 md:p-8 custom-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-custom-rose to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                    <X className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="font-bold text-custom-rose mb-4 text-lg md:text-xl font-gyst">Ce que nous n'offrons pas</h4>
                    <ul className="space-y-3 text-custom-gray text-sm md:text-base font-roboto text-left">
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
