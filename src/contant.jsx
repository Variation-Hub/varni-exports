import banner1 from './assets/banner-1.png';
import banner2 from './assets/banner-2.png';
import banner3 from './assets/banner-3.png';
import { IoShieldHalfSharp } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa6";
import { FaUserClock } from "react-icons/fa";


export const catagories = [
    { name: 'Rice', path: '/products/Rice' },
    { name: 'Wheat (Whole Grain)', path: '/products/Wheat' },
    { name: 'Barley', path: '/products/Barley' },
    { name: 'Steel-Cut Oats', path: '/products/Oats' },
    { name: 'Quinoa', path: '/products/Quinoa' },
    { name: 'Sweet Corn', path: '/products/Corn' },
    { name: 'Millet', path: '/products/Millet' },
    { name: 'Rye Berries', path: '/products/Rye' },
    { name: 'Sorghum', path: '/products/Sorghum' },
    { name: 'Buckwheat Groats', path: '/products/Buckwheat' }
];

export const landingPageSlider = [
    { title: "15+ Years of Experience in Agri-Commodities", description: "one-stop for all impex solutions", image: banner1 },
    { title: "Black And White Sesame Seeds Exporter", description: "One Place for Best Quality Sesame Seeds", image: banner2 },
    { title: "Leading Spice Exporter", description: "One-Stop For Best Quality Spices", image: banner3 }
]

export const commitmentSection = [
    { title: "SECURITY", description: "In the Impex area, security is always a primary concern so, we provide the best security in payment processing, physical assets, and trade secrets.", logo: <IoShieldHalfSharp size={60} color="var(--primary-color)" /> },
    { title: "TRUST", description: "We Engage the client in an open dialog about issues that are key to the consumer about the whole import-export process.", logo: <FaHandshake size={60} color="var(--primary-color)" /> },
    { title: "COMMITMENT", description: "We are committed to fulfilling all your requirements just in time. We consider your consignment as our mission statement.", logo: <FaUserClock size={60} color="var(--primary-color)" /> },

]