import React from 'react';
import { motion } from 'framer-motion';

const ProblemSolution = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          The Problem vs The Solution
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-red-600 mb-8">❌ Common Problems</h3>
            <div className="space-y-4">
              <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800 mb-2">Inconsistent Expense Tracking</h4>
                <p className="text-red-600">People start tracking but give up after a few days due to boring interfaces</p>
              </div>
              <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800 mb-2">Lack of Engagement</h4>
                <p className="text-red-600">Traditional apps feel like chores, not habits you enjoy building</p>
              </div>
              <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800 mb-2">Confusing Budget Insights</h4>
                <p className="text-red-600">Complex charts and graphs that don't tell you what you need to know</p>
              </div>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-green-600 mb-8">✅ FlowFi Solutions</h3>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 mb-2">Gamified Habit Tracking</h4>
                <p className="text-green-600">Level up as you track expenses, earn streaks, and get rewarded for consistency</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 mb-2">Clean, Intuitive Dashboard</h4>
                <p className="text-green-600">Beautiful cards with emojis that make finance feel approachable and fun</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 mb-2">Real-Time Smart Insights</h4>
                <p className="text-green-600">Instant alerts and mood indicators that guide your spending decisions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;