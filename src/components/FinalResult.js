import React from 'react';
import { motion } from 'framer-motion';

const FinalResult = () => {
  const benefits = [
    {
      icon: '🎯',
      title: 'Better Spending Awareness',
      description: 'Understand where your money goes with clear, visual feedback'
    },
    {
      icon: '🌱',
      title: 'Habit Building',
      description: 'Transform expense tracking from a chore into an engaging daily habit'
    },
    {
      icon: '💪',
      title: 'Financial Discipline',
      description: 'Develop stronger financial habits through gamification and positive reinforcement'
    },
    {
      icon: '📈',
      title: 'Progress Tracking',
      description: 'Watch your financial health improve over time with meaningful metrics'
    },
    {
      icon: '😊',
      title: 'Reduced Stress',
      description: 'Eliminate financial anxiety with clear insights and proactive alerts'
    },
    {
      icon: '🎉',
      title: 'Achievement Satisfaction',
      description: 'Feel accomplished as you level up and maintain spending streaks'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8"
        >
          The Results Speak for Themselves
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
        >
          Join thousands of users who have transformed their relationship with money through FlowFi's
          unique blend of simplicity, gamification, and beautiful design.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-soft">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Finances?</h3>
            <p className="text-xl mb-8 opacity-90">
              Start your journey to better financial habits today. It's free, beautiful, and effective.
            </p>
            <button 
              onClick={() => document.getElementById('dashboard-preview').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-lg transition-shadow cursor-pointer"
            >
              Get Started Now →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalResult;