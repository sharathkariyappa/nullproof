import React from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Shield,
  Lock,
  Brain,
  Eye,
  GitBranch,
} from 'phosphor-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Database,
      title: 'Multi-Source Data Analysis',
      description:
        'Combines on-chain transactions with off-chain reputation signals for comprehensive identity mapping',
      category: 'Data Intelligence',
    },
    {
      icon: Shield,
      title: 'Zero-Knowledge Verification',
      description:
        'Privacy-preserving verification that proves identity without revealing sensitive information',
      category: 'Privacy First',
    },
    {
      icon: Lock,
      title: 'Cryptographic Security',
      description:
        'Military-grade encryption ensures your data remains secure and tamper-proof',
      category: 'Security',
    },
    {
      icon: Brain,
      title: 'AI-Driven Assessment',
      description:
        'Machine learning algorithms analyze patterns to accurately determine roles and contributions',
      category: 'Intelligence',
    },
    {
      icon: Eye,
      title: 'Transparent Proofs',
      description:
        'Verifiable on-chain without exposing raw user data or violating trust boundaries',
      category: 'Transparency',
    },
    {
      icon: GitBranch,
      title: 'Merit-Based Identity',
      description:
        'Identity earned through provable actions, not credentials or documentation',
      category: 'Merit System',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            How <span className="gradient-text">Nullproof</span> Works
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Understand the protocol powering your decentralized identity
          </p>
        </motion.div>

        {/* Horizontal Scroll Animation */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex gap-6 pb-6"
            animate={{ x: [-20, -2000] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...steps, ...steps].map((step, index) => (
              <motion.div
                key={`${step.title}-${index}`}
                className="flex-shrink-0 w-80 glass-card p-6 rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary text-2xl">
                    <step.icon size={28} weight="light" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-medium tracking-tight mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step Number */}
                  <div className="mt-4 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">
                    {index % steps.length + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>

  );
};

export default HowItWorks;
