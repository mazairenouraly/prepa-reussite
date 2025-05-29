// src/services/email.ts
// Service client qui appelle les API Routes Next.js

interface EmailData {
  from_name: string;
  from_email: string;
  phone?: string;
  subject: string;
  message: string;
  to_name?: string;
}

// 📧 CONTACT: Client → contact.prepareussite@gmail.com via API Route
export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      return false;
    }

    const result = await response.json();
    return result.success;
  } catch (error) {
    return false;
  }
};

// 📖 BROCHURE: contact.prepareussite@gmail.com → Client via API Route
export const sendBrochureRequest = async (email: string, name: string): Promise<boolean> => {
  try {
    const response = await fetch('/api/brochure', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name })
    });

    if (!response.ok) {
      return false;
    }

    const result = await response.json();
    return result.success;
  } catch (error) {
    return false;
  }
};

// Service principal
export const EmailService = {
  sendEmail,           // Contact: Client → Entreprise
  sendBrochureRequest  // Brochure: Entreprise → Client
};

// Export par défaut
export default EmailService;