import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Users, Megaphone, Gift, Vault } from 'phosphor-react';

const Tokenomics = () => {
  const tokenomicsItems = [
    {
      title: 'Dev Team',
      percentage: '25%',
      description: 'Core developers & ops',
      icon: <Users size={24} weight="light" className="text-primary" />,
    },
    {
      title: 'KOLs',
      percentage: '10%',
      description: 'Amplify launch & shill',
      icon: <Megaphone size={24} weight="light" className="text-primary" />,
    },
    {
      title: 'DcodeBlock',
      percentage: '10%',
      description: 'Support, infra & ops',
      icon: <Coins size={24} weight="light" className="text-primary" />,
    },
    {
      title: 'Airdrops',
      percentage: '5%',
      description: 'Quests & community rewards',
      icon: <Gift size={24} weight="light" className="text-primary" />,
    },
    {
      title: 'Virtuals',
      percentage: '50%',
      description: 'Genesis protocol vault',
      icon: <Vault size={24} weight="light" className="text-primary" />,
    },
  ];

  return (
    <section id="tokenomics" className="py-20 bg-background-secondary/30">
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
            Token <span className="gradient-text">Allocation</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Fixed H2L / Virtuals Genesis structure ensuring fair distribution and ecosystem growth
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
              ease: 'linear',
            }}
          >
            {[...tokenomicsItems, ...tokenomicsItems].map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                className="flex-shrink-0 w-80 glass-card p-6 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <div className="flex flex-col gap-4 h-full">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-primary">
                    {item.percentage}
                  </h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex-grow" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
