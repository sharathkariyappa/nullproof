import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Circle, Clock } from 'phosphor-react';

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: 'Q3 2025',
      title: 'MVP & Virtuals Launch',
      description:
        'First working version of the NullProof protocol goes live with basic features and a public demo.',
      status: 'completed',
      features: [
        'MVP ready for demo & use',
        'ZK-proof verification for founders & investors',
        'Basic badge minting (AGT)',
        'Sepolia testnet & Ethereum mainnet',
        'Virtuals Demo Day at Hack2Launch',
        'Initial DAO feedback loop',
      ],
    },
    {
      quarter: 'Q4 2025',
      title: 'DAO & Governance Rollout',
      description:
        'Governance systems go live and partnership integrations begin to onboard ecosystem players.',
      status: 'in-progress',
      features: [
        'Governance module & AGT-based voting',
        'Proposals for badge types & upgrades',
        'Partnerships with DAOs & dApps',
        'Grant platform integrations',
        'Ambassador & bounty programs',
        'AGT incentive pools',
      ],
    },
    {
      quarter: 'Q1 2026',
      title: 'SDK, API, & Custom Badge Layer',
      description:
        'Developer tooling and extensibility layers for easy integration and custom badge use.',
      status: 'planned',
      features: [
        'Plug-and-play SDK',
        'REST + GraphQL APIs',
        'Custom badge marketplace',
        'DAO-curated templates',
        'React Native mobile support',
      ],
    },
    {
      quarter: 'Q2 2026',
      title: 'Mentorship & Cross-Chain Expansion',
      description:
        'Cross-chain interoperability and identity proof standards to support multi-chain ecosystems.',
      status: 'planned',
      features: [
        'Mentorship & role networking',
        'AI-based role matching',
        'Cross-chain ZK proofs (Solana, Polygon, Optimism, BSV)',
        'DID & ZK proof standardization',
        'EIP/ERC proposals for ZK-role proofs',
      ],
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={24} weight="fill" className="text-green-500" />;
      case 'in-progress':
        return <Clock size={24} weight="light" className="text-primary" />;
      default:
        return <Circle size={24} weight="light" className="text-muted-foreground" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'border-green-500';
      case 'in-progress':
        return 'border-primary';
      default:
        return 'border-muted-foreground';
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-background-secondary/30">
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
            Product <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Key milestones showcasing our commitment to building verifiable identity infrastructure
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
            {[...roadmapItems, ...roadmapItems].map((item, index) => (
              <motion.div
                key={`${item.quarter}-${index}`}
                className="flex-shrink-0 w-96 glass-card p-6 rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <div className="flex flex-col gap-4 h-full">
                  <div className="flex items-center gap-3 text-primary">
                    <Calendar size={20} weight="light" />
                    <span className="font-medium">{item.quarter}</span>
                  </div>
                  <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="min-h-[72px] flex flex-wrap gap-2 pt-2">
                    {item.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-light"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex-grow" />
                  <div
                    className={`mt-4 w-8 h-8 rounded-full border-2 ${getStatusColor(
                      item.status
                    )} flex items-center justify-center`}
                  >
                    {getStatusIcon(item.status)}
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

export default Roadmap;
