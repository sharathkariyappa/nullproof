import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Target, Lightbulb, Shield } from 'phosphor-react';

const About = () => {
  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former Goldman Sachs VP with 10+ years in fintech and blockchain.',
      image: 'AC'
    },
    {
      name: 'Sarah Kim',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google AI researcher specializing in machine learning and cryptography.',
      image: 'SK'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Security',
      bio: 'Former NSA cybersecurity expert with expertise in zero-knowledge protocols.',
      image: 'MJ'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Product',
      bio: 'Former Coinbase product manager with deep DeFi and UX expertise.',
      image: 'ER'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'We believe privacy is a fundamental right, not a luxury. Every feature is designed with privacy at its core.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Our AI-driven approach ensures every trading decision is backed by precise data analysis and market intelligence.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously push the boundaries of what\'s possible in decentralized finance and AI technology.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We\'re building for our community, listening to feedback and evolving based on real user needs.'
    }
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
        <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
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
              <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
                About <span className="gradient-text">Nullproof</span>
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                We're building the future of decentralized finance where privacy, 
                intelligence, and sophistication converge to create unprecedented 
                trading experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="glass-card p-8 md:p-12 rounded-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">Our Story</h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                  <p>
                    Nullproof was born from a simple observation: the most sophisticated 
                    financial tools were locked away behind institutional walls, while 
                    everyday traders were left with basic platforms that couldn't match 
                    their ambitions.
                  </p>
                  <p>
                    Our founders, coming from backgrounds in traditional finance, AI research, 
                    and cybersecurity, saw an opportunity to democratize access to institutional-grade 
                    trading technology while addressing the fundamental privacy concerns that 
                    plague centralized platforms.
                  </p>
                  <p>
                    Today, we're building the most advanced privacy-preserving trading platform 
                    in the world, combining zero-knowledge cryptography with cutting-edge AI 
                    to create a new paradigm for decentralized finance.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                The principles that guide everything we build
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="glass-card p-6 rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <value.icon size={32} weight="light" className="text-primary mb-4" />
                  <h3 className="text-xl font-medium tracking-tight mb-3">{value.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                Meet the <span className="gradient-text">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                Experienced professionals from finance, technology, and security
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="glass-card p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-lg font-medium mx-auto mb-4">
                    {member.image}
                  </div>
                  <h3 className="text-lg font-medium tracking-tight mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default About;