import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-green-400 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-6">
          <Sparkles className="h-16 w-16 text-yellow-400 animate-spin" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Belajar Bahasa Inggris
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            Lebih Mudah & Menyenangkan
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-indigo-100 leading-relaxed">
          Tingkatkan kemampuan bahasa Inggris Anda dengan metode pembelajaran interaktif 
          yang dirancang untuk semua tingkatan.
        </p>
        
        <button
          onClick={() => scrollToSection('materials')}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-300 hover:to-orange-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span>Mulai Belajar Sekarang</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;