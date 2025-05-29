import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Scale } from 'lucide-react';

export default function MentionsLegalesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient-pages">
        <div className="hero-content">
          <div className="text-center text-white">
            <AnimatedSection direction="up">
              <Scale className="w-16 h-16 mx-auto mb-6 text-prepa-gold" />
              <h1 className="hero-title-pages mb-8">Mentions légales</h1>
              <p className="hero-subtitle-pages max-w-4xl mx-auto">
                Informations légales concernant le site prepa-reussite.com
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up">
              <div className="content-area space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">1. Informations sur l'éditeur</h2>
                  <p className="mb-4">
                    Le site <strong>prepa-reussite.com</strong> est édité par :
                  </p>
                  <div className="bg-prepa-light p-6 rounded-lg">
                    <p><strong>Prépa Réussite SARL</strong></p>
                    <p>Siège social : 123 Rue de la République, 97490 Sainte-Clotilde, La Réunion</p>
                    <p>SIRET : 123 456 789 00010</p>
                    <p>Téléphone : 0262 12 34 56</p>
                    <p>Email : contact@prepa-reussite.com</p>
                    <p>Directeur de la publication : Dr. Jean-Claude Hoarau</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">2. Hébergement</h2>
                  <p className="mb-4">
                    Le site est hébergé par :
                  </p>
                  <div className="bg-prepa-light p-6 rounded-lg">
                    <p><strong>Netlify, Inc.</strong></p>
                    <p>2325 3rd Street, Suite 296, San Francisco, California 94107</p>
                    <p>Site web : <a href="https://www.netlify.com" className="text-prepa-blue hover:underline">www.netlify.com</a></p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">3. Propriété intellectuelle</h2>
                  <p className="mb-4">
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur
                    et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
                  </p>
                  <p className="mb-4">
                    Les marques, logos, slogans et autres signes distinctifs reproduits sur ce site sont protégés
                    par le Code de la propriété intellectuelle.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie
                    des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf
                    autorisation écrite préalable de Prépa Réussite.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">4. Responsabilité</h2>
                  <p className="mb-4">
                    Les informations contenues sur ce site le sont à titre indicatif et n'ont pas de valeur
                    contractuelle. Prépa Réussite s'efforce d'assurer au mieux de ses possibilités, l'exactitude
                    et la mise à jour des informations diffusées sur ce site.
                  </p>
                  <p className="mb-4">
                    Toutefois, Prépa Réussite ne peut garantir l'exactitude, la précision ou l'exhaustivité des
                    informations mises à la disposition sur ce site.
                  </p>
                  <p>
                    En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité
                    exclusive.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">5. Données personnelles</h2>
                  <p className="mb-4">
                    Les données personnelles collectées sur ce site font l'objet d'un traitement informatique
                    destiné à :
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Répondre aux demandes d'information</li>
                    <li>Gérer les inscriptions aux formations</li>
                    <li>Envoyer la newsletter (avec consentement)</li>
                    <li>Améliorer nos services</li>
                  </ul>
                  <p className="mb-4">
                    Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au
                    Règlement européen sur la protection des données (RGPD), vous bénéficiez d'un droit
                    d'accès, de rectification, de portabilité et d'effacement de vos données.
                  </p>
                  <p>
                    Pour exercer ces droits ou pour toute question sur le traitement de vos données,
                    vous pouvez nous contacter à : <strong>dpo@prepa-reussite.com</strong>
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">6. Cookies</h2>
                  <p className="mb-4">
                    Ce site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des
                    statistiques de fréquentation.
                  </p>
                  <p className="mb-4">
                    Les cookies strictement nécessaires au fonctionnement du site sont déposés automatiquement.
                    Pour les autres cookies, votre consentement est requis.
                  </p>
                  <p>
                    Vous pouvez à tout moment paramétrer vos préférences de cookies via notre outil de gestion
                    des cookies ou les paramètres de votre navigateur.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">7. Liens hypertextes</h2>
                  <p className="mb-4">
                    Ce site peut contenir des liens vers d'autres sites web. Prépa Réussite ne peut être
                    tenue responsable du contenu de ces sites externes.
                  </p>
                  <p>
                    La création de liens vers notre site est libre, sous réserve qu'ils ne portent pas
                    atteinte à notre image et qu'ils respectent la législation en vigueur.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">8. Droit applicable</h2>
                  <p className="mb-4">
                    Tout litige en relation avec l'utilisation du site prepa-reussite.com est soumis au
                    droit français.
                  </p>
                  <p>
                    Il est fait attribution exclusive de juridiction aux tribunaux compétents de Saint-Denis
                    de La Réunion.
                  </p>
                </div>

                <div className="border-t pt-8">
                  <p className="text-base text-prepa-gray">
                    <strong>Dernière mise à jour :</strong> 15 janvier 2025
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
