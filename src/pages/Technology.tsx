
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedTransition from '@/components/AnimatedTransition';
import { Cpu, BarChart, Globe, Recycle, Database, ChartLine } from 'lucide-react';

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
      title: "Blockchain Technology",
      description: "Our solution uses blockchain to create an immutable record of waste collection, processing, and recycling activities.",
      delay: '0.3s',
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      title: t('tech.circular.title'),
      description: t('tech.circular.text'),
      delay: '0.4s',
    },
    {
      icon: <ChartLine className="h-6 w-6" />,
      title: "Predictive Analytics",
      description: "Machine learning algorithms help predict waste generation patterns and optimize collection routes.",
      delay: '0.5s',
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Real-time Dashboard",
      description: "Our integrated dashboard provides stakeholders with actionable insights about waste management performance.",
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Innovation Pipeline</h2>
            <p className="text-foreground/80 mb-8">
              Our continuous development process ensures that we stay at the cutting edge of waste management technology.
            </p>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold mb-2">Phase 1: Data Collection</h3>
                <p className="text-foreground/70 mb-2">
                  IoT sensors and mobile apps to collect waste data from retail sources.
                </p>
                <p className="text-sm text-foreground/50">Completed: Q2 2023</p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold mb-2">Phase 2: Traceability Platform</h3>
                <p className="text-foreground/70 mb-2">
                  Development of blockchain-based traceability platform for waste tracking.
                </p>
                <p className="text-sm text-foreground/50">In Progress: Q3 2024</p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary/40"></div>
                <h3 className="text-xl font-bold mb-2">Phase 3: Circular Economy Integration</h3>
                <p className="text-foreground/70 mb-2">
                  Connect waste producers with recyclers and composters to close the loop.
                </p>
                <p className="text-sm text-foreground/50">Planned: Q1 2025</p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary/30"></div>
                <h3 className="text-xl font-bold mb-2">Phase 4: Advanced Analytics</h3>
                <p className="text-foreground/70 mb-2">
                  Implementation of machine learning for waste reduction recommendations.
                </p>
                <p className="text-sm text-foreground/50">Planned: Q3 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default Technology;
