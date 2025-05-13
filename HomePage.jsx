import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaQuoteLeft, FaPlus, FaMinus } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const HomePage = () => {
  const { isDarkMode, reduceMotion } = useContext(ThemeContext);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const testimonialRef = useRef(null);
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (reduceMotion) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [reduceMotion]);

  // Featured services with Apple-like presentation
  const featuredServices = [
    {
      id: 1,
      title: 'Logo Design',
      subtitle: 'Professional brand identity',
      description: 'Custom, professional logo designs that represent your brand identity perfectly.',
      image: '/freelancer-website/images/services/logo-design.jpg',
      color: '#06c',
      price: 'Starting at ₹500',
      tag: 'Most Popular',
    },
    {
      id: 2,
      title: 'Social Media Management',
      subtitle: 'Grow your online presence',
      description: 'Weekly management of your social media accounts with strategic content planning.',
      image: '/freelancer-website/images/services/social-media.jpg',
      color: '#ac39ff',
      price: '₹800 per week',
      tag: 'Best Value',
    },
    {
      id: 3,
      title: 'Video Editing',
      subtitle: 'Professional video services',
      description: 'Professional video editing services to make your content stand out.',
      image: '/freelancer-website/images/services/video-editing.jpg',
      color: '#f56300',
      price: 'Starting at ₹1000',
      tag: 'New',
    },
  ];
  
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Rajat Kumar',
      role: 'CEO, TechSolutions',
      image: 'R',
      color: 'bg-blue-600',
      text: "Randeep delivered an exceptional logo design that perfectly captured our brand identity. The process was smooth, and he was receptive to feedback. Highly recommended!"
    },
    {
      id: 2,
      name: 'Sneha Patel',
      role: 'Entrepreneur',
      image: 'S',
      color: 'bg-purple-600',
      text: "Working with Randeep on my social media management has been a game-changer for my business. His strategic approach and consistent posting have significantly increased my engagement."
    },
    {
      id: 3,
      name: 'Amit Singh',
      role: 'Marketing Director',
      image: 'A',
      color: 'bg-green-600',
      text: "I've worked with many freelancers, but Randeep stands out for his professionalism and attention to detail. The video editing work he did for our campaign exceeded expectations."
    },
    {
      id: 4,
      name: 'Priya Sharma',
      role: 'Small Business Owner',
      image: 'P',
      color: 'bg-pink-600',
      text: "Randeep helped me establish my brand from scratch. From logo design to social media setup, everything was done professionally and quickly. I continue to use his services for all my design needs."
    }
  ];

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "I offer a wide range of services including logo design, visiting card design, social media management, video editing, data entry, PDF editing, and technical help. Each service is tailored to meet your specific requirements and business needs."
    },
    {
      id: 2,
      question: "How do your pricing plans work?",
      answer: "My pricing is transparent and based on the scope of work. I offer fixed prices for standard services like logo design (₹500) and visiting cards (₹199), while other services like social media management (₹800/week) and data entry (₹149/hr) are priced based on time or recurring needs. Custom projects receive personalized quotes."
    },
    {
      id: 3,
      question: "What is your typical turnaround time?",
      answer: "Turnaround times vary by project. Simple designs may be completed within 24-48 hours, while more complex projects like video editing or comprehensive social media campaigns may take 3-7 days. I always provide estimated completion times before starting any project."
    },
    {
      id: 4,
      question: "How do revisions work?",
      answer: "Most projects include 2-3 rounds of revisions to ensure your complete satisfaction. Additional revisions beyond the included rounds can be accommodated at a small additional fee. My goal is to make sure you're completely happy with the final result."
    },
    {
      id: 5,
      question: "How do I communicate with you during the project?",
      answer: "I'm available via WhatsApp, email, and phone calls. For most clients, WhatsApp is the preferred method for quick updates and feedback. For more complex projects, we can schedule video calls to discuss requirements in detail."
    }
  ];

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div>
      {/* Hero Section - Apple style */}
      <section className={`pt-28 pb-20 ${isDarkMode ? 'bg-[#1d1d1f]' : 'bg-[#fbfbfd]'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#1d1d1f]'}`}>
              Professional Services. <br />Exceptional Results.
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Quality freelance services tailored to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link 
                to="/services" 
                className={`px-8 py-3 rounded-full text-white font-medium transition-transform ${
                  reduceMotion ? '' : 'hover:scale-105'
                } bg-[#06c] shadow-lg shadow-blue-500/20`}
              >
                View All Services
              </Link>
              <Link 
                to="/contact" 
                className={`px-8 py-3 rounded-full font-medium transition-transform ${
                  reduceMotion ? '' : 'hover:scale-105'
                } ${
                  isDarkMode 
                    ? 'bg-gray-800 text-white hover:bg-gray-700 shadow-lg shadow-gray-900/30' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-lg shadow-gray-400/20'
                }`}
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Showcase - Apple style */}
      <section className={`py-20 ${isDarkMode ? 'bg-[#1d1d1f]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0.2 : 0.8 }}
            >
              <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#1d1d1f]'}`}>
                Services
              </h2>
              <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                High-quality freelance services to help you grow your business and stand out from the competition.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: reduceMotion ? 0.2 : 0.6, 
                  delay: reduceMotion ? 0 : index * 0.1 
                }}
                whileHover={{ y: -10 }}
                className={`rounded-2xl overflow-hidden shadow-lg ${
                  isDarkMode ? 'bg-gray-900' : 'bg-white'
                } transition-all duration-300 h-full flex flex-col`}
              >
                <div className="relative">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  {service.tag && (
                    <span 
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ 
                        backgroundColor: service.color,
                        color: '#fff'
                      }}
                    >
                      {service.tag}
                    </span>
                  )}
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-[#1d1d1f]'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {service.subtitle}
                  </p>
                  <p className={`mb-4 flex-grow ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {service.price}
                    </span>
                    <Link 
                      to="/services" 
                      className="text-[#06c] hover:underline flex items-center"
                    >
                      Learn more <FaArrowRight className="ml-1" size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className={`inline-flex items-center px-6 py-3 rounded-full transition-transform ${
                reduceMotion ? '' : 'hover:scale-105'
              } ${
                isDarkMode 
                  ? 'bg-white text-[#1d1d1f]' 
                  : 'bg-[#1d1d1f] text-white'
              }`}
            >
              View All Services <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className={`py-20 ${isDarkMode ? 'bg-[#1d1d1f]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0.2 : 0.8 }}
            >
              <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#1d1d1f]'}`}>
                What Clients Say
              </h2>
              <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Hear from satisfied clients about their experience working with me.
              </p>
            </motion.div>
          </div>

          <div 
            ref={testimonialRef}
            className={`relative p-8 md:p-12 rounded-2xl ${
              isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
            } overflow-hidden`}
          >
            {/* Carousel navigation buttons */}
            <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
              <button 
                onClick={handlePrev}
                className={`p-3 rounded-full ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
                } shadow-lg focus:outline-none transition-transform hover:scale-110`}
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className={isDarkMode ? 'text-gray-300' : 'text-gray-700'} />
              </button>
            </div>
            
            <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
              <button 
                onClick={handleNext}
                className={`p-3 rounded-full ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
                } shadow-lg focus:outline-none transition-transform hover:scale-110`}
                aria-label="Next testimonial"
              >
                <FaChevronRight className={isDarkMode ? 'text-gray-300' : 'text-gray-700'} />
              </button>
            </div>
            
            {/* Testimonial carousel */}
            <div className="relative max-w-4xl mx-auto px-8 md:px-16">
              <FaQuoteLeft className={`absolute top-0 left-0 text-4xl ${
                isDarkMode ? 'text-gray-700' : 'text-gray-200'
              }`} />
              
              <div className="relative overflow-hidden min-h-[250px]">
                <AnimatePresence mode="wait">
                  {testimonials.map((testimonial, index) => (
                    index === activeTestimonial && (
                      <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="p-6 text-center"
                      >
                        <p className={`text-lg md:text-xl mb-8 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {testimonial.text}
                        </p>
                        
                        <div className="flex items-center justify-center">
                          <div className={`w-14 h-14 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-xl`}>
                            {testimonial.image}
                          </div>
                          <div className="ml-4 text-left">
                            <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {testimonial.name}
                            </h3>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>
              
              {/* Indicator dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial
                        ? isDarkMode ? 'bg-white scale-125' : 'bg-blue-600 scale-125'
                        : isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link 
                to="/testimonials" 
                className={`inline-flex items-center px-6 py-3 rounded-full ${
                  isDarkMode 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition-transform hover:scale-105`}
              >
                View All Testimonials <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-[#f5f5f7]'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0.2 : 0.8 }}
            >
              <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#1d1d1f]'}`}>
                Frequently Asked Questions
              </h2>
              <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Find answers to common questions about my services and workflow.
              </p>
            </motion.div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: faq.id * 0.1 }}
                className={`rounded-xl overflow-hidden ${
                  isDarkMode ? 'bg-gray-900' : 'bg-white'
                } shadow-lg`}
              >
                <button
                  className={`w-full px-6 py-4 text-left flex justify-between items-center ${
                    expandedFaq === faq.id ? 'border-b border-gray-200' : ''
                  }`}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={expandedFaq === faq.id}
                >
                  <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {faq.question}
                  </h3>
                  <span className={`ml-4 flex-shrink-0 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {expandedFaq === faq.id ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                
                <AnimatePresence>
                  {expandedFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4">
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className={`inline-flex items-center px-6 py-3 rounded-full transition-transform ${
                reduceMotion ? '' : 'hover:scale-105'
              } ${
                isDarkMode 
                  ? 'bg-white text-[#1d1d1f]' 
                  : 'bg-[#1d1d1f] text-white'
              }`}
            >
              Have More Questions? Contact Me <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Quote Section - Apple style */}
      <section className={`py-20 ${isDarkMode ? 'bg-[#1d1d1f]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Ready to start your project?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Get a free quote and consultation for your freelance needs.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-medium text-lg transition-transform hover:scale-105"
                >
                  Get a Quote <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 