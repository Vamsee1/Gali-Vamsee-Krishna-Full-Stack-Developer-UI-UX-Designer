
import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  threshold?: number;
  className?: string;
}

const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  threshold = 0.1, 
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold, hasLoaded]);

  return (
    <div ref={sectionRef} className={className}>
      {isVisible ? (
        <div className="animate-slide-up">
          {children}
        </div>
      ) : (
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="animate-pulse">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazySection;
