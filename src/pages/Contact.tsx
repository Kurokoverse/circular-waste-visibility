
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedTransition from '@/components/AnimatedTransition';
import ContactSection from '@/components/ContactSection';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <AnimatedTransition>
      <div className="section-container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass-panel rounded-xl p-6 text-center animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
            <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center text-primary mx-auto mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Our Office</h3>
            <p className="text-foreground/70">
              123 Green Agriculture Street<br />
              Antalya, Turkey 07100
            </p>
          </div>
          
          <div className="glass-panel rounded-xl p-6 text-center animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center text-primary mx-auto mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Email Us</h3>
            <p className="text-foreground/70">
              info@project-waste.com<br />
              support@project-waste.com
            </p>
          </div>
          
          <div className="glass-panel rounded-xl p-6 text-center animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center text-primary mx-auto mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Call Us</h3>
            <p className="text-foreground/70">
              +90 (242) 123 4567<br />
              +90 (532) 987 6543
            </p>
          </div>
        </div>
        
        <ContactSection />
      </div>
    </AnimatedTransition>
  );
};

export default Contact;
