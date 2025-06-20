import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, ChefHat } from 'lucide-react';

export default function MealPlan() {
  const todaysMeals = [
    {
      type: 'Breakfast',
      meal: 'Avocado Toast & Coffee',
      time: '8:00 AM',
      calories: 320,
      status: 'completed'
    },
    {
      type: 'Lunch',
      meal: 'Quinoa Buddha Bowl',
      time: '12:30 PM',
      calories: 450,
      status: 'current'
    },
    {
      type: 'Dinner',
      meal: 'Grilled Salmon & Vegetables',
      time: '7:00 PM',
      calories: 520,
      status: 'planned'
    }
  ];

  return (
    <div className="space-y-4">
      {todaysMeals.map((meal, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className={`p-3 rounded-lg border-l-4 transition-all duration-200 ${
            meal.status === 'completed' ? 'border-emerald-500 bg-emerald-50' :
            meal.status === 'current' ? 'border-orange-500 bg-orange-50' :
            'border-gray-300 bg-gray-50'
          }`}
        >
          <div className="flex items-start justify-between mb-2">
            <div>
              <h4 className="font-medium text-gray-900">{meal.meal}</h4>
              <p className="text-sm text-gray-600">{meal.type}</p>
            </div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`px-2 py-1 rounded-full text-xs ${
                meal.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                meal.status === 'current' ? 'bg-orange-100 text-orange-700' :
                'bg-gray-100 text-gray-600'
              }`}
            >
              {meal.status}
            </motion.div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{meal.time}</span>
            </div>
            <div className="flex items-center space-x-1">
              <ChefHat className="w-3 h-3" />
              <span>{meal.calories} cal</span>
            </div>
          </div>
        </motion.div>
      ))}

      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
      >
        View Full Meal Plan →
      </motion.button>
    </div>
  );
}