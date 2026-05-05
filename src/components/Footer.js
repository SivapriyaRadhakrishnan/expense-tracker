import React from 'react';
import { motion } from 'framer-motion';
import {
  FiDollarSign,
  FiShield,
  FiFileText,
  FiHelpCircle,
  FiHeart
} from 'react-icons/fi';

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
          {/* ICON */}
         
          <h3 className="text-2xl font-bold mb-4">FlowFi</h3>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Turn spending into a smart habit with gamified finance tracking.
            Beautiful design meets powerful functionality.
          </p>

          {/* LINKS WITH ICONS */}
          <div className="flex justify-center gap-8 mb-8 text-sm">
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition">
              <FiShield className="h-4 w-4" />
              Privacy Policy
            </button>

            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition">
              <FiFileText className="h-4 w-4" />
              Terms of Service
            </button>

            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition">
              <FiHelpCircle className="h-4 w-4" />
              Support
            </button>
          </div>

          {/* COPYRIGHT */}
          <div className="flex items-center justify-center gap-1 text-gray-500 text-sm">
            © 2024 FlowFi. Built with
            <FiHeart className="text-red-500 mx-1" />
            using React & Tailwind CSS.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;