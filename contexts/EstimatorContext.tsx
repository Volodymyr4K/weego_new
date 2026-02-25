
import React, { createContext, useContext, useState, useCallback } from 'react';

interface EstimatorPreset {
  route: string;
  package?: string;
  options?: string[];
}

interface EstimatorContextType {
  preset: EstimatorPreset | null;
  setPreset: (preset: EstimatorPreset | null) => void;
  openEstimator: (preset?: EstimatorPreset) => void;
}

const EstimatorContext = createContext<EstimatorContextType | undefined>(undefined);

export const EstimatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preset, setPreset] = useState<EstimatorPreset | null>(null);

  const openEstimator = useCallback((newPreset?: EstimatorPreset) => {
    if (newPreset) {
      setPreset(newPreset);
    }
    const element = document.getElementById('estimate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <EstimatorContext.Provider value={{ preset, setPreset, openEstimator }}>
      {children}
    </EstimatorContext.Provider>
  );
};

export const useEstimator = () => {
  const context = useContext(EstimatorContext);
  if (context === undefined) {
    throw new Error('useEstimator must be used within an EstimatorProvider');
  }
  return context;
};
