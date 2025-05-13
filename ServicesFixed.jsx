import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPalette, FaIdCard, FaDatabase, FaInstagram, FaVideo, FaLaptopCode, 
  FaImage, FaFileAlt, FaYoutube, FaArrowRight, FaWhatsapp, FaStar, FaFire } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import getImgUrl from '../utils/imgUrl';

// Use local image paths from the public folder - export this for use in other components
export const serviceImages = {
  logo: "/freelancer-website/images/services/logo-design.jpg",
  card: "/freelancer-website/images/services/visiting-card.jpg",
  data: "/freelancer-website/images/services/data-entry.jpg",
  social: "/freelancer-website/images/services/social-media.jpg",
  video: "/freelancer-website/images/services/video-editing.jpg",
  tech: "/freelancer-website/images/services/technical-help.jpg",
  banner: "/freelancer-website/images/services/poster-design.jpg",
  post: "/freelancer-website/images/services/social-post.jpg", 
  social_mgmt: "/freelancer-website/images/services/social-media.jpg",
  ai_video: "/freelancer-website/images/services/ai-video.jpg",
  pdf: "/freelancer-website/images/services/pdf-editing.jpg",
  thumbnail: "/freelancer-website/images/services/youtube-thumbnail.jpg",
};

// Service data with pricing as specified and reliable image URLs
const services = [
  {
    id: 1,
    title: 'Logo Design',
    description: 'Professional branding solutions with custom logo designs that perfectly capture your brand identity.',
    price: '₹500',
    icon: <FaPalette size={32} className="text-blue-600" />,
    image: serviceImages.logo,
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
    image: serviceImages.card,
    color: '#6e34c9',
    features: ['Print-ready files', 'Double-sided designs', 'Modern templates']
  },
  {
    id: 3,
    title: 'Data Entry',
    description: 'Precision data management services with meticulous attention to detail for error-free record keeping.',
    price: '₹149/hr',
    icon: <FaDatabase size={32} className="text-green-600" />,
    image: serviceImages.data,
    color: '#2c8a00',
    features: ['Error-free processing', 'Fast turnaround', 'Organized data']
  },
  {
    id: 4,
    title: 'Social Media Management',
    description: 'Comprehensive social platform management with strategic content planning and audience growth tactics.',
    price: '₹800/day',
    icon: <FaInstagram size={32} className="text-pink-600" />,
    image: serviceImages.social_mgmt,
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
    image: serviceImages.video,
    color: '#f56300',
    features: ['Color grading', 'Transitions', 'Audio enhancement']
  },
  {
    id: 6,
    title: 'Technical Help',
    description: 'Expert technical assistance for hardware, software, and network issues to keep your digital life running smoothly.',
    price: 'From ₹149',
    icon: <FaLaptopCode size={32} className="text-blue-600" />,
    image: serviceImages.tech,
    color: '#1d6bf3',
    features: ['Remote assistance', 'Software troubleshooting', 'Device setup']
  },
  {
    id: 7,
    title: 'Poster/Banner Design',
    description: 'Attention-grabbing poster and banner designs with vibrant visuals for maximum brand visibility.',
    price: '₹300',
    icon: <FaImage size={32} className="text-indigo-600" />,
    image: serviceImages.banner,
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
    image: serviceImages.post,
    color: '#ff9500',
    features: ['Platform-optimized', 'Engagement-focused', 'Brand consistent']
  },
  {
    id: 9,
    title: 'AI Generated Promotional Video',
    description: 'Next-generation promotional videos created with cutting-edge AI technology for innovative brand stories.',
    price: 'From ₹499',
    icon: <FaVideo size={32} className="text-purple-600" />,
    image: serviceImages.ai_video,
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
    image: serviceImages.pdf,
    color: '#ff3b30',
    features: ['Form filling', 'Document editing', 'PDF conversion']
  },
  {
    id: 11,
    title: 'YouTube Thumbnail Design',
    description: 'Eye-catching thumbnail visuals designed to increase click rates and grow your channel audience.',
    price: '₹200',
    icon: <FaYoutube size={32} className="text-red-600" />,
    image: serviceImages.thumbnail,
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

const ServiceCard = ({ service, index }) => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ 
        y: -10,
        boxShadow: isDarkMode 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.7)' 
          : '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
      }}
      className={`rounded-lg overflow-hidden hover:z-10 transition-all duration-300 ${
        isDarkMode 
          ? 'bg-dark-card border border-dark-border' 
          : 'bg-white shadow-lg'
      }`}
    >
      <div className="h-48 overflow-hidden relative">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <img 
            src={service.image} 
            alt={service.title}
            className={`w-full h-full object-cover ${
              isDarkMode ? 'brightness-75 contrast-125' : ''
            }`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${
            isDarkMode 
              ? 'from-black/90 to-transparent' 
              : 'from-black/70 to-transparent'
          } flex items-end`}>
            <div className="p-4 text-white w-full">
              <motion.h3 
                className="text-xl font-bold truncate"
                whileHover={{ scale: 1.03 }}
              >
                {service.title}
              </motion.h3>
              <div className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                isDarkMode 
                  ? 'bg-primary-700 text-white' 
                  : 'bg-primary-500 text-white'
              }`}>
                {service.price}
              </div>
              
              {service.tag && (
                <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                  {service.tag}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className={`p-6 ${isDarkMode ? 'text-dark-text' : ''}`}>
        <div className="flex items-center mb-4">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`p-2 rounded-full mr-3 ${
              isDarkMode ? 'bg-dark-highlight' : 'bg-primary-50'
            }`}
          >
            {service.icon}
          </motion.div>
          <h3 className={`text-xl font-bold hidden md:block ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            {service.title}
          </h3>
        </div>
        
        <motion.div
          initial={{ height: '3.6rem' }}
          whileHover={{ height: 'auto' }}
          className="overflow-hidden"
        >
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
            {service.description}
          </p>
        </motion.div>
        
        <motion.a 
          href={`https://wa.me/919780089101?text=Hi%20Randeep,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.%20Can%20you%20provide%20more%20information?`} 
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center ${
            isDarkMode 
              ? 'text-primary-400 hover:text-primary-300' 
              : 'text-primary-600 hover:text-primary-800'
          } transition-colors font-medium mt-2`}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          Inquire Now <span className="ml-1">→</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <section className={`py-16 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          } mb-4`}>
            My Services
          </h2>
          <p className={`${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          } max-w-2xl mx-auto`}>
            I offer a wide range of services to help your business grow and stand out. 
            From design to tech solutions, I've got you covered with affordable and professional services.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
