import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Materials from './components/Materials';
import Quiz from './components/Quiz';
import Vocabulary from './components/Vocabulary';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Materials />
      <Quiz />
      <Vocabulary />
      <Footer />
    </div>
  );
}

export default App;