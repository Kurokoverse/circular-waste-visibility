
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Cpu, BarChart, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const TechCard: React.FC<TechCardProps> = ({ 
  icon, 
  title, 
  description,
  delay
}) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-sm p-6 border border-border/50 animate-scale-in opacity-0"
      style={{ animationDelay: delay }}
    >
      <div className="rounded-lg bg-primary/10 p-3 w-12 h-12 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

const TechnologySection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('tech.title')}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t('tech.tracking.text')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <TechCard 
            icon={<Cpu className="h-6 w-6" />}
            title={t('tech.tracking.title')}
            description={t('tech.tracking.text')}
            delay="0.1s"
          />
          
          <TechCard 
            icon={<BarChart className="h-6 w-6" />}
            title={t('tech.circular.title')}
            description={t('tech.circular.text')}
            delay="0.2s"
          />
          
          <TechCard 
            icon={<Globe className="h-6 w-6" />}
            title={t('tech.goals.title')}
            description={t('tech.goals.text')}
            delay="0.3s"
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
