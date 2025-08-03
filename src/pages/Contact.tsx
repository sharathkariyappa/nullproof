import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Envelope, 
  MapPin, 
  Phone, 
  TwitterLogo, 
  LinkedinLogo, 
  DiscordLogo,
  PaperPlaneTilt
} from 'phosphor-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Envelope,
      title: 'Email Us',
      details: ['hello@nullproof.com', 'support@nullproof.com'],
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['San Francisco, CA', 'London, UK'],
      description: 'Our main offices'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+44 20 7123 4567'],
      description: 'Business hours: 9AM-6PM'
    }
  ];

  const socialLinks = [
    { icon: TwitterLogo, label: 'Twitter', href: '#', handle: '@nullproof' },
    { icon: LinkedinLogo, label: 'LinkedIn', href: '#', handle: '/company/nullproof' },
    { icon: DiscordLogo, label: 'Discord', href: '#', handle: 'nullproof.com/discord' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Have questions about Nullproof? We'd love to hear from you. 
                Send us a message and we'll respond as soon as possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 bg-background-secondary/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="glass-card p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon size={24} weight="light" className="text-white" />
                  </div>
                  <h3 className="text-lg font-medium tracking-tight mb-2">{info.title}</h3>
                  <p className="text-muted-foreground font-light text-sm mb-3">
                    {info.description}
                  </p>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-foreground font-light">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                  Send us a <span className="gradient-text">Message</span>
                </h2>
                <p className="text-muted-foreground font-light mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-glass border border-glass-border rounded-xl text-foreground placeholder-muted-foreground font-light focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-glass border border-glass-border rounded-xl text-foreground placeholder-muted-foreground font-light focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-glass border border-glass-border rounded-xl text-foreground font-light focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media & Press</option>
                      <option value="careers">Careers</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-glass border border-glass-border rounded-xl text-foreground placeholder-muted-foreground font-light focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="neuro-button px-8 py-4 rounded-xl font-light tracking-tight flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PaperPlaneTilt size={20} weight="light" />
                    Send Message
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Details */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="glass-card p-8 rounded-xl">
                  <h3 className="text-2xl font-medium tracking-tight mb-6">
                    Other Ways to <span className="gradient-text">Connect</span>
                  </h3>

                  <div className="space-y-6">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-glass-border/10 transition-colors duration-300 group"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <social.icon size={20} weight="light" className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-primary transition-colors duration-300">
                            {social.label}
                          </h4>
                          <p className="text-muted-foreground font-light text-sm">
                            {social.handle}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-8 rounded-xl">
                  <h3 className="text-xl font-medium tracking-tight mb-4">
                    Response Time
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">General inquiries</span>
                      <span className="text-primary">24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Technical support</span>
                      <span className="text-primary">12 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Enterprise sales</span>
                      <span className="text-primary">4 hours</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Contact;