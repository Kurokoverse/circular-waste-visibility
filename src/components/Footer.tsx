
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-foreground/5 py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Link to="/" className="text-xl font-bold text-primary">
                Onursal Tarım
              </Link>
            </div>
            <p className="text-foreground/70 max-w-md mb-6">
              {t('about.overview.text')}
            </p>
            <div className="flex items-center">
              <LanguageToggle />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t('nav.about')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-foreground/70 hover:text-primary transition-colors">
                  {t('nav.technology')}
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-foreground/70 hover:text-primary transition-colors">
                  {t('nav.team')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t('nav.contact')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/news" className="text-foreground/70 hover:text-primary transition-colors">
                  {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Onursal Tarım. {t('footer.rights')}
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
