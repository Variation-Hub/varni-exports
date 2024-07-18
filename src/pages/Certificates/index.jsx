import certificateImage from "../../assets/Banner/certificate-banner.webp";
import Style from "./style.module.css";

const Certificate = () => {
  return (
    <>
      <section className={Style.img_style}>
        <h1>Certificate</h1>
        <img src={certificateImage} alt="" width="100%" />
      </section>
      <div className="flex justify-center items-center min-h-screen">
        <div className={Style.container}>
          <img
            src="http://www.ancienttradingimpex.com/assets/images/certificates/fassai-thumb.jpg"
            alt="Image 1"
          />
          <img
            src="http://www.ancienttradingimpex.com/assets/images/certificates/apeda-thumb.jpg"
            alt="Image 2"
          />
          <img
            src="http://www.ancienttradingimpex.com/assets/images/certificates/farm-thumb.jpg"
            alt="Image 3"
          />
          <img
            src="http://www.ancienttradingimpex.com/assets/images/certificates/iec-thumb.jpg"
            alt="Image 4"
          />
          <img
            src="http://www.ancienttradingimpex.com/assets/images/certificates/gst-thumb.jpg"
            alt="Image 5"
          />
          <img
            src="http://www.ancienttradingimpex.com/assets/images/certificates/msme-thumb.jpg"
            alt="Image 6"
          />
        </div>
      </div>
    </>
  );
};

export default Certificate;
