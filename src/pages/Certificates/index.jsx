import certificateImage from "../../assets/Banner/certificate-banner.webp";
import Style from "./style.module.css";
import Image1 from "../../assets/Certificate/fassai-thumb.jpg";
import Image2 from "../../assets/Certificate/apeda-thumb.jpg";
import Image3 from "../../assets/Certificate/farm-thumb.jpg";
import Image4 from "../../assets/Certificate/iec-thumb.jpg";
import Image5 from "../../assets/Certificate/gst-thumb.jpg";
import Image6 from "../../assets/Certificate/msme-thumb.jpg";

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
            src={Image1}
            alt="Image 1"
          />
          <img
            src={Image2}
            alt="Image 2"
          />
          <img
            src={Image3}
            alt="Image 3"
          />
          <img
            src={Image4}
            alt="Image 4"
          />
          <img
            src={Image5}
            alt="Image 5"
          />
          <img
            src={Image6}
            alt="Image 6"
          />
        </div>
      </div>
    </>
  );
};

export default Certificate;
