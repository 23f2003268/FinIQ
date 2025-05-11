import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, RefreshCw } from 'lucide-react';
import { Button } from '../ui/button';
import { ChatBubble, TypingIndicator } from '../ui/chat-bubble';
import { useChat } from '../../context/ChatContext';

export function ChatSection() {
  const { messages, isTyping, sendMessage, clearChat, suggestedQuestions } = useChat();
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      sendMessage(userInput);
      setUserInput('');
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    sendMessage(question);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  return (
    <section id="chat-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Ask FinIQ Anything</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get personalized financial advice instantly. Try asking about budgeting,
              investing, saving strategies, or debt management.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl shadow-md border overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b bg-muted/30">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-success" />
                <h3 className="font-medium">FinIQ Assistant</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearChat}
                className="text-xs flex items-center gap-1"
              >
                <RefreshCw className="h-3 w-3" />
                <span>New Chat</span>
              </Button>
            </div>

            <div className="p-4 h-[400px] overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message) => (
                  <ChatBubble key={message.id} message={message} />
                ))}
                {isTyping && <TypingIndicator />}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="p-4 border-t bg-muted/30">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Ask about your finances..."
                  className="flex-1 bg-background rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" variant="primary" size="icon" disabled={!userInput.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>

              <div className="mt-4 flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="text-xs bg-muted px-3 py-1 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}