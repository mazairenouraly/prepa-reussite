// app/api/brochure/route.ts
// API Route Next.js pour envoyer les emails de brochure

import { NextRequest, NextResponse } from 'next/server';

const MAILERSEND_CONFIG = {
  apiToken: process.env.MAILERSEND_API_TOKEN || '',
  apiUrl: 'https://api.mailersend.com/v1',
  templates: {
    brochure: process.env.MAILERSEND_BROCHURE_TEMPLATE,
    tasnime: '0p7kx4x8n2eg9yjr' // Template spécifique pour la success story de Tasnime
  },
  companyEmail: 'contact.prepareussite@gmail.com',
  companyName: 'Prépa Réussite',
  domain: process.env.MAILERSEND_DOMAIN,
  adminEmail: process.env.MAILERSEND_ADMIN_EMAIL,
  isTrial: process.env.MAILERSEND_IS_TRIAL === 'true'
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, brochureType = 'brochure-default' } = body;

    // Validation des données
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email et nom requis' },
        { status: 400 }
      );
    }

    const templateId = brochureType === 'brochure-tasnime' 
      ? MAILERSEND_CONFIG.templates.tasnime 
      : MAILERSEND_CONFIG.templates.brochure;

    if (!MAILERSEND_CONFIG.apiToken || !templateId || !MAILERSEND_CONFIG.domain) {
      return NextResponse.json(
        { error: 'Configuration MailerSend incomplète' },
        { status: 500 }
      );
    }

    // En mode Trial, on envoie vers l'admin avec les infos du client dans les données
    const payload = {
      from: {
        email: MAILERSEND_CONFIG.domain,
        name: MAILERSEND_CONFIG.companyName
      },
      to: [
        {
          email: MAILERSEND_CONFIG.isTrial ? MAILERSEND_CONFIG.adminEmail : email,
          name: MAILERSEND_CONFIG.isTrial ? MAILERSEND_CONFIG.companyName : name
        }
      ],
      subject: brochureType === 'brochure-tasnime' ? "Success Story : De 144ème à 57ème !" : "Demande de brochure Prépa Réussite",
      template_id: templateId,
      personalization: [
        {
          email: MAILERSEND_CONFIG.isTrial ? MAILERSEND_CONFIG.adminEmail : email,
          data: {
            subject: brochureType === 'brochure-tasnime' ? "Success Story : De 144ème à 57ème !" : "Demande de brochure Prépa Réussite",
            client_name: name,
            client_email: email,
            company_name: MAILERSEND_CONFIG.companyName,
            company_email: MAILERSEND_CONFIG.companyEmail,
            request_date: new Date().toLocaleDateString('fr-FR'),
            request_time: new Date().toLocaleTimeString('fr-FR'),
            trial_mode: MAILERSEND_CONFIG.isTrial ? "Oui" : "Non",
            brochure_type: brochureType
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
      const errorMessage = await response.text();

      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email', details: errorMessage },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ 
      success: true, 
      message: brochureType === 'brochure-tasnime' ? 'Success Story envoyée avec succès' : 'Brochure envoyée avec succès',
      brochureType
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
