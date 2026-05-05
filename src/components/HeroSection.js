import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
        >
          Turn Spending Into a
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}Smart Habit 💸
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          Experience the future of personal finance with gamified tracking,
          real-time insights, and beautiful design that makes managing money enjoyable.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('dashboard-preview').scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
        >
          Start Tracking →
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          {/* Mock Dashboard Preview */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-2xl font-bold text-green-800">$2,450</div>
                <div className="text-sm text-green-600">Balance</div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-2">📈</div>
                <div className="text-2xl font-bold text-blue-800">$3,200</div>
                <div className="text-sm text-blue-600">Income</div>
              </div>
              <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-2">📉</div>
                <div className="text-2xl font-bold text-red-800">$750</div>
                <div className="text-sm text-red-600">Expense</div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-purple-800">$1,000</div>
                <div className="text-sm text-purple-600">Budget</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;