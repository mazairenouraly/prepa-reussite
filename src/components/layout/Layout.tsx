'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Chatbot } from './Chatbot';
import { PageLoader } from '@/components/PageLoader';
import { usePageTransition } from '@/hooks/usePageTransition';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className = '' }: LayoutProps) => {
  const { isLoading } = usePageTransition();

  useEffect(() => {
    // Initialiser MailerSend avec templates
    const init = async () => {
    };

    // Délai pour éviter les conflits avec le rendu initial
    const timer = setTimeout(init, 200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-container ${className}`}>
      <PageLoader isLoading={isLoading} />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};