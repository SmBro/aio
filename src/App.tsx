import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardWidget from './components/DashboardWidget';
import TodaysTasks from './components/widgets/TodaysTasks';
import BudgetSnapshot from './components/widgets/BudgetSnapshot';
import CourseModule from './components/widgets/CourseModule';
import MealPlan from './components/widgets/MealPlan';
import JournalSummary from './components/widgets/JournalSummary';
import { 
  CheckSquare, 
  DollarSign, 
  GraduationCap, 
  Utensils, 
  BookOpen,
  Plus,
  Upload,
  TrendingUp,
  Clock,
  Target
} from 'lucide-react';

function App() {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on window resize for desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const statsCards = [
    {
      title: 'Active Goals',
      value: '12',
      change: '+2 from last week',
      trend: 'up',
      icon: Target,
      bgColor: 'bg-emerald-600',
      textColor: 'text-white'
    },
    {
      title: 'Tasks Completed',
      value: '8',
      change: '+25% from yesterday',
      trend: 'up',
      icon: CheckSquare,
      bgColor: 'bg-white',
      textColor: 'text-gray-900'
    },
    {
      title: 'Focus Time',
      value: '5h 30m',
      change: '+1h from yesterday',
      trend: 'up',
      icon: Clock,
      bgColor: 'bg-white',
      textColor: 'text-gray-900'
    },
    {
      title: 'Budget Remaining',
      value: '$1,400',
      change: '-$200 from last week',
      trend: 'down',
      icon: DollarSign,
      bgColor: 'bg-white',
      textColor: 'text-gray-900'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        activeItem={activeItem} 
        setActiveItem={setActiveItem}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      
      {/* Main Content */}
      <div className="lg:ml-64">
        <Header setSidebarOpen={setSidebarOpen} />
        
        <main className="p-4 lg:p-6">
          {/* Page Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
                <p className="text-gray-600">Plan, prioritize, and accomplish your day with ease.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  <span>Import Data</span>
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Project</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {statsCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`${card.bgColor} p-4 lg:p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon className={`w-6 h-6 ${
                      card.bgColor === 'bg-emerald-600' ? 'text-emerald-200' : 'text-blue-600'
                    }`} />
                    <TrendingUp className={`w-4 h-4 ${
                      card.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`} />
                  </div>
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    className={`text-2xl font-bold mb-1 ${card.textColor}`}
                  >
                    {card.value}
                  </motion.div>
                  <div className={`text-sm mb-2 ${
                    card.bgColor === 'bg-emerald-600' ? 'text-emerald-200' : 'text-gray-600'
                  }`}>
                    {card.title}
                  </div>
                  <div className={`flex items-center text-xs ${
                    card.trend === 'up' ? 'text-green-600' : 'text-red-500'
                  }`}>
                    <span className={`px-2 py-0.5 rounded-full ${
                      card.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {card.trend === 'up' ? '↗' : '↘'} {card.change}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            {/* Today's Tasks - Large on desktop, full width on mobile */}
            <div className="lg:col-span-4 lg:row-span-2">
              <DashboardWidget 
                title="Today's Tasks" 
                icon={CheckSquare}
                delay={0.1}
                headerAction={
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
                  >
                    View All
                  </motion.button>
                }
                className="h-full"
              >
                <TodaysTasks />
              </DashboardWidget>
            </div>

            {/* Budget Snapshot */}
            <div className="lg:col-span-4">
              <DashboardWidget 
                title="Budget Snapshot" 
                icon={DollarSign}
                delay={0.2}
                headerAction={
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
                  >
                    Details
                  </motion.button>
                }
              >
                <BudgetSnapshot />
              </DashboardWidget>
            </div>

            {/* Current Course Module */}
            <div className="lg:col-span-4">
              <DashboardWidget 
                title="Current Course" 
                icon={GraduationCap}
                delay={0.3}
                headerAction={
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View Course
                  </motion.button>
                }
              >
                <CourseModule />
              </DashboardWidget>
            </div>

            {/* Meal Plan Today */}
            <div className="lg:col-span-4">
              <DashboardWidget 
                title="Meal Plan Today" 
                icon={Utensils}
                delay={0.4}
                headerAction={
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                  >
                    Edit Plan
                  </motion.button>
                }
              >
                <MealPlan />
              </DashboardWidget>
            </div>

            {/* Journal Summary */}
            <div className="lg:col-span-4">
              <DashboardWidget 
                title="Journal Summary" 
                icon={BookOpen}
                delay={0.5}
                headerAction={
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                  >
                    View All
                  </motion.button>
                }
                className="h-full"
              >
                <JournalSummary />
              </DashboardWidget>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;