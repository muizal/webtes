import React, { useState } from 'react';
import { RotateCcw, Languages } from 'lucide-react';

interface Flashcard {
  english: string;
  indonesian: string;
}

const Vocabulary = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const flashcards: Flashcard[] = [
    { english: 'Book', indonesian: 'Buku' },
    { english: 'Teacher', indonesian: 'Guru' },
    { english: 'Computer', indonesian: 'Komputer' },
    { english: 'Happiness', indonesian: 'Kebahagiaan' },
    { english: 'Beautiful', indonesian: 'Indah' },
    { english: 'Knowledge', indonesian: 'Pengetahuan' },
    { english: 'Adventure', indonesian: 'Petualangan' },
    { english: 'Creativity', indonesian: 'Kreativitas' }
  ];

  const flipCard = (index: number) => {
    const newFlippedCards = new Set(flippedCards);
    if (newFlippedCards.has(index)) {
      newFlippedCards.delete(index);
    } else {
      newFlippedCards.add(index);
    }
    setFlippedCards(newFlippedCards);
  };

  const resetAllCards = () => {
    setFlippedCards(new Set());
  };

  return (
    <section id="vocabulary" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Languages className="h-16 w-16 text-purple-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Flashcard Kosakata
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Klik kartu untuk melihat terjemahan dan tingkatkan kosakata Anda
          </p>
          
          <button
            onClick={resetAllCards}
            className="inline-flex items-center space-x-2 bg-purple-600 text-white py-2 px-6 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Reset Semua Kartu</span>
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {flashcards.map((card, index) => (
            <div
              key={index}
              className="h-40 cursor-pointer group perspective"
              onClick={() => flipCard(index)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flippedCards.has(index) ? 'rotate-y-180' : ''
              }`}>
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center text-white group-hover:shadow-2xl transition-shadow duration-300">
                  <span className="text-2xl font-bold text-center px-4">
                    {card.english}
                  </span>
                </div>
                
                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg flex items-center justify-center text-gray-900 group-hover:shadow-2xl transition-shadow duration-300">
                  <span className="text-xl font-bold text-center px-4">
                    {card.indonesian}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            <span className="font-semibold">{flashcards.length}</span> kata tersedia untuk dipelajari
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vocabulary;