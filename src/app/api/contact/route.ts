// app/api/contact/route.ts
// API Route Next.js pour envoyer les emails de contact

import { NextRequest, NextResponse } from 'next/server';

const MAILERSEND_CONFIG = {
  apiToken: process.env.MAILERSEND_API_TOKEN || '',
  apiUrl: 'https://api.mailersend.com/v1',
  templates: {
    contact: process.env.MAILERSEND_CONTACT_TEMPLATE || 'jpzkmgq8jqvg059v'
  },
  companyEmail: 'contact.prepareussite@gmail.com'
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { from_name, from_email, phone, subject, message } = body;

    // Validation des données
    if (!from_name || !from_email || !subject || !message) {
      return NextResponse.json(
        { error: 'Données manquantes' },
        { status: 400 }
      );
    }

    // Préparer la requête MailerSend
    const payload = {
        from: {
            email: "MS_bRcFXT@test-ywj2lpnvjyjg7oqz.mlsender.net",
            name: from_name
        },
        to: [
            {
            email: MAILERSEND_CONFIG.companyEmail,
            name: 'Équipe Prépa Réussite'
            }
        ],
        subject: subject || "Nouveau message du formulaire de contact", // ✅ sujet requis
        template_id: MAILERSEND_CONFIG.templates.contact,
        personalization: [
            {
            email: MAILERSEND_CONFIG.companyEmail,
            data: {
                client_name: from_name,
                client_email: from_email,
                client_phone: phone || 'Non renseigné',
                subject,
                message,
                contact_date: new Date().toLocaleDateString('fr-FR'),
                contact_time: new Date().toLocaleTimeString('fr-FR'),
                form_type: 'Formulaire de contact'
            }
            }
        ]
    };

    const response = await fetch(`${MAILERSEND_CONFIG.apiUrl}/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILERSEND_CONFIG.apiToken}`,
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email envoyé avec succès' 
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}