
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedTransition from '@/components/AnimatedTransition';
import PartnersList from '@/components/PartnersList';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  delay: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, delay }) => {
  return (
    <div 
      className="animate-fade-in opacity-0 flex flex-col items-center text-center"
      style={{ animationDelay: delay }}
    >
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold mb-1">{name}</h3>
      <p className="text-foreground/70 text-sm">{role}</p>
    </div>
  );
};

const Team = () => {
  const { t } = useLanguage();
  
  const teamMembers = [
    {
      name: "Dr. Ahmet Yılmaz",
      role: "Project Director",
      image: "https://via.placeholder.com/128?text=AY",
    },
    {
      name: "Dr. Zeynep Kaya",
      role: "Lead Researcher",
      image: "https://via.placeholder.com/128?text=ZK",
    },
    {
      name: "Mehmet Öztürk",
      role: "Technology Lead",
      image: "https://via.placeholder.com/128?text=MO",
    },
    {
      name: "Ayşe Demir",
      role: "Sustainability Expert",
      image: "https://via.placeholder.com/128?text=AD",
    },
    {
      name: "Mustafa Can",
      role: "Data Scientist",
      image: "https://via.placeholder.com/128?text=MC",
    },
    {
      name: "Elif Şahin",
      role: "Agricultural Engineer",
      image: "https://via.placeholder.com/128?text=ES",
    },
    {
      name: "Ozan Yıldız",
      role: "Software Developer",
      image: "https://via.placeholder.com/128?text=OY",
    },
    {
      name: "Selin Arslan",
      role: "Environmental Analyst",
      image: "https://via.placeholder.com/128?text=SA",
    },
  ];
  
  return (
    <AnimatedTransition>
      <div className="section-container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('team.title')}</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t('team.contributors.text')}
          </p>
        </div>
        
        <div className="mb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            {t('team.contributors.title')}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                delay={`${0.1 + index * 0.1}s`}
              />
            ))}
          </div>
        </div>
        
        <PartnersList />
      </div>
    </AnimatedTransition>
  );
};

export default Team;
