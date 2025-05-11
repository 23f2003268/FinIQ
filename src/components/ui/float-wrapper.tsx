import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface FloatWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amplitude?: number;
  duration?: number;
}

export function FloatWrapper({
  children,
  className,
  delay = 0,
  amplitude = 10,
  duration = 3,
}: FloatWrapperProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        repeat: Infinity,
        duration: duration,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}