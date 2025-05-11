import React from 'react';
import { Github, Linkedin, Twitter, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const footerLinks = [
    { title: 'About', href: '#' },
    { title: 'Privacy', href: '#' },
    { title: 'Terms', href: '#' },
    { title: 'Contact', href: '#' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-muted py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div variants={item} className="flex items-center space-x-2">
              <BrainCircuit className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">FinIQ</span>
            </motion.div>
            <motion.p variants={item} className="text-sm text-muted-foreground">
              Your AI financial coach in your pocket. Get personalized advice on budgeting, saving, investing, and debt planning.
            </motion.p>
            <motion.div variants={item} className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h4 variants={item} className="text-sm font-semibold">Company</motion.h4>
            <motion.ul variants={container} className="space-y-2">
              {footerLinks.slice(0, 2).map((link, index) => (
                <motion.li key={index} variants={item}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h4 variants={item} className="text-sm font-semibold">Legal</motion.h4>
            <motion.ul variants={container} className="space-y-2">
              {footerLinks.slice(2).map((link, index) => (
                <motion.li key={index} variants={item}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h4 variants={item} className="text-sm font-semibold">Subscribe</motion.h4>
            <motion.p variants={item} className="text-sm text-muted-foreground">
              Get the latest updates and news about FinIQ.
            </motion.p>
            <motion.div variants={item} className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-background border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground"
        >
          <p>&copy; {currentYear} FinIQ. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}