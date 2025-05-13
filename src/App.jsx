import React, { useContext, useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSearch, FaWhatsapp } from 'react-icons/fa';
import { ThemeContext } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import DebugPage from './pages/DebugPage';
import { getImgUrl } from './utils/imgUrl';
import ImageWithFallback from './components/ImageWithFallback';

// Animation variants for page transitions
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'linear',
  duration: 0.3,
};

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode, reduceMotion } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Handle scroll for navbar transparency effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
  ];

  // Search functionality
  const searchItems = [
    { name: 'Logo Design', path: '/services', category: 'Design Service' },
    { name: 'Business Card', path: '/services', category: 'Design Service' },
    { name: 'Video Editing', path: '/services', category: 'Creative Service' },
    { name: 'AI Generated Video', path: '/services', category: 'Creative Service' },
    { name: 'Social Media', path: '/services', category: 'Marketing Service' },
    { name: 'Services', path: '/services', category: 'Page' },
    { name: 'Testimonials', path: '/testimonials', category: 'Page' },
    { name: 'Contact', path: '/contact', category: 'Page' },
    { name: 'About Me', path: '/about', category: 'Page' },
    { name: 'Technical Help', path: '/services', category: 'Support Service' },
    { name: 'Data Entry', path: '/services', category: 'Business Service' },
    { name: 'PDF Editing', path: '/services', category: 'Document Service' },
  ];

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = searchItems.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setSearchResults(filtered);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch();
  };

  const handleSearchItemClick = (path) => {
    navigate(path);
    setIsSearchOpen(false);
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-[#1d1d1f] text-white' : 'bg-white text-[#1d1d1f]'
    }`}>
      {/* Navbar */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? isDarkMode 
              ? 'bg-[#1d1d1f]/90 backdrop-blur-md' 
              : 'bg-white/90 backdrop-blur-md shadow-sm'
            : isDarkMode 
              ? 'bg-[#1d1d1f]' 
              : 'bg-[#fbfbfd]'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 px-4 md:px-6">
            {/* Logo - CreativeFussion brand image */}
            <Link to="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
                className="flex items-center justify-center"
              >
                <div 
                  className="w-12 h-12 flex items-center justify-center relative"
                >
                  <ImageWithFallback 
                    src="/logo.svg" 
                    alt="CreativeFussion Logo"
                    className="w-full h-full"
                    fallbackColor={isDarkMode ? "#2563eb" : "#3b82f6"}
                  />
                </div>
                <span className={`ml-2 font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  CreativeFussion
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 h-full flex items-center text-sm font-medium hover:opacity-80 transition-opacity ${
                    location.pathname === link.path 
                      ? isDarkMode 
                        ? 'text-white border-b-2 border-[#1d6bf3]' 
                        : 'text-[#1d6bf3] border-b-2 border-[#1d6bf3]' 
                      : isDarkMode 
                        ? 'text-gray-300' 
                        : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <ThemeToggle />
            
              {/* Search Icon */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
                onClick={toggleSearch}
                aria-label="Search"
                className={`p-2 rounded-full ${
                  isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                } transition-colors`}
              >
                <FaSearch size={16} />
              </motion.button>

              {/* Mobile Menu Icon */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
                onClick={toggleMenu}
                className={`lg:hidden p-2 rounded-full ${
                  isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                } transition-colors`}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className={`px-4 py-6 ${isDarkMode ? 'bg-[#1d1d1f]' : 'bg-white'}`}>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`py-2 px-3 rounded-lg text-center ${
                        location.pathname === link.path
                          ? isDarkMode 
                            ? 'bg-gray-800 text-white' 
                            : 'bg-gray-100 text-[#1d6bf3]'
                          : isDarkMode 
                            ? 'text-gray-300' 
                            : 'text-gray-700'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Overlay */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
              className="fixed inset-0 z-50 flex items-start pt-20 justify-center bg-black/50 backdrop-blur-sm"
              onClick={toggleSearch}
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.3 }}
                className={`w-full max-w-2xl mx-4 p-6 rounded-xl ${
                  isDarkMode ? 'bg-[#1d1d1f]' : 'bg-white'
                } shadow-2xl`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-3 border-b-2 pb-2 mb-4 border-gray-300">
                  <FaSearch size={16} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services, portfolio..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className={`w-full bg-transparent outline-none ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}
                    autoFocus
                  />
                  <button onClick={toggleSearch}>
                    <FaTimes size={16} className="text-gray-400" />
                  </button>
                </div>
                {searchResults.length > 0 ? (
                  <div className="mt-4 max-h-60 overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <div 
                        key={index}
                        onClick={() => handleSearchItemClick(result.path)}
                        className={`p-3 rounded-lg mb-2 cursor-pointer transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-800 hover:bg-gray-700' 
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        <div className="font-medium">{result.name}</div>
                        <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {result.category}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : searchTerm.trim() !== '' ? (
                  <div className={`text-center py-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    No results found for "{searchTerm}"
                  </div>
                ) : (
                  <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <div className="text-sm font-medium mb-2">Quick Links:</div>
                    <div className="grid grid-cols-2 gap-2">
                      {['Logo Design', 'Video Editing', 'Social Media', 'Services'].map((item, index) => (
                        <div 
                          key={index}
                          onClick={() => {
                            setSearchTerm(item);
                            handleSearch();
                          }}
                          className={`px-3 py-2 text-sm rounded cursor-pointer text-center transition-colors ${
                            isDarkMode 
                              ? 'bg-gray-800 hover:bg-gray-700' 
                              : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page content */}
      <main className="pt-16 relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="min-h-screen relative z-10"
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/debug" element={<DebugPage />} />
              <Route path="*" element={
                <div className="flex flex-col items-center justify-center h-screen">
                  <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
                  <p className="mb-8">The page you are looking for doesn't exist or has been moved.</p>
                  <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Back to Home
                  </Link>
                  <Link to="/debug" className="mt-4 text-blue-600 hover:underline">
                    Debug Routing
                  </Link>
                </div>
              } />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <motion.a
          href="https://wa.me/919780089101"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg ${
            isDarkMode 
              ? 'bg-[#25D366] text-white' 
              : 'bg-[#25D366] text-white'
          }`}
        >
          <FaWhatsapp size={28} />
        </motion.a>
      </div>

      {/* Footer */}
      <footer className={`py-12 border-t ${
        isDarkMode ? 'bg-[#1d1d1f] border-gray-800' : 'bg-[#f5f5f7] border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CreativeFussion</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Professional freelance services tailored to your needs. Quality work, satisfied clients.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className={`text-sm transition-colors ${
                        isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <address className={`not-italic text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <p className="mb-1">Call: +91 9779406876</p>
                <p className="mb-1">WhatsApp: +91 9780089101</p>
                <p className="mb-1">Email: pb31ale1212@gmail.com</p>
                <p className="mb-1">Sector 56, Chandigarh, India</p>
              </address>
              <div className="mt-4">
                <a 
                  href="https://wa.me/9780089101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-[#1d6bf3] hover:underline"
                >
                  <FaWhatsapp className="mr-2" size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className={`mt-12 pt-6 border-t text-sm text-center ${
            isDarkMode ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-500'
          }`}>
            <p>© {new Date().getFullYear()} CreativeFussion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App; 