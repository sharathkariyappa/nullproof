import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, Download, Eye, Clock } from 'phosphor-react';

const Whitepaper = () => {
  const sections = [
    'Executive Summary',
    'Introduction to zk-Native Identity',
    'Technical Architecture',
    'AI Trading Algorithms',
    'Privacy & Security Framework',
    'Tokenomics & Governance',
    'Roadmap & Future Development',
    'Conclusion & References'
  ];

  const stats = [
    { label: 'Pages', value: '47' },
    { label: 'Reading Time', value: '25 min' },
    { label: 'Last Updated', value: 'Dec 2024' },
    { label: 'Version', value: '2.1' }
  ];

  return (
    <motion.div
      className="min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section with Spline Background */}
        <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
          {/* Spline Background */}
          <div className="absolute inset-0 z-0">
            <iframe 
              src='https://my.spline.design/particles-RfOZpqMXGw6f77Uf9GGkmMkK/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              className="w-full h-full object-cover"
            />
            {/* Hide Spline watermark */}
            <div className="absolute bottom-0 right-0 w-32 h-16 bg-background z-10"></div>
          </div>
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] z-10" />
          
          <div className="relative z-20 container mx-auto px-6">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <FileText size={40} weight="light" className="text-white" />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
                Nullproof <span className="gradient-text">Whitepaper</span>
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                A comprehensive technical overview of our revolutionary zk-Native 
                Identity Protocol and AI-powered trading infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="neuro-button px-8 py-4 rounded-xl text-lg font-light tracking-tight flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} weight="light" />
                  Download PDF
                </motion.button>
                <motion.button
                  className="glass-card px-8 py-4 rounded-xl text-lg font-light tracking-tight flex items-center gap-3 border border-glass-border"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye size={20} weight="light" />
                  Read Online
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-background-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl md:text-3xl font-light gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-light text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8 text-center">
                Table of <span className="gradient-text">Contents</span>
              </h2>

              <div className="glass-card p-8 rounded-xl">
                <div className="space-y-4">
                  {sections.map((section, index) => (
                    <motion.div
                      key={section}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-glass-border/10 transition-colors duration-300 cursor-pointer group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium tracking-tight group-hover:text-primary transition-colors duration-300">
                          {section}
                        </h3>
                      </div>
                      <div className="text-muted-foreground text-sm">
                        Page {Math.floor(Math.random() * 40) + 5}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Abstract Preview */}
        <section className="py-20 bg-background-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8 text-center">
                Abstract <span className="gradient-text">Preview</span>
              </h2>

              <div className="glass-card p-8 md:p-12 rounded-xl">
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                  <p>
                    <strong className="text-foreground">Nullproof</strong> introduces a revolutionary 
                    zk-Native Identity Protocol that fundamentally transforms how privacy and verification 
                    coexist in decentralized financial systems. By leveraging advanced zero-knowledge 
                    cryptography, we enable complete identity verification without compromising user privacy.
                  </p>
                  <p>
                    Our platform integrates sophisticated artificial intelligence algorithms trained on 
                    vast datasets of market behavior, enabling personalized trading strategies that adapt 
                    to individual risk profiles and market conditions in real-time.
                  </p>
                  <p>
                    This whitepaper presents the technical architecture, cryptographic foundations, 
                    and AI methodologies that power the Nullproof ecosystem, demonstrating how we achieve 
                    institutional-grade performance while maintaining the privacy and decentralization 
                    principles that define the future of finance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                Ready to Dive <span className="gradient-text">Deeper?</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light mb-8">
                Download the complete whitepaper and explore the technical foundations 
                of our revolutionary platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="neuro-button px-8 py-4 rounded-xl text-lg font-light tracking-tight flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} weight="light" />
                  Download Full PDF
                </motion.button>
                <motion.button
                  className="glass-card px-8 py-4 rounded-xl text-lg font-light tracking-tight flex items-center gap-3 border border-glass-border"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Clock size={20} weight="light" />
                  Get Notified of Updates
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Whitepaper;