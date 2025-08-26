import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white sticky top-0 z-50 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-yellow-400" />
            <span className="text-2xl font-bold">EnglishMaster</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="hover:text-yellow-400 transition-colors duration-300 font-medium"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('materials')}
                  className="hover:text-yellow-400 transition-colors duration-300 font-medium"
                >
                  Materi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('quiz')}
                  className="hover:text-yellow-400 transition-colors duration-300 font-medium"
                >
                  Kuis
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('vocabulary')}
                  className="hover:text-yellow-400 transition-colors duration-300 font-medium"
                >
                  Kosakata
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-yellow-400 transition-colors duration-300 font-medium"
                >
                  Tentang
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left py-2 hover:text-yellow-400 transition-colors duration-300"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('materials')}
                  className="block w-full text-left py-2 hover:text-yellow-400 transition-colors duration-300"
                >
                  Materi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('quiz')}
                  className="block w-full text-left py-2 hover:text-yellow-400 transition-colors duration-300"
                >
                  Kuis
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('vocabulary')}
                  className="block w-full text-left py-2 hover:text-yellow-400 transition-colors duration-300"
                >
                  Kosakata
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left py-2 hover:text-yellow-400 transition-colors duration-300"
                >
                  Tentang
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;