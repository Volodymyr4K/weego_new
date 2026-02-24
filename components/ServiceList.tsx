
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useEstimator } from '../contexts/EstimatorContext';
import { ArrowUpRight, Clock, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ServiceList: React.FC = () => {
  const { t } = useLanguage();
  const { openEstimator } = useEstimator();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = t.services.categories;
  const items = t.services.items;

  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter(item => item.category === activeCategory);

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

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 font-mono text-xs uppercase tracking-widest border transition-all ${
              activeCategory === 'all' 
                ? 'bg-weego-lime text-black border-weego-lime' 
                : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30'
            }`}
          >
            All
          </button>
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-2 font-mono text-xs uppercase tracking-widest border transition-all ${
                activeCategory === key 
                  ? 'bg-weego-lime text-black border-weego-lime' 
                  : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((service) => (
              <motion.div 
                layout
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-weego-gray/10 border border-white/5 p-8 hover:bg-weego-gray/20 transition-all duration-500 flex flex-col h-full relative"
              >
                <div className="mb-8">
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-mono text-weego-lime text-[10px] tracking-widest uppercase opacity-60">
                        {categories[service.category as keyof typeof categories]}
                      </span>
                      <span className="font-mono text-gray-600 text-[10px] tracking-widest">
                        // {service.id}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl uppercase font-black tracking-tighter leading-tight mb-4 group-hover:text-weego-lime transition-colors">
                        {service.title}
                    </h3>
                    <p className="font-sans text-gray-400 text-sm leading-relaxed mb-6">
                        {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.included.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 font-mono text-[10px] text-weego-white/80">
                          <span className="text-weego-lime">+</span>
                          {item}
                        </div>
                      ))}
                    </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div>
                        <span className="block font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-1">
                          <Clock size={10} className="inline mr-1" /> Timeline
                        </span>
                        <span className="font-mono text-xs text-white">{service.timeline}</span>
                      </div>
                      <div>
                        <span className="block font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-1">
                          <Tag size={10} className="inline mr-1" /> Starting
                        </span>
                        <span className="font-mono text-xs text-weego-lime">{service.price}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => openEstimator(service.preset)}
                      className="w-full py-4 bg-white/5 border border-white/10 text-white font-display font-black uppercase tracking-widest text-xs hover:bg-weego-lime hover:text-black hover:border-weego-lime transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      {t.services.cta}
                      <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
