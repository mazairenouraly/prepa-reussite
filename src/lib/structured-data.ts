export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Prépa Réussite",
  "description": "Prépa d'excellence pour les études de santé à La Réunion",
  "url": "https://prepareussite.com",
  "logo": "https://prepareussite.com/logo.png",
  "foundingDate": "2015",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "La Réunion",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "French"
  },
  "sameAs": [
    "https://www.facebook.com/prepareussiterun",
    "https://www.instagram.com/prepareussite974"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Formations en santé",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Préparation PASS",
          "description": "Préparation au Parcours d'Accès Spécifique Santé"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Préparation LAS",
          "description": "Préparation à la Licence Accès Santé"
        }
      }
    ]
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Prépa Réussite",
  "url": "https://prepareussite.com",
  "description": "La prépa de référence aux études de santé à La Réunion",
  "publisher": {
    "@type": "Organization",
    "name": "Prépa Réussite"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://prepareussite.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

export const courseSchema = (courseData: {
  name: string;
  description: string;
  provider: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": courseData.name,
  "description": courseData.description,
  "provider": {
    "@type": "Organization",
    "name": courseData.provider,
    "sameAs": "https://prepareussite.com"
  },
  "url": courseData.url,
  "courseMode": "offline",
  "educationalLevel": "undergraduate"
}) 