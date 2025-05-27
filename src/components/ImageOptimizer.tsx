import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
  onLoad
}) => {
  const [isLoading, setIsLoading] = useState(!priority);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setIsLoading(!priority);
    setError(false);
    setImageSrc(src);
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  // Optimize Unsplash images
  const optimizeUnsplashImage = (url: string) => {
    if (!url.includes('unsplash.com')) return url;
    
    // Extract base URL without existing parameters
    const baseUrl = url.split('?')[0];
    
    // Add optimization parameters
    return `${baseUrl}?auto=format,compress&q=80&fit=crop&w=${width}&h=${height}`;
  };

  // Generate responsive srcset
  const generateSrcSet = () => {
    if (!src.includes('unsplash.com')) return undefined;
    
    const sizes = [400, 800, 1200, 1600];
    return sizes
      .map(size => {
        const sizeUrl = optimizeUnsplashImage(src).replace(/w=\d+/, `w=${size}`);
        return `${sizeUrl} ${size}w`;
      })
      .join(', ');
  };

  const optimizedSrc = optimizeUnsplashImage(imageSrc);

  if (error) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '300px' }}
        role="img"
        aria-label={`Failed to load: ${alt}`}
      >
        <span className="text-gray-500">Image failed to load</span>
      </div>
    );
  }

  return (
    <div className="relative" style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : 'auto' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Loader2 className="w-8 h-8 text-[#213555] animate-spin" aria-hidden="true" />
        </div>
      )}
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        srcSet={generateSrcSet()}
        sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${width}px`}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default ImageOptimizer;