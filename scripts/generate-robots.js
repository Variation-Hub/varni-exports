// Script to generate robots.txt file
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateRobotsTxt = () => {
  const robotsTxt = `# Allow all web crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://varniexports.com/sitemap.xml`;

  const publicDir = path.join(__dirname, '../public');
  
  // Check if public directory exists, if not create it
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Write robots.txt to public directory
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  
  console.log('robots.txt file has been generated successfully!');
};

// Execute the function
generateRobotsTxt(); 