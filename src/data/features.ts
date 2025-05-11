import { Feature } from '../lib/types';
import { BarChart4, CoinsIcon, TrendingUp, BadgePercent, DollarSign, GraduationCap } from 'lucide-react'; 

export const features: Feature[] = [
  {
    id: 1,
    title: 'Smart Budget Builder',
    description: 'Enter your income and expenses to get a personalized budget breakdown with savings recommendations.',
    icon: BarChart4,
  },
  {
    id: 2,
    title: 'Investment Advisor',
    description: 'Receive tailored investment strategies based on your risk tolerance and financial goals.',
    icon: TrendingUp,
  },
  {
    id: 3,
    title: 'Debt Optimizer',
    description: 'Find the fastest and most cost-effective way to eliminate debt using proven strategies.',
    icon: BadgePercent,
  },
  {
    id: 4,
    title: 'Savings Planner',
    description: 'Set financial goals and get a clear roadmap to achieve them through optimized saving plans.',
    icon: CoinsIcon,
  },
  {
    id: 5,
    title: 'Expense Tracker',
    description: 'Monitor your spending patterns and receive alerts when you are exceeding your budget limits.',
    icon: DollarSign,
  },
  {
    id: 6,
    title: 'Financial Education',
    description: 'Learn key financial concepts through bite-sized lessons and interactive quizzes.',
    icon: GraduationCap,
  },
];