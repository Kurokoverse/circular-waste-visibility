
import React, { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface AnimatedTransitionProps {
  children: ReactNode;
  className?: string;
}

const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({ 
  children, 
  className 
}) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  
  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fadeOut');
      
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
      }, 300); // Match this with the CSS transition duration
      
      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);
  
  return (
    <div
      className={cn(
        className,
        transitionStage === 'fadeIn' ? 'animate-fade-in' : 'animate-fade-out',
        "min-h-screen pt-16 md:pt-20"
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedTransition;
