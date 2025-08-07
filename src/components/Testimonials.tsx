import React from 'react';

const partners = [
  {
    name: 'Dcodeblock',
    description:
      'AI-powered gamified platform for Web3 learning & building projects, enabling developers to transition & unlock opportunities in Web3.',
    logo: '/dcodeblock.jpg',
    badge: 'Launch Partner',
    impact: 'Backed early integrations',
  },
  {
    name: 'Virtuals',
    description:
      'Virtuals Protocol is a society of productive AI agents, each designed to generate services or products and autonomously engage in onchain commerce.',
    logo: '/virtuals1.png',
    badge: 'Launching Platform',
    impact: 'Genesis protocol vault',
  },
];

const Partners = () => {
  return (
    <section className="py-20 flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
        Launching with <span className="gradient-text">Top Partners</span>
      </h2>

      <p className="text-xl text-muted-foreground font-light max-w-2xl mb-10">
        Strategic collaborations powering our ecosystem from day one.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="p-6 border rounded-2xl shadow-sm flex flex-col gap-4 items-center glass-card"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full overflow-hidden">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold">{partner.name}</h3>

            <span className="text-sm text-muted-foreground">{partner.badge}</span>

            <p className="text-sm text-muted-foreground leading-relaxed text-center">
              {partner.description}
            </p>

            <div className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-light">
              {partner.impact}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
