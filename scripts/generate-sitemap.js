// Script to generate sitemap.xml file
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateSitemap = () => {
  // Base URL for the site
  const baseUrl = 'https://varniexports.com';
  
  // Define all URLs from the route structure with the new URL format
  const urls = [
    '',
    '/all-products',
    '/products/peanuts',
    '/products/sesame-seeds',
    '/products/spices',
    '/products/pulses',
    '/products/dehydrated-product',
    '/products/raisins',
    '/products/onion',
    '/products/grains',
    '/products/roasted-gram',
    '/products/fruits-and-vegetables',
    '/products/other-products',
    '/certificates',
    '/about',
    '/contact-us',
    '/services/import',
    '/services/private-lablel',
    '/services/exports',
  ];
  
  // Add product detail URLs
  const productUrls = [
    // Peanuts
    '/products/peanuts/Bold-Peanut-Seeds',
    '/products/peanuts/Java-Peanut-Seed',
    '/products/peanuts/Blanched-Peanut-Seeds',
    '/products/peanuts/Ground-Nuts',
    '/products/peanuts/Roasted-Peanuts',
    '/products/peanuts/TJ-Peanut',
    
    // Sesame Seeds
    '/products/sesame-seeds/Natural-Sesame-Seeds',
    '/products/sesame-seeds/Black-Sesame-Seeds',
    '/products/sesame-seeds/Brown-Sesame-Seeds',
    '/products/sesame-seeds/Hulled-Sesame-Seeds',
    '/products/sesame-seeds/Roasted-Sesame-Seeds',
    
    // Rest of product URLs... (Add all product URLs with the new format)
  ];
  
  // Combine all URLs
  const allUrls = [...urls, ...productUrls];
  
  // Generate XML content
  let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xmlContent += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  allUrls.forEach(url => {
    xmlContent += '  <url>\n';
    xmlContent += `    <loc>${baseUrl}${url}</loc>\n`;
    xmlContent += '    <changefreq>weekly</changefreq>\n';
    xmlContent += '    <priority>0.8</priority>\n';
    xmlContent += '  </url>\n';
  });
  
  xmlContent += '</urlset>';
  
  const publicDir = path.join(__dirname, '../public');
  
  // Check if public directory exists, if not create it
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Write sitemap.xml to public directory
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xmlContent);
  

};

// Execute the function
generateSitemap(); 