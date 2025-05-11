import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Github } from 'lucide-react';
import { Button } from '../ui/button';

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent text-white py-16 px-6 md:px-12 max-w-5xl mx-auto"
        >
          {/* Background floating elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <motion.div
              className="absolute top-20 left-10 bg-white/10 rounded-full w-40 h-40 blur-xl"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 bg-white/10 rounded-full w-60 h-60 blur-xl"
              animate={{
                x: [0, -40, 0],
                y: [0, -20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="text-center relative z-10 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Let's Build a Smarter Financial Future
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl mx-auto mb-8 text-white/80"
            >
              Join thousands of users who are taking control of their finances with
              personalized AI advice. Start your journey to financial wellness today.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="xl"
                variant="default"
                className="bg-white text-primary hover:bg-white/90 group"
                onClick={() => document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Chat Now
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Get Involved
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub Repo
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}