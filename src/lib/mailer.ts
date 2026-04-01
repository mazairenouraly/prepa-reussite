import { promises as fs } from 'node:fs';
import path from 'node:path';
import nodemailer from 'nodemailer';

const MAILER_CONFIG = {
  user: process.env.GMAIL_USER || '',
  pass: process.env.GMAIL_APP_PASSWORD || '',
  fromName: process.env.EMAIL_FROM_NAME || 'Prépa Réussite',
  contactRecipient:
    process.env.CONTACT_RECIPIENT_EMAIL ||
    process.env.GMAIL_USER ||
    'contact.prepareussite@gmail.com',
};

const EMAIL_BRAND = {
  name: 'Prépa Réussite',
  tagline: 'La prépa médecine de référence à La Réunion',
  email: 'contact.prepareussite@gmail.com',
  phone: '+262 692 71 30 84',
  northAddress: '24 Rte Philibert Tsiranana, CS 61115 97495, La Réunion (CREPS REUNION)',
  southAddress: '149 C Rue Marius et Ary Leblond, Saint-Pierre 97410, La Réunion (Nova assurances)',
};

const LOGO_CID = 'prepa-reussite-logo';
type MailAttachment = NonNullable<nodemailer.SendMailOptions['attachments']>[number];

let transporter: nodemailer.Transporter | null = null;
let logoAttachmentPromise: Promise<MailAttachment | null> | null = null;
const publicFileAttachmentCache = new Map<string, Promise<MailAttachment>>();

export function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function nl2br(value: string): string {
  return escapeHtml(value).replaceAll('\n', '<br />');
}

export function getMissingMailerEnv(): string[] {
  const missing: string[] = [];

  if (!MAILER_CONFIG.user) {
    missing.push('GMAIL_USER');
  }

  if (!MAILER_CONFIG.pass) {
    missing.push('GMAIL_APP_PASSWORD');
  }

  return missing;
}

export function isMailerConfigured(): boolean {
  return getMissingMailerEnv().length === 0;
}

export function getMailerSender() {
  return {
    name: MAILER_CONFIG.fromName,
    address: MAILER_CONFIG.user,
  };
}

export function getContactRecipient(): string {
  return MAILER_CONFIG.contactRecipient;
}

function getTransporter() {
  if (!isMailerConfigured()) {
    throw new Error(`Configuration Gmail incomplète: ${getMissingMailerEnv().join(', ')}`);
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      pool: true,
      maxConnections: 3,
      maxMessages: 100,
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: MAILER_CONFIG.user,
        pass: MAILER_CONFIG.pass,
      },
    });
  }

  return transporter;
}

async function getInlineLogoAttachment() {
  if (!logoAttachmentPromise) {
    logoAttachmentPromise = (async () => {
      try {
        const filePath = path.join(process.cwd(), 'public', 'logo.png');
        const content = await fs.readFile(filePath);

        return {
          filename: 'logo.png',
          content,
          contentType: 'image/png',
          cid: LOGO_CID,
        } satisfies MailAttachment;
      } catch {
        return null;
      }
    })();
  }

  return logoAttachmentPromise;
}

type SendMailInput = {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
  attachments?: nodemailer.SendMailOptions['attachments'];
};

type EmailLayoutOptions = {
  eyebrow?: string;
  title: string;
  contentHtml: string;
  footerNote?: string;
};

export function renderParagraphs(paragraphs: string[]): string {
  return paragraphs
    .map(
      (paragraph) =>
        `<p style="margin: 0 0 16px; font-size: 16px; line-height: 1.75; color: #24364d;">${escapeHtml(paragraph)}</p>`
    )
    .join('');
}

export function renderEmailLayout({ eyebrow, title, contentHtml, footerNote }: EmailLayoutOptions): string {
  const topLabel = eyebrow
    ? `<div style="display: inline-block; margin-bottom: 18px; padding: 7px 14px; border-radius: 999px; background: #eef4ff; color: #004fda; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">${escapeHtml(eyebrow)}</div>`
    : '';

  const noteHtml = footerNote
    ? `<p style="margin: 24px 0 0; font-size: 13px; line-height: 1.7; color: #68768b;">${escapeHtml(footerNote)}</p>`
    : '';

  return `
    <!DOCTYPE html>
    <html lang="fr">
      <body style="margin: 0; padding: 0; background: #ffffff; font-family: Arial, sans-serif;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: #ffffff; margin: 0; padding: 0;">
          <tr>
            <td align="center" style="padding: 28px 16px 36px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 680px;">
                <tr>
                  <td align="center" style="padding-bottom: 20px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto; width: 112px; height: 112px; background: #eef4ff; border-radius: 56px;">
                      <tr>
                        <td align="center" valign="middle">
                          <img src="cid:${LOGO_CID}" alt="Prépa Réussite" width="72" height="72" style="display: block; width: 72px; height: 72px; object-fit: cover; border: 0; margin: 0 auto; border-radius: 50%; overflow: hidden;" />
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-bottom: 22px;">
                    <div style="font-size: 28px; font-weight: 800; color: #10243e;">${EMAIL_BRAND.name}</div>
                    <div style="margin-top: 6px; font-size: 14px; color: #68768b;">${EMAIL_BRAND.tagline}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0 8px;">
                    ${topLabel}
                    <h1 style="margin: 0 0 22px; font-size: 28px; line-height: 1.25; color: #10243e;">${escapeHtml(title)}</h1>
                    ${contentHtml}
                    ${noteHtml}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 30px 8px 0; text-align: center;">
                    <div style="font-size: 18px; font-weight: 700; color: #10243e; margin-bottom: 10px;">Prépa Réussite</div>
                    <div style="font-size: 14px; line-height: 1.8; color: #68768b;">
                      <div><strong>Email :</strong> ${EMAIL_BRAND.email}</div>
                      <div><strong>Téléphone :</strong> ${EMAIL_BRAND.phone}</div>
                      <div style="margin-top: 10px;"><strong>Centre Nord :</strong> ${EMAIL_BRAND.northAddress}</div>
                      <div style="margin-top: 6px;"><strong>Centre Sud :</strong> ${EMAIL_BRAND.southAddress}</div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

export async function sendMail({
  to,
  subject,
  text,
  html,
  replyTo,
  attachments,
}: SendMailInput) {
  const logoAttachment = await getInlineLogoAttachment();
  const finalAttachments = [...(attachments || [])];

  if (logoAttachment) {
    finalAttachments.push(logoAttachment);
  }

  return getTransporter().sendMail({
    from: getMailerSender(),
    to,
    subject,
    text,
    html,
    replyTo,
    attachments: finalAttachments,
  });
}

export async function getPublicPdfAttachment(fileName: string, attachmentName: string) {
  const filePath = path.join(process.cwd(), 'public', fileName);
  const content = await fs.readFile(filePath);

  return {
    filename: attachmentName,
    content,
    contentType: 'application/pdf',
  };
}
