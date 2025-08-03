import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkle } from 'phosphor-react';

const Hero = () => {
  const handleGetStarted = () => {
    const element = document.querySelector('#how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <iframe 
          src='https://my.spline.design/particles-RfOZpqMXGw6f77Uf9GGkmMkK/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full object-cover"
        />
        {/* Hide Spline watermark */}
        <div className="absolute bottom-0 right-0 h-20 w-40 bg-background backdrop-blur-sm z-10" />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] z-10" />
      
      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-6 pt-20">
        {/* Beta Badge */}
        <motion.div
          className="mb-8 flex items-center justify-center gap-2 px-6 py-3 glass-card rounded-full text-sm text-primary font-light mx-auto w-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Sparkle size={16} weight="light" />
          Revolutionary zk-Native Identity Protocol
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-8 leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="gradient-text">Nullproof</span>
          <br />
          <span className="text-4xl md:text-5xl lg:text-6xl text-muted-foreground">
            Identity Beyond Limits
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Redefining digital identity with zero-knowledge proofs. Secure, private, and verifiable identity protocol for the decentralized future.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.button
            onClick={handleGetStarted}
            className="neuro-button px-10 py-5 rounded-xl text-lg font-light tracking-tight flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Explore the Protocol
            <ArrowRight 
              size={20} 
              weight="light" 
              className="group-hover:translate-x-1 transition-transform duration-300" 
            />
          </motion.button>
        </motion.div>
      </div>

  
    </section>
  );
};

export default Hero;