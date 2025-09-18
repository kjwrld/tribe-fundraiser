import { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  loading?: 'lazy' | 'eager';
}

export function LazyImage({ 
  src, 
  webpSrc, 
  alt, 
  className = '', 
  style,
  placeholder,
  loading = 'lazy'
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Start loading 50px before the image is visible
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true); // Still show the fallback
  };

  // Determine which source to use
  const imageSrc = () => {
    if (hasError || !webpSrc) return src;
    
    // Check WebP support
    const supportsWebP = document.createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') === 0;
    
    return supportsWebP ? webpSrc : src;
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse">
          {placeholder && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-400 text-sm">{placeholder}</span>
            </div>
          )}
        </div>
      )}
      
      {/* Actual image */}
      {isInView && (
        <img
          src={imageSrc()}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          style={style}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
        />
      )}
    </div>
  );
}