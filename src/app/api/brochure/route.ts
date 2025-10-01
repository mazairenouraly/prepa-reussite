import { NextRequest, NextResponse } from 'next/server';

const MAILERSEND_CONFIG = {
  apiToken: process.env.MAILERSEND_API_TOKEN || '',
  apiUrl: 'https://api.mailersend.com/v1',
  templates: {
    brochure: process.env.MAILERSEND_BROCHURE_TEMPLATE,
    tasnime: '0p7kx4x8n2eg9yjr'
  },
  companyEmail: 'contact.prepareussite@gmail.com',
  companyName: 'Prépa Réussite',
  domain: 'dnvo4d9wrq3g5r86',
  adminEmail: process.env.MAILERSEND_ADMIN_EMAIL,
  isTrial: process.env.MAILERSEND_IS_TRIAL === 'true'
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, brochureType = 'brochure-default' } = body;

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

    const recipientEmail = email;
    const recipientName = name;
    const payload = {
      from: {
        email: process.env.MAILERSEND_USERNAME,
        name: MAILERSEND_CONFIG.companyName
      },
      to: [
        {
          email: recipientEmail
        }
      ],
      subject: brochureType === 'brochure-tasnime' ? "🚀 Success Story : De 144ème à 57ème !" : "📚 Votre brochure Prépa Réussite",
      template_id: templateId,
      personalization: [
        {
          email: recipientEmail,
          data: {
            client_name: name,
            client_email: email,
            company_name: MAILERSEND_CONFIG.companyName,
            company_email: MAILERSEND_CONFIG.companyEmail,
            request_date: new Date().toLocaleDateString('fr-FR'),
            request_time: new Date().toLocaleTimeString('fr-FR')
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
      console.error('MailerSend API Error:', response.status, errorMessage);
      console.error('Payload sent:', JSON.stringify(payload, null, 2));
      console.error('Config used:', {
        domain: MAILERSEND_CONFIG.domain,
        apiToken: MAILERSEND_CONFIG.apiToken ? 'SET' : 'MISSING',
        templateId,
        isTrial: MAILERSEND_CONFIG.isTrial,
        adminEmail: MAILERSEND_CONFIG.adminEmail
      });

      return NextResponse.json(
        { 
          error: 'Erreur lors de l\'envoi de l\'email', 
          details: errorMessage,
          status: response.status,
          config: {
            domain: MAILERSEND_CONFIG.domain,
            templateId,
            isTrial: MAILERSEND_CONFIG.isTrial
          }
        },
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
