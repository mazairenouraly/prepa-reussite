import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prépa Réussite - Prépa médecine à La Réunion",
  description: "Préparez vos études de santé à La Réunion avec Prépa Réussite, la prépa d’excellence pour réussir la PASS et LAS.",
  keywords: [
    "prépa médecine", "prépa santé", "PASS La Réunion", "LAS La Réunion", "études de santé", 
    "prépa réussite", "prépa médecine réunion", "préparation concours médecine"
  ],
  authors: [{ name: "Prépa Réussite", url: "https://prepa-reussite.fr" }],
  creator: "Prépa Réussite",
  publisher: "Prépa Réussite",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://prepareussite.com/",
    title: "Prépa Réussite - Prépa médecine à La Réunion",
    description: "Préparez vos études de santé à La Réunion avec Prépa Réussite, la prépa d’excellence pour réussir la PASS et LAS.",
    siteName: "Prépa Réussite",
    /*
    images: [
      {
        url: "https://prepareussite.com/chemin-vers-une-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prépa Réussite - La prépa médecine à La Réunion"
      }
    ],*/
  },
  twitter: {
    card: "summary_large_image",
    title: "Prépa Réussite - Prépa médecine à La Réunion",
    description: "Préparez vos études de santé à La Réunion avec Prépa Réussite, la prépa d’excellence pour réussir la PASS et LAS.",
    images: ["https://prepa-reussite.fr/logo.png"],
    site: "@prepareussite",
    creator: "@prepareussite",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
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
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
