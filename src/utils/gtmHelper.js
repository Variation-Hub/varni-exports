/**
 * Safe GTM helper to prevent errors from breaking the app
 */

// Safely push to dataLayer
export const safeDataLayerPush = (data) => {
  try {
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push(data);
    }
  } catch (error) {
    console.warn('Error pushing to dataLayer:', error);
  }
};

// Safely track page view
export const trackPageView = (url) => {
  safeDataLayerPush({
    event: 'pageview',
    page: {
      path: url
    }
  });
};

// Safely track event
export const trackEvent = (category, action, label, value) => {
  safeDataLayerPush({
    event: 'interaction',
    eventCategory: category,
    eventAction: action,
    eventLabel: label,
    eventValue: value
  });
};

// Create a safe GTM environment by patching potential problem areas
export const initSafeGTM = () => {
  // Only run in browser environment
  if (typeof window === 'undefined') return;
  
  try {
    // Add global error handler for GTM and related scripts
    const originalOnError = window.onerror;
    window.onerror = function(message, source, lineno, colno, error) {
      if (source && (
        source.includes('googletagmanager') || 
        source.includes('google-analytics') ||
        source.includes('el_main') || 
        source.includes('el_conf')
      )) {
        console.warn('External script error suppressed:', message);
        // Prevent error from propagating
        return true;
      }
      
      // Call original handler if it exists
      if (typeof originalOnError === 'function') {
        return originalOnError(message, source, lineno, colno, error);
      }
      
      return false;
    };
    
    // Create defensive dataLayer if not exists
    if (!window.dataLayer) {
      window.dataLayer = [];
    }
    
    // Create defensive gtag function if not exists
    if (typeof window.gtag !== 'function') {
      window.gtag = function() {
        if (window.dataLayer) {
          window.dataLayer.push(arguments);
        }
      };
    }
  } catch (error) {
    console.warn('Error initializing safe GTM environment:', error);
  }
};

export default {
  initSafeGTM,
  trackPageView,
  trackEvent,
  safeDataLayerPush
}; 