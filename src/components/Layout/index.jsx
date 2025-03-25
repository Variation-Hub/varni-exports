import { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaCity, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ScrollToTop from "../scrollToTop";
import SEO from "../SEO";
import RedirectHandler from "../RedirectHandler";

function Layout({ children, seoProps }) {
  const [open, setOpen] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <SEO {...seoProps} />
      <ScrollToTop />
      <RedirectHandler />
      <Navbar />
      <main>{children}</main>
      <Footer />

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-gray-600 hover:text-black">
              <FaTimes size={20} />
            </button>

            <div className="flex flex-col items-start gap-2">
              <div className="w-full flex flex-col items-center mb-4 md:mb-0">
                <img src={logo} alt="Company Logo" className="w-24 md:w-48" />
              </div>

              <div className="w-full">
                <form className="space-y-3">
                  <div className="flex items-center border-b border-gray-400">
                    <FaUser className="text-gray-500 m-2" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full outline-none bg-transparent m-2"
                    />
                  </div>

                  <div className="flex items-center border-b border-gray-400">
                    <FaPhone className="text-gray-500 m-2 scale-x-[-1]" />
                    <input
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile"
                      className="w-full outline-none bg-transparent m-2"
                    />
                  </div>

                  <div className="flex items-center border-b border-gray-400">
                    <FaEnvelope className="text-gray-500 m-2" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full outline-none bg-transparent m-2"
                    />
                  </div>

                  <div className="flex items-center border-b border-gray-400">
                    <FaCity className="text-gray-500 m-2" />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      className="w-full outline-none bg-transparent m-2"
                    />
                  </div>

                  <button className="w-full bg-[var(--primary-color)] text-white py-2 rounded hover:bg-blue-900">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
