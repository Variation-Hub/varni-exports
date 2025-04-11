import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Function to convert URL with spaces (%20) to URL with hyphens
    const convertUrlWithSpacesToHyphens = (url) => {
      // Check if URL contains %20
      if (url.includes('%20')) {
        // Replace %20 with hyphens
        return url.replace(/%20/g, '-');
      }
      return null;
    };

    const currentUrl = location.pathname;
    const newUrl = convertUrlWithSpacesToHyphens(currentUrl);

    // If we have a new URL, redirect to it
    if (newUrl && newUrl !== currentUrl) {
      navigate(newUrl, { replace: true });
    }
  }, [location.pathname, navigate]);

  // This component doesn't render anything
  return null;
};

export default RedirectHandler; 