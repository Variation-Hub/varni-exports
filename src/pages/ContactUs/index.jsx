import { contactUsSection } from '../../contant'
import style from './style.module.css'
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import contactUsImage from '../../assets/Banner/contact-us-banner.webp'
import { useState } from 'react';

const Contact = () => {

  const [contact, setContact] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    business_type: '',
    website: '',
    address: '',
    city: '',
    postal_code: '',
    country: '',
    product: '',
    state: '',
    country_code: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  function onChangeHandle(event) {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  }

  function validate() {
    let tempErrors = {};
    let isValid = true;

    // First name validation
    if (!contact.first_name) {
      tempErrors["first_name"] = "First name is required";
      isValid = false;
    }

    // Last name validation
    if (!contact.last_name) {
      tempErrors["last_name"] = "Last name is required";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contact.email) {
      tempErrors["email"] = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(contact.email)) {
      tempErrors["email"] = "Invalid email format";
      isValid = false;
    }

    // Phone validation
    if (!contact.country_code) {
      tempErrors["country_code"] = "Country code is required";
      isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (!contact.phone) {
      tempErrors["phone"] = "Phone number is required";
      isValid = false;
    } else if (!phonePattern.test(contact.phone)) {
      tempErrors["phone"] = "Invalid phone number";
      isValid = false;
    }

    // Business type validation
    // if (!contact.business_type) {
    //   tempErrors["business_type"] = "Business type is required";
    //   isValid = false;
    // }

    // Website validation
    // if (!contact.website) {
    //   tempErrors["website"] = "Website is required";
    //   isValid = false;
    // }

    // Address validation
    // if (!contact.address) {
    //   tempErrors["address"] = "Address is required";
    //   isValid = false;
    // }

    // City validation
    // if (!contact.city) {
    //   tempErrors["city"] = "City is required";
    //   isValid = false;
    // }

    // Postal code validation
    // const postalPattern = /^[0-9]{6}$/;
    // if (!contact.postal_code) {
    //   tempErrors["postal_code"] = "Postal code is required";
    //   isValid = false;
    // } else if (!postalPattern.test(contact.postal_code)) {
    //   tempErrors["postal_code"] = "Invalid postal code";
    //   isValid = false;
    // }

    // State validation
    // if (!contact.state) {
    //   tempErrors["state"] = "State is required";
    //   isValid = false;
    // }

    // Product validation
    // if (!contact.product) {
    //   tempErrors["product"] = "Product is required";
    //   isValid = false;
    // }

    // Message validation
    // if (!contact.message) {
    //   tempErrors["message"] = "Message is required";
    //   isValid = false;
    // }

    setErrors(tempErrors);
    return isValid;
  }

  function sendMail() {
    if (validate()) {
      fetch('https://varni-export-backend.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject: "Enquiry from Contact", body: contact }),
      })
        .then(response => {
          if (response.ok) {
            setErrors({})
            setContact({
              first_name: '',
              last_name: '',
              email: '',
              phone: '',
              business_type: '',
              website: '',
              address: '',
              city: '',
              postal_code: '',
              state:'',
              country: '',
              product: '',
              country_code: '', 
              message: ''
            })
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }

  return (
    <>
      <section className={style.img_style}>
        <h1>Contact Us</h1>
        <img src={contactUsImage} alt="" width="100%" height="100%" />
        <div className={style.point}></div>
        <div className={style.point2}></div>
      </section>

      <div className={style.contact}>
        <div className={style.contact_Form1}>
          <div className={style.get_in}>
            <h1>Get In Touch</h1>
            <div>{contactUsSection.companyName}</div>
          </div>

          <div className={style.main_location}>
            <div className={style.location}>
              <div className={style.icon}><IoLocationOutline /></div>
              {contactUsSection.address}
            </div>

            <div className={style.contacts}>
              <div className={style.phon}>
                <div className={style.FiPhone}><FiPhone /></div>
                <a href={`tel:${contactUsSection.contact}`}>{contactUsSection.contact}</a>
              </div>

              <div className={style.phon}>
                <div className={style.FiPhone}><FiPhone /></div>
                <a href={`tel:${contactUsSection.contact1}`}>{contactUsSection.contact1}</a>
              </div>

              <div className={style.mail}>
                <div className={style.Mail}><HiOutlineMailOpen /></div>
                <a href={`mailto:${contactUsSection.email}`}>{contactUsSection.email}</a>
              </div>
            </div>
          </div>

          <div className={style.media}>
            <div className='hover:text-[#1877F2]'><FaFacebookF /></div>
            <div className='hover:text-[#FF0000]'><FaYoutube /></div>
            <div className='hover:text-[#ee2a7b]'><BsInstagram /></div>
            <div className='hover:text-[#1dc0f2]'><BsTwitterX /></div>
          </div>
        </div>

        <div className={style.contact_Form2}>
          <div className='flex gap-2'>
            <label className='flex flex-col w-1/2'>
              <input type='text' value={contact.first_name} name='first_name' placeholder='First name' onChange={onChangeHandle} className={`${style.fonts}`} />
              {errors.first_name && <div className={style.error}>{errors.first_name}</div>}
            </label>
            <label className='flex flex-col w-1/2'>
              <input type="text" value={contact.last_name} name="last_name" placeholder="Last Name" onChange={onChangeHandle} className={` ${style.fonts}`} />
              {errors.last_name && <div className={style.error}>{errors.last_name}</div>}
            </label>
          </div>
          <label className='flex flex-col'>
            <input type="Email" value={contact.email} name="email" placeholder="Email" onChange={onChangeHandle} className={style.fonts} />
            {errors.email && <div className={style.error}>{errors.email}</div>}
          </label>
          <div className='flex gap-2'>
            <label className='flex flex-col w-1/3'>
              <input type="text" value={contact.country_code} name="country_code" placeholder="Country code" onChange={onChangeHandle} className={style.fonts} />
              {errors.country_code && <div className={style.error}>{errors.country_code}</div>}
            </label>
            <label className='flex flex-col w-2/3'>
              <input type="text" value={contact.phone} name="phone" placeholder="Phone Number" onChange={onChangeHandle} className={style.fonts} />
              {errors.phone && <div className={style.error}>{errors.phone}</div>}
            </label>
          </div>
          <label className='flex flex-col'>
            <input type="text" value={contact.business_type} name="business_type" placeholder="Business" onChange={onChangeHandle} className={style.fonts} />
            {errors.business_type && <div className={style.error}>{errors.business_type}</div>}
          </label>
          <label className='flex flex-col'>
            <input type="text" value={contact.website} name="website" placeholder="Website Link" onChange={onChangeHandle} className={style.fonts} />
            {errors.website && <div className={style.error}>{errors.website}</div>}
          </label>
          <label className='flex flex-col'>
            <input type="text" value={contact.address} name="address" placeholder="Address" onChange={onChangeHandle} className={style.fonts} />
            {errors.address && <div className={style.error}>{errors.address}</div>}
          </label>
          <div className='flex gap-2'>
            <label className='flex flex-col w-1/2'>
              <input type='text' value={contact.city} name='city' placeholder='City' onChange={onChangeHandle} className={` ${style.fonts}`} />
              {errors.city && <div className={style.error}>{errors.city}</div>}
            </label>
            <label className='flex flex-col w-1/2'>
              <input type="text" value={contact.postal_code} name="postal_code" placeholder="Postal Code" onChange={onChangeHandle} className={` ${style.fonts}`} />
              {errors.postal_code && <div className={style.error}>{errors.postal_code}</div>}
            </label>
          </div>
          <label className='flex flex-col'>
            <input type="text" value={contact.state} name="state" placeholder="State" onChange={onChangeHandle} className={style.fonts} />
            {errors.state && <div className={style.error}>{errors.state}</div>}
          </label>
          <label className='flex flex-col'>
            <select value={contact.product} name="product" onChange={onChangeHandle} className={style.fonts}>
              <option className={style.fonts}>Choose product type of enquiry</option>
              <option>Spices</option>
              <option>Ground nut</option>
              <option>Rice</option>
              <option>Onion</option>
              <option>Cereal and Grains</option>
              <option>Pulses-Lentils</option>
              <option>Raisins</option>
              <option>Guar Gum</option>
              <option>Other</option>
            </select>
            {errors.product && <div className={style.error}>{errors.product}</div>}
          </label>
          <label className='flex flex-col'>
            <textarea value={contact.message} name="message" rows="10" cols="40" placeholder='Message' onChange={onChangeHandle} className={style.fonts}></textarea>
            {errors.message && <div className={style.error}>{errors.message}</div>}
          </label>
          <div className={style.send}><button className={style.btn} onClick={sendMail}>Send</button></div>
        </div>
      </div>
    </>
  )
}

export default Contact;
