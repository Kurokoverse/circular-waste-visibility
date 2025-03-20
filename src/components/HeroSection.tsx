
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CircularAnimation from './CircularAnimation';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <CircularAnimation className="w-full h-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Small Label */}
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            <span>TÜBİTAK 1832</span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            {t('hero.title')}
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
            {t('hero.subtitle')}
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
            <Link 
              to="/about" 
              className="button-primary inline-flex items-center gap-2 px-6 py-3 text-base"
            >
              {t('hero.cta')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;
