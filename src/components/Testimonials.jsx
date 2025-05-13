import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const testimonials = [
  {
    id: 1,
    name: 'Amit Sharma',
    role: 'Small Business Owner',
    location: 'Delhi, India',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
    content: 'Randeep designed a logo for my clothing brand that perfectly captured our style. His attention to detail and understanding of Indian design aesthetics really made our brand stand out.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Marketing Manager',
    location: 'Mumbai, India',
    image: 'https://randomuser.me/api/portraits/women/79.jpg',
    content: 'We hired Randeep for our social media campaign during Diwali season. The engagement increased by 70%, and we got amazing feedback from our customers about the creative content.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Raj Malhotra',
    role: 'Restaurant Owner',
    location: 'Chandigarh, India',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'Randeep created visiting cards and menu designs for my restaurant. His work reflected the traditional yet modern vibe we wanted to convey. Highly recommend his services!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Neha Kapoor',
    role: 'Yoga Instructor',
    location: 'Bangalore, India',
    image: 'https://randomuser.me/api/portraits/women/26.jpg',
    content: 'I needed a logo and social media materials for my yoga studio. Randeep incorporated traditional Indian elements with a modern twist. My clients love the branding!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Tech Startup Founder',
    location: 'Hyderabad, India',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    content: 'Randeep helped us organize our massive database and create an efficient system. His technical skills and prompt service made our operations much smoother.',
    rating: 4,
  },
  {
    id: 6,
    name: 'Ananya Reddy',
    role: 'Wedding Planner',
    location: 'Chennai, India',
    image: 'https://randomuser.me/api/portraits/women/47.jpg',
    content: 'We needed beautiful invitation designs and social media posts for wedding events. Randeep\'s work was elegant and captured the traditional Indian wedding essence perfectly.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Ravi Kumar',
    role: 'Local Shop Owner',
    location: 'Jaipur, India',
    image: 'https://randomuser.me/api/portraits/men/71.jpg',
    content: 'Randeep created a simple yet effective online presence for my small handicraft shop. His understanding of local market needs helped me reach more customers.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Lakshmi Krishnan',
    role: 'Non-profit Organizer',
    location: 'Kolkata, India',
    image: 'https://randomuser.me/api/portraits/women/51.jpg',
    content: 'Our NGO needed promotional videos for our education initiative. Randeep created compelling content that helped us raise awareness and increase donations significantly.',
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`rounded-lg shadow-lg p-6 flex flex-col h-full ${
        isDarkMode ? 'bg-dark-card text-dark-text border border-dark-border' : 'bg-white'
      }`}
    >
      <div className="flex items-center mb-4">
        <motion.img 
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary-300" 
        />
        <div>
          <h4 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {testimonial.name}
          </h4>
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            {testimonial.role}
          </p>
          <div className="flex items-center text-sm mt-1">
            <FaMapMarkerAlt className={`mr-1 ${
              isDarkMode ? 'text-indian-saffron' : 'text-indian-green'
            }`} />
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
              {testimonial.location}
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar 
            key={i} 
            className={`${
              i < testimonial.rating 
                ? 'text-indian-saffron' 
                : isDarkMode ? 'text-gray-600' : 'text-gray-300'
            } w-5 h-5`} 
          />
        ))}
      </div>
      
      <div className="flex-grow">
        <FaQuoteLeft className={`w-8 h-8 mb-2 opacity-20 ${
          isDarkMode ? 'text-primary-300' : 'text-primary-200'
        }`} />
        <motion.p 
          whileHover={{ scale: 1.01 }}
          className={`italic ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
        >
          {testimonial.content}
        </motion.p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <section className={`py-16 ${
      isDarkMode 
        ? 'bg-dark-bg text-dark-text' 
        : 'bg-gradient-to-r from-primary-50 to-secondary-50'
    }`}>
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`heading-lg ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
            Client Testimonials
          </h2>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Here's what my clients across India have to say about working with me.
            Their success stories inspire my work every day.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className={`inline-block px-6 py-3 rounded-full ${
            isDarkMode 
              ? 'bg-dark-highlight text-white border border-dark-border' 
              : 'bg-white shadow-md'
          }`}>
            <div className="flex items-center justify-center gap-1 text-indian-saffron">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className={`font-medium mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              4.9/5 average rating from 50+ satisfied clients across India
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 