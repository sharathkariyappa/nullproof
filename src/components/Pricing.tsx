import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Crown, Rocket } from 'phosphor-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      icon: Star,
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with basic trading',
      features: [
        'Basic AI trading insights',
        'Up to 10 trades per month',
        'Standard market data',
        'Email support',
        'Basic portfolio tracking'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      icon: Crown,
      price: '$29',
      period: 'per month',
      description: 'Advanced features for serious traders',
      features: [
        'Advanced AI trading algorithms',
        'Unlimited trades',
        'Real-time market data',
        'Priority support',
        'Advanced portfolio analytics',
        'Custom trading strategies',
        'Risk management tools',
        'API access'
      ],
      cta: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Rocket,
      price: 'Custom',
      period: 'contact us',
      description: 'Tailored solutions for institutions',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'Custom integrations',
        'White-label solutions',
        'Advanced compliance tools',
        'Multi-user management',
        'Custom reporting',
        'SLA guarantees'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Choose the plan that fits your trading needs. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`glass-card p-8 rounded-xl relative ${
                plan.popular ? 'ring-2 ring-primary/50 scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  Recommended
                </motion.div>
              )}

              <div className="text-center mb-8">
                <plan.icon size={32} weight="light" className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-medium tracking-tight mb-2">{plan.name}</h3>
                <p className="text-muted-foreground font-light mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-light gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground font-light ml-2">/ {plan.period}</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Check size={16} weight="bold" className="text-primary flex-shrink-0" />
                    <span className="text-foreground/90 font-light">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className={`w-full neuro-button py-3 rounded-xl font-light tracking-tight transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-primary text-primary-foreground hover:bg-primary-dark' 
                    : ''
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground font-light">
            All plans include 30-day money-back guarantee. No questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;