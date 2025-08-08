"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";
import { Collaborations } from "@/components/Collaborations";
import { Contact } from "@/components/Contact";
import { LoadingOverlay } from "@/components/LoadingOverlay";

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
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <LoadingOverlay />
      <div 
        className={`transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
                       <Header />
               <Hero />
               <Experience />
               <Portfolio />
               <Skills />
               <Contact />
      </div>
    </div>
  );
}
