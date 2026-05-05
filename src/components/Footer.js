import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-4xl mb-4">💸</div>
          <h3 className="text-2xl font-bold mb-4">FlowFi</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Turn spending into a smart habit with gamified finance tracking.
            Beautiful design meets powerful functionality.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <button className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              Support
            </button>
          </div>

          <div className="text-gray-500 text-sm">
            © 2024 FlowFi. Built with ❤️ using React & Tailwind CSS.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;