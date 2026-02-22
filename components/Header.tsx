'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check initial theme preference
    const checkTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
      setDarkMode(isDark);
    };
    
    checkTheme();
    
    // Add scroll listener
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? darkMode 
          ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 relative z-10">
            <div className="h-12 relative">
              <Image 
                src="/images/SKYNEX_500_BLUE.png" 
                alt="SKYNEX" 
                width={160} 
                height={48} 
                className="w-auto h-full object-contain block dark:hidden" 
                priority
              />
              <Image 
                src="/images/SKYNEX_500_WHITE.png" 
                alt="SKYNEX" 
                width={160} 
                height={48} 
                className="w-auto h-full object-contain hidden dark:block" 
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-skynex-blue dark:text-white/80 dark:hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-skynex-blue dark:text-white/80 dark:hover:text-white transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-skynex-blue dark:text-white/80 dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-skynex-blue dark:text-white/80 dark:hover:text-white transition-colors">
              Contact
            </Link>
            
            {/* Dark/Light Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            
            <a
              href="https://geograde.ai"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-4 px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                darkMode
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-emerald-500/40'
                  : 'bg-skynex-blue text-white hover:bg-blue-700'
              }`}
            >
              Try GeoGrade.ai
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-20"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            
            <button
              className="p-2 rounded-md text-gray-700 dark:text-white z-20"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden fixed inset-0 z-10 flex items-center justify-center ${
            darkMode 
              ? 'bg-gray-900/95 backdrop-blur-lg' 
              : 'bg-white/95 backdrop-blur-lg'
          }`}>
            <div className="flex flex-col items-center space-y-8 text-center">
              <Link
                href="/"
                className={`text-2xl ${darkMode ? 'text-white hover:text-cyan-400' : 'text-gray-700 hover:text-skynex-blue'} transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className={`text-2xl ${darkMode ? 'text-white hover:text-cyan-400' : 'text-gray-700 hover:text-skynex-blue'} transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className={`text-2xl ${darkMode ? 'text-white hover:text-cyan-400' : 'text-gray-700 hover:text-skynex-blue'} transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`text-2xl ${darkMode ? 'text-white hover:text-cyan-400' : 'text-gray-700 hover:text-skynex-blue'} transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-6">
                <a
                  href="https://geograde.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    darkMode
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-emerald-500/40'
                      : 'bg-skynex-blue text-white hover:bg-blue-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Try GeoGrade.ai
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}