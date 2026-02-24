
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GitCommit, Server, Layers, Package, Cpu, Zap } from 'lucide-react';

export const Process: React.FC = () => {
  const { t } = useLanguage();
  const { pipeline, modules, heading, subheading, footerQuote } = t.process;

  return (
    <section className="w-full py-32 bg-weego-black text-weego-white border-b border-white/20 relative overflow-hidden">
      
      {/* Schematic Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col justify-start items-start mb-24 border-b border-white/20 pb-8">
             <h2 className="font-display text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-white">
                {heading}
             </h2>
             <span className="text-gray-600 font-display text-4xl md:text-6xl uppercase font-bold tracking-tight opacity-50 mt-2">
                {subheading}
             </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Execution Pipeline (Roadmap) - 5 Cols */}
            <div className="lg:col-span-5 relative">
                 <div className="flex items-center justify-between gap-3 mb-12 border-b-2 border-white pb-4">
                    <h3 className="font-mono text-xl uppercase tracking-widest font-bold flex items-center gap-2">
                        <GitCommit className="text-weego-lime" /> {pipeline.title}
                    </h3>
                </div>

                <div className="relative pl-8 border-l border-dashed border-gray-700 space-y-12">
                    {pipeline.steps.map((step, idx) => (
                        <div key={idx} className="relative group">
                            {/* Connector */}
                            <div className="absolute -left-[39px] top-1.5 w-5 h-5 bg-black border-2 border-white z-10 flex items-center justify-center group-hover:border-weego-lime transition-colors">
                                <div className="w-1.5 h-1.5 bg-white group-hover:bg-weego-lime transition-colors" />
                            </div>
                            
                            {/* Item */}
                            <div className="relative transition-all duration-300">
                                <h4 className="font-display text-2xl md:text-3xl uppercase font-bold mb-1 text-white group-hover:text-weego-lime transition-colors">
                                    <span className="font-mono text-xs text-gray-500 mr-3 align-middle">{idx + 1}.</span>
                                    {step.title}
                                </h4>
                                <p className="font-sans text-gray-400 text-sm leading-relaxed uppercase tracking-wider pl-8">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Technical Schematic (Modules) - 7 Cols */}
            <div className="lg:col-span-7">
                 <div className="flex items-center justify-between gap-3 mb-12 border-b-2 border-white pb-4">
                    <h3 className="font-mono text-xl uppercase tracking-widest font-bold flex items-center gap-2">
                        <Server className="text-weego-lime" /> {modules.title}
                    </h3>
                </div>

                {/* Window Container */}
                <div className="border border-white/20 bg-black/50 backdrop-blur-sm relative">
                     {/* Window Header */}
                     <div className="h-8 bg-gray-900 border-b border-white/10 flex items-center px-4 justify-between">
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                        </div>
                        <span className="font-mono text-[10px] text-gray-500">SYSTEM_COMPONENTS</span>
                    </div>

                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {modules.items.map((mod, idx) => (
                            <div key={idx} className="group border border-white/10 p-6 hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    {idx === 0 && <Layers className="text-weego-lime" size={20} />}
                                    {idx === 1 && <Cpu className="text-weego-lime" size={20} />}
                                    {idx === 2 && <Package className="text-weego-lime" size={20} />}
                                    {idx === 3 && <Zap className="text-weego-lime" size={20} />}
                                    <h4 className="font-display text-lg uppercase font-bold text-white group-hover:text-weego-lime transition-colors">
                                        {idx + 1}. {mod.title}
                                    </h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {mod.content.map((item, i) => (
                                        <span key={i} className="font-mono text-[10px] text-gray-400 border border-gray-800 px-2 py-1 uppercase group-hover:border-gray-600 transition-colors">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
        
        {/* Footer Quote */}
        <div className="mt-24 pt-12 border-t border-white/10 text-center">
             <p className="font-mono text-xs md:text-sm text-gray-400 uppercase tracking-[0.2em]">
                {footerQuote}
             </p>
        </div>

      </div>
    </section>
  );
};
