import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/technology', label: t('nav.technology') },
    { href: '/team', label: t('nav.team') },
    { href: '/news', label: t('nav.news') },
    { href: '/contact', label: t('nav.contact') },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-gradient-to-r from-white/80 to-gray-50 shadow-md py-1 border-b border-gray-200"
          : "bg-transparent py-2"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center transform transition-transform hover:scale-105">
              <img 
                src="/lovable-uploads/068a4d17-bf1d-4406-af7c-b0213eec99f3.png" 
                alt="Onursal Tarım Logo" 
                className={cn("w-auto transition-all", isScrolled ? "h-8" : "h-10")}
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-primary relative",
                  location.pathname === link.href
                    ? "text-primary after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-primary after:rounded-full" 
                    : "text-gray-700 hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <LanguageToggle />
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary rounded-md focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-white/95 to-gray-50 border-b border-gray-200 animate-fade-in shadow-md">
          <nav className="flex flex-col py-3">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                to={link.href}
                className={cn(
                  "px-6 py-3 text-base font-semibold transition-colors",
                  location.pathname === link.href
                    ? "text-primary" 
                    : "text-gray-700 hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 py-3">
              <LanguageToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;