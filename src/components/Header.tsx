import React from 'react';
import { motion } from 'framer-motion';
import { Search, Mail, Bell, User, Menu } from 'lucide-react';

interface HeaderProps {
  setSidebarOpen?: (open: boolean) => void;
}

export default function Header({ setSidebarOpen }: HeaderProps) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4"
    >
      <div className="flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen?.(true)}
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative flex-1 max-w-md ml-4 lg:ml-0"
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search task"
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-200 px-1.5 py-0.5 rounded">
            ⌘F
          </span>
        </motion.div>

        {/* Right side */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center space-x-4"
        >
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Bell className="w-5 h-5" />
          </motion.button>
          
          {/* Profile */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
              <p className="text-xs text-gray-500">sarah.j@email.com</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}