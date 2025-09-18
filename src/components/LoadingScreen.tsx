import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  maxDuration?: number; // Maximum loading time in milliseconds
}

export function LoadingScreen({ onLoadingComplete, maxDuration = 2500 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Small delay before hiding
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 300); // Wait for fade animation
          }, 200);
          return 100;
        }
        return prev + 2; // Increment by 2% each update
      });
    }, maxDuration / 50); // 50 updates over the max duration

    // Fallback: ensure loading completes even if progress gets stuck
    const fallbackTimeout = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setIsVisible(false);
      onLoadingComplete();
    }, maxDuration);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimeout);
    };
  }, [onLoadingComplete, maxDuration]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 flex items-center justify-center transition-opacity duration-300 ${
        progress >= 100 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-['Nunito',_sans-serif]">
            YGBVerse
          </h1>
          <p className="text-purple-200 text-lg font-medium">
            Launching Great Ideas
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-purple-200 text-sm mt-2 font-medium">
            {Math.round(progress)}% loaded
          </p>
        </div>

        {/* Loading animation */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-white rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}