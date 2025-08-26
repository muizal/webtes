import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Materials = () => {
  const levels = [
    {
      title: 'Pemula',
      color: 'from-green-500 to-emerald-600',
      features: [
        'Dasar-dasar tata bahasa',
        'Kosakata sehari-hari',
        'Pengucapan dasar',
        'Percakapan sederhana'
      ]
    },
    {
      title: 'Menengah',
      color: 'from-blue-500 to-indigo-600',
      features: [
        'Tata bahasa lanjutan',
        'Percakapan situasional',
        'Membaca teks pendek',
        'Menulis paragraf'
      ]
    },
    {
      title: 'Lanjutan',
      color: 'from-purple-500 to-violet-600',
      features: [
        'Tata bahasa kompleks',
        'Diskusi topik mendalam',
        'Analisis teks',
        'Menulis esai'
      ]
    }
  ];

  return (
    <section id="materials" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Materi Pembelajaran
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pilih tingkat yang sesuai dengan kemampuan Anda dan mulai perjalanan belajar bahasa Inggris
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`bg-gradient-to-r ${level.color} p-6 text-center`}>
                <h3 className="text-2xl font-bold text-white">
                  {level.title}
                </h3>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Mulai Level Ini</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;