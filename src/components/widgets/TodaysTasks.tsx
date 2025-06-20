import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, Plus } from 'lucide-react';

const initialTasks = [
  { id: 1, title: 'Review quarterly budget', completed: false, priority: 'high' },
  { id: 2, title: 'Complete React course module', completed: true, priority: 'medium' },
  { id: 3, title: 'Buy groceries for dinner', completed: false, priority: 'low' },
  { id: 4, title: 'Morning workout routine', completed: true, priority: 'medium' },
  { id: 5, title: 'Team standup meeting', completed: false, priority: 'high' },
];

export default function TodaysTasks() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="space-y-3">
      <AnimatePresence>
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            onClick={() => toggleTask(task.id)}
          >
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex-shrink-0"
            >
              {task.completed ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </motion.div>
              ) : (
                <Circle className="w-5 h-5 text-gray-400 hover:text-emerald-600 transition-colors" />
              )}
            </motion.button>
            <div className="flex-1">
              <motion.p 
                animate={{ 
                  opacity: task.completed ? 0.6 : 1,
                  textDecoration: task.completed ? 'line-through' : 'none'
                }}
                className="text-sm text-gray-900"
              >
                {task.title}
              </motion.p>
              <div className="flex items-center mt-1">
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    task.priority === 'high' ? 'bg-red-100 text-red-700' :
                    task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-600'
                  }`}
                >
                  {task.priority}
                </motion.span>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      
      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center space-x-2 p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-emerald-300 hover:text-emerald-600 transition-colors"
      >
        <Plus className="w-4 h-4" />
        <span className="text-sm">Add new task</span>
      </motion.button>
    </div>
  );
}