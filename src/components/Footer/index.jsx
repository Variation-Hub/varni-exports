import { Link } from 'react-router-dom';
import styles from './style.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <h3>Certificates</h3>
        <div className={styles.certificatesLogos}>
          <img src="path_to_certificate_logo_1" alt="Certificate 1" />
          <img src="path_to_certificate_logo_2" alt="Certificate 2" />
          <img src="path_to_certificate_logo_3" alt="Certificate 3" />
          {/* Add more images as needed */}
        </div>
      </div>
      <div className={styles.footerSection}>
        <h3>Contact</h3>
        <a href="mailto:info@bhimaniexports.com">info@varniexports.com</a>
        <p>+91 94088 62963</p>
        <p>+91 94088 62963</p>
      </div>
      <div className={styles.footerSection}>
        <h3>Address</h3>
        <p>Head Office</p>
        <p>Ahmedabad, Gujarat, India</p>
      </div>
      <div className={styles.footerSection}>
        <h3>Quick Links</h3>
        <div className='flex flex-col'>
          <Link to="/products" className="text-gray-700 no-underline">Products</Link>
          <Link to="/certificates" className="text-gray-700 no-underline">Certificates</Link>
          <Link to="/about" className="text-gray-700 no-underline">About</Link>
          <Link to="/contact-us" className="text-gray-700 no-underline">Contact Us</Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; Varni Export Pvt Ltd. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
