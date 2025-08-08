import Image from "next/image";

interface Collaboration {
  id: number;
  company: string;
  logo: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
}

const collaborations: Collaboration[] = [
  {
    id: 1,
    company: "Cruize Finance",
    logo: "/logocruizefinance.jpg",
    role: "Smart Contract Developer",
    duration: "2022",
    location: "Remote",
    description: "Developed Solidity smart contracts for trading and liquidity management systems.",
    skills: []
  },
  {
    id: 2,
    company: "Hashflow",
    logo: "/logohashflow.jpg",
    role: "Smart Contract Developer",
    duration: "2022",
    location: "Remote",
    description: "Built and deployed Solidity smart contracts for trading systems across multiple blockchain networks.",
    skills: []
  }
];

export function Collaborations() {
  return (
    <section id="collaborations" className="py-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-black mb-2 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            Collaborations
          </h3>
          <p className="text-xs text-gray-600 max-w-2xl mx-auto">
            Additional projects and partnerships in blockchain and smart contract development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {collaborations.map((collaboration, index) => (
            <div
              key={collaboration.id}
                             className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
                             <div className="p-3">
                                 <div className="flex items-start gap-3">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="relative group/logo">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl blur-lg opacity-50 group-hover/logo:opacity-75 transition-opacity duration-300"></div>
                                             <div className="relative w-8 h-8 rounded-md overflow-hidden border-2 border-gray-200 shadow-sm bg-white p-0.5 group-hover/logo:scale-110 transition-transform duration-300">
                        <Image
                          src={collaboration.logo}
                          alt={`${collaboration.company} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div className="min-w-0">
                                                 <h4 className="text-base font-bold text-black mb-1 group-hover:text-gray-700 transition-colors duration-300 truncate">
                           {collaboration.role}
                         </h4>
                         <p className="text-sm font-semibold text-gray-700 mb-1 truncate">
                          {collaboration.company}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                          {collaboration.duration}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {collaboration.location}
                        </p>
                      </div>
                    </div>

                                         <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-3">
                      {collaboration.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {collaboration.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs font-medium rounded-full border border-gray-200 hover:shadow-sm hover:scale-105 transition-all duration-300 transform"
                        >
                          {skill}
                        </span>
                      ))}
                      {collaboration.skills.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                          +{collaboration.skills.length - 4} more
                        </span>
                      )}
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