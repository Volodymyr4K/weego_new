
import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useEstimator } from '../contexts/EstimatorContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, Send, Sparkles, Plus, Minus } from 'lucide-react';

export const Estimator: React.FC = () => {
  const { t } = useLanguage();
  const { preset, setPreset } = useEstimator();
  
  const [step, setStep] = useState<number>(0); // 0: Route, 1: Package, 2: Customization, -1: Recommend
  const [selections, setSelections] = useState<{
    routeId: string | null;
    packageId: string | null;
    optionIds: string[];
  }>({
    routeId: null,
    packageId: null,
    optionIds: [],
  });
  const [recommendAnswers, setRecommendAnswers] = useState<Record<string, string>>({});
  const [showAllOptions, setShowAllOptions] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle preset from Services
  useEffect(() => {
    if (preset) {
      setSelections({
        routeId: preset.route,
        packageId: preset.package || null,
        optionIds: preset.options || [],
      });
      if (preset.package) {
        setStep(2); // Jump to customization
      } else {
        setStep(1); // Jump to package selection
      }
      setPreset(null); // Clear preset after applying
    }
  }, [preset, setPreset]);

  const currentRoute = useMemo(() => 
    t.estimator.routes.find(r => r.id === selections.routeId),
    [t.estimator.routes, selections.routeId]
  );

  const currentPackage = useMemo(() => 
    currentRoute?.packages.find(p => p.id === selections.packageId),
    [currentRoute, selections.packageId]
  );

  const handleRouteSelect = (id: string) => {
    setSelections({ routeId: id, packageId: null, optionIds: [] });
    setStep(1);
  };

  const handlePackageSelect = (id: string) => {
    setSelections(prev => ({ ...prev, packageId: id }));
    setStep(2);
  };

  const toggleOption = (id: string) => {
    setSelections(prev => ({
      ...prev,
      optionIds: prev.optionIds.includes(id) 
        ? prev.optionIds.filter(o => o !== id) 
        : [...prev.optionIds, id]
    }));
  };

  const handleRecommend = (qId: string, value: string) => {
    const newAnswers = { ...recommendAnswers, [qId]: value };
    setRecommendAnswers(newAnswers);

    if (qId === 'q2') {
      // Logic for recommendation
      const q1 = newAnswers['q1'];
      const q2 = value;

      let recommendedRoute = 'turnkey';
      if (q1 === 'system' || q1 === 'integrations') {
        recommendedRoute = 'custom';
      }
      if (q2 === 'yes' && q1 !== 'system') {
        recommendedRoute = 'platform';
      }

      setSelections({ routeId: recommendedRoute, packageId: null, optionIds: [] });
      setStep(1);
    }
  };

  const calculation = useMemo(() => {
    if (!currentPackage) return null;

    let minPrice = currentPackage.priceRange[0];
    let maxPrice = currentPackage.priceRange[1];
    let minTimeline = currentPackage.timelineRange[0];
    let maxTimeline = currentPackage.timelineRange[1];

    const allOptions = [
      ...(currentRoute?.options.visible || []),
      ...(currentRoute?.options.more || [])
    ];

    selections.optionIds.forEach(optId => {
      const opt = allOptions.find(o => o.id === optId);
      if (opt) {
        minPrice += opt.priceDelta[0];
        maxPrice += opt.priceDelta[1];
        minTimeline += opt.timelineDelta[0];
        maxTimeline += opt.timelineDelta[1];
      }
    });

    return {
      minPrice,
      maxPrice,
      minTimeline,
      maxTimeline,
      unit: currentPackage.timelineUnit,
      deliverables: [
        ...currentPackage.deliverables,
        ...selections.optionIds
          .map(id => allOptions.find(o => o.id === id)?.deliverables || [])
          .flat()
      ]
    };
  }, [currentPackage, currentRoute, selections.optionIds]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Lead Data:', {
      selections,
      calculation,
      timestamp: new Date().toISOString()
    });
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormSubmitted(true);
  };

  const isPlatform = selections.routeId === 'platform';

  return (
    <section id="estimate" className="w-full py-24 md:py-32 bg-weego-black border-y border-white/10">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="mb-16">
          <span className="font-mono text-weego-lime text-xs uppercase tracking-[0.3em] mb-4 block">
            {t.estimator.subheading}
          </span>
          <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter text-weego-white">
            {t.estimator.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Stepper */}
          <div className="lg:col-span-7 bg-weego-gray/10 border border-white/5 p-8 md:p-12 relative overflow-hidden flex flex-col min-h-[600px]">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-gray-600">
                {step === -1 ? 'RECOMMEND' : `STEP_0${step + 1}/03`}
            </div>

            <AnimatePresence mode="wait">
              {step === -1 && (
                <motion.div 
                  key="step-recommend"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col h-full"
                >
                  <h3 className="font-display text-3xl md:text-4xl uppercase font-black text-white mb-10 tracking-tight">
                    {t.estimator.recommend.label}
                  </h3>
                  
                  {!recommendAnswers['q1'] ? (
                    <div className="space-y-4">
                      <p className="font-mono text-xs text-weego-lime uppercase mb-6">{t.estimator.recommend.questions.q1.text}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {t.estimator.recommend.questions.q1.options.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => handleRecommend('q1', opt.value)}
                            className="p-6 border border-white/10 text-left hover:border-weego-lime hover:bg-weego-lime/5 transition-all group"
                          >
                            <span className="font-display text-xl uppercase font-bold text-white group-hover:text-weego-lime transition-colors">
                              {opt.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="font-mono text-xs text-weego-lime uppercase mb-6">{t.estimator.recommend.questions.q2.text}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {t.estimator.recommend.questions.q2.options.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => handleRecommend('q2', opt.value)}
                            className="p-6 border border-white/10 text-left hover:border-weego-lime hover:bg-weego-lime/5 transition-all group"
                          >
                            <span className="font-display text-xl uppercase font-bold text-white group-hover:text-weego-lime transition-colors">
                              {opt.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <button 
                    onClick={() => { setStep(0); setRecommendAnswers({}); }}
                    className="mt-auto pt-12 flex items-center gap-2 font-mono text-[10px] text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
                  >
                    <ChevronLeft size={12} /> Back to selection
                  </button>
                </motion.div>
              )}

              {step === 0 && (
                <motion.div 
                  key="step-0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col h-full"
                >
                  <h3 className="font-display text-3xl md:text-4xl uppercase font-black text-white mb-10 tracking-tight">
                    Choose Route
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {t.estimator.routes.map((route) => (
                      <button
                        key={route.id}
                        onClick={() => handleRouteSelect(route.id)}
                        className={`group p-6 border text-left transition-all duration-300 ${
                          selections.routeId === route.id
                            ? 'border-weego-lime bg-weego-lime/10'
                            : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-display text-xl uppercase font-bold text-white group-hover:text-weego-lime transition-colors">
                            {route.label}
                          </span>
                          <ChevronRight size={18} className="text-gray-600 group-hover:text-weego-lime" />
                        </div>
                      </button>
                    ))}
                  </div>

                  <button 
                    onClick={() => setStep(-1)}
                    className="mt-12 p-6 border border-dashed border-weego-lime/30 flex items-center justify-center gap-3 group hover:border-weego-lime transition-all"
                  >
                    <Sparkles size={18} className="text-weego-lime" />
                    <span className="font-mono text-xs uppercase tracking-widest text-white group-hover:text-weego-lime transition-colors">
                      {t.estimator.recommend.label}
                    </span>
                  </button>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div 
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col h-full"
                >
                  <h3 className="font-display text-3xl md:text-4xl uppercase font-black text-white mb-10 tracking-tight">
                    Select Package
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {currentRoute?.packages.map((pkg) => (
                      <button
                        key={pkg.id}
                        onClick={() => handlePackageSelect(pkg.id)}
                        className={`group p-6 border text-left transition-all duration-300 ${
                          selections.packageId === pkg.id
                            ? 'border-weego-lime bg-weego-lime/10'
                            : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-display text-2xl uppercase font-black text-white group-hover:text-weego-lime transition-colors">
                            {pkg.label}
                          </span>
                          <span className="font-mono text-xs text-weego-lime">
                            €{pkg.priceRange[0]}+
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {pkg.deliverables.slice(0, 3).map((d, i) => (
                            <span key={i} className="font-mono text-[10px] text-gray-500 lowercase">
                              + {d}
                            </span>
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>
                  <button 
                    onClick={() => setStep(0)}
                    className="mt-auto pt-12 flex items-center gap-2 font-mono text-[10px] text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
                  >
                    <ChevronLeft size={12} /> Back
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col h-full"
                >
                  <h3 className="font-display text-3xl md:text-4xl uppercase font-black text-white mb-10 tracking-tight">
                    Customize
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentRoute?.options.visible.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => toggleOption(opt.id)}
                        className={`group p-4 border text-left transition-all duration-300 flex items-center justify-between ${
                          selections.optionIds.includes(opt.id)
                            ? 'border-weego-lime bg-weego-lime/10'
                            : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className={`font-mono text-[10px] uppercase tracking-widest ${
                            selections.optionIds.includes(opt.id) ? 'text-weego-lime' : 'text-gray-400'
                          }`}>
                            {opt.label}
                          </span>
                          <span className="font-mono text-[9px] text-gray-600">
                            +€{opt.priceDelta[0]}
                          </span>
                        </div>
                        <div className={`w-5 h-5 border flex items-center justify-center transition-all ${
                          selections.optionIds.includes(opt.id) ? 'border-weego-lime bg-weego-lime' : 'border-white/20'
                        }`}>
                          {selections.optionIds.includes(opt.id) && <Check size={12} className="text-black" />}
                        </div>
                      </button>
                    ))}

                    {showAllOptions && currentRoute?.options.more.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => toggleOption(opt.id)}
                        className={`group p-4 border text-left transition-all duration-300 flex items-center justify-between ${
                          selections.optionIds.includes(opt.id)
                            ? 'border-weego-lime bg-weego-lime/10'
                            : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className={`font-mono text-[10px] uppercase tracking-widest ${
                            selections.optionIds.includes(opt.id) ? 'text-weego-lime' : 'text-gray-400'
                          }`}>
                            {opt.label}
                          </span>
                          <span className="font-mono text-[9px] text-gray-600">
                            +€{opt.priceDelta[0]}
                          </span>
                        </div>
                        <div className={`w-5 h-5 border flex items-center justify-center transition-all ${
                          selections.optionIds.includes(opt.id) ? 'border-weego-lime bg-weego-lime' : 'border-white/20'
                        }`}>
                          {selections.optionIds.includes(opt.id) && <Check size={12} className="text-black" />}
                        </div>
                      </button>
                    ))}
                  </div>

                  {!showAllOptions && currentRoute?.options.more && currentRoute.options.more.length > 0 && (
                    <button 
                      onClick={() => setShowAllOptions(true)}
                      className="mt-6 font-mono text-[10px] text-weego-lime hover:underline uppercase tracking-widest"
                    >
                      {t.estimator.result.moreOptions}
                    </button>
                  )}
                  
                  <button 
                    onClick={() => setStep(1)}
                    className="mt-auto pt-12 flex items-center gap-2 font-mono text-[10px] text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
                  >
                    <ChevronLeft size={12} /> Back
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Summary & Form */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Result Card */}
            <div className="bg-weego-lime p-8 md:p-10 text-black">
              <div className="flex items-center gap-2 mb-8 opacity-60">
                <Sparkles size={16} />
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Estimated_Output</span>
              </div>
              
              {calculation ? (
                <>
                  <div className="grid grid-cols-2 gap-8 mb-10">
                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-widest mb-2 opacity-60">
                        {isPlatform ? t.estimator.result.setupLabel : t.estimator.result.priceLabel}
                      </span>
                      <span className="font-display text-4xl font-black">
                        €{calculation.minPrice}-{calculation.maxPrice}
                      </span>
                    </div>
                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-widest mb-2 opacity-60">
                        {t.estimator.result.timelineLabel}
                      </span>
                      <span className="font-display text-4xl font-black">
                        {calculation.minTimeline}-{calculation.maxTimeline}{calculation.unit === 'weeks' ? 'w' : 'd'}
                      </span>
                    </div>
                  </div>

                  {isPlatform && (
                    <div className="mb-10 pt-6 border-t border-black/10">
                      <span className="block font-mono text-[10px] uppercase tracking-widest mb-2 opacity-60">
                        {t.estimator.result.monthlyLabel}
                      </span>
                      <span className="font-display text-4xl font-black">€100/mo</span>
                    </div>
                  )}

                  <div className="mb-10">
                    <span className="block font-mono text-[10px] uppercase tracking-widest mb-4 opacity-60">
                      {t.estimator.result.deliverablesLabel}
                    </span>
                    <div className="space-y-2">
                      {calculation.deliverables.map((d, i) => (
                        <div key={i} className="flex items-start gap-2 font-sans text-xs font-bold">
                          <Check size={12} className="mt-0.5 shrink-0" />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="py-12 text-center opacity-40">
                  <span className="font-mono text-xs uppercase tracking-widest">Awaiting Selections</span>
                </div>
              )}

              <p className="font-sans text-[10px] leading-relaxed opacity-60 mt-auto">
                {t.estimator.result.disclaimer}
              </p>
            </div>

            {/* Lead Form */}
            <div className="bg-weego-gray/20 border border-white/5 p-8 md:p-10">
              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-weego-lime rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={32} className="text-black" />
                  </div>
                  <p className="font-display text-xl uppercase font-black text-white">
                    {t.estimator.form.success}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-2">{t.estimator.form.name}</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-white/20 py-3 font-sans text-white focus:outline-none focus:border-weego-lime transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-2">{t.estimator.form.contact}</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-white/20 py-3 font-sans text-white focus:outline-none focus:border-weego-lime transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-2">{t.estimator.form.comment}</label>
                    <textarea 
                      rows={2}
                      className="w-full bg-transparent border-b border-white/20 py-3 font-sans text-white focus:outline-none focus:border-weego-lime transition-colors resize-none"
                    />
                  </div>
                  
                  <button 
                    disabled={isSubmitting || !calculation}
                    type="submit"
                    className="w-full py-5 bg-white text-black font-display font-black uppercase tracking-widest text-sm hover:bg-weego-lime transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? '...' : t.estimator.form.submit}
                    {!isSubmitting && <Send size={16} />}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
