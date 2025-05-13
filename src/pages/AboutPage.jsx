import React, { useContext } from 'react';
import AboutMe from '../components/AboutMe';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

const AboutPage = () => {
  const { isDarkMode, reduceMotion } = useContext(ThemeContext);

  return (
    <div>
      <div className="bg-gradient-to-r from-green-600 to-teal-500 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Get to know more about my background, skills, and vision.
          </motion.p>
        </div>
      </div>
      
      <AboutMe />
      
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
            Want to Work Together?
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
            If my skills and experience align with your project needs, I'd love to hear from you.
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
              } bg-green-600 hover:bg-green-700`}
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 