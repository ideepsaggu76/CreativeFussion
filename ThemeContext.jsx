import React, { createContext, useState, useEffect } from 'react';

// Enhanced theme context with Apple-like features
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  // Check system preferences on mount
  useEffect(() => {
    // Check for dark mode preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReduceMotion(prefersReducedMotion);
    
    // Add listeners for system preference changes
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleDarkModeChange = (e) => setIsDarkMode(e.matches);
    const handleMotionChange = (e) => setReduceMotion(e.matches);
    
    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
    motionMediaQuery.addEventListener('change', handleMotionChange);
    
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
      motionMediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const toggleReduceMotion = () => {
    setReduceMotion(prev => !prev);
  };

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ 
      isDarkMode, 
      toggleTheme, 
      reduceMotion, 
      toggleReduceMotion,
      highContrast,
      toggleHighContrast
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider }; 