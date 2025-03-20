
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Leaf, BarChart2, Recycle } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  animationDelay?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  className = "", 
  animationDelay = "0s" 
}) => {
  return (
    <div 
      className={`p-6 md:p-8 rounded-xl bg-card border border-border/50 animate-fade-in opacity-0 ${className}`} 
      style={{ animationDelay }}
    >
      <div className="rounded-lg p-3 w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

const ProjectOverview: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="section-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t('about.overview.text')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Leaf className="h-6 w-6" />}
            title={t('about.overview.title')}
            description={t('about.overview.text')}
            className="lg:col-span-1"
            animationDelay="0.3s"
          />
          
          <FeatureCard 
            icon={<BarChart2 className="h-6 w-6" />}
            title={t('about.importance.title')}
            description={t('about.importance.text')}
            className="lg:col-span-1"
            animationDelay="0.5s"
          />
          
          <FeatureCard 
            icon={<Recycle className="h-6 w-6" />}
            title={t('about.funding.title')}
            description={t('about.funding.text')}
            className="lg:col-span-1"
            animationDelay="0.7s"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
