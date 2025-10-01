import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import ClientBody from "./ClientBody";
import StructuredData from "@/components/StructuredData";
import GoogleTagManager from "@/components/GoogleTagManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prépa Réussite - Prépa médecine à La Réunion | PASS & LAS",
  description: "Préparez vos études de santé à La Réunion avec Prépa Réussite. Prépa d'excellence pour réussir la PASS et LAS. 96% de satisfaction, excellence depuis 2015.",
  keywords: [
    "prépa médecine", "prépa santé", "PASS La Réunion", "LAS La Réunion", "études de santé", 
    "prépa réussite", "prépa médecine réunion", "préparation concours médecine", "médecine réunion",
    "études médicales", "concours médecine", "prépa santé réunion", "formation médecine"
  ],
  authors: [{ name: "Prépa Réussite", url: "https://prepareussite.com" }],
  creator: "Prépa Réussite",
  publisher: "Prépa Réussite",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://prepareussite.com/",
    title: "Prépa Réussite - Prépa médecine à La Réunion | PASS & LAS",
    description: "Préparez vos études de santé à La Réunion avec Prépa Réussite. Prépa d'excellence pour réussir la PASS et LAS. 96% de satisfaction, excellence depuis 2015.",
    siteName: "Prépa Réussite",
    images: [
      {
        url: "https://prepareussite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prépa Réussite - La prépa médecine de référence à La Réunion"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prépa Réussite - Prépa médecine à La Réunion | PASS & LAS",
    description: "Préparez vos études de santé à La Réunion avec Prépa Réussite. Prépa d'excellence pour réussir la PASS et LAS.",
    images: ["https://prepareussite.com/og-image.jpg"],
    site: "@prepareussite",
    creator: "@prepareussite",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://prepareussite.com/',
  },
  verification: {
    google: 'your-google-verification-code', // À remplacer par le vrai code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Meta tags additionnels pour le favicon */}
        <meta name="theme-color" content="#004FDA" />
        <meta name="msapplication-TileColor" content="#004FDA" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Données structurées */}
        <StructuredData type="organization" />
        <StructuredData type="website" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <GoogleTagManager />
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
