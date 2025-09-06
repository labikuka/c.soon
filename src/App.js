import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <CustomCursor />
      <MatrixBackground />
      <Header />
      <main>
        <Hero />
        <Tools />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
