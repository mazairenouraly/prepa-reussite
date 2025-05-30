// app/api/brochure/route.ts
// API Route Next.js pour envoyer les emails de brochure

import { NextRequest, NextResponse } from 'next/server';

const MAILERSEND_CONFIG = {
  apiToken: process.env.MAILERSEND_API_TOKEN || '',
  apiUrl: 'https://api.mailersend.com/v1',
  templates: {
    brochure: process.env.MAILERSEND_BROCHURE_TEMPLATE
  },
  companyEmail: 'contact.prepareussite@gmail.com',
  companyName: 'Prépa Réussite'
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    // Validation des données
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email et nom requis' },
        { status: 400 }
      );
    }

    const payload = {
        from: {
            email: "MS_bRcFXT@test-ywj2lpnvjyjg7oqz.mlsender.net",
            name: MAILERSEND_CONFIG.companyName
        },
        to: [
            {
              email: email,
              name: name
            }
        ],
        subject: "Demande de brochure Prépa Réussit",
        template_id: MAILERSEND_CONFIG.templates.brochure,
        personalization: [
          {
            subject: "Demande de brochure Prépa Réussite",
            client_name: name,
            client_email: email,
            company_name: MAILERSEND_CONFIG.companyName,
            company_email: MAILERSEND_CONFIG.companyEmail,
            request_date: new Date().toLocaleDateString('fr-FR'),
            request_time: new Date().toLocaleTimeString('fr-FR')
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
      message: 'Brochure envoyée avec succès' 
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
