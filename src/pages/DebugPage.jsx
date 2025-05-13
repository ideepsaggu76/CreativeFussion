import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const DebugPage = () => {
  const location = useLocation();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Routing Debug Information</h1>
      
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-2">Current Location</h2>
        <pre className="bg-white p-3 rounded border overflow-auto">
          {JSON.stringify(location, null, 2)}
        </pre>
      </div>
      
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-2">Available Routes</h2>
        <ul className="list-disc pl-6">
          <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
          <li><Link to="/about" className="text-blue-600 hover:underline">About</Link></li>
          <li><Link to="/services" className="text-blue-600 hover:underline">Services</Link></li>
          <li><Link to="/portfolio" className="text-blue-600 hover:underline">Portfolio</Link></li>
          <li><Link to="/testimonials" className="text-blue-600 hover:underline">Testimonials</Link></li>
          <li><Link to="/contact" className="text-blue-600 hover:underline">Contact</Link></li>
        </ul>
      </div>
      
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Environment Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p><strong>Base URL:</strong> {import.meta.env.BASE_URL || '/'}</p>
            <p><strong>Mode:</strong> {import.meta.env.MODE}</p>
          </div>
          <div>
            <p><strong>Development:</strong> {import.meta.env.DEV ? 'Yes' : 'No'}</p>
            <p><strong>Production:</strong> {import.meta.env.PROD ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default DebugPage; 