"use client";

interface Skill {
  name: string;
  color: string;
  category: string;
}

const skills: Skill[] = [
  // AI & ML
  { name: "LLMs", color: "bg-black", category: "AI & ML" },
  { name: "NLP", color: "bg-black", category: "AI & ML" },
  { name: "Machine Learning", color: "bg-black", category: "AI & ML" },
  { name: "Prompt Engineering", color: "bg-black", category: "AI & ML" },
  { name: "AI Agents", color: "bg-black", category: "AI & ML" },
  { name: "Neural Networks", color: "bg-black", category: "AI & ML" },
  
  // Web Development
  { name: "React", color: "bg-black", category: "Web Development" },
  { name: "Node.js", color: "bg-black", category: "Web Development" },
  { name: "TypeScript", color: "bg-black", category: "Web Development" },
  { name: "JavaScript", color: "bg-black", category: "Web Development" },
  { name: "Next.js", color: "bg-black", category: "Web Development" },
  { name: "HTML", color: "bg-black", category: "Web Development" },
  { name: "CSS", color: "bg-black", category: "Web Development" },
  
  // Cloud & Infrastructure
  { name: "AWS", color: "bg-black", category: "Cloud" },
  { name: "Azure", color: "bg-black", category: "Cloud" },
  { name: "Python", color: "bg-black", category: "Cloud" },
  { name: "API Development", color: "bg-black", category: "Cloud" },
  
  // Tools & Technologies
  { name: "Git", color: "bg-black", category: "Tools" },
  { name: "Docker", color: "bg-black", category: "Tools" },
  { name: "WebSocket", color: "bg-black", category: "Tools" },
  { name: "Analytics", color: "bg-black", category: "Tools" }
];

const categories = ["AI & ML", "Web Development", "AI Research & Prototypes", "Cloud", "Tools"];

export function Skills() {
  return (
    <section id="skills" className="py-6 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-black mb-2 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xs text-gray-600 max-w-2xl mx-auto">
            A comprehensive skill set spanning AI, web development and cloud technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.map((category) => (
            <div key={category} className="bg-white rounded-lg shadow-sm border border-gray-100 p-3">
              <h3 className="text-xs font-semibold text-black mb-2 text-center">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {category === "AI Research & Prototypes" ? (
                  <>
                    <span className="px-2 py-0.5 bg-black rounded-full text-xs font-medium text-white">
                      Prompt Engineering
                    </span>
                    <span className="px-2 py-0.5 bg-black rounded-full text-xs font-medium text-white">
                      AI Integration
                    </span>
                    <span className="px-2 py-0.5 bg-black rounded-full text-xs font-medium text-white">
                      Analytics & Monitoring
                    </span>
                  </>
                ) : (
                  skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-2 py-0.5 rounded-full text-xs font-medium text-white ${skill.color} hover:shadow-md hover:scale-105 transition-all duration-300 transform`}
                      >
                        {skill.name}
                      </span>
                    ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 