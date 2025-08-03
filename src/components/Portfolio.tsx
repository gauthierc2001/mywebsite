"use client";

import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "LLM Research Platform",
    description: "AI-powered research and analysis platform",
    image: "/websitellmres.png",
    tech: ["React", "AI/ML", "Research Tools"]
  },
  {
    id: 2,
    title: "Guidely",
    description: "AI agent assistant for shopping and product discovery",
    image: "/websiteguidely.png",
    tech: ["AI Agents", "Shopping Assistant", "Product Discovery"]
  },
  {
    id: 3,
    title: "Coreon Platform",
    description: "AI agents for professional enterprise solutions",
    image: "/websitecoreon.png",
    tech: ["AI Agents", "Enterprise", "Professional Services"]
  },
  {
    id: 4,
    title: "Coreon",
    description: "AI agents for professional enterprise solutions",
    image: "/websitecoreon2.png",
    tech: ["AI Agents", "Enterprise", "Professional Services"]
  },
  {
    id: 5,
    title: "Parcel Delivery",
    description: "AI agent for package tracking and logistics monitoring",
    image: "/websiteparcel.png",
    tech: ["AI Agents", "Logistics", "Package Tracking"]
  },
  {
    id: 6,
    title: "Stratos",
    description: "AI protocol for developers and technical teams",
    image: "/websitestratos.png",
    tech: ["AI Protocol", "Developer Tools", "Technical Solutions"]
  },
  {
    id: 7,
    title: "Solace",
    description: "AI agent protocol for Web3 fund management",
    image: "/websitesolace.png",
    tech: ["AI Agents", "Web3", "Fund Management"]
  },
  {
    id: 8,
    title: "Thalor",
    description: "Specialized LLM for banking and financial services",
    image: "/websitethalor.png",
    tech: ["LLM", "Banking", "Financial Services"]
  },
  {
    id: 9,
    title: "BMOS",
    description: "3D website featuring AI agent detective swarm",
    image: "/websitebmos.png",
    tech: ["3D", "AI Agents", "Detective Swarm"]
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-12 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-100 to-transparent rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tl from-gray-100 to-transparent rounded-full opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent animate-fade-in-up">
            Front End Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some other projects I've worked on, showcasing my expertise in AI agents, web development, and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
                             {/* Image Container */}
               <div className="relative w-full h-40 overflow-hidden">
                 <Image
                   src={item.image}
                   alt={item.title}
                   fill
                   className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                 />
                 {/* Overlay on hover */}
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
               </div>

               {/* Content */}
               <div className="p-5">
                 <h3 className="text-lg font-bold text-black mb-2 group-hover:text-gray-700 transition-colors duration-300">
                   {item.title}
                 </h3>
                 <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                   {item.description}
                 </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full text-xs font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 