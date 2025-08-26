import React from 'react';
import { BookOpen, Gamepad2, Volume2 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Materi Lengkap',
      description: 'Kurikulum terstruktur dari tingkat pemula hingga mahir dengan materi yang terus diperbarui.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Gamepad2,
      title: 'Pembelajaran Interaktif',
      description: 'Belajar melalui kuis, permainan, dan aktivitas menyenangkan yang membuat proses belajar tidak membosankan.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Volume2,
      title: 'Pelafalan Audio',
      description: 'Dengarkan pengucapan kata yang benar dari penutur asli untuk melatih listening dan speaking.',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih EnglishMaster?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;