// Instructions: Adapter le Header au nouveau style Cours custom avec leurs couleurs et typographie

'use client';

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { MobileMenu } from "@/components/MobileMenu";
import { RendezVousButton } from "@/components/RendezVousButton";
import { BannerButton } from "@/components/BannerButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Bannière d'inscription - Style Cours custom */}
      <AnimatedSection direction="down">
        <BannerButton />
      </AnimatedSection>

      {/* Header principal - Style Cours custom */}
      <AnimatedSection direction="down" delay={0.1}>
        <header className="header-main">
          <div className="header-content">
            <Link href="/" className="logo-container">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Prépa Réussite Logo"
                  width={48}
                  height={48}
                  className="object-contain rounded-full shadow-md"
                  priority
                />
              </div>
              <div>
                <h1 className="font-bold text-white text-xl font-gyst">Prépa Réussite</h1>
                <p className="text-base text-white/90 font-roboto">La prépa médecine de référence à La Réunion</p>
              </div>
            </Link>

            <nav className="nav-main">
              <Link
                href="/"
                className={isActive('/') ? 'nav-link-active' : 'nav-link'}
              >
                Accueil
              </Link>
              <Link
                href="/formations"
                className={isActive('/formations') ? 'nav-link-active' : 'nav-link'}
              >
                Nos Prépas
              </Link>
              <Link
                href="/blog"
                className={isActive('/blog') ? 'nav-link-active' : 'nav-link'}
              >
                Blog
              </Link>
              <Link
                href="/faq"
                className={isActive('/faq') ? 'nav-link-active' : 'nav-link'}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className={isActive('/contact') ? 'nav-link-active' : 'nav-link'}
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <RendezVousButton className="btn-primary text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Prendre RDV
                </RendezVousButton>
              </div>
              <MobileMenu />
            </div>
          </div>
        </header>
      </AnimatedSection>
    </>
  );
};
