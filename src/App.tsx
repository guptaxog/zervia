import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import CoreFeatures from './components/CoreFeatures';
import SuccessStories from './components/SuccessStories';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Zervia - Empowering Students with Startup Opportunities';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <CoreFeatures />
      <SuccessStories />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;