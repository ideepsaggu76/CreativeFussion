/**
 * Creates a URL that properly accounts for the base path when deploying
 * @param {string} path - The path to the image or asset
 * @returns {string} - The full URL with the correct base path
 */
export const getImgUrl = (path) => {
  // If the path is already an absolute URL, return it
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Get the base path from Vite's import.meta.env
  const basePath = import.meta.env.BASE_URL || '/';
  
  // If the path starts with /freelancer-website/, remove that prefix
  let cleanPath = path;
  if (path.startsWith('/freelancer-website/')) {
    cleanPath = path.substring('/freelancer-website/'.length);
  } else if (path.startsWith('/')) {
    // Remove leading slash to avoid double slashes when combining paths
    cleanPath = path.substring(1);
  }
  
  // Ensure the base path ends with a slash
  const basePathWithSlash = basePath.endsWith('/') ? basePath : basePath + '/';
  
  // Explicitly set the URL to the correct absolute path for the application
  const fullUrl = basePathWithSlash + cleanPath;
  
  console.log(`imgUrl: ${path} → ${fullUrl}`);
  return fullUrl;
};

export default getImgUrl; 