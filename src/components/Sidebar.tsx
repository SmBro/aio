import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  DollarSign, 
  GraduationCap, 
  ShoppingCart, 
  StickyNote, 
  Heart, 
  Calendar, 
  Settings, 
  HelpCircle, 
  LogOut,
  CalendarDays,
  X
} from 'lucide-react';

interface SidebarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard Overview', icon: LayoutDashboard },
  { id: 'finances', label: 'Finances', icon: DollarSign },
  { id: 'learning', label: 'Learning', icon: GraduationCap },
  { id: 'groceries', label: 'Groceries & Meals', icon: ShoppingCart },
  { id: 'notes', label: 'Notes', icon: StickyNote },
  { id: 'wellness', label: 'Wellness Tracker', icon: Heart },
  { id: 'planner', label: 'Daily Planner', icon: CalendarDays },
  { id: 'calendar', label: 'Calendar', icon: Calendar },
];

const generalItems = [
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'help', label: 'Help', icon: HelpCircle },
  { id: 'logout', label: 'Logout', icon: LogOut },
];

const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
};

const itemVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  closed: {
    opacity: 0,
    x: -20
  }
};

export default function Sidebar({ activeItem, setActiveItem, isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Sidebar */}
      <motion.div
        variants={sidebarVariants}
        animate={isOpen ? "open" : "closed"}
        initial={false}
        className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col z-50 lg:translate-x-0 lg:static lg:z-auto lg:block"
      >
        {/* Close button for mobile */}
        <div className="lg:hidden flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Logo */}
        <motion.div 
          variants={itemVariants}
          className="p-6 pt-2 lg:pt-6"
        >
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">LifeFlow</span>
          </div>
        </motion.div>

        {/* Main Menu */}
        <div className="px-4 flex-1 overflow-y-auto">
          <motion.p 
            variants={itemVariants}
            className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3"
          >
            MENU
          </motion.p>
          <nav className="space-y-1">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              return (
                <motion.button
                  key={item.id}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setActiveItem(item.id);
                    if (window.innerWidth < 1024) setIsOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 border-r-2 border-emerald-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-emerald-600' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </motion.button>
              );
            })}
          </nav>

          {/* General Menu */}
          <div className="mt-8">
            <motion.p 
              variants={itemVariants}
              className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3"
            >
              GENERAL
            </motion.p>
            <nav className="space-y-1">
              {generalItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    variants={itemVariants}
                    custom={index + menuItems.length}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setActiveItem(item.id);
                      if (window.innerWidth < 1024) setIsOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5 text-gray-400" />
                    <span>{item.label}</span>
                  </motion.button>
                );
              })}
            </nav>
          </div>
        </div>
      </motion.div>
    </>
  );
}