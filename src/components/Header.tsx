'use client';

import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      {/* Matrix rain background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500/10 text-xs font-mono animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {['01', '10', 'AI', 'ML', 'JS', 'TS', 'PY', 'SC', 'ETH', 'BTC'][Math.floor(Math.random() * 10)]}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 cursor-pointer">
              Gauthier Compan
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#experience"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 font-medium relative group"
            >
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#skills"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 font-medium relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#experience"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 