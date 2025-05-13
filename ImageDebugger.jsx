import React, { useState, useEffect } from 'react';
import getImgUrl from '../utils/imgUrl';

const ImageDebugger = () => {
  const [testImages, setTestImages] = useState([
    { id: 1, path: "/freelancer-website/images/services/logo-design.jpg", loaded: false, error: null },
    { id: 2, path: "/freelancer-website/images/services/visiting-card.jpg", loaded: false, error: null },
    { id: 3, path: "/freelancer-website/images/services/data-entry.jpg", loaded: false, error: null },
    { id: 4, path: "/freelancer-website/images/services/social-media.jpg", loaded: false, error: null },
    { id: 5, path: "/freelancer-website/images/logo.svg", loaded: false, error: null }
  ]);
  
  const [baseUrl, setBaseUrl] = useState(import.meta.env.BASE_URL || '/');
  
  const handleImageLoad = (id) => {
    setTestImages(current => 
      current.map(img => 
        img.id === id ? { ...img, loaded: true, error: null } : img
      )
    );
  };
  
  const handleImageError = (id, error) => {
    setTestImages(current => 
      current.map(img => 
        img.id === id ? { ...img, loaded: false, error: error.message || "Failed to load" } : img
      )
    );
  };
  
  return (
    <div className="p-4 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Image Loading Debugger</h2>
      <div className="mb-4">
        <p className="font-medium">Base URL: <span className="font-mono text-blue-600">{baseUrl}</span></p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testImages.map(img => {
          const fullPath = img.path;
          return (
            <div key={img.id} className="border rounded-lg p-4 bg-white">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Image {img.id}: </span>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  img.loaded 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}>
                  {img.loaded ? "Loaded" : "Failed"}
                </span>
              </div>
              
              <div className="mb-2">
                <p className="text-xs text-gray-500">Full Path: <span className="font-mono">{fullPath}</span></p>
              </div>
              
              <div className="h-32 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                {img.loaded ? (
                  <img 
                    src={fullPath} 
                    alt={`Test image ${img.id}`} 
                    className="w-full h-full object-contain"
                    onLoad={() => handleImageLoad(img.id)} 
                    onError={(e) => handleImageError(img.id, e.error)}
                  />
                ) : (
                  <div className="text-red-500 text-center p-4">
                    <p>Testing image load...</p>
                    <img 
                      src={fullPath} 
                      alt={`Test image ${img.id}`} 
                      className="hidden"
                      onLoad={() => handleImageLoad(img.id)} 
                      onError={(e) => handleImageError(img.id, e.error)}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h3 className="font-bold text-yellow-800 mb-2">Troubleshooting Tips:</h3>
        <ul className="list-disc pl-4 text-sm text-yellow-700">
          <li>Make sure all image files exist in the correct folders</li>
          <li>Check the base URL configuration in your router (currently: {baseUrl})</li>
          <li>Verify that the public folder is being served correctly</li>
          <li>Try clearing your browser cache</li>
          <li>Check for CORS issues if loading from a different domain</li>
        </ul>
      </div>
    </div>
  );
};

export default ImageDebugger; 