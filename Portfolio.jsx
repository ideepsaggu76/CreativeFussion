import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { FaExternalLinkAlt, FaFilter } from 'react-icons/fa';

const Portfolio = () => {
  const { isDarkMode, reduceMotion } = useContext(ThemeContext);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  // Sample portfolio projects with categories
  const portfolioProjects = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'design',
      image: '/images/portfolio/brand-identity.jpg',
      description: 'Complete brand identity design for a tech startup, including logo, color palette, and brand guidelines.',
      link: '#',
      featured: true
    },
    {
      id: 2,
      title: 'E-commerce Website',
      category: 'development',
      image: '/images/portfolio/business-card.jpg', // Placeholder - you can replace with actual image
      description: 'Custom e-commerce solution with product catalog, shopping cart, and secure payment integration.',
      link: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      category: 'marketing',
      image: '/images/portfolio/social-media.jpg',
      description: 'Comprehensive social media campaign that increased engagement by 45% and followers by 2,000.',
      link: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Logo Design Collection',
      category: 'design',
      image: '/images/portfolio/logo-design.jpg',
      description: 'A collection of logo designs for various clients across different industries.',
      link: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Content Strategy',
      category: 'content',
      image: '/images/portfolio/social-media.jpg', // Placeholder - you can replace with actual image
      description: 'Content strategy and creation for a B2B company, resulting in 67% increase in leads.',
      link: '#',
      featured: true
    },
    {
      id: 6,
      title: 'AI Product Development',
      category: 'development',
      image: '/images/portfolio/business-card.jpg', // Placeholder - you can replace with actual image
      description: 'Development of an AI-powered tool for content generation and productivity enhancement.',
      link: '#',
      featured: false
    },
    {
      id: 7,
      title: 'E-Book Design',
      category: 'content',
      image: '/images/portfolio/brand-identity.jpg', // Placeholder - you can replace with actual image
      description: 'Comprehensive e-book design including layout, illustrations, and interactive elements.',
      link: '#',
      featured: true
    },
    {
      id: 8,
      title: 'Social Media Management',
      category: 'marketing',
      image: '/images/portfolio/logo-design.jpg', // Placeholder - you can replace with actual image
      description: 'Ongoing social media management for a retail brand across multiple platforms.',
      link: '#',
      featured: false
    }
  ];
  
  // Filter categories dynamically from the projects
  const categories = ['all', ...new Set(portfolioProjects.map(project => project.category))];
  
  // Filter projects when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(portfolioProjects);
    } else {
      setFilteredProjects(portfolioProjects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.1 : 0.4 }
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: reduceMotion ? 0.1 : 0.3 }
    }
  };

  // Helper function to format category names
  const formatCategoryName = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <section className={`py-16 ${isDarkMode ? 'bg-[#121212]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile Filter Button */}
        <div className="md:hidden mb-6">
          <button 
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className={`flex items-center justify-between w-full px-4 py-3 rounded-lg ${
              isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            } shadow-md`}
          >
            <span className="flex items-center">
              <FaFilter className="mr-2" />
              Filter by Category
            </span>
            <span>{isFiltersOpen ? '▲' : '▼'}</span>
          </button>
          
          {isFiltersOpen && (
            <div className={`mt-2 p-4 rounded-lg shadow-lg ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex flex-col space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFiltersOpen(false);
                    }}
                    className={`px-4 py-2 rounded-md text-left transition-colors ${
                      selectedCategory === category
                        ? isDarkMode
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-100 text-blue-800'
                        : isDarkMode
                          ? 'text-gray-300 hover:bg-gray-700'
                          : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {formatCategoryName(category)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Desktop Filters */}
        <div className="hidden md:flex justify-center mb-10">
          <div className={`inline-flex rounded-md p-1 ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  selectedCategory === category
                    ? isDarkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-blue-800 shadow-sm'
                    : isDarkMode
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {formatCategoryName(category)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`group rounded-xl overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-white hover:bg-gray-50'
                } shadow-lg transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600/80 text-white px-3 py-1 text-xs font-medium rounded-full">
                    {formatCategoryName(project.category)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <a 
                    href={project.link} 
                    className={`inline-flex items-center text-sm font-medium ${
                      isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    View Project
                    <FaExternalLinkAlt className="ml-1" size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio; 