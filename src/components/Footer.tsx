import React from 'react';
import { motion } from 'framer-motion';
import { TwitterLogo, LinkedinLogo, GithubLogo, DiscordLogo } from 'phosphor-react';

const Footer = () => {
  const footerLinks = {
    // Product: ['Features', 'Pricing', 'Roadmap', 'API'],
    // Company: ['About', 'Blog', 'Careers', 'Press'],
    // Resources: ['Documentation', 'Whitepaper', 'Community', 'Support'],
    // Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance']
  };

  const socialLinks = [
    { icon: TwitterLogo, href: '#', label: 'Twitter' },
    { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
    { icon: GithubLogo, href: '#', label: 'GitHub' },
    { icon: DiscordLogo, href: '#', label: 'Discord' }
  ];

  return (
    <footer className="bg-background-secondary border-t border-glass-border/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-6 gap-8">
          {/* Brand */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-semibold gradient-text tracking-tight mb-4">
              Nullproof
            </div>
            <p className="text-muted-foreground font-light leading-relaxed mb-6 max-w-sm">
              Revolutionary zk-Native Identity Protocol for sophisticated financial decision making 
              in the web3 era.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <social.icon size={20} weight="light" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {/* {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-foreground font-medium tracking-tight mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))} */}
        </div>

        {/* Bottom */}
        <motion.div
          className="mt-12 pt-8 border-t border-glass-border/30 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground font-light text-sm">
            © 2025 Nullproof. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;