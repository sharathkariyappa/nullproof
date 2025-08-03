import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'phosphor-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is zk-Native Identity Protocol?',
      answer: 'Our zk-Native Identity Protocol uses zero-knowledge cryptography to verify your identity without revealing personal information. This ensures maximum privacy while maintaining full compliance and security standards.'
    },
    {
      question: 'How does the AI trading assistant work?',
      answer: 'Our AI analyzes vast amounts of market data, news sentiment, and historical patterns to provide personalized trading recommendations. It learns from your preferences and risk tolerance to continuously improve its suggestions.'
    },
    {
      question: 'Is my data secure with Nullproof?',
      answer: 'Absolutely. We use bank-grade encryption, zero-knowledge proofs, and never store sensitive data on our servers. Your trading information and personal data remain completely private and under your control.'
    },
    {
      question: 'What cryptocurrencies does Nullproof support?',
      answer: 'We support all major cryptocurrencies including Bitcoin, Ethereum, and hundreds of altcoins. Our platform also supports multiple blockchain networks and DEX integrations for maximum trading opportunities.'
    },
    {
      question: 'Can I use Nullproof on mobile devices?',
      answer: 'Yes, Nullproof is fully responsive and optimized for mobile devices. We also have dedicated mobile apps for iOS and Android coming soon with the same powerful features.'
    },
    {
      question: 'What fees does Nullproof charge?',
      answer: 'We charge no platform fees for the Free plan. Pro and Enterprise plans have transparent monthly subscriptions with no hidden trading fees. We only charge what you see in our pricing section.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Everything you need to know about Nullproof
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-glass-border/10 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ x: 5 }}
                >
                  <h3 className="text-lg font-medium tracking-tight pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? (
                      <Minus size={20} weight="light" className="text-primary flex-shrink-0" />
                    ) : (
                      <Plus size={20} weight="light" className="text-primary flex-shrink-0" />
                    )}
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground font-light mb-4">
            Still have questions? We're here to help.
          </p>
          <motion.button
            className="neuro-button px-6 py-3 rounded-xl font-light tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;