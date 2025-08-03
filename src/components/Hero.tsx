"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const fullText = "AI Software Engineer";

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gray-200 shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105">
                <Image
                  src="/image0.jpeg"
                  alt="Gauthier Compan"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="space-y-6">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                  Gauthier Compan
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 font-mono">
                  <span className="text-black">{typedText}</span>
                </h2>
              </div>
              
              <div className="animate-fade-in-up delay-200">
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Born in France and expatriated to Portugal, I specialize in developing AI-powered applications, 
                  blockchain solutions, and modern architectures. With expertise in LLMs, NLP, DeFi, and full-stack development, 
                  I bring innovative solutions to complex technical challenges.
                </p>
              </div>

              <div className="animate-fade-in-up delay-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-center lg:justify-start space-x-4">
                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                      <span className="text-sm font-medium text-gray-700">
                        Computer Science Licence
                      </span>
                    </div>
                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                      <span className="text-sm font-medium text-gray-700">
                        University of Montpellier 2021
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center lg:justify-start space-x-4">
                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                      <span className="text-sm font-medium text-gray-700">
                        Bac S - IT Specialization
                      </span>
                    </div>
                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                      <span className="text-sm font-medium text-gray-700">
                        Available for new projects
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-16 animate-fade-in-up delay-500">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-2xl font-bold text-black mb-8 text-center bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              Beyond the Code
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Southern French Roots</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Growing up in the sun-drenched south of France shaped my appreciation for both precision and creativity. 
                      The region's rich history of innovation and craftsmanship influenced my approach to problem-solving.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Model Making & Detail</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Since childhood, I've been passionate about model making and miniature painting. This hobby has instilled 
                      in me an exceptional attention to detail and perfectionism that translates directly into my technical work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Multilingual & Global</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Fluent in French and English, conversational in Spanish, and currently learning Portuguese. 
                      This linguistic diversity reflects my love for travel and connecting with people across cultures.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Equestrian Spirit</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      As an experienced rider, I understand the balance between control and freedom, patience and action. 
                      These principles guide my approach to both technical challenges and client relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-center italic text-lg">
                "From the precision of model making to the elegance of horseback riding, 
                I bring a unique blend of attention to detail and creative problem-solving to every project."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 