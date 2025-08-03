import Image from "next/image";

interface Experience {
  id: number;
  company: string;
  logo: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Blaze Messenger",
    logo: "/logoblaze.jpg",
    role: "AI Software Engineer",
    duration: "May 2025 - June 2025 · 2 months",
    location: "Remote",
    description: "Engineered AI-powered conversational backend for Blaze Messenger, enabling natural-language chatbot interactions for businesses and individuals.\n\nDeveloped prompt pipelines using GPT-based LLMs, including context management and fallback logic for accurate user responses. Built front-end integration using React and real-time WebSocket APIs to support chat interfaces and dynamic messaging flows.\n\nDesigned analytics instrumentation and feedback modules to monitor chat performance and iteratively refine AI prompt behavior. Participated in major product testing and optimization cycles following a successful Product Hunt launch.",
    skills: ["LLMs", "NLP", "React", "WebSocket", "Analytics", "Product Hunt"]
  },
  {
    id: 2,
    company: "Preprocess",
    logo: "/logopreprocess.jpg",
    role: "AI Software Engineer",
    duration: "Feb 2025 - Apr 2025 · 3 months",
    location: "Remote",
    description: "Built AI and machine learning pipelines for PreProcess.ai, enabling seamless transformation of text prompts into high-quality images and short videos in real time.\n\nEngineered integration modules with major LLM APIs (OpenAI, Sora) for style-adaptive image generation and automatic scene layout planning. Developed React + Node.js full-stack UI for prompt-based content creation, including real-time previews and progress tracking.\n\nDesigned backend orchestration for GPU workload management and fine-tuning pipelines to optimize prompt-to-asset turnaround time. Collaborated in bug fixing and feature rollout following the Product Hunt launch.",
    skills: ["AI/ML Pipelines", "OpenAI API", "Sora", "React", "Node.js", "GPU Management"]
  },
  {
    id: 3,
    company: "CostGPT",
    logo: "/logocostgpt.jpg",
    role: "AI Software Engineer",
    duration: "Oct 2024 - Dec 2024 · 3 months",
    location: "Remote",
    description: "Built NLP pipelines and prompt engineering logic to analyze cloud cost data (Budget by AI), extracting actionable insights from AWS and Azure billing datasets.\n\nDeveloped backend services with Python and LLM APIs enabling users to query spend patterns in natural language and receive tailored recommendations. Implemented secure data ingestion modules and interactive dashboards using React + Node.js for real-time cost visualization.\n\nCollaborated on product testing and feedback loops to refine AI query intents and improve output relevance (launched on Product Hunt, May 2024).",
    skills: ["NLP", "Prompt Engineering", "Python", "AWS", "Azure", "React", "Node.js"]
  },
  {
    id: 4,
    company: "HoshAI",
    logo: "/logohoshai.jpg",
    role: "AI & NLP Engineer",
    duration: "June 2024 - Aug 2024 · 3 months",
    location: "Remote",
    description: "Developed AI pipelines and NLP-driven backend for HoshAI's generative platforms, supporting text, image, voice and video content creation.\n\nImplemented prompt engineering flows, model selection, fine-tuning, and output validations to improve content quality and coherence. Built full-stack integration with frontend tools using React and Node.js, enabling users to generate marketing copy and social media posts in real time.\n\nDesigned analytics and feedback mechanisms to monitor user behavior and refine model prompts and datasets dynamically.",
    skills: ["AI Pipelines", "NLP", "Prompt Engineering", "React", "Node.js", "Content Generation"]
  },
  {
    id: 5,
    company: "Describely",
    logo: "/logodescribely.jpg",
    role: "AI & NLP Engineer",
    duration: "Dec 2023 - May 2024 · 6 months",
    location: "Remote",
    description: "Developed AI/NLP backend components for Describely 2, an AI-powered writing assistant that generates marketing copy and product descriptions using fine-tuned language models.\n\nImplemented prompt engineering pipelines with custom model iteration and quality validation. Integrated frontend-app API using React + Node.js to support real-time text generation, template selection, and user-driven refining loops.\n\nBuilt usage analytics and feedback system to continuously improve generative output via human-in-the-loop data.",
    skills: ["AI/NLP", "Language Models", "Prompt Engineering", "React", "Node.js", "Analytics"]
  },
  {
    id: 6,
    company: "Cruize Finance",
    logo: "/logocruizefinance.jpg",
    role: "Smart Contract Developer",
    duration: "Aug 2023 - Oct 2023 · 3 months",
    location: "Remote",
    description: "Developed Solidity contracts for algorithmic yield pools and leveraged vault strategies, integrating protocol logic for auto-compounded liquidity management.\n\nImplemented on-chain rebalancing and risk mitigation mechanisms to preserve capital under volatile market conditions. Collaborated on tokenomics and governance architecture for CRUIZE token distribution using time-weighted rewards models.\n\nConducted integration testing and deployed fallback logic to handle execution failures during high slippage events.",
    skills: ["Solidity", "Smart Contract Risk Protection", "DeFi Protocol Engineering", "Yield Farming", "Tokenomics"]
  },
  {
    id: 7,
    company: "Rejuve.AI",
    logo: "/logorejuveai.jpg",
    role: "Blockchain & AI Integration Developer",
    duration: "Jan 2023 - June 2023 · 6 months",
    location: "Remote",
    description: "Built Solidity smart contracts for a decentralized longevity rewards system, enabling users to submit biometric health data and earn RJV tokens across Ethereum, BNB Chain and Cardano.\n\nIntegrated data from wearable devices (e.g. Fitbit, Oura) into AI models for longevity prediction and incentive activation. Implemented token distribution logic aligned with IDO and dynamic incentives, collaborating on whitepaper and tokenomics specifications.\n\nSupported backend/API development for AI-based health data processing and platform onboarding workflows.",
    skills: ["Solidity", "Machine Learning", "Blockchain Integration", "API Development", "DeSci (Decentralized Science)", "Health Data"]
  },
  {
    id: 8,
    company: "Hashflow",
    logo: "/logohashflow.jpg",
    role: "DeFi Infrastructure Engineer",
    duration: "Oct 2022 - Dec 2022 · 3 months",
    location: "Remote",
    description: "Built and deployed Solidity smart contracts for Hashflow's RFQ trading system across Ethereum, Arbitrum, Polygon and BNB Chain.\n\nDeveloped fallback logic and MEV-resistant signature verification to ensure slippage-free execution. Contributed to staking mechanics and veHFT token governance during the platform's major upgrade (Hashflow 2.0).\n\nCollaborated with institutional market makers to integrate on-chain trading logic with off-chain quoting infrastructure.",
    skills: ["Cross-Chain Engineering", "Smart Contract Development", "Solidity", "DeFi Infrastructure", "MEV Protection", "RFQ Trading"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-gray-100 to-transparent rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-tl from-gray-100 to-transparent rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A diverse portfolio of AI, blockchain, and software engineering projects across multiple industries and technologies.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="group bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="relative group/logo">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl blur-lg opacity-50 group-hover/logo:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg bg-white p-2 group-hover/logo:scale-110 transition-transform duration-300">
                        <Image
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors duration-300">
                          {experience.role}
                        </h3>
                        <p className="text-xl font-semibold text-gray-700 mb-1">
                          {experience.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                          {experience.duration}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {experience.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-8 text-lg whitespace-pre-line">
                      {experience.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-3">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 transform"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 