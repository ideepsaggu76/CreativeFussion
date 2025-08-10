import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ 
  title = 'CreativeFussion | Professional Creative Services',
  metaDescription = 'Professional creative services including logo design, social media management, video editing and more by CreativeFussion.',
  canonicalUrl = ''
}) => {
  const siteUrl = 'https://creativefussion.com';
  const fullCanonicalUrl = canonicalUrl 
    ? `${siteUrl}${canonicalUrl}`
    : siteUrl;
    
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Add schema.org structured data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "CreativeFussion",
            "description": "${metaDescription}",
            "url": "${fullCanonicalUrl}",
            "logo": "${siteUrl}/images/logo.svg",
            "sameAs": [
              "https://www.facebook.com/creativefussion",
              "https://www.instagram.com/creativefussion",
              "https://twitter.com/creativefussion"
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default Head;
