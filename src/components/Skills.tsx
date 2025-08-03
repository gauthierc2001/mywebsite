interface SkillCategory {
  name: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Intelligence Artificielle',
    skills: ['GPT', 'LLMs', 'NLP', 'Prompt Engineering', 'Machine Learning', 'AI/ML Pipelines', 'Fine-tuning', 'Model Selection'],
    color: 'bg-gradient-to-r from-purple-500 to-pink-500'
  },
  {
    name: 'Développement Web',
    skills: ['React', 'Node.js', 'TypeScript', 'JavaScript', 'Next.js', 'WebSocket', 'REST APIs', 'Full-stack Development'],
    color: 'bg-gradient-to-r from-blue-500 to-cyan-500'
  },
  {
    name: 'Blockchain & DeFi',
    skills: ['Solidity', 'Smart Contracts', 'DeFi Protocols', 'Cross-chain Development', 'Ethereum', 'BNB Chain', 'Polygon', 'MEV Protection'],
    color: 'bg-gradient-to-r from-orange-500 to-red-500'
  },
  {
    name: 'Cloud & Infrastructure',
    skills: ['AWS', 'Azure', 'Python', 'GPU Management', 'Server Load Balancing', 'Data Ingestion', 'Analytics', 'Monitoring'],
    color: 'bg-gradient-to-r from-green-500 to-emerald-500'
  },
  {
    name: 'Outils & Méthodologies',
    skills: ['Product Hunt', 'Git', 'Agile', 'Remote Work', 'API Integration', 'Testing', 'Documentation', 'Performance Optimization'],
    color: 'bg-gradient-to-r from-gray-600 to-gray-800'
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Compétences Techniques</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mon expertise couvre un large éventail de technologies modernes, de l&apos;IA à la blockchain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`h-2 ${category.color}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistiques supplémentaires */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">8+</div>
            <div className="text-gray-600">Projets IA Réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">15+</div>
            <div className="text-gray-600">Technologies Maîtrisées</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">100%</div>
            <div className="text-gray-600">Travail Remote</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">3+</div>
            <div className="text-gray-600">Années d'Expérience</div>
          </div>
        </div>

        {/* Section spécialisation */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-black mb-6 text-center">Spécialisations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-black mb-2">Prompt Engineering</h4>
              <p className="text-gray-600">Optimisation des prompts pour les LLMs et création de pipelines IA efficaces</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-black mb-2">DeFi & Blockchain</h4>
              <p className="text-gray-600">Développement de smart contracts et d&apos;applications DeFi cross-chain</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-black mb-2">Analytics & Monitoring</h4>
              <p className="text-gray-600">Mise en place de systèmes d&apos;analyse et de monitoring pour les applications IA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 