import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import EarlyAccess from '../components/EarlyAccess';
import Roadmap from '../components/Roadmap';
import Tokenomics from '../components/Tokenomics';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navigation />
      
      <main>
        <Hero />
        <Testimonials />
        <HowItWorks />
        <EarlyAccess />
        <Tokenomics />
        <Roadmap />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Home;