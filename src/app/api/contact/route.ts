import { after, NextRequest, NextResponse } from 'next/server';
import {
  escapeHtml,
  getContactRecipient,
  getMissingMailerEnv,
  isMailerConfigured,
  nl2br,
  renderEmailLayout,
  sendMail,
} from '@/lib/mailer';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { from_name, from_email, phone, subject, message } = body;

    if (!from_name || !from_email || !subject || !message) {
      return NextResponse.json(
        { error: 'Données manquantes' },
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

    const now = new Date();
    const contactDate = now.toLocaleDateString('fr-FR');
    const contactTime = now.toLocaleTimeString('fr-FR');
    const recipient = getContactRecipient();

    after(() => {
      return sendMail({
        to: recipient,
        replyTo: from_email,
        subject: `[Contact] ${subject || 'Nouveau message du formulaire'}`,
        text: [
          'Nouvelle demande de contact',
          '',
          `Nom: ${from_name}`,
          `Email: ${from_email}`,
          `Téléphone: ${phone || 'Non renseigné'}`,
          `Sujet: ${subject}`,
          `Date: ${contactDate}`,
          `Heure: ${contactTime}`,
          '',
          'Message:',
          message,
        ].join('\n'),
        html: renderEmailLayout({
          eyebrow: 'Formulaire de contact',
          title: 'Nouveau message reçu depuis le site',
          contentHtml: `
            <p style="margin: 0 0 18px; font-size: 16px; line-height: 1.75; color: #24364d;">
              Un nouveau message a été envoyé depuis le formulaire de contact Prépa Réussite.
            </p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; background: #f8fbff; border: 1px solid #d9e7fb; border-radius: 18px; padding: 8px 20px; margin-bottom: 22px;">
              <tr>
                <td style="padding: 10px 0; width: 130px; font-size: 14px; font-weight: 700; color: #004fda;">Nom</td>
                <td style="padding: 10px 0; font-size: 14px; color: #24364d;">${escapeHtml(from_name)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; width: 130px; font-size: 14px; font-weight: 700; color: #004fda;">Email</td>
                <td style="padding: 10px 0; font-size: 14px; color: #24364d;">${escapeHtml(from_email)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; width: 130px; font-size: 14px; font-weight: 700; color: #004fda;">Téléphone</td>
                <td style="padding: 10px 0; font-size: 14px; color: #24364d;">${escapeHtml(phone || 'Non renseigné')}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; width: 130px; font-size: 14px; font-weight: 700; color: #004fda;">Sujet</td>
                <td style="padding: 10px 0; font-size: 14px; color: #24364d;">${escapeHtml(subject)}</td>
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
            <div style="background: #ffffff; border: 1px solid #d9e7fb; border-left: 4px solid #004fda; border-radius: 18px; padding: 22px;">
              <div style="margin-bottom: 10px; font-size: 14px; font-weight: 700; color: #004fda;">Message</div>
              <div style="font-size: 15px; line-height: 1.8; color: #24364d;">${nl2br(message)}</div>
            </div>
          `,
        }),
      }).catch((error) => {
        console.error('Contact email error:', error);
      });
    });

    return NextResponse.json({
      success: true,
      message: 'Email envoyé avec succès',
    });
  } catch (error) {
    console.error('Contact email error:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
