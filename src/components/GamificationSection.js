import React from 'react';
import { motion } from 'framer-motion';

const GamificationSection = () => {
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
          Gamification That Works
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🏆</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Level System</h3>
                  <p className="text-gray-600">Earn levels based on transaction frequency</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl p-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Level 5</span>
                  <span className="text-yellow-600">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="w-full bg-yellow-200 rounded-full h-2 mt-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🔥</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Daily Streaks</h3>
                  <p className="text-gray-600">Maintain consistency with streak tracking</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl p-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">7 Day Streak!</span>
                  <span className="text-orange-600">🔥🔥🔥</span>
                </div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-orange-500 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">😊</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Mood Indicators</h3>
                  <p className="text-gray-600">Visual feedback on your spending health</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="text-center p-3 bg-green-100 rounded-2xl">
                  <div className="text-2xl mb-1">😍</div>
                  <div className="text-xs text-green-600">&lt;50%</div>
                </div>
                <div className="text-center p-3 bg-blue-100 rounded-2xl">
                  <div className="text-2xl mb-1">🙂</div>
                  <div className="text-xs text-blue-600">50-75%</div>
                </div>
                <div className="text-center p-3 bg-yellow-100 rounded-2xl">
                  <div className="text-2xl mb-1">😅</div>
                  <div className="text-xs text-yellow-600">75-90%</div>
                </div>
                <div className="text-center p-3 bg-red-100 rounded-2xl">
                  <div className="text-2xl mb-1">😡</div>
                  <div className="text-xs text-red-600">&gt;90%</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">How It Works</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Log Your Expenses</h4>
                  <p className="text-gray-600">Every transaction you add increases your experience points</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Watch Your Level Grow</h4>
                  <p className="text-gray-600">Reach new levels every 5 transactions with special achievements</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Maintain Streaks</h4>
                  <p className="text-gray-600">Log expenses daily to build and maintain your streak counter</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Get Mood Feedback</h4>
                  <p className="text-gray-600">Visual indicators help you understand your spending patterns</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GamificationSection;