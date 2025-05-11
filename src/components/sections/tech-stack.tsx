import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Cloud, Cpu, Shield, Zap } from 'lucide-react';

export function TechStackSection() {
  const techStack = [
    { icon: Cpu, name: 'AI Engine', description: 'Powered by advanced natural language processing' },
    { icon: Server, name: 'React.js', description: 'Fast, responsive frontend experience' },
    { icon: Database, name: 'Secure Storage', description: 'End-to-end encrypted data handling' },
    { icon: Cloud, name: 'Cloud Infrastructure', description: 'Scalable, always available service' },
    { icon: Zap, name: 'Real-time Processing', description: 'Instant financial calculations' },
    { icon: Shield, name: 'Bank-level Security', description: 'Your data stays private and protected' },
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
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Powered by Advanced Technology</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            FinIQ leverages cutting-edge technology to deliver accurate, 
            personalized financial guidance instantly.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <tech.icon className="h-8 w-8" />
              </div>
              <h3 className="font-medium mb-1">{tech.name}</h3>
              <p className="text-xs text-muted-foreground">{tech.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-6 bg-card rounded-xl border shadow-sm max-w-4xl mx-auto glass-card"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">Our Data Flow</h3>
          <div className="relative">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto md:mx-0 mb-4">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                    }}
                  >
                    <Cpu className="h-8 w-8" />
                  </motion.div>
                </div>
                <h4 className="font-medium mb-2">User Interface</h4>
                <p className="text-sm text-muted-foreground">Your questions and financial data</p>
              </div>
              
              <motion.div
                className="h-0.5 w-12 md:w-full bg-gradient-to-r from-primary via-secondary to-accent"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-4">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 10,
                      ease: "linear"
                    }}
                  >
                    <Server className="h-8 w-8" />
                  </motion.div>
                </div>
                <h4 className="font-medium mb-2">AI Processing</h4>
                <p className="text-sm text-muted-foreground">Analysis and calculations</p>
              </div>
              
              <motion.div
                className="h-0.5 w-12 md:w-full bg-gradient-to-r from-secondary via-accent to-primary"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              <div className="text-center md:text-right">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto md:ml-auto mb-4">
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                    }}
                  >
                    <Zap className="h-8 w-8" />
                  </motion.div>
                </div>
                <h4 className="font-medium mb-2">Personalized Advice</h4>
                <p className="text-sm text-muted-foreground">Tailored financial guidance</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}