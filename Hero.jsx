import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary-700 to-secondary-700 text-white py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Turning Ideas Into <span className="text-primary-300 inline-block hover:scale-105 transition-transform">Digital Reality</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Professional freelancer specializing in design & tech solutions. 
              From logo design to video editing, I deliver high-quality services at affordable rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="relative z-10"
              >
                <Link 
                  to="/services" 
                  className="inline-block bg-white text-primary-700 hover:bg-gray-100 px-8 py-3.5 rounded-lg font-medium shadow-xl shadow-white/10 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">View Services</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="relative z-10"
              >
                <Link 
                  to="/contact" 
                  className="inline-block border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-black/5 relative overflow-hidden group"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden md:block"
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-xl font-semibold mb-4 text-center relative z-10">Professional Services</h3>
              <ul className="space-y-3 relative z-10">
                {['Logo Design', 'Visiting Card Design', 'Data Entry', 'Social Media Management', 'Video Editing', 'Tech-related Solutions'].map((service, index) => (
                  <motion.li 
                    key={service}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <span className="h-2 w-2 bg-primary-300 rounded-full mr-2"></span>
                    <span>{service}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 text-center bg-white/10 p-3 rounded-md relative z-10">
                <span className="block font-semibold">Starting at just ₹200</span>
                <span className="text-sm text-gray-300">International clients welcome</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 