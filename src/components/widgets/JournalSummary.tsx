import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Edit3, Calendar } from 'lucide-react';

export default function JournalSummary() {
  const recentEntries = [
    {
      date: 'Today',
      title: 'Morning Reflections',
      preview: 'Started the day with gratitude practice. Feeling energized about the new React project...',
      mood: '😊'
    },
    {
      date: 'Yesterday',
      title: 'Project Milestone',
      preview: 'Successfully completed the authentication module. Team collaboration was excellent...',
      mood: '🎉'
    },
    {
      date: '2 days ago',
      title: 'Weekend Plans',
      preview: 'Looking forward to hiking trip this weekend. Need to prepare gear and check weather...',
      mood: '🏔️'
    }
  ];

  return (
    <div className="space-y-4">
      {/* Quick Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-3"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-center p-3 bg-purple-50 rounded-lg"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="text-lg font-bold text-purple-700"
          >
            7
          </motion.div>
          <div className="text-xs text-purple-600">This week</div>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-center p-3 bg-blue-50 rounded-lg"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="text-lg font-bold text-blue-700"
          >
            23
          </motion.div>
          <div className="text-xs text-blue-600">This month</div>
        </motion.div>
      </motion.div>

      {/* Recent Entries */}
      <div className="space-y-3">
        {recentEntries.map((entry, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="p-3 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <motion.span 
                  whileHover={{ scale: 1.2 }}
                  className="text-lg"
                >
                  {entry.mood}
                </motion.span>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{entry.title}</h4>
                  <p className="text-xs text-gray-500">{entry.date}</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">{entry.preview}</p>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex space-x-2"
      >
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 flex items-center justify-center space-x-2 py-2 px-3 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Edit3 className="w-4 h-4" />
          <span>New Entry</span>
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
        >
          <BookOpen className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </div>
  );
}