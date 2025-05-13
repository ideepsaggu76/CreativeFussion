import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaQuoteLeft, FaPlus, FaMinus } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import ImageWithFallback from '../components/ImageWithFallback';

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

  // Make sure to load the homepage when component mounts
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Featured services with Apple-like presentation
  const featuredServices = [
    {
      id: 1,
      title: 'Logo Design',
      subtitle: 'Professional brand identity',
      description: 'Custom, professional logo designs that represent your brand identity perfectly.',
      image: 'images/services/logo-design.jpg',
      fallbackColor: '#06c',
      color: '#06c',
      price: 'Starting at ₹500',
      tag: 'Most Popular',
    },
    {
      id: 2,
      title: 'Social Media Management',
      subtitle: 'Grow your online presence',
      description: 'Weekly management of your social media accounts with strategic content planning.',
      image: 'images/services/social-media.jpg',
      fallbackColor: '#ac39ff',
      color: '#ac39ff',
      price: '₹800 per week',
      tag: 'Best Value',
    },
    {
      id: 3,
      title: 'Video Editing',
      subtitle: 'Professional video services',
      description: 'Professional video editing services to make your content stand out.',
      image: 'images/services/video-editing.jpg',
      fallbackColor: '#f56300',
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
      <section className={`pt-20 sm:pt-28 pb-16 sm:pb-20 ${isDarkMode ? 'bg-[#1d1d1f]' : 'bg-[#fbfbfd]'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h1 className={`text-3xl sm:text-4xl md:text-6xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#1d1d1f]'}`}>
              Professional Services. <br />Exceptional Results.
            </h1>
            <p className={`text-lg sm:text-xl md:text-2xl mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Quality freelance services tailored to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 sm:mb-16">
              <Link 
                to="/services" 
                className={`px-6 sm:px-8 py-3 rounded-full text-white font-medium transition ${
                  reduceMotion ? '' : 'hover:scale-105 hover:shadow-lg'
                } bg-[#06c] shadow-md shadow-blue-500/20 active:scale-95`}
              >
                View All Services
              </Link>
              <Link 
                to="/contact" 
                className={`px-6 sm:px-8 py-3 rounded-full font-medium transition ${
                  reduceMotion ? '' : 'hover:scale-105 hover:shadow-lg'
                } ${
                  isDarkMode 
                    ? 'bg-gray-800 text-white hover:bg-gray-700 shadow-md shadow-gray-900/30' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-md shadow-gray-400/20'
                } active:scale-95`}
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Showcase - Apple style */}
      <section className={`py-14 sm:py-20 ${isDarkMode ? 'bg-[#1d1d1f]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#1d1d1f]'}`}>
                Services
              </h2>
              <p className={`text-base sm:text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                High-quality freelance services to help you grow your business and stand out from the competition.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 
                }}
                whileHover={reduceMotion ? {} : { y: -10 }}
                className={`rounded-2xl overflow-hidden shadow-lg ${
                  isDarkMode ? 'bg-gray-900' : 'bg-white'
                } transition-all duration-300 h-full flex flex-col hw-accelerate`}
              >
                <div className="relative">
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      fallbackColor={service.fallbackColor}
                      style={{
                        transform: reduceMotion ? 'none' : 'scale(1)',
                        transition: 'transform 0.5s ease'
                      }}
                      loading={index === 0 ? "eager" : "lazy"}
                      fetchpriority={index === 0 ? "high" : "auto"}
                    />
                  </div>
                  {service.tag && (
                    <span 
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold shadow-md"
                      style={{ 
                        backgroundColor: service.color,
                        color: '#fff'
                      }}
                    >
                      {service.tag}
                    </span>
                  )}
                </div>
                
                <div className="p-5 sm:p-6 flex-grow flex flex-col">
                  <h3 className={`text-lg sm:text-xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-[#1d1d1f]'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {service.subtitle}
                  </p>
                  <p className={`mb-4 flex-grow text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className={`font-medium text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {service.price}
                    </span>
                    <Link 
                      to="/services" 
                      className={`flex items-center text-sm sm:text-base font-medium ${
                        isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                      }`}
                    >
                      Learn more <FaArrowRight className="ml-1" size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/services" 
              className={`inline-flex items-center py-3 px-6 rounded-full font-medium ${
                isDarkMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              } transition transform ${reduceMotion ? '' : 'hover:scale-105'}`}
            >
              View All Services <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Carousel style */}
      <section className={`py-14 sm:py-20 ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#1d1d1f]'}`}>
                Client Testimonials
              </h2>
              <p className={`text-base sm:text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Hear what my clients have to say about working with me.
              </p>
            </motion.div>
          </div>

          <div className="relative" ref={testimonialRef}>
            <div className="overflow-hidden">
              <motion.div
                className="flex flex-nowrap transition-all duration-500"
                animate={{ x: `-${activeTestimonial * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4 sm:px-8"
                  >
                    <div className={`p-6 sm:p-10 rounded-2xl ${
                      isDarkMode ? 'bg-gray-900' : 'bg-white'
                    } shadow-lg max-w-3xl mx-auto`}>
                      <div className="flex items-start mb-6">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl ${testimonial.color} mr-4 flex-shrink-0`}>
                          {testimonial.image}
                        </div>
                        <div>
                          <h3 className={`text-lg sm:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-[#1d1d1f]'}`}>
                            {testimonial.name}
                          </h3>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <FaQuoteLeft 
                          className={`absolute -top-2 -left-2 text-opacity-10 ${isDarkMode ? 'text-gray-400' : 'text-gray-300'}`} 
                          size={24} 
                        />
                        <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} pl-4`}>
                          {testimonial.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation controls */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <button
                onClick={handlePrev}
                className={`p-2 rounded-full transition ${
                  isDarkMode 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
                aria-label="Previous testimonial"
              >
                <FaChevronLeft size={16} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeTestimonial === index
                        ? isDarkMode 
                          ? 'bg-blue-400 w-6' 
                          : 'bg-blue-600 w-6'
                        : isDarkMode 
                          ? 'bg-gray-700' 
                          : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className={`p-2 rounded-full transition ${
                  isDarkMode 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
                aria-label="Next testimonial"
              >
                <FaChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-14 sm:py-20 ${isDarkMode ? 'bg-[#1d1d1f]' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#1d1d1f]'}`}>
                Frequently Asked Questions
              </h2>
              <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Find answers to common questions about my services.
              </p>
            </motion.div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`border rounded-xl overflow-hidden ${
                  isDarkMode ? 'border-gray-800' : 'border-gray-200'
                }`}
              >
                <button
                  className={`flex justify-between items-center w-full p-5 text-left ${
                    isDarkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="font-medium text-base sm:text-lg">{faq.question}</span>
                  <span>{expandedFaq === faq.id ? <FaMinus /> : <FaPlus />}</span>
                </button>
                <AnimatePresence>
                  {expandedFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`px-5 pb-5 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      } text-sm sm:text-base`}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className={`font-medium mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Still have questions?
            </p>
            <Link
              to="/contact"
              className={`inline-flex items-center py-3 px-6 rounded-full font-medium ${
                isDarkMode 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              } transition ${reduceMotion ? '' : 'hover:scale-105'}`}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#1d1d1f]'}`}>
              Ready to Get Started?
            </h2>
            <p className={`text-base sm:text-lg mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Let's work together to bring your creative vision to life. Contact me today to discuss your project needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/services" 
                className={`px-6 sm:px-8 py-3 rounded-full font-medium transition ${
                  reduceMotion ? '' : 'hover:scale-105 hover:shadow-lg'
                } ${
                  isDarkMode 
                    ? 'bg-gray-800 text-white hover:bg-gray-700 shadow-md' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-md'
                } active:scale-95`}
              >
                Explore Services
              </Link>
              <Link 
                to="/contact" 
                className={`px-6 sm:px-8 py-3 rounded-full text-white font-medium transition ${
                  reduceMotion ? '' : 'hover:scale-105 hover:shadow-lg'
                } bg-[#06c] shadow-md shadow-blue-500/20 active:scale-95`}
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 