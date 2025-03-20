
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const PartnersList: React.FC = () => {
  const { t } = useLanguage();
  
  const partners = [
    {
      name: "TÜBİTAK",
      logo: "https://www.tubitak.gov.tr/sites/default/files/tubitak_logo.png",
      description: "The Scientific and Technological Research Council of Turkey"
    },
    {
      name: "Onursal Tarım",
      logo: "https://www.onursaltarim.com.tr/wp-content/uploads/2023/01/onursal-tarim-logo.png",
      description: "Leading agricultural company in Turkey"
    },
    {
      name: "Partner University",
      logo: "https://via.placeholder.com/200x80?text=University",
      description: "Academic research partner"
    },
    {
      name: "Technology Partner",
      logo: "https://via.placeholder.com/200x80?text=Tech+Partner",
      description: "Technology solutions provider"
    }
  ];
  
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('team.partners.title')}
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            {t('team.partners.text')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-border/30 flex flex-col items-center text-center"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-sm font-medium mb-1">{partner.name}</h3>
              <p className="text-xs text-foreground/60">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersList;
