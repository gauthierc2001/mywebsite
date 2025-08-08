"use client";

import Image from "next/image";

const aiProjects = [
  {
    id: 1,
    title: "LLMRefs",
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
    title: "Thalor",
    description: "Specialized LLM for banking and financial services",
    image: "/websitethalor.png",
    tech: ["LLM", "Banking", "Financial Services"]
  },
  {
    id: 8,
    title: "BMOS",
    description: "AI-powered detective platform with multi-agent collaboration system",
    image: "/websitebmos.png",
    tech: ["AI Agents", "Multi-Agent Systems", "Collaborative AI"]
  },
  {
    id: 9,
    title: "Solace AI",
    description: "AI agent platform for automated financial analysis and decision making",
    image: "/websitesolace.png",
    tech: ["AI Agents", "Financial AI", "Automated Analysis"]
  },
  {
    id: 10,
    title: "Hashflow AI",
    description: "AI-powered platform for intelligent data processing and automated decision making",
    image: "/logohashflow.jpg",
    tech: ["AI Platform", "Data Processing", "Automated Decisions"]
  },
  {
    id: 11,
    title: "Cruize AI",
    description: "AI system for predictive analytics and intelligent financial modeling",
    image: "/logocruizefinance.jpg",
    tech: ["AI Analytics", "Predictive Modeling", "Financial Intelligence"]
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-6 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-100 to-transparent rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tl from-gray-100 to-transparent rounded-full opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-4">
                      <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent animate-fade-in-up">
              AI Research & Prototypes
            </h2>
                      <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Here are some projects I've collaborated on with AI startups, showcasing my expertise in AI software development and innovative solutions.
            </p>
        </div>

        {/* AI Projects - Main Focus */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {aiProjects.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative w-full h-24 overflow-hidden">
                  {item.title === "Hashflow AI" || item.title === "Cruize AI" ? (
                    <div className="flex items-center justify-center h-full bg-gray-50">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-3">
                  <h3 className="text-base font-bold text-black mb-1 group-hover:text-gray-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-2 text-xs leading-relaxed">
                    {item.description}
                  </p>
                
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {item.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full text-xs font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
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


      </div>
    </section>
  );
} 