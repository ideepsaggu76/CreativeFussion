import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `*New Inquiry from Website*\n
*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}
*Message:* ${formData.message}`
    );
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919780089101?text=${whatsappMessage}`, '_blank');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };
  
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '9779406876',
      link: 'tel:9779406876',
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      value: '9780089101',
      link: 'https://wa.me/919780089101',
      primary: true,
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'pb31ale1212@gmail.com',
      link: 'mailto:pb31ale1212@gmail.com',
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'Randeep Singh',
      link: 'https://www.linkedin.com/in/randeep-singh',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Sector 56, Chandigarh, India',
      link: 'https://maps.google.com/?q=Sector+56+Chandigarh+India',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Have a project in mind? Let's discuss how I can help your business grow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
          {/* Contact Info - Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            
            <div className="px-6 py-8 -mt-10">
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-6">
                <FaWhatsapp className="text-green-500 text-3xl" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${
                      item.primary 
                        ? 'bg-green-50 hover:bg-green-100 text-green-800' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      item.primary ? 'bg-green-500 text-white' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.title}</p>
                      <p className={`font-medium ${item.primary ? 'text-green-700' : 'text-gray-800'}`}>
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form - Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">Message Sent Successfully!</h3>
                    <p className="text-sm text-green-700 mt-1">
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium text-center flex items-center justify-center gap-2 hover:from-green-600 hover:to-green-700 transition-all shadow-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        <FaWhatsapp size={20} />
                        <span>Send via WhatsApp</span>
                        <FaPaperPlane className="ml-1" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-gray-500 text-sm mt-3">
                    Your inquiry will be sent directly to my WhatsApp for faster response
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
        
        {/* Google Maps Embed */}
        <div className="mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13716.071023923144!2d76.7360217!3d30.7020284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed9a75cf8b43%3A0x1178876b433510c2!2sSector%2056%2C%20Chandigarh%2C%20160047!5e0!3m2!1sen!2sin!4v1635499034472!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Sector 56, Chandigarh, India"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 