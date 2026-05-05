import React from 'react';
import { motion } from 'framer-motion';

const UserFlow = () => {
  const steps = [
    {
      step: '1',
      title: 'Onboarding',
      description: 'Welcome to FlowFi! Set up your profile and initial budget preferences.',
      icon: '👋',
      color: 'from-blue-500 to-blue-600'
    },
    {
      step: '2',
      title: 'Add First Expense',
      description: 'Log your first transaction and see the magic of gamified finance.',
      icon: '💸',
      color: 'from-green-500 to-green-600'
    },
    {
      step: '3',
      title: 'Get Mood Feedback',
      description: 'Receive instant visual feedback about your spending health.',
      icon: '😊',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      step: '4',
      title: 'Level Up!',
      description: 'Earn experience points and unlock new levels as you track consistently.',
      icon: '🏆',
      color: 'from-purple-500 to-purple-600'
    },
    {
      step: '5',
      title: 'Monthly Review',
      description: 'Review your progress, celebrate achievements, and plan for the next month.',
      icon: '📈',
      color: 'from-pink-500 to-pink-600'
    }
  ];

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
          Your Journey with FlowFi
        </motion.h2>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-soft text-center h-full">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-4">
                    <div className="text-2xl text-gray-400">↓</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserFlow;