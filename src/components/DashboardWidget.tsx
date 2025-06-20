import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface DashboardWidgetProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  headerAction?: React.ReactNode;
  icon?: LucideIcon;
  delay?: number;
}

export default function DashboardWidget({ 
  title, 
  children, 
  className = '', 
  headerAction,
  icon: Icon,
  delay = 0
}: DashboardWidgetProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className={`bg-white rounded-xl border border-gray-200 p-4 lg:p-6 hover:shadow-lg transition-all duration-300 ${className}`}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.3 }}
        className="flex items-center justify-between mb-4"
      >
        <div className="flex items-center space-x-2">
          {Icon && <Icon className="w-5 h-5 text-gray-600" />}
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        {headerAction}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.3, duration: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}