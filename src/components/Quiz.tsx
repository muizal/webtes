import React, { useState } from 'react';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';

const Quiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const question = "Pilih terjemahan yang tepat untuk: \"Saya suka membaca buku setiap hari.\"";
  const options = [
    { value: 'a', text: 'I like read books every day.' },
    { value: 'b', text: 'I likes reading books every day.' },
    { value: 'c', text: 'I like reading books every day.' },
    { value: 'd', text: 'I liked reading books every day.' }
  ];
  const correctAnswer = 'c';

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
    setShowResult(false);
  };

  const checkAnswer = () => {
    if (!selectedAnswer) {
      alert('Silakan pilih jawaban terlebih dahulu!');
      return;
    }
    
    const correct = selectedAnswer === correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setSelectedAnswer('');
    setShowResult(false);
    setIsCorrect(false);
  };

  return (
    <section id="quiz" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <HelpCircle className="h-16 w-16 text-indigo-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kuis Bahasa Inggris
          </h2>
          <p className="text-xl text-gray-600">
            Uji pemahaman Anda dengan kuis interaktif
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {question}
              </h3>
              
              <div className="space-y-4">
                {options.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedAnswer === option.value
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="quiz-answer"
                      value={option.value}
                      checked={selectedAnswer === option.value}
                      onChange={() => handleAnswerSelect(option.value)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                      selectedAnswer === option.value
                        ? 'border-indigo-500 bg-indigo-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswer === option.value && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span className="text-gray-700 font-medium">
                      {option.text}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={checkAnswer}
                disabled={!selectedAnswer}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-8 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                Periksa Jawaban
              </button>
              
              {showResult && (
                <button
                  onClick={resetQuiz}
                  className="bg-gray-500 text-white py-3 px-8 rounded-xl font-semibold hover:bg-gray-600 transition-all duration-300"
                >
                  Coba Lagi
                </button>
              )}
            </div>
            
            {showResult && (
              <div className={`mt-6 p-4 rounded-xl flex items-center space-x-3 ${
                isCorrect 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                {isCorrect ? (
                  <CheckCircle className="h-6 w-6 text-green-500" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-500" />
                )}
                <span className={`font-semibold ${
                  isCorrect ? 'text-green-700' : 'text-red-700'
                }`}>
                  {isCorrect 
                    ? 'Selamat! Jawaban Anda benar.' 
                    : 'Jawaban salah. Yang benar adalah: I like reading books every day.'
                  }
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;