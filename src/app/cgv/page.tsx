import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { FileText } from 'lucide-react';

export default function CGVPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient">
        <div className="hero-content">
          <div className="text-center text-white">
            <AnimatedSection direction="up">
              <FileText className="w-16 h-16 mx-auto mb-6 text-prepa-gold" />
              <h1 className="hero-title mb-6">Conditions Générales de Vente</h1>
              <p className="hero-subtitle max-w-3xl mx-auto">
                Conditions régissant les formations dispensées par Prépa Réussite
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
                    Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les formations
                    et services proposés par Prépa Réussite. En vous inscrivant, vous acceptez ces conditions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">1. Objet et champ d'application</h2>
                  <p className="mb-4">
                    Les présentes CGV régissent les relations contractuelles entre Prépa Réussite SARL,
                    organisme de formation privé, et ses clients pour les prestations de formation
                    aux études de santé (PASS, LAS, Terminale).
                  </p>
                  <p>
                    Toute inscription à nos formations implique l'acceptation pleine et entière des
                    présentes conditions générales de vente.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">2. Formations proposées</h2>
                  <p className="mb-4">Prépa Réussite propose les formations suivantes :</p>

                  <div className="space-y-4">
                    <div className="border-l-4 border-prepa-blue pl-4">
                      <h4 className="font-semibold text-prepa-blue">Prépa Terminale</h4>
                      <p className="text-prepa-gray text-base">
                        Formation de préparation aux études de santé pour les élèves de terminale
                      </p>
                    </div>

                    <div className="border-l-4 border-prepa-blue pl-4">
                      <h4 className="font-semibold text-prepa-blue">Prépa PASS</h4>
                      <p className="text-prepa-gray text-base">
                        Accompagnement des étudiants en Parcours Accès Spécifique Santé
                      </p>
                    </div>

                    <div className="border-l-4 border-prepa-blue pl-4">
                      <h4 className="font-semibold text-prepa-blue">Prépa LAS</h4>
                      <p className="text-prepa-gray text-base">
                        Préparation pour les étudiants en Licence Accès Santé
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">3. Inscription et admission</h2>

                  <h3 className="text-lg font-semibold text-prepa-blue mb-3">3.1 Procédure d'inscription</h3>
                  <p className="mb-4">
                    L'inscription se fait sur dossier comprenant :
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Bulletins scolaires de première et terminale</li>
                    <li>Lettre de motivation manuscrite</li>
                    <li>Fiche de renseignements complétée</li>
                    <li>Copie de la pièce d'identité</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-prepa-blue mb-3">3.2 Admission</h3>
                  <p className="mb-4">
                    L'admission est prononcée par une commission pédagogique après étude du dossier
                    et entretien individuel. Le nombre de places étant limité à 30 par centre,
                    l'inscription sera définitive après :
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Notification écrite d'acceptation</li>
                    <li>Versement des frais d'inscription</li>
                    <li>Retour du contrat de formation signé</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">4. Tarifs et modalités de paiement</h2>

                  <h3 className="text-lg font-semibold text-prepa-blue mb-3">4.1 Tarifs</h3>
                  <p className="mb-4">
                    Les tarifs en vigueur sont consultables sur notre site internet et dans nos locaux.
                    Ils comprennent :
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>L'ensemble des cours et travaux dirigés</li>
                    <li>Les supports pédagogiques</li>
                    <li>Les concours blancs et évaluations</li>
                    <li>Le suivi individualisé</li>
                    <li>L'accès aux locaux pendant les horaires d'ouverture</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-prepa-blue mb-3">4.2 Modalités de paiement</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-prepa-light rounded">
                      <span>Paiement comptant</span>
                      <span className="font-semibold text-prepa-blue">Remise de 5%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-prepa-light rounded">
                      <span>Paiement en 3 fois</span>
                      <span className="font-semibold text-prepa-blue">Sans frais</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-prepa-light rounded">
                      <span>Paiement en 6 fois</span>
                      <span className="font-semibold text-prepa-blue">Frais de dossier : 50€</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-prepa-light rounded">
                      <span>Paiement en 10 fois</span>
                      <span className="font-semibold text-prepa-blue">Frais de dossier : 100€</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">5. Déroulement des formations</h2>

                  <h3 className="text-lg font-semibold text-prepa-blue mb-3">5.1 Organisation pédagogique</h3>
                  <p className="mb-4">
                    Les formations se déroulent selon un calendrier établi en début d'année scolaire.
                    Elles comprennent :
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Cours magistraux et travaux dirigés</li>
                    <li>Concours blancs réguliers</li>
                    <li>Séances de coaching individualisé</li>
                    <li>Ateliers méthodologiques</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-prepa-blue mb-3">5.2 Assiduité</h3>
                  <p className="mb-4">
                    La présence aux cours est obligatoire. En cas d'absences répétées non justifiées
                    (plus de 20% des heures de formation), Prépa Réussite se réserve le droit
                    d'exclure l'étudiant sans remboursement.
                  </p>

                  <h3 className="text-lg font-semibold text-prepa-blue mb-3">5.3 Modifications de planning</h3>
                  <p>
                    Prépa Réussite se réserve le droit de modifier les horaires et dates de formation
                    en cas de force majeure ou pour des raisons pédagogiques, sous réserve d'un
                    préavis raisonnable.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">6. Annulation et remboursement</h2>

                  <h3 className="text-lg font-semibold text-prepa-blue mb-3">6.1 Droit de rétractation</h3>
                  <p className="mb-4">
                    Conformément au Code de la consommation, vous disposez d'un délai de 14 jours
                    à compter de la signature du contrat pour exercer votre droit de rétractation,
                    sauf si la formation a déjà commencé avec votre accord exprès.
                  </p>

                  <h3 className="text-lg font-semibold text-prepa-blue mb-3">6.2 Annulation par l'étudiant</h3>
                  <div className="space-y-3 mb-6">
                    <div className="p-3 bg-red-50 border-l-4 border-red-400">
                      <p><strong>Avant le début des cours :</strong> Remboursement intégral minus 150€ de frais de dossier</p>
                    </div>
                    <div className="p-3 bg-orange-50 border-l-4 border-orange-400">
                      <p><strong>Pendant le 1er mois :</strong> Remboursement de 70% des sommes versées</p>
                    </div>
                    <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400">
                      <p><strong>Après le 1er mois :</strong> Aucun remboursement</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-prepa-blue mb-3">6.3 Annulation par Prépa Réussite</h3>
                  <p>
                    En cas d'annulation de notre fait (nombre insuffisant d'inscrits, force majeure),
                    nous nous engageons au remboursement intégral des sommes versées ou au report
                    sur une session ultérieure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">7. Obligations des parties</h2>

                  <h3 className="text-lg font-semibold text-prepa-blue mb-3">7.1 Obligations de Prépa Réussite</h3>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Dispenser la formation selon le programme annoncé</li>
                    <li>Mettre à disposition des locaux et équipements adaptés</li>
                    <li>Assurer un suivi pédagogique de qualité</li>
                    <li>Respecter les effectifs annoncés (30 étudiants maximum)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-prepa-blue mb-3">7.2 Obligations de l'étudiant</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Respecter les horaires et être assidu aux cours</li>
                    <li>S'acquitter des frais de formation selon l'échéancier convenu</li>
                    <li>Respecter le règlement intérieur</li>
                    <li>Adopter un comportement correct envers les autres étudiants et l'équipe pédagogique</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">8. Responsabilité et assurance</h2>
                  <p className="mb-4">
                    Prépa Réussite est assuré pour ses activités de formation. La responsabilité
                    de Prépa Réussite ne saurait être engagée en cas de :
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Non-réussite aux examens ou concours</li>
                    <li>Interruption de formation due à une décision administrative</li>
                    <li>Force majeure ou cas fortuit</li>
                  </ul>
                  <p>
                    Les étudiants doivent obligatoirement être couverts par une assurance
                    responsabilité civile pour la durée de la formation.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">9. Protection des données</h2>
                  <p className="mb-4">
                    Les données personnelles collectées sont nécessaires à la gestion de votre formation
                    et à notre relation commerciale. Elles sont traitées conformément à notre
                    politique de confidentialité et au RGPD.
                  </p>
                  <p>
                    Vous disposez des droits d'accès, de rectification, d'effacement et de portabilité
                    de vos données. Pour exercer ces droits : dpo@prepa-reussite.com
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">10. Règlement des litiges</h2>
                  <p className="mb-4">
                    En cas de litige, nous nous efforçons de trouver une solution amiable.
                    À défaut d'accord, le litige sera soumis aux tribunaux compétents de
                    Saint-Denis de La Réunion.
                  </p>
                  <p className="mb-4">
                    Conformément aux dispositions du Code de la consommation concernant le règlement
                    amiable des litiges, Prépa Réussite adhère au service du médiateur de la formation
                    que vous pouvez contacter à l'adresse suivante :
                  </p>
                  <div className="bg-prepa-light p-4 rounded-lg">
                    <p><strong>Médiateur de la formation</strong></p>
                    <p>mediation-formation@conso.org</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-prepa-blue mb-4">11. Dispositions diverses</h2>

                  <h3 className="text-lg font-semibold text-prepa-blue mb-3">11.1 Modification des CGV</h3>
                  <p className="mb-4">
                    Prépa Réussite se réserve le droit de modifier les présentes CGV.
                    Les modifications s'appliqueront aux contrats conclus postérieurement à leur entrée en vigueur.
                  </p>

                  <h3 className="text-lg font-semibold text-prepa-blue mb-3">11.2 Nullité partielle</h3>
                  <p className="mb-4">
                    Si l'une des clauses des présentes CGV était déclarée nulle, les autres clauses
                    resteraient applicables.
                  </p>

                  <h3 className="text-lg font-semibold text-prepa-blue mb-3">11.3 Droit applicable</h3>
                  <p>
                    Les présentes CGV sont soumises au droit français.
                  </p>
                </div>

                <div className="border-t pt-8">
                  <p className="text-base text-prepa-gray">
                    <strong>Dernière mise à jour :</strong> 15 janvier 2025<br />
                    Prépa Réussite SARL - 123 Rue de la République, 97490 Sainte-Clotilde<br />
                    SIRET : 123 456 789 00010 - Email : contact@prepa-reussite.com
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
