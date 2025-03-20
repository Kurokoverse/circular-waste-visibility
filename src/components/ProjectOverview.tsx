
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Recycle, Leaf, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  className 
}) => {
  return (
    <div className={cn(
      "glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-md",
      className
    )}>
      <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

const ProjectOverview: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t('about.title')}
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          {t('about.overview.text')}
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<Recycle className="h-6 w-6" />}
          title={t('about.overview.title')}
          description={t('about.overview.text')}
          className="animate-slide-in opacity-0"
          style={{ animationDelay: '0.1s' }}
        />
        
        <FeatureCard 
          icon={<Leaf className="h-6 w-6" />}
          title={t('about.importance.title')}
          description={t('about.importance.text')}
          className="animate-slide-in opacity-0"
          style={{ animationDelay: '0.2s' }}
        />
        
        <FeatureCard 
          icon={<FileText className="h-6 w-6" />}
          title={t('about.funding.title')}
          description={t('about.funding.text')}
          className="animate-slide-in opacity-0"
          style={{ animationDelay: '0.3s' }}
        />
      </div>
    </section>
  );
};

export default ProjectOverview;
