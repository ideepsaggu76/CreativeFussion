import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { FaGraduationCap, FaLaptopCode, FaRobot, FaPenNib, FaLanguage, FaStar, FaUser, FaTimes } from 'react-icons/fa';

const AboutMe = () => {
  const { isDarkMode, reduceMotion } = useContext(ThemeContext);
  const [imageError, setImageError] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  
  const skills = [
    { 
      id: 1, 
      title: 'AI-Powered Solutions', 
      icon: <FaRobot size={32} className="text-blue-500" />,
      description: 'I help people make money and work smarter using tools like ChatGPT. From automating ideas to writing full eBooks, I\'ve even started building premium digital products.',
      color: '#3b82f6'
    },
    { 
      id: 2, 
      title: 'Creative Projects', 
      icon: <FaPenNib size={32} className="text-purple-500" />,
      description: 'I design powerful storytelling content like Instagram reels, comics, and visual eBooks — mixing creativity with professional quality.',
      color: '#a855f7'
    },
    { 
      id: 3, 
      title: 'Tech & Development', 
      icon: <FaLaptopCode size={32} className="text-green-500" />,
      description: 'As a BCA student, I\'m learning programming languages like C and planning to specialize in application and web development.',
      color: '#22c55e'
    },
    { 
      id: 4, 
      title: 'Education', 
      icon: <FaGraduationCap size={32} className="text-red-500" />,
      description: 'I\'m currently pursuing my Bachelor of Computer Applications (BCA) and I\'m in my 1st year, studying programming, mathematics, and computer fundamentals.',
      color: '#ef4444'
    },
    { 
      id: 5, 
      title: 'Languages', 
      icon: <FaLanguage size={32} className="text-yellow-500" />,
      description: 'I\'m fluent in English and Punjabi (Native). My language skills help me create clear, effective content for diverse audiences.',
      color: '#eab308'
    },
    { 
      id: 6, 
      title: 'Vision', 
      icon: <FaStar size={32} className="text-pink-500" />,
      description: 'I aim to become a skilled application developer, work with top companies like Amazon or Microsoft, and build digital products that solve real-world problems.',
      color: '#ec4899'
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.1 : 0.5 }
    }
  };

  return (
    <section className={`py-16 ${isDarkMode ? 'bg-[#1d1d1f]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          {/* Profile Image - Now at the top and larger */}
          <motion.div 
            className="w-64 h-64 mb-8 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            onHoverStart={() => setIsImageHovered(true)}
            onHoverEnd={() => setIsImageHovered(false)}
            onTapStart={() => setIsImageHovered(true)}
            onTapCancel={() => setIsImageHovered(false)}
            onClick={() => setIsFullscreenOpen(true)}
          >
            <div className={`relative w-full h-full mx-auto overflow-hidden rounded-full shadow-lg border-4 ${
              isImageHovered 
                ? isDarkMode ? 'border-blue-400 dark:border-blue-500' : 'border-blue-400' 
                : 'border-green-400 dark:border-green-500'
            } transition-all duration-300`}>
              {imageError ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500 to-blue-600">
                  <motion.div
                    animate={{ 
                      scale: isImageHovered ? 1.2 : 1,
                      rotate: isImageHovered ? 10 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaUser className="text-white" size={50} />
                  </motion.div>
                </div>
              ) : (
                <div className={`w-full h-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <motion.img 
                    src="/freelancer-website/images/profile/profile.png" 
                    alt="Randeep Singh" 
                    className="w-full h-full object-contain"
                    animate={{ 
                      scale: isImageHovered ? 1.15 : 1
                    }}
                    transition={{ 
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    onError={() => setImageError(true)}
                  />
                </div>
              )}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-2 text-white text-center bg-gradient-to-t from-green-800/90 to-transparent"
                animate={{
                  y: isImageHovered ? -5 : 0,
                  opacity: isImageHovered ? 1 : 0.9
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-bold">Randeep Singh</h3>
                <p className="text-xs">Digital Creator & Freelancer</p>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0.2 : 0.6 }}
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              About Me
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: 0.1 }}
              className={`${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              } max-w-2xl mx-auto`}
            >
              Freelancer, BCA student, and digital creator from Punjab, India
            </motion.p>
          </div>
        </div>
        
        {/* Introduction Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0.2 : 0.7 }}
          className={`mb-16 p-8 rounded-xl ${
            isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-white to-gray-100'
          } shadow-xl`}
        >
          <div className="flex flex-col gap-8 items-center">
            <div className="w-full">
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Hello and welcome!
              </h3>
              <div className={`prose ${isDarkMode ? 'prose-invert' : ''} max-w-none`}>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  I'm Randeep Singh, a passionate freelancer, BCA student, and digital creator from Punjab, India. I'm on a mission to turn my skills and creativity into powerful digital solutions — helping businesses, individuals, and creators thrive in today's fast-paced, tech-driven world.
                </p>
                
                <h4 className={`text-xl font-semibold mt-6 mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  🚀 My Freelancing Journey
                </h4>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  My journey into freelancing began with a simple desire: to do something meaningful with technology. As a curious learner, I started experimenting with AI tools, programming languages, and creative content. Over time, I realized how valuable these skills are — not just for me, but for people around the world looking to grow, automate, and express themselves online.
                </p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  I began by offering content writing, translation, and AI-enhanced productivity services, and gradually expanded into eBook creation, social media content, and tech automation. What started as side projects quickly became real opportunities to help clients get results — and build a career I'm proud of.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Skills Section */}
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.2 : 0.5 }}
            className={`text-2xl font-bold mb-8 text-center ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            <span className="relative inline-block">
              🎯 What I Do
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>
          </motion.h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 relative"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                className={`p-8 rounded-xl ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-white hover:bg-gray-50'
                } shadow-lg transition-all duration-500 hover:-translate-y-2 relative z-10 ${
                  hoveredSkill === skill.id 
                    ? `scale-110 ${isDarkMode ? 'shadow-green-500/30' : 'shadow-green-500/20'} shadow-xl` 
                    : ''
                }`}
                style={{ 
                  transformOrigin: 'center',
                  filter: hoveredSkill && hoveredSkill !== skill.id ? 'blur(4px) opacity(0.7)' : 'none',
                  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-start mb-6">
                  <div 
                    className={`p-4 rounded-lg transition-all duration-300 ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}
                    style={{ 
                      backgroundColor: hoveredSkill === skill.id 
                        ? `${isDarkMode ? 'rgba(20, 20, 20, 0.8)' : 'rgba(255, 255, 255, 0.8)'}`
                        : '',
                      boxShadow: hoveredSkill === skill.id 
                        ? `0 0 20px ${skill.color}30` 
                        : 'none'
                    }}
                  >
                    <div 
                      className="transition-all duration-300 text-3xl"
                      style={{ 
                        transform: hoveredSkill === skill.id ? 'scale(1.25)' : 'scale(1)',
                        color: hoveredSkill === skill.id ? skill.color : ''
                      }}
                    >
                      {skill.icon}
                    </div>
                  </div>
                  <h4 
                    className={`text-2xl font-bold ml-5 transition-all duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                    style={{ 
                      color: hoveredSkill === skill.id ? skill.color : ''
                    }}
                  >
                    {skill.title}
                  </h4>
                </div>
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-all duration-300 leading-relaxed`}>
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Vision Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0.2 : 0.7 }}
          className={`p-8 rounded-xl ${
            isDarkMode ? 'bg-gradient-to-r from-blue-900/40 to-purple-900/40' : 'bg-gradient-to-r from-blue-50 to-purple-50'
          } shadow-lg`}
        >
          <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            🌟 My Vision
          </h3>
          <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I believe in growing step by step, but with a big-picture mindset. In the next few years, I aim to:
          </p>
          <ul className={`list-disc pl-6 space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>Become a skilled application developer</li>
            <li>Get placed at top companies like Amazon or Microsoft</li>
            <li>Build digital products that solve real-world problems</li>
            <li>Help clients grow their business with tech, content & creativity</li>
          </ul>
        </motion.div>
      </div>
      
      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {isFullscreenOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreenOpen(false)}
          >
            <motion.div
              className="relative max-w-5xl max-h-[90vh] w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-10 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFullscreenOpen(false);
                }}
              >
                <FaTimes size={24} />
              </button>
              
              {imageError ? (
                <div className="w-full h-[80vh] flex items-center justify-center bg-gradient-to-br from-green-500 to-blue-600 rounded-xl">
                  <FaUser className="text-white" size={120} />
                </div>
              ) : (
                <div className="flex items-center justify-center h-[80vh] bg-transparent">
                  <motion.img 
                    src="/freelancer-website/images/profile/profile.png" 
                    alt="Randeep Singh" 
                    className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    exit={{ y: 20 }}
                    transition={{ type: "spring", damping: 20 }}
                    onError={() => setImageError(true)}
                  />
                </div>
              )}
              
              <motion.div 
                className="mt-4 px-6 py-3 rounded-xl bg-black/50 backdrop-blur-sm text-white text-center max-w-md mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold">Randeep Singh</h3>
                <p className="text-sm opacity-80">Digital Creator & Freelancer</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutMe; 