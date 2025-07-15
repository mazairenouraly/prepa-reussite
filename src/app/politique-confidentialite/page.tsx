import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Shield } from 'lucide-react';

export default function PolitiqueConfidentialitePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient-pages">
        <div className="hero-content">
          <div className="text-center text-white">
            <AnimatedSection direction="up">
              {/*
              <Shield className="w-16 h-16 mx-auto mb-6 text-prepa-gold" />
              */}
              <h1 className="hero-title-pages mb-8">Politique de confidentialité</h1>
              <p className="hero-subtitle-pages max-w-4xl mx-auto">
                Protection et utilisation de vos données personnelles
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
                <div className="bg-prepa-light p-6 rounded-lg">
                  <p className="text-prepa-blue font-medium">
                    Chez Prépa Réussite, nous nous engageons à protéger et respecter votre vie privée.
                    Cette politique explique comment nous collectons, utilisons et protégeons vos données personnelles.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">1. Responsable du traitement</h2>
                  <p className="mb-4">
                    Le responsable du traitement des données personnelles est :
                  </p>
                  <div className="bg-prepa-light p-6 rounded-lg">
                    <p><strong>Prépa Réussite</strong></p>
                    <p>24 Rte Philibert Tsiranana, CS 61115 97495, La Réunion (CREPS REUNION)</p>
                    <p>Email : contact.prepareussite@gmail.com</p>
                    <p>
                      Téléphone : 
                      <a 
                        href="tel:+262692713084" 
                        className="text-prepa-blue hover:underline ml-1"
                      >
                        +262 692 71 30 84
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">2. Données collectées</h2>
                  <p className="mb-4">
                    Nous collectons les données personnelles suivantes :
                  </p>

                  <h3 className="text-lg font-semibold text-prepa-blue mb-3">Données d'identification</h3>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse postale</li>
                    <li>Date de naissance</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-prepa-blue mb-3">Données de scolarité</h3>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Établissement d'origine</li>
                    <li>Niveau d'études</li>
                    <li>Bulletins scolaires</li>
                    <li>Projet d'orientation</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-prepa-blue mb-3">Données de connexion</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Pages visitées</li>
                    <li>Durée de visite</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">3. Finalités du traitement</h2>
                  <p className="mb-4">
                    Vos données personnelles sont traitées pour les finalités suivantes :
                  </p>

                  <div className="space-y-4">
                    <div className="border-l-4 border-prepa-blue pl-4">
                      <h4 className="font-semibold text-prepa-blue">Gestion des candidatures</h4>
                      <p className="text-prepa-gray text-base">
                        Traitement de votre dossier d'inscription, sélection des candidats,
                        communication des résultats.
                      </p>
                    </div>

                    <div className="border-l-4 border-prepa-blue pl-4">
                      <h4 className="font-semibold text-prepa-blue">Suivi pédagogique</h4>
                      <p className="text-prepa-gray text-base">
                        Accompagnement personnalisé, évaluation des progrès,
                        adaptation de la formation.
                      </p>
                    </div>

                    <div className="border-l-4 border-prepa-blue pl-4">
                      <h4 className="font-semibold text-prepa-blue">Communication</h4>
                      <p className="text-prepa-gray text-base">
                        Information sur nos formations, newsletter,
                        invitations aux événements.
                      </p>
                    </div>

                    <div className="border-l-4 border-prepa-blue pl-4">
                      <h4 className="font-semibold text-prepa-blue">Amélioration des services</h4>
                      <p className="text-prepa-gray text-base">
                        Analyse de satisfaction, statistiques d'utilisation,
                        développement de nouveaux services.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">4. Base légale</h2>
                  <p className="mb-4">
                    Le traitement de vos données personnelles repose sur :
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>L'exécution du contrat</strong> pour la gestion de votre formation</li>
                    <li><strong>Votre consentement</strong> pour la newsletter et communications marketing</li>
                    <li><strong>L'intérêt légitime</strong> pour l'amélioration de nos services</li>
                    <li><strong>L'obligation légale</strong> pour certaines données comptables</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">5. Durée de conservation</h2>
                  <p className="mb-4">
                    Nous conservons vos données personnelles pendant les durées suivantes :
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-prepa-light rounded">
                      <span>Dossiers de candidature non retenue</span>
                      <span className="font-semibold text-prepa-blue">2 ans</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-prepa-light rounded">
                      <span>Dossiers d'anciens étudiants</span>
                      <span className="font-semibold text-prepa-blue">10 ans</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-prepa-light rounded">
                      <span>Newsletter et marketing</span>
                      <span className="font-semibold text-prepa-blue">Jusqu'au désabonnement</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-prepa-light rounded">
                      <span>Données comptables</span>
                      <span className="font-semibold text-prepa-blue">10 ans (obligation légale)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">6. Vos droits</h2>
                  <p className="mb-4">
                    Conformément au RGPD, vous disposez des droits suivants :
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-prepa-blue mb-2">🔍 Droit d'accès</h4>
                        <p className="text-prepa-gray text-base">
                          Obtenir une copie de vos données personnelles
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-prepa-blue mb-2">✏️ Droit de rectification</h4>
                        <p className="text-prepa-gray text-base">
                          Corriger vos données inexactes ou incomplètes
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-prepa-blue mb-2">🗑️ Droit d'effacement</h4>
                        <p className="text-prepa-gray text-base">
                          Demander la suppression de vos données
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-prepa-blue mb-2">📦 Droit à la portabilité</h4>
                        <p className="text-prepa-gray text-base">
                          Récupérer vos données dans un format structuré
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-prepa-blue mb-2">⏸️ Droit d'opposition</h4>
                        <p className="text-prepa-gray text-base">
                          Vous opposer au traitement de vos données
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-prepa-blue mb-2">🔒 Droit de limitation</h4>
                        <p className="text-prepa-gray text-base">
                          Limiter le traitement de vos données
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                    <p className="text-base">
                      <strong>Comment exercer vos droits ?</strong><br />
                      Envoyez un email à <strong>dpo@prepa-reussite.com</strong> en précisant votre demande
                      et en joignant une copie de votre pièce d'identité.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">7. Sécurité des données</h2>
                  <p className="mb-4">
                    Nous mettons en place des mesures techniques et organisationnelles appropriées
                    pour protéger vos données personnelles :
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Chiffrement des données sensibles</li>
                    <li>Accès restreint aux données (besoin d'en connaître)</li>
                    <li>Sauvegardes régulières et sécurisées</li>
                    <li>Formation du personnel à la protection des données</li>
                    <li>Contrôles d'accès et logs de traçabilité</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">8. Transferts de données</h2>
                  <p className="mb-4">
                    Vos données personnelles sont traitées au sein de l'Union européenne.
                    Aucun transfert vers des pays tiers n'est effectué sans garanties appropriées.
                  </p>
                  <p>
                    En cas de sous-traitance, nous nous assurons que nos prestataires
                    respectent le même niveau de protection que celui que nous appliquons.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">9. Contact et réclamations</h2>
                  <p className="mb-4">
                    Pour toute question concernant cette politique de confidentialité
                    ou le traitement de vos données personnelles :
                  </p>
                  <div className="bg-prepa-light p-6 rounded-lg mb-4">
                    <p><strong>Délégué à la Protection des Données (DPO)</strong></p>
                    <p>Email : contact.prepareussite@gmail.com</p>
                    <p>Courrier : Prépa Réussite - DPO, 24 Rte Philibert Tsiranana, CS 61115 97495, La Réunion (CREPS REUNION)</p>
                  </div>
                  <p className="text-base text-prepa-gray">
                    Vous avez également le droit d'introduire une réclamation auprès de la CNIL
                    si vous estimez que le traitement de vos données personnelles constitue une violation
                    de la réglementation applicable.
                  </p>
                </div>

                <div className="border-t pt-8">
                  <p className="text-base text-prepa-gray">
                    <strong>Dernière mise à jour :</strong> 15 janvier 2025<br />
                    Cette politique peut être modifiée pour se conformer aux évolutions légales
                    ou à nos pratiques. Nous vous informerons de toute modification importante.
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
