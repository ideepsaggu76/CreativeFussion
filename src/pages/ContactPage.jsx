import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const ContactPage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleWhatsApp = () => {
    const text = `Hi, I'm ${formData.name} and I'm interested in your services. ${formData.message}`;
    window.open(`https://wa.me/+919780089101?text=${encodeURIComponent(text)}`, '_blank');
    resetForm();
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const text = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}
    `.trim();
    
    // Open WhatsApp with the formatted message
    window.open(`https://wa.me/+919780089101?text=${encodeURIComponent(text)}`, '_blank');
  };
  
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };
  
  return (
    <section className={`py-24 ${isDarkMode ? 'bg-[#1d1d1f]' : 'bg-[#f5f5f7]'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h1>
          <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Ready to bring your creative vision to life? Reach out to us and let's discuss how CreativeFussion can help your business.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`p-8 rounded-2xl shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="phone" 
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="+91 1234567890"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="service" 
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="">Select a service</option>
                  <option value="Logo Design">Logo Design (₹500)</option>
                  <option value="Visiting Card Design">Visiting Card Design (₹199)</option>
                  <option value="Poster/Banner Design">Poster/Banner Design (₹300)</option>
                  <option value="Social Media Post Design">Social Media Post Design (₹150)</option>
                  <option value="Social Media Management">Social Media Management (₹800/week)</option>
                  <option value="Video Editing">Video Editing (from ₹300)</option>
                  <option value="AI Generated Promotional Video">AI Generated Promotional Video (from ₹499)</option>
                  <option value="Data Entry">Data Entry (₹149/hr)</option>
                  <option value="PDF Editing/Form Filling">PDF Editing/Form Filling (₹99/task)</option>
                  <option value="YouTube Thumbnail Design">YouTube Thumbnail Design (₹200)</option>
                  <option value="Technical Help">Technical Help (from ₹149)</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Tell us about your project or requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <div className="flex items-center justify-center">
                  <FaWhatsapp className="mr-2" size={20} />
                  Send via WhatsApp
                </div>
              </button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className={`p-8 rounded-2xl shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <FaPhone className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Phone</h3>
                    <p className={`mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>+91 9780089101</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <FaEnvelope className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email</h3>
                    <p className={`mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>pb31ale1212@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Location</h3>
                    <p className={`mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Mohali, Chandigarh</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <FaWhatsapp className="text-green-600" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>WhatsApp</h3>
                    <p className={`mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <a 
                        href="https://wa.me/9780089101"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`flex items-center px-4 py-3 rounded-xl ${
                          isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                        } transition-colors shadow-sm`}
                      >
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white mr-4">
                          <FaWhatsapp size={24} />
                        </div>
                        <div>
                          <h3 className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>WhatsApp</h3>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>+91 9780089101</p>
                        </div>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`p-8 rounded-2xl shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Business Hours
              </h2>
              
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Monday - Friday</span>
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>10:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Saturday</span>
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>10:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Sunday</span>
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Closed</span>
                </li>
              </ul>
            </div>
            
            <div className={`p-8 rounded-2xl shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Quick Response
              </h2>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                For fastest response, contact us directly on WhatsApp. We typically respond within 2 hours during business hours.
              </p>
              <a 
                href="https://wa.me/9780089101" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center ${
                  isDarkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-800'
                } font-medium transition-colors`}
              >
                <FaWhatsapp className="mr-2" size={18} />
                Message on WhatsApp instead
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage; 