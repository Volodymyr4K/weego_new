
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const toggleLang = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-500 ${
            scrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        {/* Logo */}
        <div className="flex flex-col gap-1">
             <a 
              href="#" 
              className="font-display font-black text-2xl md:text-3xl tracking-tighter text-white hover:text-weego-lime transition-colors duration-300"
            >
              WEEGO
            </a>
            {/* Version Tag - Hides on scroll to clean up UI */}
            <div className={`flex items-center gap-2 font-mono text-[9px] text-gray-500 tracking-widest uppercase transition-opacity duration-300 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                <span>v4.3.0</span>
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                <span>REC</span>
            </div>
        </div>

        {/* Desktop Nav & Lang */}
        <div className="hidden md:flex items-center gap-12">
          <nav className="flex gap-8">
            {t.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 font-mono text-xs font-bold uppercase tracking-widest hover:text-weego-lime transition-colors relative group"
              >
                <span className="absolute -left-3 opacity-0 group-hover:opacity-100 transition-opacity text-weego-lime">/</span>
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="flex gap-4 font-mono text-xs border-l border-white/20 pl-8">
            {(['en', 'ua', 'it', 'de'] as Language[]).map((lang) => (
                <button 
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`uppercase transition-colors px-2 py-1 ${
                        language === lang 
                        ? 'bg-weego-lime text-black font-bold' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                >
                    {lang}
                </button>
            ))}
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white hover:text-weego-lime transition-colors relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-weego-black z-40 flex flex-col justify-center px-6 transition-all duration-500 cubic-bezier(0.87, 0, 0.13, 1) ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col gap-2">
          {t.nav.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-display text-6xl font-black uppercase text-transparent text-stroke-white hover:text-weego-lime hover:text-stroke-0 transition-all duration-300"
              style={{ WebkitTextStroke: '1px white' }}
            >
              {item.label}
            </a>
          ))}
        </div>
        
        {/* Mobile Lang Switcher */}
        <div className="mt-12 flex gap-4 font-mono text-sm">
            {(['en', 'ua', 'it', 'de'] as Language[]).map((lang) => (
                <button 
                    key={lang}
                    onClick={() => toggleLang(lang)}
                    className={`uppercase px-4 py-2 border ${language === lang ? 'bg-weego-lime border-weego-lime text-black' : 'border-white/30 text-white'}`}
                >
                    {lang}
                </button>
            ))}
        </div>

        <div className="mt-auto pb-12 border-t border-white/10 pt-8">
            <p className="font-mono text-gray-500 text-xs mb-4 tracking-widest">ESTABLISHED 2024</p>
            <a href="mailto:munister@outlook.com" className="font-display text-xl text-white">munister@outlook.com</a>
        </div>
      </div>
    </>
  );
};
