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



// <<<<<<< HEAD
// Product Images
// import privateProductFront from "./assets/private lable/package-front.png"
// import privateProductBack from "./assets/private lable/package-back.png"

// =======
// >>>>>>> 5bc3f58204b863bd42d4a6978f37035d33c62236

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


export const products_detail1='Tm9uLUJhc21hdGk6IEVhc2lseSBkZWZpbmVkIGFzIGEgYm93bCBvZiByaWNlIG90aGVyIHRoYW4gQmFzbWF0aS4gTm9uLUJhc21hdGkgcmljZSBhbHNvIGhhcyBhIGhpZ2ggZGVtYW5kIGR1ZSB0byBpdHMgbXVsdGktZnVuY3Rpb24gY2hhcmFjdGVyaXN0aWNzIHdoaWNoIGFyZSB1c2VkIGluIGRpZmZlcmVudCBjdWxpbmFyeSBwcm9jZXNzZXMuIE5vbi1CYXNtYXRpIHJpY2UgaGFzIGJlZW4gcmVwb3J0ZWQgaW4gSW5kaWEgc2luY2UgdGhlIGVhcmx5IGRheXMgb2YgdGhlIDE4dGggQ2VudHVyeSB0aG91Z2ggaXQgbWF5IGhhdmUgYmVlbiBuYW1lZCBkaWZmZXJlbnRseS4gTm9uLUJhc21hdGkgaXMgYSB2YXJpZXR5IG9mIGxvbmcgZ3JhaW4gcmljZSB3aGljaCBpcyBieSB0cmFkaXRpb24gZnJvbSBJbmRpYS4gTm9uLUluZGlhbiBCYXNtYXRpIFJpY2UgaXMgd2VsbC1rbm93biB3b3JsZHdpZGUgZm9yIGl0cyBxdWFsaXR5IGFuZCBhcm9tYS4='
export const products_detail2 = 'QmhpbWFuaSBFeHBvcnRzIHNvdXJjZXMgdGhlIG1vc3QgZXhjZWxsZW50IHF1YWxpdHkgbm9uLWJhc21hdGkgcmljZSBmcm9tIHRoZSBmZXJ0aWxlIHJlZ2lvbnMgb2Ygbm9ydGhlcm4gcGFydHMgb2YgdGhlIGNvdW50cnksIEluZG8tR2FuZ2V0aWMgcGxhaW5zIGF0IHRoZSB2ZXJ5IGJlZ2lubmluZyBvZiB0aGUgb3BlcmF0aW9uLgoKVGhpcyByaWNlIGlzIGV4dHJlbWVseSByaWNoIHdpdGhpbiB0aGUgcHJvdGVpbiBhbHNvIGJlY2F1c2Ugb2YgdGhlIG9pbCBjb250ZW50LiBSaWdodCBhZnRlciB0aGUgc291cmNpbmcgcHJvY2VzcywgdGhlIG5vbiBiYXNtYXRpIHJpY2UgaXMgbWFkZSB0byB1bmRlcmdvIGNhcmVmdWwgY2xlYW5pbmcgd2hpY2ggaGVscHMgdG8gYWNoaWV2ZSBhIDkwIHRvIDk1JSBwdXJpdHkgbGV2ZWwuCgpWYXJpZXR5IEJoaW1hbmkgRXhwb3J0cyBoYXZlIFNvbmEgTWFzb29yaSBSaWNlLCBKZWVyYSBTYW1iYSBSaWNlLCAxMDAlIEJyb2tlbiBSaWNlLCBQb25uaSBSaWNlLCBJUiA2NCBSaWNlLCBJUiA4IFJpY2UsIE1hdHRhIFJpY2UsIE1hdHRhIFJpY2UsIElkbHkgLyBLcmFudGkgcmljZSBub24tQmFzbWF0aSByaWNlLgoKQmhpbWFuaSBFeHBvcnRzIGhhcyBrbm93biBzb3VyY2VzIHdpdGggYSBzcHJlYWQgcHJvY2Vzc2luZyBwbGFudCBjb25zaXN0aW5nIG9mIHRoZSBsYXRlc3QgbWFjaGluZXJ5IHRoYXQgdXRpbGl6ZXMgY3V0dGluZy1lZGdlIG1hY2hpbmVyeS4gVGhpcyBwbGFudCBtYWtlcyB1c2Ugb2YgZW52aXJvbm1lbnQtZnJpZW5kbHkgcHJhY3RpY2VzIHdoZXJldmVyIHBvc3NpYmxlIGFuZCBnaXZlcyB3YXN0ZSBtYW5hZ2VtZW50IHNwZWNpYWwgYXR0ZW50aW9uLiBUaGUgbmF0dXJhbCBiYXNtYXRpIHJpY2UgdGh1cyBwcm9kdWNlZCBpcyBvZiB0aGUgdmVyeSBiZXN0IHN0YW5kYXJkcyBhbmQgZXhwb3J0LXJlYWR5LiBPdXIgY29tcGFueSBpcyBkZWRpY2F0ZWQgdG8gc2VydmluZyB5b3UgaW4gdGhlIGFic29sdXRlIGJlc3Qgd2F5IGFuZCBjb25zaXN0ZW50bHkgaW1wcm92aW5nIGl0c2VsZiBkdXJpbmcgdGhpcyBlbmRlYXZvci4KCkJoaW1hbmkgRXhwb3J0cyBzaGlwcyBhbGwga2luZHMgb2YgdmFyaWV0aWVzIGluIG5vbi1iYXNtYXRpIHJpY2UgbGlrZSBTb25hIE1hc29vcmkgUmljZSwgSmVlcmEgU2FtYmEgUmljZSwgMTAwJSBCcm9rZW4gUmljZSwgUG9ubmkgUmljZSwgSVIgNjQgUmljZSwgSVIgOCBSaWNlLCBNYXR0YSBSaWNlLCBNYXR0YSBSaWNlLCBJZGx5IC8gS3JhbnRpIHJpY2Ugbm9uLUJhc21hdGkgcmljZSB3b3JsZHdpZGUuCgpSaWNlIGZyb20gSW5kaWEgaXMgdmVyeSByaWNoIGluIG51dHJpdGlvbiBhbmQgZnVsbCBvZiB2aXRhbWlucyBhcyBpcyB0aGUgcmVndWxhciBkaWV0IG9mIHRoZSBJbmRpYW4gcG9wdWxhdGlvbi4gUmljZSBzdGVhbSBhbmQgZ3JhaW4gcmljZSBhcmUgZWFzeSB0byBkaWdlc3QgZm9yIGFueSBhZ2Ugb2YgcGVvcGxlLgoKSWYgeW91IGFyZSBsb29raW5nIGZvciBhIG5vbiBiYXNtYXRpIHN1cHBsaWVyIGluIEluZGlhIG9yIGEgYmFzbWF0aSByaWNlIGV4cG9ydGVyIGZyb20gSW5kaWEsIHRoZW4gQmhpbWFuaSBFeHBvcnRzIGlzIHRoZSByaWdodCBjaG9pY2UgZm9yIHlvdXIgZnV0dXJlIGVuZGVhdm9ycy4KCkluIDIwMjAsIEluZGlhIGJlY2FtZSB0aGUgbGVhZGVyIGFzIGEgcmljZSBleHBvcnRlciB3b3JsZHdpZGUgZHVlIHRvIHRoZSBxdWFsaXR5IG9mIG5vbi1iYXNtYXRpIHJpY2UgYW5kIGl0cyBwcmljZS4KClVzZSBBbmQgQmVuZWZpdHMgT2YgTm9uIEJhc21hdGkgUmljZQpJbmRpYW4gTm9uLWJhc21hdGkgcmljZSBpcyBhIG5hdHVyYWwgc291cmNlIG9mIGFudGktaW5mbGFtbWF0aW9uIGZvciB5b3VyIGJvZHkuIEluIGFkZGl0aW9uLCBnbHV0ZW4tZnJlZSBtZWFscyBhcmUgc28gZ29vZCB0byBhZGQgdG8geW91ciBkYWlseSBkaWV0IHBsYW4uCgpOb24tQmFzbWF0aSByaWNlIGhhcyBzb21lIHZpdGFtaW5zIGxpa2UgQiBBbmQgQjEgd2hpY2ggaW1wcm92ZSB0aGUgbmVydm91cyBzeXN0ZW0gaGVhbHRoIG9mIHRoZSBicmFpbiB0byBmdW5jdGlvbiBwcm9wZXJseSAKCk91ciBib2R5IG5lZWRzIGEgaHVnZSBhbW91bnQgb2YgZW5lcmd5IHRvIHBlcmZvcm0gYSBkYXktdG8tZGF5IHRhc2ssIG5vbiBiYXNtYXRpIHJpY2UgaGFzIGNhcmJvaHlkcmF0ZXMgaW4gaHVnZSBhbW91bnRzIHdoaWNoIHByb3ZpZGUgcHJvcGVyIGVuZXJneSB0byBmdW5jdGlvbiB0aGUgd2hvbGUgZGF5LgoKTm9uLWJhc21hdGkgcmljZSBtYWtlcyB5b3UgZmF0ISBJdOKAmXMgYSBteXRoLiBJdCBoZWxwcyB0byByZWR1Y2Ugb2Jlc2l0eSBhbmQgcmVkdWNlIGNhbmNlciByaXNrIHRvby4gUmljZSB3YXRlciBpcyBnb29kIHRvIGZpZ2h0IGhhaXIgZmFsbC4KCk5vbmJhc21hdGkgcmljZSBpcyBhIGdvb2Qgc291cmNlIG9mIHByb3RlaW4sIGFzIGEgcmVzdWx0LCBpdCBwcm9tb3RlcyB0aGUgaGVhbHRoIG9mIHRoZSBoZWFydCBhbmQgY2FuIGJlIHVzZWQgZm9yIHNraW5jYXJlIGNvc21ldGljcy4='