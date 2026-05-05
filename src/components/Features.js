import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Smart Budget Tracking',
      description: 'Set limits and get real-time alerts when you\'re approaching or exceeding your budget'
    },
    {
      icon: '🚨',
      title: 'Intelligent Alerts',
      description: 'Receive timely notifications about spending patterns and budget status'
    },
    {
      icon: '😊',
      title: 'Emoji Feedback',
      description: 'Visual mood indicators that make financial health easy to understand at a glance'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Monitor your financial journey with clear progress bars and achievement milestones'
    },
    {
      icon: '💾',
      title: 'Local Storage',
      description: 'Your data stays private and secure on your device with automatic saving'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Optimized for mobile devices with responsive design that works everywhere'
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
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          Powerful Features, Simple Design
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft text-center"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;