import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, DollarSign, PieChart, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-1/4 right-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl -z-10"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl -z-10"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="gradient" className="mb-4">
                Your Financial Coach
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Smarter Finance. 
              <span className="text-primary"> Instantly.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-muted-foreground max-w-xl"
            >
              Get AI-powered budgeting, saving, and investing advice in a simple chat. 
              Your personal financial advisor is just a message away.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="xl"
                variant="gradient"
                className="group"
                onClick={() => document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Chat Now
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="bg-background/80 backdrop-blur-sm"
              >
                Join Beta
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column: Chat window preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative"
          >
            <div className="bg-card rounded-2xl shadow-lg border p-6 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold flex items-center">
                  <span className="text-primary mr-2">FinIQ</span> Assistant
                </h3>
                <span className="text-xs px-2 py-1 bg-success/10 text-success rounded-full">
                  Online
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-muted p-3 rounded-xl rounded-tl-none max-w-[80%]">
                  <p className="text-sm">Hello! I'm FinIQ, your AI financial advisor. How can I help with your finances today?</p>
                </div>
                
                <div className="bg-primary p-3 text-primary-foreground rounded-xl rounded-tr-none ml-auto max-w-[80%]">
                  <p className="text-sm">I need to create a monthly budget for my new job.</p>
                </div>
                
                <div className="bg-muted p-3 rounded-xl rounded-tl-none max-w-[80%]">
                  <p className="text-sm">Great! I can help you build a personalized budget. What's your monthly income after taxes?</p>
                </div>
              </div>

              <div className="mt-6 border-t pt-4">
                <div className="bg-background rounded-full p-2 flex items-center">
                  <input 
                    type="text" 
                    placeholder="Ask about your finances..." 
                    className="bg-transparent border-none focus:outline-none flex-1 text-sm px-2" 
                    disabled
                  />
                  <button className="bg-primary text-primary-foreground p-2 rounded-full">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating financial icons */}
            <motion.div 
              className="absolute top-12 -right-10 text-primary bg-card p-3 rounded-full shadow-md border animate-float"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <DollarSign className="h-6 w-6" />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-12 right-20 text-secondary bg-card p-3 rounded-full shadow-md border animate-float-delay-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <PieChart className="h-6 w-6" />
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 -right-4 text-accent bg-card p-3 rounded-full shadow-md border animate-float-delay-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <TrendingUp className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}