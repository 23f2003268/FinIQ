import React, { createContext, useContext, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChatMessage, BudgetCategory, BudgetItem } from '../lib/types';
import { sleep } from '../lib/utils';
const id = uuidv4();
// Predefined responses
const RESPONSES: Record<string, string> = {
  DEFAULT: "I'm FinIQ, your AI financial assistant. How can I help with your finances today?",
  GREETING: "Hello! I'm FinIQ, your AI financial advisor. I can help with budgeting, saving, investing, and debt planning. What would you like to know?",
  BUDGET: "Based on your income, I recommend following the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings and debt repayment.",
  SAVE: "To boost your savings, try automating transfers to a high-yield savings account right after payday. Even small amounts add up over time!",
  INVEST: "For beginner investors, consider starting with low-cost index funds or ETFs. They provide diversification with minimal fees.",
  DEBT: "When tackling debt, focus on high-interest debt first (like credit cards) while making minimum payments on others. This is called the avalanche method.",
  EMERGENCY: "Aim to build an emergency fund that covers 3-6 months of essential expenses. Keep it in an easily accessible account.",
  NOTSURE: "I'm not sure I understand your question. Could you rephrase it? I can help with budgeting, saving, investing, and debt management.",
};

interface ChatContextType {
  messages: ChatMessage[];
  isTyping: boolean;
  sendMessage: (content: string) => Promise<void>;
  clearChat: () => void;
  suggestedQuestions: string[];
  getSampleBudget: (income?: number) => BudgetItem[];
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const defaultBudget: BudgetItem[] = [
  { category: 'Housing', amount: 1500, color: '#8b5cf6' },
  { category: 'Food', amount: 500, color: '#06b6d4' },
  { category: 'Transportation', amount: 400, color: '#10b981' },
  { category: 'Utilities', amount: 300, color: '#f59e0b' },
  { category: 'Entertainment', amount: 300, color: '#ef4444' },
  { category: 'Savings', amount: 600, color: '#6366f1' },
  { category: 'Other', amount: 400, color: '#94a3b8' },
];

const suggestedQuestions = [
  "How much should I save each month?",
  "How do I create a budget?",
  "Should I pay off debt or invest?",
  "How do I start investing with little money?"
];

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: uuidv4(),
      role: 'assistant',
      content: RESPONSES.GREETING,
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const processUserMessage = useCallback(async (content: string): Promise<string> => {
    const lowerContent = content.toLowerCase();
    
    // Simple keyword matching
    if (lowerContent.includes('hello') || lowerContent.includes('hi')) {
      return RESPONSES.GREETING;
    } else if (lowerContent.includes('budget') || lowerContent.includes('spend')) {
      return RESPONSES.BUDGET;
    } else if (lowerContent.includes('save') || lowerContent.includes('saving')) {
      return RESPONSES.SAVE;
    } else if (lowerContent.includes('invest') || lowerContent.includes('stock')) {
      return RESPONSES.INVEST;
    } else if (lowerContent.includes('debt') || lowerContent.includes('loan') || lowerContent.includes('credit')) {
      return RESPONSES.DEBT;
    } else if (lowerContent.includes('emergency') || lowerContent.includes('fund')) {
      return RESPONSES.EMERGENCY;
    } else {
      return RESPONSES.NOTSURE;
    }
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: uuidv4(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI thinking time
    await sleep(1500);

    // Process and add assistant response
    const responseContent = await processUserMessage(content);
    const assistantMessage: ChatMessage = {
      id: uuidv4(),
      role: 'assistant',
      content: responseContent,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  }, [processUserMessage]);

  const clearChat = useCallback(() => {
    setMessages([
      {
        id: uuidv4(),
        role: 'assistant',
        content: RESPONSES.GREETING,
        timestamp: new Date(),
      },
    ]);
  }, []);

  const getSampleBudget = useCallback((income: number = 4000): BudgetItem[] => {
    if (!income || income <= 0) income = 4000;
    
    // Scale the default budget to the provided income
    const scaleFactor = income / 4000;
    
    return defaultBudget.map(item => ({
      ...item,
      amount: Math.round(item.amount * scaleFactor),
    }));
  }, []);

  return (
    <ChatContext.Provider
      value={{
        messages,
        isTyping,
        sendMessage,
        clearChat,
        suggestedQuestions,
        getSampleBudget,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => {
  const context = useContext(ChatContext);
  
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  
  return context;
};