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
    <section id="about" className="pt-20 pb-6 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-200 shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105">
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
                <div className="flex flex-col lg:flex-row lg:items-baseline lg:gap-4 mb-4">
                  <h1 className="text-2xl md:text-3xl font-bold text-black bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                    Gauthier Compan
                  </h1>
                  <h2 className="text-lg md:text-xl font-bold text-black bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                    AI Software Engineer
                  </h2>
                </div>
              </div>
              
              <div className="animate-fade-in-up delay-200">
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Born in France and now based in Portugal, I focus on developing applications and tools powered by artificial intelligence. My work ranges from building web platforms using large language models (LLMs) for natural language processing to creating end-to-end systems that solve practical problems. I also take part in AI research projects, experimenting with new model architectures and prompt-engineering techniques to improve real-world results.
                </p>
              </div>

              <div className="animate-fade-in-up delay-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-center lg:justify-start space-x-4">
                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                      <span className="text-xs font-medium text-gray-700">
                        Bachelor's in Computer Science
                      </span>
                    </div>
                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                      <span className="text-xs font-medium text-gray-700">
                        University of Montpellier, 2021
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center lg:justify-start space-x-4">
                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                      <span className="text-xs font-medium text-gray-700">
                        Scientific Baccalaureate with IT Specialization
                      </span>
                    </div>
                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                      <span className="text-xs font-medium text-gray-700">
                        Open to new projects and collaborations
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-8 animate-fade-in-up delay-500">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500">
            <h3 className="text-lg font-bold text-black mb-3 text-center bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              About me
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      I grew up in the sun-drenched south of France which shaped my appreciation for both precision and creativity. The region's history of innovation and craftsmanship continues to influence my approach to solving problems.
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
                    <h4 className="font-semibold text-black mb-2">Model Making and Detail</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Since childhood I have been passionate about model making and miniature painting. This hobby has given me a strong attention to detail and a drive for perfection that carries over into my technical work.
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
                    <h4 className="font-semibold text-black mb-2">Multilingual and Global</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      I speak French and English fluently, have conversational Spanish and I am learning Portuguese. This linguistic diversity reflects my love for travel and connecting with people from different cultures.
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
                      As an experienced rider I understand the balance between control and freedom, patience and action. These principles guide my work and my relationships with clients.
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