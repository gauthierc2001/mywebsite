interface SkillCategory {
  name: string;
  skills: string[];
  icon: React.ReactNode;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Artificial Intelligence",
    skills: ["LLMs", "NLP", "Machine Learning", "Prompt Engineering", "AI Pipelines", "Fine-tuning"],
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    name: "Web Development",
    skills: ["React", "Node.js", "TypeScript", "JavaScript", "Next.js", "Full-stack Development"],
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    name: "Blockchain & DeFi",
    skills: ["Solidity", "Smart Contracts", "DeFi Protocols", "Cross-chain", "Tokenomics", "MEV Protection"],
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    name: "Cloud & Infrastructure",
    skills: ["AWS", "Azure", "Python", "API Development", "GPU Management", "Server Architecture"],
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    name: "Tools & Technologies",
    skills: ["Git", "Docker", "WebSocket", "Analytics", "Product Hunt", "Content Generation"],
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

const specializations = [
  {
    title: "Prompt Engineering",
    description: "Expert in designing and optimizing prompts for LLMs to achieve desired outputs and improve AI model performance.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: "DeFi & Blockchain",
    description: "Specialized in developing smart contracts, DeFi protocols, and cross-chain solutions for decentralized applications.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Analytics & Monitoring",
    description: "Proficient in implementing analytics systems and monitoring tools to track performance and user behavior.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-bl from-gray-100 to-transparent rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-tr from-gray-100 to-transparent rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set spanning AI, blockchain, web development, and cloud technologies.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-6 group-hover:text-gray-700 transition-colors duration-300">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-white to-gray-50 text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold text-black mb-12 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            Key Specializations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <div
                key={spec.title}
                className="group bg-white rounded-3xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {spec.icon}
                </div>
                <h4 className="text-xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {spec.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "8+", label: "AI Projects" },
            { number: "3+", label: "Years Experience" },
            { number: "10+", label: "Technologies" },
            { number: "100%", label: "Remote" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <div className="text-4xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 