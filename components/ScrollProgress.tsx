import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 right-0 h-full w-12 z-40 hidden md:flex flex-col items-center justify-between py-6 pointer-events-none mix-blend-difference">
        {/* Top Marker */}
        <div className="w-[1px] h-4 bg-weego-lime" />
        
        {/* Track */}
        <div className="flex-1 w-[1px] bg-weego-gray/30 my-4 relative">
             {/* Progress Bar */}
             <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] bg-weego-lime transition-all duration-100 ease-out"
                style={{ height: `${progress * 100}%` }}
             />
             
             {/* Decorative ticks */}
             {[0, 25, 50, 75, 100].map(tick => (
                 <div 
                    key={tick} 
                    className="absolute left-1/2 -translate-x-1/2 w-2 h-[1px] bg-gray-500"
                    style={{ top: `${tick}%` }}
                 />
             ))}
        </div>

        {/* Bottom Marker */}
        <span className="font-mono text-[10px] text-weego-lime -rotate-90 w-20 whitespace-nowrap mb-8">
            SYS_LOAD: {(progress * 100).toFixed(0)}%
        </span>
    </div>
  );
};