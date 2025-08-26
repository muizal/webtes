import React from 'react';
import { Mail, Phone, Facebook, Instagram, Youtube, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="about" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold">EnglishMaster</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Platform pembelajaran bahasa Inggris online yang menyediakan materi berkualitas 
              untuk semua tingkatan dengan metode yang interaktif dan menyenangkan.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                <Youtube className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Kontak Kami</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">info@englishmaster.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">+62 21 1234 5678</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors">Beranda</a></li>
              <li><a href="#materials" className="text-gray-300 hover:text-yellow-400 transition-colors">Materi Pembelajaran</a></li>
              <li><a href="#quiz" className="text-gray-300 hover:text-yellow-400 transition-colors">Kuis Interaktif</a></li>
              <li><a href="#vocabulary" className="text-gray-300 hover:text-yellow-400 transition-colors">Flashcard Kosakata</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 EnglishMaster. All rights reserved. Made with ❤️ for English learners everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;