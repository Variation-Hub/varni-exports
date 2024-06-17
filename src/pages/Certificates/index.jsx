import certificateImage from "../../assets/Banner/certificate-banner.webp";
import Style from "./style.module.css";

const Certificate = () => {
  return (
    <>
      <section className={Style.img_style}>
        <h1>Certificate</h1>
        <img src={certificateImage} alt="" width="100%" />
      </section>
    </>
  )
}

export default Certificate