import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import ImageWithFallback from './ImageWithFallback';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
  ];
  
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1, 
      transition: { 
        type: 'spring', 
        stiffness: 120,
        damping: 20 
      } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const childVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24
      }
    }
  };
  
  const logoVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20
      }
    }
  };
  
  const navbarClass = `fixed w-full top-0 z-50 transition-all duration-300 ${
    scrolled 
      ? isDarkMode 
        ? 'bg-dark-bg/95 backdrop-blur-sm shadow-lg shadow-black/20 border-b border-gray-800' 
        : 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100'
      : isDarkMode
        ? 'bg-gradient-to-r from-gray-900 to-gray-800' 
        : 'bg-gradient-to-r from-primary-700 to-secondary-700'
  }`;

  return (
    <>
      <motion.nav 
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={navbarClass}
      >
        <div className="container-custom py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <motion.div
                variants={logoVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                <div className="flex items-center h-10 w-10 mr-3">
                  <ImageWithFallback 
                    src="/logo.svg" 
                    alt="CreativeFussion Logo"
                    className="h-full w-full"
                    fallbackColor={isDarkMode ? "#2563eb" : "#3b82f6"}
                  />
                </div>
                <div className="flex flex-col">
                  <span className={`text-2xl font-bold ${
                    isDarkMode || (!scrolled) ? 'text-white' : 'text-primary-700'
                  }`}>
                    Randeep Singh
                  </span>
                  <div className={`text-xs font-medium ${
                    isDarkMode || (!scrolled) ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Professional Freelancer
                  </div>
                </div>
              </motion.div>
            </Link>
            
            <div className="flex items-center gap-3 md:gap-4">
              {/* Quick contact button */}
              <motion.a
                href="tel:+919779406876"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`hidden md:flex items-center gap-2 ${
                  scrolled && !isDarkMode 
                    ? 'text-primary-700 bg-primary-50 hover:bg-primary-100 shadow-sm' 
                    : 'text-white bg-white/10 hover:bg-white/20 shadow-lg shadow-black/5'
                } py-1.5 px-3 rounded-full text-sm transition-all duration-300`}
              >
                <FaPhoneAlt size={12} className="animate-pulse" />
                <span>+91 9779406876</span>
              </motion.a>
              
              {/* Theme toggle */}
              <ThemeToggle />
              
              {/* Mobile menu button */}
              <motion.button 
                className={`md:hidden p-2 rounded-full focus:outline-none ${
                  isDarkMode || (!scrolled)
                    ? 'text-white bg-white/10 hover:bg-white/20'
                    : 'text-primary-700 bg-primary-50 hover:bg-primary-100'
                }`}
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </motion.button>
              
              {/* Desktop menu */}
              <motion.div 
                className="hidden md:flex space-x-1"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div key={link.path} variants={childVariants}>
                      <Link 
                        to={link.path} 
                        className={`px-3 py-2 rounded-md font-medium relative ${
                          isActive
                            ? isDarkMode 
                              ? 'bg-dark-highlight text-white' 
                              : scrolled
                                ? 'bg-primary-100 text-primary-700'
                                : 'bg-white/20 text-white'
                            : isDarkMode || (!scrolled)
                              ? 'text-gray-300 hover:text-white hover:bg-white/10'
                              : 'text-gray-700 hover:text-primary-700 hover:bg-gray-100'
                        } transition-all duration-300`}
                      >
                        {link.label}
                        {isActive && (
                          <motion.span 
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-current mx-3"
                            layoutId="navbar-underline"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
          
          {/* Mobile menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden mt-4 overflow-hidden"
              >
                <motion.div 
                  className={`rounded-lg p-3 shadow-xl ${
                    isDarkMode 
                      ? 'bg-dark-highlight border border-gray-800' 
                      : scrolled 
                        ? 'bg-white border border-gray-200' 
                        : 'bg-white/10 backdrop-blur-sm'
                  }`}
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="flex flex-col space-y-2">
                    {navLinks.map((link, index) => {
                      const isActive = location.pathname === link.path;
                      return (
                        <motion.div
                          key={link.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                        >
                          <Link 
                            to={link.path} 
                            className={`px-4 py-2 rounded-md block font-medium ${
                              isActive
                                ? isDarkMode 
                                  ? 'bg-gray-700 text-white' 
                                  : scrolled
                                    ? 'bg-primary-100 text-primary-700'
                                    : 'bg-white/20 text-white'
                                : isDarkMode
                                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                                  : scrolled
                                    ? 'text-gray-700 hover:text-primary-700 hover:bg-gray-100'
                                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                            } transition-all duration-200`}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      );
                    })}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <a 
                        href="tel:+919779406876"
                        className={`flex items-center gap-2 mt-2 py-2 px-4 rounded-md font-medium ${
                          isDarkMode 
                            ? 'bg-primary-500/20 text-primary-300 hover:bg-primary-500/30' 
                            : scrolled
                              ? 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                              : 'bg-white/15 text-white hover:bg-white/25'
                        } transition-colors duration-200`}
                      >
                        <FaPhoneAlt size={14} className="animate-pulse" />
                        <span>Call: +91 9779406876</span>
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
      
      {/* Navbar spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar; 