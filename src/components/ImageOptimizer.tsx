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
  width,
  height,
  className = '',
  priority = false,
  onLoad
}) => {
  const [isLoading, setIsLoading] = useState(!priority);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    // Reset states when src changes
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

  // Construct srcset for responsive images
  const generateSrcSet = () => {
    if (!src.includes('unsplash.com')) return undefined;
    
    const sizes = [400, 800, 1200, 1600];
    return sizes
      .map(size => `${src}&w=${size} ${size}w`)
      .join(', ');
  };

  if (error) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Loader2 className="w-8 h-8 text-[#213555] animate-spin" />
        </div>
      )}
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        srcSet={generateSrcSet()}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default ImageOptimizer;