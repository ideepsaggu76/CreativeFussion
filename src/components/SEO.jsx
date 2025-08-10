import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = 'CreativeFussion | Expertise. Creativity. Results. The Right Mix',
  description = 'Professional creative services including logo design, social media management, video editing and more by CreativeFussion.',
  keywords = 'creative services, logo design, social media management, video editing, AI video, graphic design',
  canonical = '',
  image = '/images/logo.svg',
  type = 'website'
}) => {
  // Create the full URL for canonical link and images
  const siteUrl = 'https://creativefussion.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />
    </Helmet>
  );
};

export default SEO;
