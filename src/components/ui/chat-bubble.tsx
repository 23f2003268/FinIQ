import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { BrainCircuit, User } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { ChatMessage } from '../../lib/types';

interface ChatBubbleProps {
  message: ChatMessage;
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'flex w-full mb-4',
        isUser ? 'justify-end' : 'justify-start'
      )}
    >
      {!isUser && (
        <div className="mr-2 flex-shrink-0">
          <Avatar>
            <AvatarFallback className="bg-primary/10 text-primary">
              <BrainCircuit className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      )}
      <div
        className={cn(
          'max-w-[80%] rounded-xl p-3',
          isUser
            ? 'bg-primary text-primary-foreground rounded-tr-none'
            : 'bg-muted text-foreground rounded-tl-none'
        )}
      >
        <p className="text-sm">{message.content}</p>
      </div>
      {isUser && (
        <div className="ml-2 flex-shrink-0">
          <Avatar>
            <AvatarFallback className="bg-secondary/10 text-secondary">
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      )}
    </motion.div>
  );
}

export function TypingIndicator() {
  return (
    <div className="flex items-center mb-4">
      <div className="mr-2 flex-shrink-0">
        <Avatar>
          <AvatarFallback className="bg-primary/10 text-primary">
            <BrainCircuit className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="bg-muted p-3 rounded-xl rounded-tl-none">
        <div className="flex space-x-1">
          <motion.div
            className="w-2 h-2 rounded-full bg-foreground/50"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1, delay: 0 }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-foreground/50"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-foreground/50"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
}