import { after, NextRequest, NextResponse } from 'next/server';
import {
  escapeHtml,
  getContactRecipient,
  getMissingMailerEnv,
  getPublicPdfAttachment,
  isMailerConfigured,
  renderEmailLayout,
  renderParagraphs,
  sendMail,
} from '@/lib/mailer';

export const runtime = 'nodejs';

const BROCHURES = {
  'brochure-default': {
    label: 'Brochure classique',
    subject: 'Votre nouvelle brochure inspirante est arrivée !',
    fileName: 'brochure.pdf',
    attachmentName: 'Prepa-Reussite-Brochure.pdf',
    eyebrow: 'Brochure Prépa Réussite',
    title: 'Votre nouvelle brochure inspirante est arrivée !',
    paragraphs: [
      'Bonjour {{name}},',
      'Nous sommes heureux de partager avec vous la nouvelle brochure Prépa Réussite, qui met en lumière le parcours de Rayane, étudiant en médecine.',
      'Après son bac, Rayane était face à de nombreuses incertitudes liées aux réformes PASS et LAS. Grâce à Prépa Réussite, il a pu structurer ses objectifs, acquérir une méthode de travail solide et progresser rapidement, tout en bénéficiant d’un accompagnement sérieux et accessible.',
      'Son témoignage est une véritable source d’inspiration pour tous les étudiants qui veulent réussir leurs études de santé, sans se laisser décourager par les obstacles du début.',
      'Nous espérons que ce récit vous motivera dans votre propre parcours.',
      'N’hésitez pas à nous contacter ou à prendre rendez-vous avec un conseiller si vous avez des questions.',
      'Bien cordialement,',
      'L’équipe Prépa Réussite',
    ],
  },
  'brochure-tasnime': {
    label: 'Success Story Tasnime',
    subject: 'Découvrez le témoignage inspirant de Tasnime avec Prépa Réussite !',
    fileName: 'brochure-tasnime.pdf',
    attachmentName: 'Prepa-Reussite-Success-Story-Tasnime.pdf',
    eyebrow: 'Success Story Exclusive',
    title: 'Découvrez le témoignage inspirant de Tasnime avec Prépa Réussite !',
    paragraphs: [
      'Bonjour {{name}},',
      'Nous sommes heureux de partager avec vous une nouvelle brochure exclusive de Prépa Réussite.',
      'Vous y découvrirez le parcours de Tasnime, passée de la 144ᵉ place au premier semestre à la 57ᵉ place en médecine.',
      'Son témoignage est une véritable preuve qu’avec discipline, méthode et accompagnement, tout reste possible, même après un début difficile.',
      'Nous espérons que son expérience vous inspirera et renforcera votre motivation dans votre propre parcours.',
      'N’hésitez pas à nous contacter ou à prendre rendez-vous avec un conseiller pour en savoir plus sur nos méthodes et nos accompagnements.',
      'Bien cordialement,',
      'L’équipe Prépa Réussite',
    ],
  },
};

function personalizeParagraphs(paragraphs: string[], name: string) {
  return paragraphs.map((paragraph) => paragraph.replaceAll('{{name}}', name));
}

function renderNotificationHtml(
  recipientName: string,
  recipientEmail: string,
  recipientPhone: string,
  brochureLabel: string,
  contactDate: string,
  contactTime: string
) {
  return renderEmailLayout({
    eyebrow: 'Demande reçue',
    title: `Nouvelle demande de brochure : ${brochureLabel}`,
    contentHtml: `
      <p style="margin: 0 0 18px; font-size: 16px; line-height: 1.75; color: #24364d;">
        Une nouvelle demande vient d'être envoyée depuis le site Prépa Réussite.
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; background: #f8fbff; border-radius: 18px; margin-bottom: 12px;">
        <tr>
          <td style="padding: 10px 0; width: 130px; font-size: 14px; font-weight: 700; color: #004fda;">Nom</td>
          <td style="padding: 10px 0; font-size: 14px; color: #24364d;">${escapeHtml(recipientName)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; width: 130px; font-size: 14px; font-weight: 700; color: #004fda;">Email</td>
          <td style="padding: 10px 0; font-size: 14px; color: #24364d;">${escapeHtml(recipientEmail)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; width: 130px; font-size: 14px; font-weight: 700; color: #004fda;">Téléphone</td>
          <td style="padding: 10px 0; font-size: 14px; color: #24364d;">${escapeHtml(recipientPhone)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; width: 130px; font-size: 14px; font-weight: 700; color: #004fda;">Type</td>
          <td style="padding: 10px 0; font-size: 14px; color: #24364d;">${escapeHtml(brochureLabel)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; width: 130px; font-size: 14px; font-weight: 700; color: #004fda;">Date</td>
          <td style="padding: 10px 0; font-size: 14px; color: #24364d;">${contactDate}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; width: 130px; font-size: 14px; font-weight: 700; color: #004fda;">Heure</td>
          <td style="padding: 10px 0; font-size: 14px; color: #24364d;">${contactTime}</td>
        </tr>
      </table>
    `,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, phone, brochureType = 'brochure-default' } = body;

    if (!email || !name || !phone) {
      return NextResponse.json(
        { error: 'Email, nom et numéro requis' },
        { status: 400 }
      );
    }

    if (!isMailerConfigured()) {
      return NextResponse.json(
        {
          error: 'Configuration Gmail incomplète',
          missing: getMissingMailerEnv(),
        },
        { status: 500 }
      );
    }

    const brochure = BROCHURES[brochureType as keyof typeof BROCHURES] || BROCHURES['brochure-default'];
    const recipientEmail = email;
    const recipientName = name;
    const recipientPhone = phone;
    const brochureLabel = brochure.label;
    const now = new Date();
    const contactDate = now.toLocaleDateString('fr-FR');
    const contactTime = now.toLocaleTimeString('fr-FR');
    const recipient = getContactRecipient();
    const personalizedParagraphs = personalizeParagraphs(brochure.paragraphs, recipientName);

    after(async () => {
      const attachmentPromise = getPublicPdfAttachment(brochure.fileName, brochure.attachmentName);

      const [deliveryResult, notificationResult] = await Promise.allSettled([
        (async () => {
          const attachment = await attachmentPromise;

          return sendMail({
            to: recipientEmail,
            replyTo: recipient,
            subject: brochure.subject,
            text: personalizedParagraphs.join('\n\n'),
            html: renderEmailLayout({
              eyebrow: brochure.eyebrow,
              title: brochure.title,
              contentHtml: renderParagraphs(personalizedParagraphs),
              footerNote: 'Votre document est joint à cet email au format PDF.',
            }),
            attachments: [attachment],
          });
        })(),
        sendMail({
          to: recipient,
          replyTo: recipientEmail,
          subject: `Nouvelle demande de brochure - ${brochureLabel}`,
          text: [
            'Une nouvelle demande de brochure a été effectuée.',
            '',
            `Nom: ${recipientName}`,
            `Email: ${recipientEmail}`,
            `Téléphone: ${recipientPhone}`,
            `Type: ${brochureLabel}`,
            `Date: ${contactDate}`,
            `Heure: ${contactTime}`,
          ].join('\n'),
          html: renderNotificationHtml(
            recipientName,
            recipientEmail,
            recipientPhone,
            brochureLabel,
            contactDate,
            contactTime
          ),
        }),
      ]);

      if (deliveryResult.status === 'rejected') {
        console.error('Brochure email error:', deliveryResult.reason);
      }

      if (notificationResult.status === 'rejected') {
        console.error('Brochure notification error:', notificationResult.reason);
      }
    });

    return NextResponse.json({
      success: true,
      message: brochureType === 'brochure-tasnime' ? 'Success Story envoyée avec succès' : 'Brochure envoyée avec succès',
      brochureType,
      notificationQueued: true,
      deliveryQueued: true,
    });
  } catch (error) {
    console.error('Brochure email error:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
