"use client";

import { useEffect, useState } from "react";

export function LoadingOverlay() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress over 3.5 seconds
    const duration = 3500;
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Add a small delay before hiding the overlay
          setTimeout(() => setIsLoading(false), 200);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black transition-all duration-1000">
      {/* Blurred website background */}
      <div 
        className="absolute inset-0 bg-white opacity-0 transition-opacity duration-3000"
        style={{ opacity: progress / 100 }}
      />
      
      {/* Blur overlay that gradually clears */}
      <div 
        className="absolute inset-0 backdrop-blur-xl transition-all duration-3000"
        style={{ 
          backdropFilter: `blur(${Math.max(0, 20 - (progress / 5))}px)`,
          backgroundColor: `rgba(0, 0, 0, ${Math.max(0, 0.8 - (progress / 125))})`
        }}
      />
      
      {/* Professional gradient sweep animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-sweep"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent animate-sweep-delayed"></div>
      </div>
      
      {/* Loading content - above the blur */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center w-full max-w-md">
          {/* Logo/Name */}
          <div 
            className="mb-12 transition-all duration-2000"
            style={{ 
              opacity: Math.min(progress / 30, 1),
              transform: `translateY(${Math.max(0, 20 - (progress / 5))}px)`
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Gauthier Compan
            </h1>
            <p className="text-xl text-gray-300 font-mono drop-shadow-lg">
              AI Software Engineer
            </p>
          </div>

          {/* Loading bar */}
          <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mx-auto mb-8">
            <div 
              className="h-full bg-gradient-to-r from-gray-600 via-white to-gray-600 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Loading text */}
          <div 
            className="text-gray-400 font-mono text-sm transition-opacity duration-500 drop-shadow-lg"
            style={{ opacity: progress > 50 ? 1 : 0 }}
          >
            Loading portfolio...
          </div>
        </div>
      </div>
    </div>
  );
} 