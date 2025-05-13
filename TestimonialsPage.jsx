import React from 'react';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';

const TestimonialsPage = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-primary-700 to-secondary-700 py-20">
        <div className="container-custom text-center text-white">
          <h1 className="heading-xl mb-4">Client Testimonials</h1>
          <p className="text-lg max-w-2xl mx-auto">
            What my clients say about working with me and the results they've achieved.
          </p>
        </div>
      </div>
      
      <Testimonials />
      
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-gray-800 mb-6">Ready to Experience the Same Results?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join my growing list of satisfied clients and let's work together to achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="btn btn-primary px-6 py-3">
              View Services
            </Link>
            <Link to="/contact" className="btn btn-outline px-6 py-3">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage; 