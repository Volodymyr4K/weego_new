
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useEstimator } from '../contexts/EstimatorContext';
import { ArrowUpRight, Clock, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ServiceList: React.FC = () => {
  const { t } = useLanguage();
  const { openEstimator } = useEstimator();
  const [showAllCapabilities, setShowAllCapabilities] = useState(false);

  const routes = t.services.routes;
  const capabilities = t.services.capabilities;
  const industries = t.services.industries;

  return (
    <section 
        id="services" 
        className="w-full py-24 md:py-40 bg-weego-black text-weego-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-weego-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="px-6 max-w-[1800px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row mb-12 items-end justify-between gap-6 border-b border-weego-gray pb-8">
          <div className="flex flex-col md:flex-row items-end gap-6">
            <h2 className="font-display text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.8]">
              {t.services.heading}
            </h2>
            <div className="flex flex-col mb-2">
               <span className="font-mono text-xs uppercase text-weego-lime tracking-widest mb-1">// INDEX</span>
               <span className="text-weego-white font-mono text-sm tracking-widest">{t.services.subheading}</span>
            </div>
          </div>
        </div>

        {/* 3 Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {routes.map((route) => (
            <motion.div 
              key={route.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-weego-gray/10 border border-white/5 p-10 hover:bg-weego-gray/20 transition-all duration-500 flex flex-col h-full relative"
            >
              <div className="mb-8">
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-weego-lime text-[10px] tracking-widest uppercase opacity-60">
                      Route_0{routes.indexOf(route) + 1}
                    </span>
                    {route.priceBadge && (
                      <span className="font-mono text-weego-lime text-[10px] tracking-widest border border-weego-lime/30 px-2 py-1">
                        {route.priceBadge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-4xl uppercase font-black tracking-tighter leading-tight mb-4 group-hover:text-weego-lime transition-colors">
                      {route.title}
                  </h3>
                  <p className="font-sans text-gray-400 text-sm leading-relaxed mb-8">
                      {route.oneLiner}
                  </p>

                  <div className="space-y-3 mb-8">
                    <span className="block font-mono text-[9px] text-gray-600 uppercase tracking-widest mb-2">Best for:</span>
                    {route.bestFor.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 font-mono text-[11px] text-weego-white/80 leading-tight">
                        <span className="text-weego-lime shrink-0">→</span>
                        {point}
                      </div>
                    ))}
                  </div>
              </div>

              <div className="mt-auto pt-8 border-t border-white/5">
                  <button 
                    onClick={() => openEstimator(route.preset)}
                    className="w-full py-5 bg-white/5 border border-white/10 text-white font-display font-black uppercase tracking-widest text-xs hover:bg-weego-lime hover:text-black hover:border-weego-lime transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    {route.cta}
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capabilities & Industries */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Capabilities */}
          <div className="bg-weego-gray/5 border border-white/5 p-10">
            <h4 className="font-display text-2xl uppercase font-black text-white mb-8 tracking-tight">
              {capabilities.heading}
            </h4>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {(showAllCapabilities ? capabilities.items : capabilities.items.slice(0, 8)).map((cap) => (
                <div key={cap.id} className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 bg-weego-lime/30 group-hover:bg-weego-lime transition-colors" />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                    {cap.label}
                  </span>
                </div>
              ))}
            </div>
            {!showAllCapabilities && capabilities.items.length > 8 && (
              <button 
                onClick={() => setShowAllCapabilities(true)}
                className="mt-10 font-mono text-[10px] text-weego-lime hover:underline uppercase tracking-widest"
              >
                {capabilities.showAllLabel}
              </button>
            )}
          </div>

          {/* Industries */}
          <div className="bg-weego-gray/5 border border-white/5 p-10">
            <h4 className="font-display text-2xl uppercase font-black text-white mb-4 tracking-tight">
              {industries.heading}
            </h4>
            <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-8">
              {industries.experienceLabel}
            </p>
            <div className="flex flex-wrap gap-3">
              {industries.items.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => openEstimator(ind.preset)}
                  className="px-6 py-3 bg-white/5 border border-white/10 text-white font-mono text-[10px] uppercase tracking-widest hover:bg-weego-lime hover:text-black hover:border-weego-lime transition-all"
                >
                  {ind.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
