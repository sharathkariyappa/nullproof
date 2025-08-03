import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb } from 'phosphor-react';

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-background-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              We believe that sophisticated financial tools shouldn't be exclusive to institutional investors.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-8 md:p-12 rounded-2xl mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <Target size={48} weight="light" className="text-primary mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
                Democratizing Advanced Financial Technology
              </h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                At Nullproof, we're on a mission to make institutional-grade trading tools accessible to everyone. 
                We combine cutting-edge AI technology with zero-knowledge cryptography to create a platform that 
                is both powerful and private, sophisticated yet simple.
              </p>
              <blockquote className="text-xl md:text-2xl font-light text-primary italic leading-relaxed">
                "Every individual deserves access to the same advanced financial tools that were once 
                reserved for Wall Street."
              </blockquote>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Heart size={32} weight="light" className="text-primary mb-4" />
              <h4 className="text-xl font-medium tracking-tight mb-3">Why We Built This</h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                We saw how complex and intimidating traditional financial platforms could be. 
                We wanted to create something that felt approachable while being incredibly powerful under the hood.
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Lightbulb size={32} weight="light" className="text-primary mb-4" />
              <h4 className="text-xl font-medium tracking-tight mb-3">Our Vision</h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                A world where anyone can make informed financial decisions with confidence, 
                backed by AI insights and protected by next-generation privacy technology.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground font-light">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Privacy First
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                AI Powered
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                User Focused
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;