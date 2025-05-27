import React, { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

interface LazyComponentProps {
  children: React.ReactNode;
}

const LoadingFallback = () => (
  <div className="flex items-center justify-center p-4">
    <Loader2 className="w-8 h-8 text-[#213555] animate-spin" aria-hidden="true" />
  </div>
);

const LazyComponent: React.FC<LazyComponentProps> = ({ children }) => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      {children}
    </Suspense>
  );
};

export default LazyComponent;