import { Link } from 'react-router-dom';
import styles from './style.module.css';
import { logo } from '../../contant';
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { BsInfoCircle, BsTwitterX } from "react-icons/bs";
import { RiContactsBook3Line } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerSection}>
        <div className={styles.font}>
          <h3 >Certificates</h3>
          <div className={styles.certificatesLogos}>
            {logo.map((imgs, index) => {
              return (
                <div key={index} className={styles.logo}>
                  <img src={imgs.image} />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className={styles.footerSection}>
        <div className={styles.font}>
          <h3>Contact</h3>
          <div className={styles.cont}>
            <a className='flex items-center gap-2' href="mailto:info@varniexports.com" ><FaLink />info@varniexports.com</a>
            <a className='flex items-center gap-2' href="tel:+91 94088 62963"><FiPhone />+91 94088 62963</a>
            <a className='flex items-center gap-2' href="tel:+91 99245 81694" ><FiPhone />+91 99245 81694</a>
          </div>
        </div>
      </div>

      <div className={styles.footerSection}>
        <div className={styles.font}>
          <h3>Address</h3>
          <p className='flex items-center gap-2'  > <IoLocationOutline className='text-3xl' />Head Office
            Ahmedabad, <br />Gujarat, India</p>
          <div className='flex gap-4 mt-4'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className='text-2xl text-gray-600 hover:text-[#1877F2]' />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <BsTwitterX className='text-2xl text-gray-600 hover:text-[#1DA1F2]' />
            </a>
            <a href="https://wa.me/919408862963" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className='text-2xl text-gray-600 hover:text-[#25D366]' />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='text-2xl text-gray-600 hover:text-[#E4405F]' />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerSection}>
        <div className={styles.font}>
          <h3 className='flex items-center'>Quick Links</h3>
          <div className='flex flex-col gap-4'>
            <Link to="/products" className="text-gray-700 no-underline flex items-center gap-2"><MdProductionQuantityLimits className='text-2xl' />Products</Link>
            <Link to="/certificates" className="text-gray-700 no-underline flex items-center gap-2"><GrCertificate className='text-2xl' />Certificates</Link>
            <Link to="/about" className="text-gray-700 no-underline flex items-center gap-2"><BsInfoCircle className='text-2xl' />About</Link>
            <Link to="/contact-us" className="text-gray-700 no-underline flex items-center gap-2"><RiContactsBook3Line className='text-2xl' />Contact Us</Link>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; Varni Export. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
