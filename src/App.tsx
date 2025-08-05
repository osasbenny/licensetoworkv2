import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Timeline from './components/Timeline';
import Features from './components/Features';
import Outcomes from './components/Outcomes';
import ApplicationForm from './components/ApplicationForm';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <About />
      <Pillars />
      <Timeline />
      <Features />
      <Outcomes />
      <ApplicationForm />
      <Partners />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;