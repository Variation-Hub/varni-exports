import { contactUsSection } from '../../contant'
import style from '../ContactUs/style.module.css'
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import contactUsImage from '../../assets/Banner/contact-us-banner.webp'

const Contact = () => {

  return (
    < >
      <section className={style.img_style}>
        <h1>Contact Us</h1>
        <img src={contactUsImage} alt="" width="100%" height="100%"/>
        <div className={style.point}></div>
        <div className={style.point2}></div>
      </section>

      <div className={style.contact}>

        <div className={style.contact_Form1}>
          <div className={style.get_in}>
            <h1 >Get In Touch</h1>
            <div >{contactUsSection.companyName}</div>
          </div>

          <div className={style.main_location}>
            <div className={style.location}>
              <div className={style.icon}><IoLocationOutline /></div>
              {contactUsSection.address}
            </div>

            <div className={style.contacts}>

              <div className={style.phon}>
                <div className={style.FiPhone}><FiPhone /></div>
                <a href='#'>{contactUsSection.contact}</a>
              </div>

              <div className={style.mail}>
                <div className={style.Mail}><HiOutlineMailOpen />
                </div><a href='#'>{contactUsSection.email}</a>
              </div>
            </div>
          </div>

          <div className={style.media}>
            <div><FaFacebookF /></div>
            <div><FaYoutube /></div>
            <div><BsInstagram /></div>
            <div><BsTwitterX /></div>
          </div>
        </div>

        <div className={style.contact_Form2}>

          <input type="text" name=" name" placeholder="Name" className={style.fonts} />
          <input type="Email" name=" email" placeholder="Email" className={style.fonts} />
          <input type="text" name=" number" placeholder="Phone Number" className={style.fonts} />
          <select name="course" placeholder="Choose product type of inquiry" className={style.fonts}>

            <option className={style.fonts}>Choose product type of inquiry </option>
            <option>Spices</option>
            <option >Ground nut</option>
            <option>Rice</option>
            <option >Onion</option>
            <option >Cereal and Grains</option>
            <option >Pulses-Lentils</option>
            <option value="">Raisins</option>
            <option value="">Guar Gum</option>
            <option value="">Other</option>
          </select>

          <textarea name="message" rows="10" cols="40" placeholder='Message' className={style.fonts}></textarea>
          <div className={style.send}><button className={style.btn}>Send</button></div>
        </div>
      </div>
    </>
  )
}

export default Contact;