import React, { useState, useEffect } from 'react';
import { getImgUrl } from '../utils/imgUrl';

/**
 * A component that handles image loading with fallbacks and error states
 * It will try multiple paths to load the image before showing a fallback
 */
const ImageWithFallback = ({ 
  src, 
  alt, 
  className, 
  fallbackIcon, 
  fallbackColor = "#1d6bf3",
  onLoad,
  onError,
  style,
  ...rest 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(getImgUrl(src));
  
  // Reset state when src changes
  useEffect(() => {
    setLoaded(false);
    setError(false);
    setCurrentSrc(getImgUrl(src));
  }, [src]);
  
  const handleImageLoad = () => {
    console.log(`Image loaded successfully: ${currentSrc}`);
    setLoaded(true);
    setError(false);
    if (onLoad) onLoad();
  };
  
  const handleImageError = () => {
    console.error(`Image failed to load: ${currentSrc}`);
    
    // Try alternative paths
    if (currentSrc.startsWith('/')) {
      // Try without leading slash
      setCurrentSrc(getImgUrl(currentSrc.substring(1)));
    } else if (!currentSrc.includes('/images/')) {
      // Try with images/ prefix
      setCurrentSrc(getImgUrl(`images/${src}`));
    } else {
      // All attempts failed
      setError(true);
      if (onError) onError();
    }
  };
  
  // If all attempts failed, show fallback
  if (error) {
    return (
      <div 
        className={`image-error-fallback ${className || ''}`} 
        style={{ 
          background: `linear-gradient(45deg, ${fallbackColor}, #333)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100px',
          ...style
        }}
        {...rest}
      >
        {fallbackIcon || (
          <span className="text-white font-bold text-2xl">
            {alt ? alt.charAt(0).toUpperCase() : '?'}
          </span>
        )}
      </div>
    );
  }
  
  // Show image (or loading image)
  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`hw-accelerate ${className || ''}`}
      style={style}
      onLoad={handleImageLoad}
      onError={handleImageError}
      {...rest}
    />
  );
};

export default ImageWithFallback; 