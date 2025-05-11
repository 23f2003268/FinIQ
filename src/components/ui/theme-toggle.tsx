import React from 'react';
import { Button } from './button';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex space-x-1">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme('light')}
        className={`relative ${theme === 'light' ? 'text-primary' : 'text-muted-foreground'}`}
      >
        {theme === 'light' && (
          <motion.div
            className="absolute inset-0 rounded-md bg-primary/10"
            layoutId="theme-toggle-active"
          />
        )}
        <Sun className="h-5 w-5" />
        <span className="sr-only">Light</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme('dark')}
        className={`relative ${theme === 'dark' ? 'text-primary' : 'text-muted-foreground'}`}
      >
        {theme === 'dark' && (
          <motion.div
            className="absolute inset-0 rounded-md bg-primary/10"
            layoutId="theme-toggle-active"
          />
        )}
        <Moon className="h-5 w-5" />
        <span className="sr-only">Dark</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme('system')}
        className={`relative ${theme === 'system' ? 'text-primary' : 'text-muted-foreground'}`}
      >
        {theme === 'system' && (
          <motion.div
            className="absolute inset-0 rounded-md bg-primary/10"
            layoutId="theme-toggle-active"
          />
        )}
        <Monitor className="h-5 w-5" />
        <span className="sr-only">System</span>
      </Button>
    </div>
  );
}