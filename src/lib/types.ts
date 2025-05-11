export interface NavItem {
  title: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export type BudgetCategory = 'Housing' | 'Food' | 'Transportation' | 'Utilities' | 'Entertainment' | 'Savings' | 'Other';

export interface BudgetItem {
  category: BudgetCategory;
  amount: number;
  color: string;
}

export interface FinancialQuestion {
  id: number;
  text: string;
}

export type Theme = 'light' | 'dark' | 'system';