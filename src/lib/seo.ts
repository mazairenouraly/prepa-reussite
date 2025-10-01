import { Metadata } from 'next'

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
}

export function generateSEO({
  title = 'Prépa Réussite - Prépa médecine à La Réunion | PASS & LAS',
  description = 'Préparez vos études de santé à La Réunion avec Prépa Réussite. Prépa d\'excellence pour réussir la PASS et LAS. 96% de satisfaction, excellence depuis 2015.',
  keywords = [],
  image = 'https://prepareussite.com/og-image.jpg',
  url = 'https://prepareussite.com',
  type = 'website'
}: SEOProps = {}): Metadata {
  const defaultKeywords = [
    'prépa médecine', 'prépa santé', 'PASS La Réunion', 'LAS La Réunion', 
    'études de santé', 'prépa réussite', 'prépa médecine réunion', 
    'préparation concours médecine', 'médecine réunion', 'études médicales'
  ]

  const allKeywords = [...defaultKeywords, ...keywords]

  return {
    title,
    description,
    keywords: allKeywords,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Prépa Réussite',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'fr_FR',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      site: '@prepareussite',
      creator: '@prepareussite',
    },
    alternates: {
      canonical: url,
    },
  }
}

export const defaultSEO = generateSEO() 