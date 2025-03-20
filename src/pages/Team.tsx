
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
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Dr. Zeynep Kaya",
      role: "Lead Researcher",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Mehmet Öztürk",
      role: "Technology Lead",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Ayşe Demir",
      role: "Sustainability Expert",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Mustafa Can",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Elif Şahin",
      role: "Agricultural Engineer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Ozan Yıldız",
      role: "Software Developer",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Selin Arslan",
      role: "Environmental Analyst",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=200&auto=format&fit=crop",
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
