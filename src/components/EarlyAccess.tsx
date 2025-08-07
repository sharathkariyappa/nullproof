import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { RocketLaunch, Gift, Coins, Sparkle } from 'phosphor-react';

const perks = [
  {
    icon: Gift,
    title: 'Exclusive Airdrop',
    description: 'Get rewarded with early tokens and perks by securing your spot now.',
    // color: 'from-pink-500 to-rose-400',
  },
  {
    icon: Coins,
    title: 'Private Sale Access',
    description: 'Be the first to participate in limited private rounds before public launch.',
    // color: 'from-yellow-500 to-orange-400',
  },
  {
    icon: Sparkle,
    title: 'Early User Benefits',
    description: 'Earn badges, DAO voting rights, and identity rewards from day one.',
    // color: 'from-violet-500 to-indigo-400',
  },
  {
    icon: RocketLaunch,
    title: 'Fast-Track Utility',
    description: 'Unlock features, mint credentials, and start building reputation early.',
    // color: 'from-teal-500 to-cyan-400',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const EarlyAccess = () => {
  const navigate = useNavigate();
  return (
    <section id="early-access" className="py-24 bg-background-secondary/40 relative">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Join <span className="gradient-text">Early Access</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Be among the first to earn airdrops, claim benefits, and shape the future of decentralized identity.
          </p>
        </motion.div>

        {/* Perks Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {perks.map((perk, index) => (
            <motion.div
              key={perk.title}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="p-8 glass-card rounded-2xl relative overflow-hidden group"
            >
              {/* Glow Effect */}
              <div className={`absolute -top-5 -left-5 w-24 h-24 bg-gradient-to-br blur-3xl opacity-30 group-hover:opacity-50 transition duration-500`} />

              {/* Icon */}
              <motion.div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 8 }}
              >
                <perk.icon size={28} weight="light" className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary text-2xl" />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-medium tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
                {perk.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground font-light leading-relaxed">
                {perk.description}
              </p>

              {/* Animated progress line */}
              <motion.div
                className="mt-6 w-full h-1 bg-glass-border rounded-full overflow-hidden"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                <div className={`h-full bg-gradient-to-r rounded-full`} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
           <button
            onClick={() => navigate('/early-access')}
            className="px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white hover:scale-105 shadow-lg hover:shadow-primary/40 transition-all duration-300"
          >
            Get Early Access
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EarlyAccess;
