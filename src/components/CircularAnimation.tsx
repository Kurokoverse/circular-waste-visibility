
import React, { useRef, useEffect } from 'react';

interface CircularAnimationProps {
  className?: string;
}

const CircularAnimation: React.FC<CircularAnimationProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match display size
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      return { width: rect.width, height: rect.height };
    };
    
    const { width, height } = updateCanvasSize();
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Create particles
    const particles: Particle[] = [];
    const particleCount = 100;
    
    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      speed: number;
      angle: number;
      distance: number;
      lastPos: { x: number; y: number };
      opacity: number;
      
      constructor() {
        this.distance = Math.random() * (width / 2 - 50) + 50;
        this.angle = Math.random() * Math.PI * 2;
        this.x = centerX + Math.cos(this.angle) * this.distance;
        this.y = centerY + Math.sin(this.angle) * this.distance;
        this.lastPos = { x: this.x, y: this.y };
        this.radius = Math.random() * 1.5 + 0.5;
        this.speed = (Math.random() * 0.002 + 0.001) * (Math.random() > 0.5 ? 1 : -1);
        this.opacity = Math.random() * 0.5 + 0.3;
        
        // Green color palette
        const colors = [
          'rgba(65, 162, 64, 0.7)',
          'rgba(47, 131, 48, 0.7)',
          'rgba(39, 104, 41, 0.7)',
          'rgba(35, 83, 35, 0.7)'
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.lastPos.x = this.x;
        this.lastPos.y = this.y;
        
        this.angle += this.speed;
        this.x = centerX + Math.cos(this.angle) * this.distance;
        this.y = centerY + Math.sin(this.angle) * this.distance;
      }
      
      draw() {
        if (!ctx) return;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace(/[\d.]+\)$/g, `${this.opacity})`);
        ctx.fill();
        
        // Draw trail
        ctx.beginPath();
        ctx.moveTo(this.lastPos.x, this.lastPos.y);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = this.color.replace(/[\d.]+\)$/g, `${this.opacity * 0.5})`);
        ctx.lineWidth = this.radius * 0.8;
        ctx.stroke();
      }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Draw connecting lines
    const drawConnections = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        particle.update();
        particle.draw();
        
        for (let j = i + 1; j < particles.length; j++) {
          const particle2 = particles[j];
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 80) {
            const opacity = 1 - (distance / 80);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = `rgba(65, 162, 64, ${opacity * 0.2})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    };
    
    let animationFrameId: number;
    
    const animate = () => {
      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    const resizeHandler = () => {
      const { width, height } = updateCanvasSize();
      const centerX = width / 2;
      const centerY = height / 2;
      
      // Update particle positions
      particles.forEach(particle => {
        particle.x = centerX + Math.cos(particle.angle) * particle.distance;
        particle.y = centerY + Math.sin(particle.angle) * particle.distance;
        particle.lastPos = { x: particle.x, y: particle.y };
      });
    };
    
    window.addEventListener('resize', resizeHandler);
    
    return () => {
      window.removeEventListener('resize', resizeHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default CircularAnimation;
