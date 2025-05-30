import { Facebook, Instagram } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import Link from 'next/link';

export const Footer = () => {
  return (
    <AnimatedSection direction="up">
      <footer className="footer-main">
        <div className="section-container">
          <div className="footer-grid">
            {/* Logo and description */}
            <div className="footer-section">
              <div className="logo-container">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Prépa Réussite Logo"
                    width="48"
                    height="48"
                    className="object-contain rounded-full shadow-md"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md"><span class="text-custom-blue font-bold text-lg font-gyst">PR</span></div>';
                      }
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl font-gyst text-white">Prépa Réussite</h3>
                  <p className="text-base text-white/90 font-roboto">La prépa médecine de référence à La Réunion</p>
                </div>
              </div>

              <p className="text-white/80 text-base font-roboto leading-relaxed">
                La prépa médecine à taille humaine à La Réunion. Réussir le concours médecine sans se ruiner
                avec un accompagnement personnalisé et rigoureux.
              </p>

              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-white/80 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-white/80 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Nos parcours */}
            <div className="footer-section">
              <h4 className="footer-title">Nos prépas</h4>
              <ul className="space-y-3 text-white/80 text-base font-roboto">
                <li><Link href="/formations" className="footer-link">Prépa Terminale</Link></li>
                <li><Link href="/formations" className="footer-link">Prépa PASS</Link></li>
                <li><Link href="/formations" className="footer-link">Prépa LAS</Link></li>
                <li><Link href="/formations" className="footer-link">Comparatif des prépas</Link></li>
                <li><Link href="/formations" className="footer-link">Documentation complète</Link></li>
              </ul>
            </div>

            {/* Informations */}
            <div className="footer-section">
              <h4 className="footer-title">Informations</h4>
              <ul className="space-y-3 text-white/80 text-base font-roboto">
                <li><Link href="/" className="footer-link">Notre vision</Link></li>
                <li><Link href="/formations" className="footer-link">Nos parcours</Link></li>
                <li><Link href="/blog" className="footer-link">Blog</Link></li>
                <li><Link href="/faq" className="footer-link">FAQ</Link></li>
                <li><Link href="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4 className="footer-title">Contact</h4>
              <div className="space-y-4 text-white/80 text-base font-roboto">
                <div>
                  <p className="font-semibold text-white mb-1 font-gyst">Centre Nord :</p>
                  <p>24 Rte Philibert Tsiranana, CS 61115 97495, La Réunion (CREPS REUNION)</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1 font-gyst">Centre Sud :</p>
                  <p>149 C Rue Marius et Ary Leblond, Saint-Pierre 97410, La Réunion (Nova assurances)</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1 font-gyst">Téléphone :</p>
                  <p>Nord : +262 692 71 30 84</p>
                  <p>Sud : +262 692 71 30 84</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1 font-gyst">Email :</p>
                  <p>contact.prepareussite@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="flex space-x-4 mb-4 md:mb-0 font-roboto">
              <Link href="/mentions-legales" className="footer-link">Mentions légales</Link>
              <span>|</span>
              <Link href="/politique-confidentialite" className="footer-link">Politique de confidentialité</Link>
              <span>|</span>
              <Link href="/cgv" className="footer-link">CGV</Link>
            </div>
            <p className="font-roboto">© 2025 Prépa Réussite - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  );
};
