import React from 'react';
import { motion } from 'framer-motion';

const CoreIdea = () => {
  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
        >
          The Core Idea Behind FlowFi
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Simplicity First</h3>
            <p className="text-gray-600">
              We believe finance tracking should be as simple as checking your phone.
              No complex setups, no overwhelming dashboards.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Motivation Through Gamification</h3>
            <p className="text-gray-600">
              Turn boring tasks into engaging experiences. Level up, maintain streaks,
              and feel accomplished with every expense logged.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Habit Building</h3>
            <p className="text-gray-600">
              Consistent small actions lead to big changes. FlowFi helps you build
              lasting financial habits through positive reinforcement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreIdea;