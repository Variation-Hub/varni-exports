import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Varni Exports - Premium Indian Spices & Food Products Exports',
  description = 'Varni Exports offers premium quality Indian spices, food products, and agricultural commodities. Trusted export partners for global businesses.',
  keywords = 'Indian exports, spices, food products, agricultural exports, Varni Exports',
  canonicalUrl = 'https://varniexports.com',
  ogType = 'website',
  ogImage = '', // Add default image path here when available
  structuredData = null,
}) => {
  // Default structured data for Organization
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Varni Exports',
    url: 'https://varniexports.com',
    logo: 'https://varniexports.com/logo.png', // Update with actual logo URL
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+919879772509', // Update with your contact number
      contactType: 'customer service'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'FF-21, Shivam Complex, New Ranip',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '382480',
      addressCountry: 'IN'
    }
  };

  // Default structured data for Reviews
  const reviewStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Varni Exports Products',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '512'
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Varni Exports" />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Review Schema (static) */}
      <script type="application/ld+json">
        {JSON.stringify(reviewStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO; 