import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaWhatsapp, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/randeep-singh', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: <FaFacebookF size={20} />, url: '#', label: 'Facebook', color: 'hover:bg-blue-500' },
    { icon: <FaInstagram size={20} />, url: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: <FaTwitter size={20} />, url: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: <FaYoutube size={20} />, url: '#', label: 'YouTube', color: 'hover:bg-red-600' },
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };
  
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Randeep Singh</h3>
            <p className="text-gray-300 mb-4">
              Professional freelancer providing high-quality design & tech services to clients worldwide.
            </p>
            <motion.div 
              className="flex flex-wrap gap-3 mt-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  variants={item}
                  href={social.url} 
                  className={`flex items-center justify-center w-10 h-10 rounded-full bg-white/10 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-${social.color}/20`}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white transition-colors inline-block hover:translate-x-1 transition-transform duration-200"
                  >
                    <span className="text-primary-400 mr-2">›</span>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-center space-x-3 group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-600/20 transition-colors duration-300">
                  <FaPhone className="text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <a href="tel:+919779406876" className="text-gray-300 hover:text-white group-hover:translate-x-1 transition-transform duration-200">+91 9779406876</a>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3 group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                  <FaWhatsapp className="text-green-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <a 
                  href="https://wa.me/919780089101?text=Hi%20Randeep,%20I%20saw%20your%20website%20and%20I'm%20interested%20in%20your%20services" 
                  className="text-gray-300 hover:text-white flex items-center group-hover:translate-x-1 transition-transform duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 9780089101
                  <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full shadow-sm">Chat</span>
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3 group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-600/20 transition-colors duration-300">
                  <FaEnvelope className="text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <a href="mailto:pb31ale1212@gmail.com" className="text-gray-300 hover:text-white group-hover:translate-x-1 transition-transform duration-200">pb31ale1212@gmail.com</a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Randeep Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 