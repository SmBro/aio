import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp } from 'lucide-react';

export default function BudgetSnapshot() {
  const budget = {
    total: 3500,
    spent: 2100,
    remaining: 1400,
    categories: [
      { name: 'Food & Dining', spent: 580, budget: 800, color: 'bg-emerald-500' },
      { name: 'Transportation', spent: 320, budget: 400, color: 'bg-blue-500' },
      { name: 'Entertainment', spent: 180, budget: 300, color: 'bg-purple-500' },
      { name: 'Shopping', spent: 420, budget: 500, color: 'bg-orange-500' },
    ]
  };

  const spentPercentage = (budget.spent / budget.total) * 100;

  return (
    <div className="space-y-4">
      {/* Total Budget */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center p-4 bg-emerald-50 rounded-lg"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-emerald-700"
        >
          ${budget.remaining.toLocaleString()}
        </motion.div>
        <div className="text-sm text-emerald-600">Remaining this month</div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center mt-2 space-x-1"
        >
          <TrendingDown className="w-4 h-4 text-emerald-600" />
          <span className="text-xs text-emerald-600">12% less than last month</span>
        </motion.div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-2"
      >
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Monthly Budget</span>
          <span className="text-gray-900">${budget.spent} / ${budget.total}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${spentPercentage}%` }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="bg-emerald-600 h-2 rounded-full"
          ></motion.div>
        </div>
      </motion.div>

      {/* Categories */}
      <div className="space-y-2">
        {budget.categories.map((category, index) => (
          <motion.div 
            key={category.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center space-x-2">
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className={`w-3 h-3 rounded-full ${category.color}`}
              ></motion.div>
              <span className="text-gray-600">{category.name}</span>
            </div>
            <div className="text-gray-900">
              ${category.spent} / ${category.budget}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}