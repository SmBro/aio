import React from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle, Clock } from 'lucide-react';

export default function CourseModule() {
  const currentCourse = {
    title: 'Advanced React Patterns',
    module: 'State Management with Zustand',
    progress: 65,
    timeRemaining: '12 min',
    nextLesson: 'Custom Hooks & Context'
  };

  return (
    <div className="space-y-4">
      {/* Course Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-start space-x-3"
      >
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
        >
          <Play className="w-6 h-6 text-white" />
        </motion.div>
        <div className="flex-1">
          <h4 className="font-medium text-gray-900">{currentCourse.title}</h4>
          <p className="text-sm text-gray-600">{currentCourse.module}</p>
        </div>
      </motion.div>

      {/* Progress */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-2"
      >
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Progress</span>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-900"
          >
            {currentCourse.progress}%
          </motion.span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${currentCourse.progress}%` }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
          ></motion.div>
        </div>
      </motion.div>

      {/* Time Remaining */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-between p-3 bg-blue-50 rounded-lg"
      >
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-blue-600" />
          <span className="text-sm text-blue-700">{currentCourse.timeRemaining} remaining</span>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continue
        </motion.button>
      </motion.div>

      {/* Next Lesson */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex items-center space-x-2 text-sm text-gray-600"
      >
        <CheckCircle className="w-4 h-4 text-gray-400" />
        <span>Next: {currentCourse.nextLesson}</span>
      </motion.div>
    </div>
  );
}