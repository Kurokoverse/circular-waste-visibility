
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className }) => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className={cn("flex items-center space-x-1", className)}>
      <button
        onClick={() => setLanguage('tr')}
        className={cn(
          "px-2 py-1 text-sm rounded-md transition-all duration-300 focus:outline-none",
          language === 'tr' 
            ? "bg-primary text-primary-foreground font-medium"
            : "text-foreground/80 hover:text-foreground hover:bg-muted"
        )}
        aria-label="Türkçe"
      >
        TR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          "px-2 py-1 text-sm rounded-md transition-all duration-300 focus:outline-none",
          language === 'en' 
            ? "bg-primary text-primary-foreground font-medium"
            : "text-foreground/80 hover:text-foreground hover:bg-muted"
        )}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
