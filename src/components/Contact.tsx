"use client";

import { useState } from "react";

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const mailtoLink = `mailto:compangauthier@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form and close modal
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsModalOpen(false);
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-bl from-gray-100 to-transparent rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-gray-100 to-transparent rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              Contact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Available for new projects and collaborations. Let&apos;s discuss how we can work together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-black mb-8 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-6 group/item">
                    <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                      <p className="text-black font-semibold text-lg">compangauthier@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 group/item">
                    <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Location</p>
                      <p className="text-black font-semibold text-lg">Portugal (Remote)</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 group/item">
                    <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Availability</p>
                      <p className="text-black font-semibold text-lg">Available for new projects</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-black mb-8 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                  Social Networks
                </h3>
                
                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/gauthiercompan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/item flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl hover:from-gray-100 hover:to-gray-50 transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:shadow-lg"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <span className="text-black font-semibold text-lg">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-black mb-8 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                Ready to Collaborate?
              </h3>
              
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                I&apos;m always open to discussing new opportunities, whether it&apos;s a freelance project, 
                a full-time position, or a collaboration on innovative AI and blockchain solutions.
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-bold text-black mb-4 text-lg">What I Offer</h4>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      AI/ML Pipeline Development
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      Smart Contract & DeFi Solutions
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      Full-stack Web Applications
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      Prompt Engineering & LLM Integration
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      Cross-chain Blockchain Development
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-bold text-black mb-4 text-lg">Project Types</h4>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      Freelance & Contract Work
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      Startup & Scale-up Projects
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      AI/Blockchain Consulting
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      Technical Architecture Design
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-block bg-gradient-to-r from-black to-gray-800 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Start a Conversation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-black bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                  Send Message
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none transition-all duration-300"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div className="flex space-x-4 pt-6">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 