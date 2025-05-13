import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

const PortfolioPage = () => {
  const { isDarkMode, reduceMotion } = useContext(ThemeContext);

  return (
    <div>
      <section className={`py-16 ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.2 : 0.6 }}
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            Custom Project Request
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: 0.1 }}
            className={`${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto mb-8`}
          >
            Don't see exactly what you're looking for? I offer custom solutions tailored to your specific needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/contact" 
              className={`inline-flex items-center px-8 py-3 rounded-full text-white font-medium transition-transform ${
                reduceMotion ? '' : 'hover:scale-105'
              } bg-blue-600 hover:bg-blue-700`}
            >
              Request a Custom Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage; 