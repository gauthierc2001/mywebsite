import Image from 'next/image';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  logo: string;
  period: string;
  duration: string;
  type: string;
  location: string;
  description: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'blaze',
    title: 'AI Software Engineer',
    company: 'Blaze Messenger',
    logo: '/logoblaze.jpg',
    period: 'mai 2025 - juin 2025',
    duration: '2 mois',
    type: 'Freelance',
    location: 'Remote · À distance',
    description: [
      'Engineered AI-powered conversational backend for Blaze Messenger, enabling natural-language chatbot interactions for businesses and individuals.',
      'Developed prompt pipelines using GPT-based LLMs, including context management and fallback logic for accurate user responses.',
      'Built front-end integration using React and real-time WebSocket APIs to support chat interfaces, user events and dynamic messaging flows.',
      'Designed analytics instrumentation and feedback modules to monitor chat performance and iteratively refine AI prompt behavior.',
      'Participated in major product testing and optimization cycles following a successful Product Hunt launch.'
    ],
    skills: ['GPT', 'LLMs', 'React', 'WebSocket', 'Analytics', 'Product Hunt']
  },
  {
    id: 'preprocess',
    title: 'AI Software Engineer',
    company: 'Preprocess',
    logo: '/logopreprocess.jpg',
    period: 'févr. 2025 - avr. 2025',
    duration: '3 mois',
    type: 'Freelance',
    location: 'Remote · À distance',
    description: [
      'Built AI and machine learning pipelines for PreProcess.ai, enabling seamless transformation of text prompts into high-quality images and short videos in real time.',
      'Engineered integration modules with major LLM APIs (OpenAI, Sora) for style-adaptive image generation and automatic scene layout planning.',
      'Developed React + Node.js full-stack UI for prompt-based content creation, including real-time previews, progress tracking, and user feedback loops.',
      'Designed backend orchestration for GPU workload management and fine-tuning pipelines to optimize prompt-to-asset turnaround time.',
      'Collaborated in bug fixing and feature rollout following the Product Hunt launch, optimizing model inference and server-load balancing.'
    ],
    skills: ['AI/ML', 'OpenAI', 'Sora', 'React', 'Node.js', 'GPU', 'Product Hunt']
  },
  {
    id: 'costgpt',
    title: 'AI Software Engineer',
    company: 'CostGPT',
    logo: '/logocostgpt.jpg',
    period: 'oct. 2024 - déc. 2024',
    duration: '3 mois',
    type: 'Freelance',
    location: 'Remote · À distance',
    description: [
      'Built NLP pipelines and prompt engineering logic to analyze cloud cost data (Budget by AI), extracting actionable insights from AWS and Azure billing datasets.',
      'Developed backend services with Python and LLM APIs enabling users to query spend patterns in natural language and receive tailored recommendations.',
      'Implemented secure data ingestion modules and interactive dashboards using React + Node.js for real-time cost visualization and ML-based anomaly detection.',
      'Collaborated on product testing and feedback loops to refine AI query intents and improve output relevance (launched on Product Hunt, May 2024).'
    ],
    skills: ['NLP', 'Python', 'AWS', 'Azure', 'React', 'Node.js', 'Product Hunt']
  },
  {
    id: 'hoshai',
    title: 'AI & NLP Engineer',
    company: 'HoshAI',
    logo: '/logohoshai.jpg',
    period: 'juin 2024 - août 2024',
    duration: '3 mois',
    type: 'Freelance',
    location: 'Remote · À distance',
    description: [
      'Developed AI pipelines and NLP-driven backend for HoshAI&apos;s generative platforms, supporting text, image, voice and video content creation.',
      'Implemented prompt engineering flows, model selection, fine-tuning, and output validations to improve content quality and coherence.',
      'Built full-stack integration with frontend tools using React and Node.js, enabling users to generate marketing copy, social media posts, and blog content in real time.',
      'Designed analytics and feedback mechanisms to monitor user behavior and refine model prompts and datasets dynamically.'
    ],
    skills: ['AI/NLP', 'Prompt Engineering', 'React', 'Node.js', 'Analytics', 'Content Generation']
  },
  {
    id: 'describely',
    title: 'AI & NLP Engineer',
    company: 'Describely',
    logo: '/logodescribely.jpg',
    period: 'déc. 2023 - mai 2024',
    duration: '6 mois',
    type: 'Freelance',
    location: 'Remote · À distance',
    description: [
      'Developed AI/NLP backend components for Describely 2, an AI-powered writing assistant that generates marketing copy and product descriptions using fine-tuned language models.',
      'Implemented prompt engineering pipelines with custom model iteration and quality validation.',
      'Integrated frontend-app API using React + Node.js to support real-time text generation, template selection, and user-driven refining loops.',
      'Built usage analytics and feedback system to continuously improve generative output via human-in-the-loop data.'
    ],
    skills: ['AI/NLP', 'Prompt Engineering', 'React', 'Node.js', 'Analytics', 'Writing Assistant']
  },
  {
    id: 'cruize',
    title: 'Smart Contract Developer',
    company: 'Cruize Finance',
    logo: '/logocruizefinance.jpg',
    period: 'août 2023 - oct. 2023',
    duration: '3 mois',
    type: 'Freelance',
    location: 'Remote · À distance',
    description: [
      'Developed Solidity contracts for algorithmic yield pools and leveraged vault strategies, integrating protocol logic for auto-compounded liquidity management.',
      'Implemented on-chain rebalancing and risk mitigation mechanisms to preserve capital under volatile market conditions.',
      'Collaborated on tokenomics and governance architecture for CRUIZE token distribution using time-weighted rewards models.',
      'Conducted integration testing and deployed fallback logic to handle execution failures during high slippage events.'
    ],
    skills: ['Solidity', 'DeFi', 'Smart Contracts', 'Risk Management', 'Tokenomics']
  },
  {
    id: 'rejuve',
    title: 'Blockchain & AI Integration Developer',
    company: 'Rejuve.AI',
    logo: '/logorejuveai.jpg',
    period: 'janv. 2023 - juin 2023',
    duration: '6 mois',
    type: 'CDD',
    location: 'Remote · À distance',
    description: [
      'Built Solidity smart contracts for a decentralized longevity rewards system, enabling users to submit biometric health data and earn RJV tokens across Ethereum, BNB Chain and Cardano.',
      'Integrated data from wearable devices (e.g. Fitbit, Oura) into AI models for longevity prediction and incentive activation.',
      'Implemented token distribution logic aligned with IDO and dynamic incentives, collaborating on whitepaper and tokenomics specifications.',
      'Supported backend/API development for AI-based health data processing and platform onboarding workflows.'
    ],
    skills: ['Solidity', 'Blockchain', 'AI/ML', 'Health Data', 'Multi-chain', 'DeSci']
  },
  {
    id: 'hashflow',
    title: 'DeFi Infrastructure Engineer',
    company: 'Hashflow',
    logo: '/logohashflow.jpg',
    period: 'oct. 2022 - déc. 2022',
    duration: '3 mois',
    type: 'Temps partiel',
    location: 'Remote · À distance',
    description: [
      'Built and deployed Solidity smart contracts for Hashflow\'s RFQ trading system across Ethereum, Arbitrum, Polygon and BNB Chain.',
      'Developed fallback logic and MEV-resistant signature verification to ensure slippage-free execution.',
      'Contributed to staking mechanics and veHFT token governance during the platform\'s major upgrade (Hashflow 2.0).',
      'Collaborated with institutional market makers to integrate on-chain trading logic with off-chain quoting infrastructure.'
    ],
    skills: ['Solidity', 'Cross-chain', 'DeFi', 'MEV Protection', 'Trading Systems']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Expérience Professionnelle</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mon parcours en tant qu'AI Software Engineer, spécialisé dans les technologies de pointe
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black">{exp.title}</h3>
                      <p className="text-lg font-semibold text-gray-700">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                    <span className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="text-gray-600 mb-2 lg:mb-0">
                    <span className="font-medium">{exp.period}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {exp.description.map((desc, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm">
                      {skill}
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