import Style from "./style.module.css";
import { counter } from "../../contant";
import aboutImage from "../../assets/Banner/about-us-banner.webp";
import CountUp from "react-countup";

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
              src="./src/assets/about_us_1.png"
              alt="OS_image_1"
            />
          </div>
          <div className={Style.OS_s2}>
            <h1 className={Style.our_story}> Our Story </h1>
            <hr className={Style.line} />
            <p className={Style.p}>
              {" "}
              <b>Varni Exports</b> was incorporated in 2014 to bring revolutions
              in the import and export industry. We are <b> "farmers" </b> first
              and then agriculture businessmen. This is our 7th generation who
              is directly involved in the farming industry. We engaged in
              agriculture operations such as land preparation, planting, raising
              living organisms, and harvesting early age. Our ancestors
              unknowingly involved in the exports industry through a
              middleman(buyer) in a rural area. We know the roots of a crop’s
              lifecycle from planting to harvesting. We feel blessed for having
              a tag of “farmer”. Farmer is an integral part of the global food
              cycle by providing quality crops like Spices, Herbs, Vegetables,
              seeds, and grains to mankind and we will continue to do so. Varni
              Exports is just a new chapter in the farmer’s book.
            </p>
            <p className={Style.p}>
              <b>Varni Exports</b> is one of the world’s trustworthy and
              reliable Global Spice Merchants offering various one window
              solutions to Small and Medium-sized spice businesses catering to
              their local spice market demands for various qualities, grades,
              and origin. We are currently dealing in <b> USA,Europe, Asian</b>{" "}
              market successfully. seeing growth in every footfall and learning
              new tactics and models to provide the best solutions to our
              clients. Varni Exports receiving appreciation from every clientele
              for our slick and hassle-free services, and we will continue to
              inspire the exports industry through our business practice with
              trade ethics.
            </p>
            <p className={Style.p}>
              We are mainly known for being reliable, committed, and trustworthy
              Suppliers, Exporters, and Producers.
            </p>
          </div>
        </div>

        <div className={Style.OS_S2}>
          <div className={Style.OS_s2}>
            <h1 className={Style.our_story}> Our Mission </h1>
            <hr className={Style.line} />
            <p className={Style.p}>
              <b>
                Our mission is to get you the best trades. Money is secondary.
              </b>
            </p>
            <p className={Style.p}>
              International trade is one of the hot industries of the new
              millennium and Its trending business worldwide. As a result,
              getting a better deal for your products is tough. But not with
              Bhimani Exports! We have the best team in this area who can
              understand your requirements and give you hassle-free shipment in
              no time. We consider your requirements as our “Mission Statement”.
              Bhimani Export’s team will make sure to give you the best
              experience you ever had in international trade.
            </p>
          </div>
          <div className={Style.OS_s1}>
            <img
              src="./src/assets/about_us_2.jpg"
              alt=""
              // height={"340px"} width={"510px"}
            />
          </div>
        </div>

        <div className={Style.OS_S3}>
          <div className={Style.OS_s1}>
            <img
              src="./src/assets/about_us_3.jpg"
              alt=""
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
              We have ambitious sales team, forex team, marketing team and
              purchase team working in one channel to help you to make whole
              exports process smooth and prompt. Customer service is not a
              department here. It is the entire company. Bhimani export is
              customer centric firm and that is our USP.
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
