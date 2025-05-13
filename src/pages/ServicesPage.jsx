import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { FaPalette, FaIdCard, FaDatabase, FaInstagram, FaVideo, FaLaptopCode, 
  FaImage, FaFileAlt, FaYoutube, FaSearch, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { serviceImages } from '../components/ServicesFixed';
import getImgUrl from '../utils/imgUrl';

const ServicesPage = () => {
  const { isDarkMode, reduceMotion } = useContext(ThemeContext);
  const [activeCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [imageErrors, setImageErrors] = useState({});
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    // Check if images can be loaded when component mounts
    console.log("ServicesPage mounted - Service images:", serviceImages);
  }, []);

  const handleImageError = (serviceId) => {
    console.error(`Failed to load image for service ID: ${serviceId}`);
    setImageErrors(prev => ({
      ...prev,
      [serviceId]: true
    }));
  };

  // Service categories
  const categories = [
    { id: 'All', name: 'All Services' },
    { id: 'Design', name: 'Design' },
    { id: 'Video', name: 'Video' },
    { id: 'Social Media', name: 'Social Media' },
    { id: 'Technical', name: 'Technical' },
    { id: 'Documents', name: 'Documents' },
  ];

  // Services data with updated correct pricing
  const services = [
    {
      id: 1,
      title: 'Logo Design',
      description: 'Custom, professional logo designs that represent your brand identity perfectly.',
      icon: <FaPalette size={24} />,
      category: 'design',
      price: '₹500',
      image: serviceImages.logo,
      features: [
        'Multiple concept options',
        'Unlimited revisions',
        'High resolution files',
        'Source files included',
      ],
      popular: true,
    },
    {
      id: 2,
      title: 'Visiting Card Design',
      description: 'Modern and professional business card designs that leave a lasting impression.',
      icon: <FaIdCard size={24} />,
      category: 'design',
      price: '₹199',
      image: serviceImages.card,
      features: [
        'Double-sided design',
        'Print-ready files',
        'Multiple format options',
        'Quick turnaround',
      ],
    },
    {
      id: 3,
      title: 'Data Entry',
      description: 'Accurate and efficient data entry services for all your business needs.',
      icon: <FaDatabase size={24} />,
      category: 'technical',
      price: '₹149/hr',
      image: serviceImages.data,
      features: [
        'Excel data management',
        'Data cleaning & validation',
        'Form processing',
        'Database maintenance',
      ],
    },
    {
      id: 4,
      title: 'Social Media Management',
      description: 'Weekly management of your social media accounts with strategic content planning.',
      icon: <FaInstagram size={24} />,
      category: 'marketing',
      price: '₹800/week',
      image: serviceImages.social_mgmt,
      features: [
        'Content calendar',
        'Regular posting',
        'Engagement monitoring',
        'Performance analytics',
      ],
      popular: true,
    },
    {
      id: 5,
      title: 'Video Editing',
      description: 'Professional video editing services to make your content stand out.',
      icon: <FaVideo size={24} />,
      category: 'video',
      price: 'From ₹300',
      image: serviceImages.video,
      features: [
        'Cuts and transitions',
        'Color grading',
        'Audio enhancement',
        'Custom effects',
      ],
    },
    {
      id: 6,
      title: 'Technical Help',
      description: 'Technical solutions and support for various IT and software-related needs.',
      icon: <FaLaptopCode size={24} />,
      category: 'technical',
      price: 'From ₹149',
      image: serviceImages.tech,
      features: [
        'Software troubleshooting',
        'Website maintenance',
        'System optimization',
        'Technical consultations',
      ],
    },
    {
      id: 7,
      title: 'Poster/Banner Design',
      description: 'Eye-catching poster and banner designs for events, promotions, and advertising.',
      icon: <FaImage size={24} />,
      category: 'design',
      price: '₹300',
      image: serviceImages.banner,
      features: [
        'Custom dimensions',
        'Print-ready files',
        'Digital optimization',
        'Attention-grabbing layouts',
      ],
    },
    {
      id: 8,
      title: 'Social Media Post Design',
      description: 'Engaging post designs customized for different social media platforms.',
      icon: <FaImage size={24} />,
      category: 'design',
      price: '₹150',
      image: serviceImages.post,
      features: [
        'Platform-optimized sizes',
        'Brand-consistent visuals',
        'Engaging designs',
        'Quick turnaround',
      ],
    },
    {
      id: 9,
      title: 'AI Generated Promotional Video',
      description: 'Next-generation promotional videos created with cutting-edge AI technology.',
      icon: <FaVideo size={24} />,
      category: 'video',
      price: 'From ₹499',
      image: serviceImages.ai_video,
      features: [
        'AI-powered creation',
        'Customizable templates',
        'Professional looking results',
        'Fast delivery',
      ],
      new: true,
    },
    {
      id: 10,
      title: 'PDF Editing/Form Filling',
      description: 'Professional editing, formatting, and optimization of PDF documents.',
      icon: <FaFileAlt size={24} />,
      category: 'documents',
      price: '₹99/task',
      image: serviceImages.pdf,
      features: [
        'Form filling',
        'Document editing',
        'PDF conversion',
        'Secure handling',
      ],
    },
    {
      id: 11,
      title: 'YouTube Thumbnail Design',
      description: 'Click-worthy thumbnail designs that increase video engagement and views.',
      icon: <FaYoutube size={24} />,
      category: 'design',
      price: '₹200',
      image: serviceImages.thumbnail,
      features: [
        'Eye-catching design',
        'Click-optimized',
        'Customized to content',
        'Brand matching',
      ],
      new: true,
    }
  ];

  // Filter services based on category and search term
  const filteredServices = services.filter(service => {
    // Map marketing category to Social Media
    const categoryMapping = {
      'marketing': 'Social Media'
    };
    
    const mappedCategory = categoryMapping[service.category] || service.category;
    const matchesCategory = activeCategory === 'All' || 
                          mappedCategory.toLowerCase() === activeCategory.toLowerCase();
    
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.1 : 0.4
      }
    }
  };

  // Category filter button click handler
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="pt-24 pb-20 relative">
      {/* Hero section */}
      <section className={`py-16 ${isDarkMode ? 'bg-[#1d1d1f]' : 'bg-[#f5f5f7]'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.2 : 0.6 }}
              className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#1d1d1f]'}`}
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: 0.1 }}
              className={`text-lg md:text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
            >
              Explore our comprehensive range of professional services designed to 
              help your business grow and succeed in the digital landscape.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and filter section */}
      <section className={isDarkMode ? 'bg-[#1d1d1f]' : 'bg-white'}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Search input */}
            <div className={`relative w-full md:w-auto md:min-w-[300px] ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              <div className={`flex items-center border ${
                isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-gray-50'
              } rounded-full px-4 py-2`}>
                <FaSearch className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mr-2`} />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full bg-transparent outline-none ${
                    isDarkMode ? 'placeholder-gray-500' : 'placeholder-gray-400'
                  }`}
                />
              </div>
            </div>

            {/* Category filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === category.id
                      ? isDarkMode 
                        ? 'bg-white text-[#1d1d1f]' 
                        : 'bg-[#1d1d1f] text-white'
                      : isDarkMode 
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className={`py-12 ${isDarkMode ? 'bg-[#1d1d1f]' : 'bg-[#f5f5f7]'}`}>
        <div className="max-w-7xl mx-auto px-4">
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <h3 className={`text-xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                No services found matching your criteria
              </h3>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Try adjusting your search or filter settings
              </p>
              <button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchTerm('');
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View all services
              </button>
            </div>
          ) : (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
            >
              {filteredServices.map(service => (
                <motion.div 
                  key={service.id}
                  variants={itemVariants}
                  className={`rounded-xl overflow-hidden shadow-lg ${
                    isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white'
                  } transition-all duration-500 hover:shadow-xl relative z-10 ${
                    hoveredId === service.id 
                      ? `scale-110 ${isDarkMode ? 'shadow-blue-500/30' : 'shadow-blue-500/20'} shadow-lg` 
                      : ''
                  }`}
                  style={{ 
                    transformOrigin: 'center',
                    transform: hoveredId === service.id ? 'translateY(-10px)' : 'translateY(0)',
                    filter: hoveredId && hoveredId !== service.id ? 'blur(4px) opacity(0.7)' : 'none',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    zIndex: hoveredId === service.id ? 20 : 10
                  }}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative h-48 overflow-hidden">
                    {imageErrors[service.id] ? (
                      <div 
                        className="w-full h-full flex items-center justify-center"
                        style={{
                          background: isDarkMode ? 
                            'linear-gradient(45deg, #2563eb, #4f46e5)' : 
                            'linear-gradient(45deg, #3b82f6, #6366f1)'
                        }}
                      >
                        <div className="text-white opacity-70 transform scale-150">
                          {service.icon}
                        </div>
                      </div>
                    ) : (
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        onError={() => handleImageError(service.id)}
                        loading="eager"
                        crossOrigin="anonymous"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    {service.popular && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </div>
                    )}
                    {service.new && (
                      <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        New
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <div className={`p-2 rounded-lg mr-3 ${isDarkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
                        <span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>
                          {service.icon}
                        </span>
                      </div>
                      <div>
                        <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {service.title}
                        </h3>
                        <p className={`text-sm font-medium ${
                          isDarkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {service.price}
                        </p>
                      </div>
                    </div>
                    
                    <p className={`mb-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {service.description}
                    </p>
                    
                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-2 ${
                            isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                          }`}></span>
                          <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href={`https://wa.me/919780089101?text=Hi,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.%20Could%20you%20provide%20more%20details?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 rounded-full text-white hover:shadow-lg transition-all duration-300 text-sm font-medium`}
                      style={{ 
                        backgroundColor: service.color || '#3b82f6'
                      }}
                    >
                      <FaWhatsapp className="mr-1" size={16} /> 
                      Enquire now
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA section */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Need a Custom Service?
            </h2>
            <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              If you don't see what you're looking for, contact us to discuss your specific needs.
              We offer tailored solutions to meet your exact requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919780089101"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 py-3 rounded-full ${
                  isDarkMode ? 'bg-green-600 text-white' : 'bg-green-500 text-white'
                } font-medium transition-all duration-300 hover:shadow-lg`}
              >
                <FaWhatsapp className="mr-2" size={18} /> 
                Contact on WhatsApp
              </a>
              <Link 
                to="/contact" 
                className={`inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'bg-white text-gray-900 hover:bg-gray-100' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Contact Us <FaArrowRight className="ml-2" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 