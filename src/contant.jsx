import banner1 from './assets/Banner/banner-1.webp';
import banner2 from './assets/Banner/banner-2.webp';
import banner3 from './assets/Banner/banner-3.webp';
import Black_raisins from './assets/Black_raisins.jpg';
import Brown_Sesame from './assets/Brown_Sesame.png';
import Cardamom from './assets/Cardamom.jpg';
import Currants from './assets/Currants.jpg';
import guar_meal from './assets/guar_meal.jpg';
import Red_Raisin from './assets/Red_Raisin.jpg';
import Split_bengal_gram_chana_dal from './assets/Split_bengal_gram_chana_dal.jpg';
import White_Onion from './assets/White_Onion.png';
import { IoShieldHalfSharp } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa6";
import { FaUserClock } from "react-icons/fa";
import haccplogo from "./assets/haccplogo-transformed.png"
import cgs from "./assets/CGS.png"
import fssi from "./assets/fssai.png"
import iso from "./assets/iso.png"
import kosher from "./assets/kosher.png"
import usdi from "./assets/usdi.png"



// Product Images
// import privateProductFront from "./assets/private lable/package-front.png"
// import privateProductBack from "./assets/private lable/package-back.png"


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
    { title: "Experience in Agri-Commodities", description: "one-stop for all impex solutions", image: banner1 },
    { title: "Black And White Sesame Seeds Exporter", description: "One Place for Best Quality Sesame Seeds", image: banner2 },
    { title: "Leading Spice Exporter", description: "One-Stop For Best Quality Spices", image: banner3 }
]

export const commitmentSection = [
    { title: "SECURITY", description: "In the Impex area, security is always a primary concern so, we provide the best security in payment processing, physical assets, and trade secrets.", logo: <IoShieldHalfSharp size={60} color="var(--primary-color)" /> },
    { title: "TRUST", description: "We Engage the client in an open dialog about issues that are key to the consumer about the whole import-export process.", logo: <FaHandshake size={60} color="var(--primary-color)" /> },
    { title: "COMMITMENT", description: "We are committed to fulfilling all your requirements just in time. We consider your consignment as our mission statement.", logo: <FaUserClock size={60} color="var(--primary-color)" /> },

]

export const contactUsSection = {
    companyName: "VARNI EXPORTS",
    address: "B-705, Titanium Heights, Opp. Vodafone House, Corporate Rd, Prahlad Nagar, Ahmedabad, 380015 Gujarat, India",
    contact: "+91 94088 62963",
    email: "sales@varniexports.com"

}

export const products = [
    { id: 1, name: "Black-raisins", image: Black_raisins },
    { id: 2, name: "Brown-Sesame", image: Brown_Sesame },
    { id: 3, name: "Cardamom", image: Cardamom },
    { id: 4, name: "Currants", image: Currants },
    { id: 5, name: "guar-meal", image: guar_meal },
    { id: 6, name: "Red-Raisin", image: Red_Raisin },
    { id: 7, name: "Split-bengal-gram-chana-dal", image: Split_bengal_gram_chana_dal },
    { id: 8, name: "White-Onion", image: White_Onion },
]

export const counter = [
    { id: 1, name: "Projects", number: "63" },
    { id: 2, name: "Likes", number: "50" },
    { id: 3, name: "On Going Projects", number: "15" },
    { id: 4, name: "Awards", number: "4" },
]
export const logo = [
    { id: 1, image: haccplogo },
    { id: 2, image: cgs },
    { id: 3, image: iso },
    { id: 4, image: fssi },
    { id: 5, image: usdi },
    { id: 6, image: kosher }
]