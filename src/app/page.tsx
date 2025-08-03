"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { LoadingOverlay } from "@/components/LoadingOverlay";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in after loading overlay disappears
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3700); // Slightly after the loading overlay finishes

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <LoadingOverlay />
      <ThemeToggle />
      <div 
        className={`transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Header />
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}
