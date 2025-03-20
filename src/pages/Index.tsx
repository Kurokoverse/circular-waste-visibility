
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProjectOverview from '@/components/ProjectOverview';
import TechnologySection from '@/components/TechnologySection';
import PartnersList from '@/components/PartnersList';
import ContactSection from '@/components/ContactSection';
import AnimatedTransition from '@/components/AnimatedTransition';

const Index = () => {
  return (
    <AnimatedTransition>
      <HeroSection />
      <ProjectOverview />
      <TechnologySection />
      <PartnersList />
      <ContactSection />
    </AnimatedTransition>
  );
};

export default Index;
