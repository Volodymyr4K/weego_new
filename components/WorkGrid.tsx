
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { WorkItem } from '../types';
import { X, ArrowUpRight, Crosshair, Layers, Lock } from 'lucide-react';

export const WorkGrid: React.FC = () => {
  const { t } = useLanguage();
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    if (selectedWork) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => setIsContentVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'unset';
      setIsContentVisible(false);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedWork]);

  return (
    <section id="work" className="w-full py-16 md:py-32 px-6 bg-weego-white text-weego-black relative">
      
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 md:grid-cols-6 opacity-[0.03] z-0">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-l border-black h-full" />
          ))}
      </div>

      <div className="max-w-[1700px] mx-auto relative z-10">
        <div className="flex justify-between items-end mb-20 md:mb-32 border-b border-black pb-6">
          <h2 className="font-display text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
            {t.works.heading.split(' ')[0]} <br/> {t.works.heading.split(' ').slice(1).join(' ')}
          </h2>
          <div className="hidden md:flex flex-col items-end">
              <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2">// INDEX: SYS_WORK_01</span>
              <span className="font-mono text-xl text-weego-black">{t.works.subheading}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-32 mb-24">
          {t.works.items.map((work, index) => (
            <div 
              key={work.id} 
              className={`group cursor-pointer relative ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
              onClick={() => setSelectedWork(work)}
            >
              {/* Image Container with Noise & Markers */}
              <div className="relative p-2 border border-transparent group-hover:border-black/5 transition-colors duration-500">
                  <div className="relative overflow-hidden aspect-[4/3] bg-weego-black">
                    {/* Noise Overlay applied to image */}
                    <div className="absolute inset-0 z-10 opacity-20 pointer-events-none mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" 
                         style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
                    />
                    
                    <img 
                      src={work.image} 
                      alt={work.client} 
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
                    />
                    
                    {/* Minimalist Hover Text */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                        <span className="font-mono text-xs text-weego-lime uppercase tracking-widest border border-weego-lime px-4 py-2 bg-black/80 backdrop-blur-sm shadow-[0_0_15px_rgba(212,255,0,0.3)]">
                            Access Data
                        </span>
                    </div>
                  </div>
              </div>
              
              <div className="flex justify-between items-start mt-6 pl-2">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-weego-lime bg-black px-1">0{index + 1}</span>
                      <h3 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter group-hover:text-weego-black/70 transition-colors">
                        {work.client}
                      </h3>
                  </div>
                  <p className="font-mono text-xs md:text-sm uppercase text-gray-500 tracking-wide pl-8 group-hover:text-black transition-colors">{work.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedWork && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-8">
            <div 
                className="absolute inset-0 bg-weego-black/95 backdrop-blur-md animate-in fade-in duration-300" 
                onClick={() => setSelectedWork(null)} 
            />
            
            <div className={`relative bg-weego-white w-full max-w-7xl h-full md:h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row transition-all duration-500 ease-out transform ${isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedWork(null)}
                    className="absolute top-4 right-4 z-50 p-3 bg-weego-black text-weego-lime hover:bg-weego-lime hover:text-weego-black transition-colors border border-weego-lime"
                    aria-label="Close Modal"
                >
                    <X size={24} />
                </button>

                {/* Left: Image Area */}
                <div className="w-full md:w-[55%] h-[40vh] md:h-full bg-black relative border-r border-black overflow-hidden group">
                    <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
                    <img 
                      src={selectedWork.image} 
                      alt={selectedWork.client} 
                      loading="eager"
                      className={`w-full h-full object-cover transition-all duration-1000 ease-out transform scale-110 ${isContentVisible ? 'scale-100 opacity-90' : 'opacity-0'}`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-20 opacity-50" />
                </div>

                {/* Right: Content Area */}
                <div className="w-full md:w-[45%] flex flex-col bg-weego-white h-full relative">
                    
                    <div className="bg-black text-weego-lime p-4 flex justify-between items-center font-mono text-xs uppercase tracking-widest shrink-0">
                        <span className="flex items-center gap-2"><Layers size={14}/> {selectedWork.id}</span>
                        <span>[READ_ONLY]</span>
                    </div>

                    <div className="overflow-y-auto custom-scrollbar flex-grow p-8 md:p-12">
                        <div className={`transition-all duration-500 delay-100 ${isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="font-mono text-xs uppercase border border-black px-2 py-1">
                                    {selectedWork.year}
                                </span>
                                <span className="font-mono text-xs uppercase text-gray-500 flex items-center gap-1">
                                    <Crosshair size={12}/> {selectedWork.category}
                                </span>
                            </div>
                            <h2 className="font-display text-5xl md:text-7xl uppercase font-black tracking-tighter leading-[0.8] mb-8">
                                {selectedWork.client}
                            </h2>
                        </div>

                        <div className={`transition-all duration-500 delay-200 ${isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} mb-16`}>
                            {/* Case Study Details */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                <div className="p-6 bg-gray-50 border border-gray-100">
                                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-4 block">// BEFORE</span>
                                    <p className="font-sans text-sm text-gray-600 leading-relaxed">{selectedWork.before}</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100">
                                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-4 block">// DONE</span>
                                    <ul className="space-y-2">
                                        {selectedWork.done?.map((item, i) => (
                                            <li key={i} className="font-sans text-sm text-gray-600 flex items-start gap-2">
                                                <span className="text-weego-lime">•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 bg-weego-lime/10 border border-weego-lime/30">
                                    <span className="font-mono text-[10px] text-weego-lime uppercase tracking-widest mb-4 block">// RESULT</span>
                                    <p className="font-display text-lg font-bold text-black leading-tight">{selectedWork.result}</p>
                                </div>
                            </div>

                            <p className="font-sans text-lg leading-relaxed text-gray-800 border-l-2 border-weego-lime pl-6 mb-12">
                                {selectedWork.description}
                            </p>
                        </div>

                        <div className={`grid grid-cols-2 gap-8 transition-all duration-500 delay-300 ${isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            <div>
                                <h4 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">
                                    // Scope
                                </h4>
                                <ul className="flex flex-col gap-2">
                                    {selectedWork.capabilities.map((cap) => (
                                        <li key={cap} className="font-mono text-xs font-bold uppercase text-black">
                                            {cap}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">
                                    // Tech
                                </h4>
                                <ul className="flex flex-col gap-2">
                                    {selectedWork.stack.map(tech => (
                                        <li key={tech} className="font-mono text-xs font-bold uppercase text-black">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`p-6 md:p-8 border-t border-black bg-white shrink-0 flex flex-col gap-3 transition-all duration-500 delay-500 ${isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        {selectedWork.projectUrl ? (
                            <a 
                                href={selectedWork.projectUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-3 font-display text-xl uppercase font-bold bg-weego-black text-weego-lime px-6 py-4 transition-all hover:bg-weego-lime hover:text-black hover:tracking-widest"
                            >
                                {t.works.modalLaunch} <ArrowUpRight size={20} />
                            </a>
                        ) : (
                            <button 
                                disabled
                                className="w-full flex items-center justify-center gap-3 font-display text-xl uppercase font-bold bg-gray-100 text-gray-400 px-6 py-4 cursor-not-allowed border-2 border-dashed border-gray-300"
                            >
                                [LINK_TERMINATED] <Lock size={20} />
                            </button>
                        )}
                        
                        {selectedWork.caseStudyUrl && (
                             <a 
                                href={selectedWork.caseStudyUrl} 
                                className="w-full text-center font-mono text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                             >
                                Read Data Logs
                             </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};
