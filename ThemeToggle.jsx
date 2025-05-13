import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme, reduceMotion } = useContext(ThemeContext);

  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-full shadow-lg transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-800 text-yellow-300 shadow-yellow-300/20' 
          : 'bg-primary-100 text-primary-600 shadow-primary-600/20'
      }`}
      whileHover={reduceMotion ? {} : { 
        scale: 1.1,
        boxShadow: isDarkMode 
          ? '0 0 8px 2px rgba(253, 224, 71, 0.3)' 
          : '0 0 8px 2px rgba(79, 70, 229, 0.3)'
      }}
      whileTap={reduceMotion ? {} : { scale: 0.9 }}
      initial={{ rotate: 0 }}
      animate={reduceMotion ? {} : { 
        rotate: isDarkMode ? [0, 360] : [0, -360],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <FaSun size={18} />
      ) : (
        <FaMoon size={18} />
      )}
    </motion.button>
  );
};

export default ThemeToggle; 