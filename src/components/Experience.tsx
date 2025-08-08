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
    role: "AI Researcher",
    duration: "Feb 2025 - Apr 2025 · 3 months",
    location: "Remote",
    description: "Worked on improving an AI chatbot platform by testing conversation flows and multi-turn dialogue handling. Used GPT-4 and LangChain to design prompts that could keep context from earlier messages. Helped set up evaluation tests to compare different approaches and identify the most accurate and natural responses.",
    skills: ["AI Chatbot", "GPT-4", "LangChain", "Conversation Flows", "Multi-turn Dialogue", "Evaluation Testing"]
  },
  {
    id: 2,
    company: "PreProcess",
    logo: "/logopreprocess.jpg",
    role: "AI Developer",
    duration: "Oct 2024 - Jan 2025 · 4 months",
    location: "Remote",
    description: "Contributed to a system that turns text prompts into images and short videos. Integrated APIs such as Stability AI and Sora for generating high-quality outputs. Configured server-side processes to manage GPU workloads efficiently, ensuring fast response times even with high demand.",
    skills: ["Text-to-Image", "Text-to-Video", "Stability AI", "Sora", "GPU Management", "Server-side Processing"]
  },
  {
    id: 3,
    company: "CostGPT",
    logo: "/logocostgpt.jpg",
    role: "AI & NLP Solutions Developer",
    duration: "Jun 2024 - Sep 2024 · 4 months",
    location: "Remote",
    description: "Built features to read AWS and Azure billing data, then explain it in clear, simple language. Created a natural-language query tool so users could ask specific cost-related questions. Added anomaly detection using basic machine learning models to identify unexpected spending patterns.",
    skills: ["AWS Billing", "Azure Billing", "NLP", "Natural Language Queries", "Anomaly Detection", "Machine Learning"]
  },
  {
    id: 4,
    company: "HoshAI",
    logo: "/logohoshai.jpg",
    role: "AI Software Developer",
    duration: "Mar 2024 - May 2024 · 3 months",
    location: "Remote",
            description: "Helped develop a content generation platform producing text, images and audio. Built workflows to fine-tune AI models so outputs matched brand requirements. Assisted in connecting the backend to a web-based interface, allowing marketing teams to create and preview content in real time.",
    skills: ["Content Generation", "Text Generation", "Image Generation", "Audio Generation", "Model Fine-tuning", "Web Interface"]
  },
  {
    id: 5,
    company: "Describely",
    logo: "/logodescribely.jpg",
    role: "AI Software Developer",
    duration: "Oct 2023 - Feb 2024 · 5 months",
    location: "Remote",
            description: "Worked on an AI writing assistant for e-commerce businesses. Implemented a semantic search function to quickly find similar content and added validation steps to check quality before publishing. Helped optimise backend processes so text generation was faster and more reliable.",
    skills: ["AI Writing Assistant", "E-commerce", "Semantic Search", "Content Validation", "Backend Optimization", "Text Generation"]
  },
  {
    id: 6,
    company: "Rejuve.AI",
    logo: "/logorejuveai.jpg",
    role: "AI Software Developer",
    duration: "Jan 2023 - Jun 2023 · 6 months",
    location: "Full-time · On-site",
    description: "Developed tools to process large health research datasets for longevity studies. Integrated GPT-based agents to summarise medical literature into concise reports. Built API endpoints to deliver results to an internal dashboard, making it easier for researchers to review and analyse data.",
    skills: ["Health Research", "Data Processing", "GPT Agents", "Medical Literature", "API Development", "Dashboard"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-gray-100 to-transparent rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-tl from-gray-100 to-transparent rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-black mb-2 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            A diverse portfolio of AI, blockchain and software engineering projects across multiple industries and technologies.
          </p>
        </div>

        <div className="space-y-2">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3">
                                  <div className="flex flex-col md:flex-row md:items-start gap-3">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="relative group/logo">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl blur-lg opacity-50 group-hover/logo:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative w-8 h-8 rounded-md overflow-hidden border-2 border-gray-200 shadow-sm bg-white p-0.5 group-hover/logo:scale-110 transition-transform duration-300">
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
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-sm font-bold text-black mb-1 group-hover:text-gray-700 transition-colors duration-300">
                          {experience.role}
                        </h3>
                        <p className="text-sm font-semibold text-gray-700 mb-1">
                          {experience.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                          {experience.duration}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {experience.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-2 text-xs whitespace-pre-line">
                      {experience.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-1.5 py-0.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs font-medium rounded-full border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 transform"
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