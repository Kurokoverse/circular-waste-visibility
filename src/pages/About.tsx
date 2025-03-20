
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedTransition from '@/components/AnimatedTransition';
import { FileText, Award, Target } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <AnimatedTransition>
      <div className="section-container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t('about.overview.text')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="glass-panel rounded-xl p-8 h-full">
              <div className="rounded-full bg-primary/10 p-3 w-14 h-14 flex items-center justify-center text-primary mb-6">
                <FileText className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{t('about.overview.title')}</h2>
              <p className="text-foreground/70 mb-4">
                {t('about.overview.text')}
              </p>
              <p className="text-foreground/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="glass-panel rounded-xl p-8 h-full">
              <div className="rounded-full bg-primary/10 p-3 w-14 h-14 flex items-center justify-center text-primary mb-6">
                <Award className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{t('about.importance.title')}</h2>
              <p className="text-foreground/70 mb-4">
                {t('about.importance.text')}
              </p>
              <p className="text-foreground/70">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-secondary/40 rounded-xl p-8 md:p-12 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <div className="rounded-full bg-primary/10 p-4 flex-shrink-0 flex items-center justify-center text-primary">
              <Target className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{t('about.funding.title')}</h2>
              <p className="text-foreground/80 mb-4">
                {t('about.funding.text')}
              </p>
              <p className="text-foreground/70">
                TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı kapsamında desteklenen projemiz, sürdürülebilir ve yenilikçi atık yönetimi stratejileri geliştirmeyi amaçlamaktadır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default About;
