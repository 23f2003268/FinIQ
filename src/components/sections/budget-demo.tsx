import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { useChat } from '../../context/ChatContext';
import { formatAmount } from '../../lib/utils';

export function BudgetDemoSection() {
  const { getSampleBudget } = useChat();
  const budgetData = getSampleBudget(4000);
  const totalBudget = budgetData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Interactive Demo</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how FinIQ can help you visualize and optimize your monthly budget.
            This example shows a recommended budget breakdown for a $4,000 monthly income.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl p-6 shadow-md border"
          >
            <div className="flex justify-center mb-8">
              <PieChart width={300} height={300}>
                <Pie
                  data={budgetData}
                  cx="50%"
                  cy="50%"
                  innerRadius="30%"
                  outerRadius="90%"
                  paddingAngle={2}
                  cornerRadius={4}
                  dataKey="amount"
                  label={({ category }) => category}
                  labelLine={false}
                >
                  {budgetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => formatAmount(value as number)}
                  labelFormatter={(index) => budgetData[index as number].category}
                />
              </PieChart>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {budgetData.map((item) => (
                <div key={item.category} className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="text-sm">
                    <span className="text-muted-foreground">{item.category}:</span>
                    <span className="font-medium ml-1">{formatAmount(item.amount)}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-xl p-6 border shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Monthly Budget Overview</h3>
              <p className="text-muted-foreground mb-4">
                Based on your monthly income of {formatAmount(totalBudget)}, here's how we recommend
                allocating your funds following the 50/30/20 rule:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Essentials (50%): {formatAmount(totalBudget * 0.5)}</h4>
                  <div className="bg-muted h-2 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-primary h-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '50%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Wants (30%): {formatAmount(totalBudget * 0.3)}</h4>
                  <div className="bg-muted h-2 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-secondary h-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '30%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Savings & Debt (20%): {formatAmount(totalBudget * 0.2)}</h4>
                  <div className="bg-muted h-2 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-accent h-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '20%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-l-4 border-success bg-success/5 rounded-r-md">
              <p className="text-sm">
                <span className="font-semibold">FinIQ Tip:</span> By following this budget distribution,
                you'll build financial stability while still enjoying your current lifestyle.
                Automatic transfers to savings on payday can help maintain this balance effortlessly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}