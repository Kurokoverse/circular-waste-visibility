
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedTransition from '@/components/AnimatedTransition';
import { Cpu, BarChart, Globe, Recycle, Database, LineChart } from 'lucide-react';

const Technology = () => {
  const { t } = useLanguage();
  
  const technologies = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: t('tech.tracking.title'),
      description: t('tech.tracking.text'),
      delay: '0.2s',
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: t('tech.blockchain.title'),
      description: t('tech.blockchain.text'),
      delay: '0.3s',
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      title: t('tech.circular.title'),
      description: t('tech.circular.text'),
      delay: '0.4s',
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: t('tech.analytics.title'),
      description: t('tech.analytics.text'),
      delay: '0.5s',
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: t('tech.dashboard.title'),
      description: t('tech.dashboard.text'),
      delay: '0.6s',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: t('tech.goals.title'),
      description: t('tech.goals.text'),
      delay: '0.7s',
    }
  ];
  
  return (
    <AnimatedTransition>
      <div className="section-container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('tech.title')}</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t('tech.tracking.text')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm p-8 border border-border/50 animate-fade-in opacity-0"
              style={{ animationDelay: tech.delay }}
            >
              <div className="rounded-lg bg-primary/10 p-3 w-12 h-12 flex items-center justify-center text-primary mb-4">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
              <p className="text-foreground/70">{tech.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24">
          <div className="bg-secondary/30 rounded-xl p-8 md:p-12 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('tech.pipeline.title')}</h2>
            <p className="text-foreground/80 mb-8">
              {t('tech.pipeline.description')}
            </p>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold mb-2">{t('tech.phase1.title')}</h3>
                <p className="text-foreground/70 mb-2">
                  {t('tech.phase1.description')}
                </p>
                <p className="text-sm text-foreground/50">{t('tech.phase1.status')}</p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold mb-2">{t('tech.phase2.title')}</h3>
                <p className="text-foreground/70 mb-2">
                  {t('tech.phase2.description')}
                </p>
                <p className="text-sm text-foreground/50">{t('tech.phase2.status')}</p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary/40"></div>
                <h3 className="text-xl font-bold mb-2">{t('tech.phase3.title')}</h3>
                <p className="text-foreground/70 mb-2">
                  {t('tech.phase3.description')}
                </p>
                <p className="text-sm text-foreground/50">{t('tech.phase3.status')}</p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary/30"></div>
                <h3 className="text-xl font-bold mb-2">{t('tech.phase4.title')}</h3>
                <p className="text-foreground/70 mb-2">
                  {t('tech.phase4.description')}
                </p>
                <p className="text-sm text-foreground/50">{t('tech.phase4.status')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default Technology;
