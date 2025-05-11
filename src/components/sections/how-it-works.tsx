import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Brain, LineChart } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Ask a Question',
      description: 'Type any financial question or concern. From budgeting to investing, FinIQ is ready to help.',
    },
    {
      icon: Brain,
      title: 'AI Processing',
      description: 'Our advanced AI analyzes your query and financial context to generate personalized advice.',
    },
    {
      icon: LineChart,
      title: 'Get Expert Advice',
      description: 'Receive clear, jargon-free guidance with actionable steps to improve your financial health.',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">How FinIQ Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Getting financial advice has never been easier. Our AI-powered platform
            delivers personalized guidance in seconds.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative"
            >
              <div className="bg-card rounded-xl p-6 h-full border shadow-sm relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-12 h-0.5 bg-border transform translate-x-6 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-primary" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}