import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPalette, FaIdCard, FaDatabase, FaInstagram, FaVideo, FaLaptopCode, 
  FaImage, FaFileAlt, FaYoutube, FaArrowRight, FaWhatsapp, FaStar, FaFire } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { getImgUrl } from '../utils/imgUrl';
import ImageWithFallback from './ImageWithFallback';

// Use local image paths from the public folder
const localImages = {
  logo: "/images/services/logo-design.jpg",
  card: "/images/services/visiting-card.jpg",
  data: "/images/services/data-entry.jpg",
  social: "/images/services/social-media.jpg",
  video: "/images/services/video-editing.jpg",
  tech: "/images/services/technical-help.jpg",
  banner: "/images/services/poster-design.jpg",
  post: "/images/services/social-post.jpg", 
  social_mgmt: "/images/services/social-media.jpg",
  ai_video: "/images/services/ai-video.jpg",
  pdf: "/images/services/pdf-editing.jpg",
  thumbnail: "/images/services/youtube-thumbnail.jpg",
};

// Service data with pricing as specified and local image paths
const services = [
  {
    id: 1,
    title: 'Logo Design',
    description: 'Professional branding solutions with custom logo designs that perfectly capture your brand identity.',
    price: '₹500',
    icon: <FaPalette size={32} className="text-blue-600" />,
    image: localImages.logo,
    tag: 'Popular',
    color: '#1d6bf3',
    features: ['Source files included', 'Multiple revisions', 'Quick delivery']
  },
  {
    id: 2,
    title: 'Visiting Card Design',
    description: 'Premium business card designs that make powerful first impressions and reflect your professional identity.',
    price: '₹199',
    icon: <FaIdCard size={32} className="text-purple-600" />,
    image: localImages.card,
    color: '#6e34c9',
    features: ['Print-ready files', 'Double-sided designs', 'Modern templates']
  },
  {
    id: 3,
    title: 'Data Entry',
    description: 'Precision data management services with meticulous attention to detail for error-free record keeping.',
    price: '₹149/hr',
    icon: <FaDatabase size={32} className="text-green-600" />,
    image: localImages.data,
    color: '#2c8a00',
    features: ['Error-free processing', 'Fast turnaround', 'Organized data']
  },
  {
    id: 4,
    title: 'Social Media Management',
    description: 'Comprehensive social platform management with strategic content planning and audience growth tactics.',
    price: '₹800/day',
    icon: <FaInstagram size={32} className="text-pink-600" />,
    image: localImages.social_mgmt,
    tag: 'Best Value',
    color: '#e63e62',
    features: ['Content scheduling', 'Engagement growth', 'Analytics reports']
  },
  {
    id: 5,
    title: 'Video Editing',
    description: 'Professional video production services with cinematic transitions and color grading for stunning visual stories.',
    price: 'From ₹300',
    icon: <FaVideo size={32} className="text-red-600" />,
    image: localImages.video,
    color: '#f56300',
    features: ['Color grading', 'Transitions', 'Audio enhancement']
  },
  {
    id: 6,
    title: 'Technical Help',
    description: 'Expert technical assistance for hardware, software, and network issues to keep your digital life running smoothly.',
    price: 'From ₹149',
    icon: <FaLaptopCode size={32} className="text-blue-600" />,
    image: localImages.tech,
    color: '#1d6bf3',
    features: ['Remote assistance', 'Software troubleshooting', 'Device setup']
  },
  {
    id: 7,
    title: 'Poster/Banner Design',
    description: 'Attention-grabbing poster and banner designs with vibrant visuals for maximum brand visibility.',
    price: '₹300',
    icon: <FaImage size={32} className="text-indigo-600" />,
    image: localImages.banner,
    color: '#5856d6',
    tag: 'New',
    features: ['Custom illustrations', 'High-resolution files', 'Digital & print formats']
  },
  {
    id: 8,
    title: 'Social Media Post Design',
    description: 'Platform-optimized designs that drive engagement and create a consistent brand presence across social channels.',
    price: '₹150',
    icon: <FaImage size={32} className="text-orange-600" />,
    image: localImages.post,
    color: '#ff9500',
    features: ['Platform-optimized', 'Engagement-focused', 'Brand consistent']
  },
  {
    id: 9,
    title: 'AI Generated Promotional Video',
    description: 'Next-generation promotional videos created with cutting-edge AI technology for innovative brand stories.',
    price: 'From ₹499',
    icon: <FaVideo size={32} className="text-purple-600" />,
    image: localImages.ai_video,
    color: '#af52de',
    tag: 'Trending',
    features: ['AI-powered creation', 'Customizable templates', 'Fast delivery']
  },
  {
    id: 10,
    title: 'PDF Editing/Form Filling',
    description: 'Professional document management with precise editing and form completion for business and personal needs.',
    price: '₹99/task',
    icon: <FaFileAlt size={32} className="text-red-600" />,
    image: localImages.pdf,
    color: '#ff3b30',
    features: ['Form filling', 'Document editing', 'PDF conversion']
  },
  {
    id: 11,
    title: 'YouTube Thumbnail Design',
    description: 'Eye-catching thumbnail visuals designed to increase click rates and grow your channel audience.',
    price: '₹200',
    icon: <FaYoutube size={32} className="text-red-600" />,
    image: localImages.thumbnail,
    color: '#ff2d55',
    features: ['Eye-catching design', 'Click-optimized', 'Brand matching']
  }
];

// Categories for filtering
const categories = [
  'All',
  'Design',
  'Social Media',
  'Video',
  'Technical',
  'Documents'
];

const ServiceCard = ({ service, isDarkMode, reduceMotion, isHovered, setHoveredId, hoveredId }) => {
  const [imageError, setImageError] = useState(false);
  
  // Output debug info about the image path
  console.log(`Service ${service.id}:`, service.title, 'Image path:', service.image);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: reduceMotion ? 0.2 : 0.5 }}
      onHoverStart={() => setHoveredId(service.id)}
      onHoverEnd={() => setHoveredId(null)}
      className={`rounded-2xl overflow-hidden shadow-lg ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      } border ${
        isDarkMode ? 'border-gray-800' : 'border-gray-100'
      } h-full flex flex-col transition-all duration-500 z-10`}
      style={{
        transform: isHovered ? 'translateY(-10px) scale(1.1)' : 'translateY(0) scale(1)',
        boxShadow: isHovered 
          ? isDarkMode 
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.4)'
            : '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
          : isDarkMode 
            ? '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)'
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        zIndex: isHovered ? 20 : 10,
        filter: hoveredId && hoveredId !== service.id ? 'blur(4px) opacity(0.7)' : 'none',
        transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
    >
      <div className="relative overflow-hidden h-56">
        <ImageWithFallback 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
          fallbackIcon={service.icon}
          fallbackColor={service.color}
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.7s ease-in-out'
          }}
          onError={() => {
            console.error(`Image failed to load: ${service.image}`);
            setImageError(true);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
        
        {service.tag && (
          <div 
            className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg flex items-center"
            style={{ backgroundColor: service.color }}
          >
            {service.tag === 'Popular' && <FaStar className="mr-1" size={10} />}
            {service.tag === 'Trending' && <FaFire className="mr-1" size={10} />}
            {service.tag === 'Best Value' && <FaStar className="mr-1" size={10} />}
            {service.tag === 'New' && <FaFire className="mr-1" size={10} />}
            {service.tag}
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-3">
          <div 
            className={`p-2 rounded-lg transition-shadow duration-300 ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
            }`}
            style={{ 
              color: service.color,
              boxShadow: isHovered ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none'
            }}
          >
            {service.icon}
          </div>
          <h3 
            className={`text-xl font-bold ml-3 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-[#1d1d1f]'
            }`}
            style={{
              color: isHovered ? service.color : ''
            }}
          >
            {service.title}
          </h3>
        </div>
        
        <p className={`mb-4 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {service.description}
        </p>
        
        <ul className={`mb-4 pl-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm my-1">
              <span className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: service.color }}></span>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="mt-auto pt-4 flex justify-between items-center">
          <span 
            className={`font-bold text-lg ${
              isDarkMode ? 'text-gray-200' : 'text-[#1d1d1f]'
            }`}
            style={{
              color: isHovered ? service.color : ''
            }}
          >
            {service.price}
          </span>
          <a 
            href={`https://wa.me/919780089101?text=I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service`} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 text-white hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
            style={{
              backgroundColor: isHovered ? service.color : '',
              color: isHovered ? 'white' : ''
            }}
          >
            Inquire
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { isDarkMode, reduceMotion } = useContext(ThemeContext);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);
  
  // Filter services based on selected category
  const filteredServices = services.filter(service => {
    if (selectedCategory === 'All') return true;
    
    const categories = {
      'Design': [1, 2, 7, 8, 11],
      'Social Media': [4, 8],
      'Video': [5, 9],
      'Technical': [6],
      'Documents': [3, 10]
    };
    
    return categories[selectedCategory]?.includes(service.id);
  });
  
  return (
    <section className={`py-24 ${isDarkMode ? 'bg-[#1d1d1f]' : 'bg-[#f5f5f7]'}`}>
      {/* Hero section */}
      <div className="w-full relative mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-900 opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center text-white">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.2 : 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Professional Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Quality solutions for your business and personal needs at affordable prices
          </motion.p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : isDarkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            staggerChildren: reduceMotion ? 0 : 0.1,
            delayChildren: 0.1
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
          {filteredServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              isDarkMode={isDarkMode} 
              reduceMotion={reduceMotion} 
              isHovered={hoveredId === service.id}
              setHoveredId={setHoveredId}
              hoveredId={hoveredId}
            />
          ))}
        </motion.div>
        
        {/* CTA section */}
        <div className="mt-16 w-full bg-blue-600 rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90"></div>
          <div className="relative z-10 p-10 md:p-16 text-white">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0.2 : 0.6 }}
              className="text-3xl font-bold mb-4"
            >
              Need a custom service?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: 0.1 }}
              className="text-lg mb-8 max-w-2xl"
            >
              If you don't see the exact service you need, don't worry. I offer customized solutions tailored to your specific requirements.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-medium transition-all bg-white text-blue-600 hover:bg-blue-50 hover:shadow-lg"
              >
                View All Services <FaArrowRight className="ml-2" />
              </Link>
              <a 
                href="https://wa.me/9780089101"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-medium transition-all bg-transparent border-2 border-white text-white hover:bg-white/10"
              >
                <FaWhatsapp className="mr-2" /> Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
