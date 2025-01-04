import Style from "./style.module.css";
import { counter } from "../../contant";
import aboutImage from "../../assets/Banner/about-us-banner.png";
import CountUp from "react-countup";
import about1 from "../../assets/about_us_1.webp";
import about2 from "../../assets/about_us_2.png";
import about3 from "../../assets/about_us_3.webp";

const About = () => {
  return (
    <>
      <div className={Style.img_style}>
        <h1>About Us</h1>
        <img src={aboutImage} alt="" width="100%" height="100%" />
      </div>

      <div className={Style.OS}>
        <div className={Style.OS_S1}>
          <div className={Style.OS_s1}>
            <img
              className={Style.img}
              src={about1}
              alt="OS_image_1"
            />
          </div>
          <div className={Style.OS_s2}>
            <h1 className={Style.our_story}> Our Story </h1>
            <hr className={Style.line} />
            <p className={Style.p}>
              {" "}
              <b>Varni Exports</b> was founded in 2023 with a mission to revolutionize the import and export industry.
              First and foremost, we are proud to call ourselves <b>"farmers"</b>.

            </p>
            <p className={Style.p}>
              Our journey began when our ancestors unknowingly became part of the export industry through rural middlemen.
              With a profound understanding of the crop lifecycle, from planting to harvest, we embrace our heritage as farmers.
              We are committed to providing quality agricultural products, including spices, herbs, vegetables, seeds, and grains,
              to people worldwide. <b>Varni Exports</b> is the latest chapter in this long and meaningful legacy.

            </p>
            <p className={Style.p}>
              Our presence spans markets across <b>USA, Europe, and Asia</b>, where we continue to grow and adapt to better serve our clients.
              Recognized for our reliability and ethical practices, <b>Varni Exports</b> is committed to inspiring excellence in the export industry.

            </p>
          </div>
        </div>

        <div className={Style.OS_S2}>
          <div className={Style.OS_s2}>
            <h1 className={Style.our_story}> Our Mission </h1>
            <hr className={Style.line} />
            <p className={Style.p}>
              <b>“To secure the best deals for you—because your growth is our priority.”</b>

            </p>
            <p className={Style.p}>
              In today’s competitive world of international trade, finding the right deals can be challenging.
              That’s where <b>Varni Exports</b> comes in. Our expert team is dedicated to understanding your needs
              and delivering seamless, hassle-free shipments. Your requirements drive our mission, and we strive to provide
              you with an unmatched experience in global trade.

            </p>
          </div>
          <div className={Style.OS_s1}>
            <img
              src={about2}
              alt="OS_image_2"
              width={"80%"}
            />
          </div>
        </div>

        <div className={Style.OS_S3}>
          <div className={Style.OS_s1}>
            <img
              src={about3}
              alt="OS_image_3"
            // height={"490px"} width={"510px"}
            />
          </div>
          <div className={Style.OS_s2}>
            <h1 className={Style.our_story}>
              {" "}
              Many Teams, One Focus: Your Growth{" "}
            </h1>
            <hr className={Style.line} />
            <p className={Style.p}>
              At <b>Varni Exports</b>, collaboration is at the heart of everything we do.
              Our ambitious sales, forex, marketing, and purchasing teams work in harmony to
              ensure your export process is smooth and efficient. Customer satisfaction isn’t
              just a department—it’s our entire company ethos.
            </p>
            <p className={Style.p}>
              We take pride in being a <b>customer-centric organization</b>, and that focus on client success is our unique selling proposition.
            </p>
          </div>
        </div>
      </div>

      <div className={Style.Counter}>
        {counter.map((slider, index) => {
          return (
            <div key={index} className={Style.counter_component}>
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "500",
                  color: " rgb(61, 61, 61)",
                }}
              >
                <CountUp start={0} end={slider.number} enableScrollSpy={true} />
                +
              </p>
              <div className={Style.sliderText}>
                <h1>{slider.name}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;
