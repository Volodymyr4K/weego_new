
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowDown, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [time, setTime] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Time update
    const updateTime = () => setTime(new Date().toLocaleTimeString('en-GB', { hour12: false }));
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Parallax Logic - Only run on devices with hover capability (desktop) to save battery on mobile
    const handleMouseMove = (e: MouseEvent) => {
        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            const x = (e.clientX / window.innerWidth - 0.5) * 20; // -10 to 10
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            setMousePos({ x, y });
        }
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
        clearInterval(interval);
        window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[85svh] flex flex-col justify-end pb-12 px-6 border-b border-white/10 overflow-hidden bg-weego-black perspective-[1000px]">
      
      {/* 3D Moving Grid Background */}
      <div 
        className="absolute inset-[-10%] opacity-20 pointer-events-none transition-transform duration-100 ease-out will-change-transform" 
        style={{ 
            transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px) rotateX(${mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)` 
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      {/* Top HUD */}
      <div className="absolute top-24 left-6 right-6 flex justify-between items-start font-mono text-[10px] md:text-xs text-gray-500 uppercase tracking-widest pointer-events-none z-20">
          <div className="flex flex-col gap-1">
              <span className="flex items-center gap-2"><Globe size={12}/> 49.8397° N / 24.0297° E</span>
              <span>GRID_REF: A-712</span>
          </div>
          <div className="flex flex-col items-end gap-1">
              <span className="flex items-center gap-2 text-weego-lime">SYS_ONLINE <div className="w-1.5 h-1.5 bg-weego-lime rounded-full animate-pulse"/></span>
              <span>{time} UTC+2</span>
          </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[95vw] w-full mx-auto relative z-10">
        
        {/* Massive Title with Glitch Hover Effect */}
        <h1 className="group font-display font-black text-[10vw] md:text-[8vw] leading-[0.85] tracking-tighter uppercase text-weego-white mix-blend-difference cursor-default transition-transform duration-300" style={{ transform: `translateX(${mousePos.x * 0.5}px)` }}>
          <span className="block transition-transform duration-500 hover:text-transparent hover:text-stroke-white relative" style={{ WebkitTextStroke: '2px white' }}>
             <span className="absolute inset-0 text-weego-lime opacity-0 hover:opacity-100 hover:-translate-x-2 hover:translate-y-1 transition-all duration-100 mix-blend-hard-light" style={{ WebkitTextStroke: '0px' }}>{t.hero.title1}</span>
             {t.hero.title1}
          </span>
          
          <span className="text-weego-lime block transition-transform duration-500 relative">
             <span className="absolute inset-0 text-white opacity-0 hover:opacity-100 hover:translate-x-2 hover:-translate-y-1 transition-all duration-100 mix-blend-exclusion">{t.hero.title2}</span>
             {t.hero.title2}
          </span>
        </h1>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-end gap-8 border-t border-white/20 pt-8 backdrop-blur-sm">
          <div className="max-w-xl">
             <p className="font-sans text-gray-400 text-lg md:text-xl uppercase tracking-tight leading-snug mb-8">
                {t.hero.subtitle}
             </p>
             <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                    <Link to="/brief" className="px-8 py-4 bg-weego-lime text-black font-display font-black uppercase tracking-widest text-sm hover:bg-white transition-all hover:scale-105 active:scale-95">
                        {t.hero.ctaPrimary}
                    </Link>
                    <a href="#work" className="px-8 py-4 border border-white/30 text-white font-display font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
                        {t.hero.ctaSecondary}
                    </a>
                </div>
                <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em]">
                    {t.hero.microLine}
                </p>
             </div>
          </div>
          
          <div className="hidden md:block">
            <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center animate-bounce">
                <ArrowDown size={16} className="text-weego-lime" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
