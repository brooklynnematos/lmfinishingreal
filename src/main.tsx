import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Lazy load the main App component
const App = lazy(() => 
  import('./App').then(module => {
    return new Promise(resolve => {
      // Artificial delay to prevent loading flash
      setTimeout(() => {
        resolve(module);
      }, 0);
    });
  })
);

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#213555]"></div>
  </div>
);

// Create root with type assertion
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Suspense fallback={<LoadingFallback />}>
        <App />
      </Suspense>
    </StrictMode>
  );
}