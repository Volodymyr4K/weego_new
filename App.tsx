
import React, { Suspense, lazy } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { EstimatorProvider } from './contexts/EstimatorContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';

// Lazy load heavy components for better LCP/TBT performance
const ServiceList = lazy(() => import('./components/ServiceList').then(module => ({ default: module.ServiceList })));
const TrustBar = lazy(() => import('./components/TrustBar').then(module => ({ default: module.TrustBar })));
const Estimator = lazy(() => import('./components/Estimator').then(module => ({ default: module.Estimator })));
const FAQ = lazy(() => import('./components/FAQ').then(module => ({ default: module.FAQ })));
const FinalCTA = lazy(() => import('./components/FinalCTA').then(module => ({ default: module.FinalCTA })));
const Process = lazy(() => import('./components/Process').then(module => ({ default: module.Process })));
const WorkGrid = lazy(() => import('./components/WorkGrid').then(module => ({ default: module.WorkGrid })));

const SectionLoader = () => (
    <div className="w-full h-96 flex items-center justify-center bg-weego-black">
        <div className="w-12 h-12 border-2 border-weego-gray border-t-weego-lime rounded-full animate-spin" />
    </div>
);

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <EstimatorProvider>
        <div className="bg-weego-black min-h-screen selection:bg-weego-lime selection:text-weego-black">
          <div className="opacity-100 transition-opacity duration-1000">
              <CustomCursor />
              <ScrollProgress />
              <Header />
              <main>
                  <Hero />
                  <Suspense fallback={<SectionLoader />}>
                      <TrustBar />
                      <ServiceList />
                      <Estimator />
                      <WorkGrid />
                      <Process />
                      <FAQ />
                      <FinalCTA />
                  </Suspense>
              </main>
              <Footer />
          </div>
        </div>
      </EstimatorProvider>
    </LanguageProvider>
  );
};

export default App;
