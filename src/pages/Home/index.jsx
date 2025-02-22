import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  commitmentSection,
  exportDetails,
  importDetails,
  landingPageSlider,
  privateLableDetails,
} from "../../contant";
import Style from "./style.module.css";
import Cardfeature from "../../components/Card_features";
import Lider from "../../components/Slider";
import { Link } from "react-router-dom";
import { useState } from "react";

const styleButton = {
  position: "absolute",
  borderRadius: "50%",
  zIndex: "50",
  width: "50px",
  height: "50px",
  color: "var(--secondary-color)",
  display: "flex",
  top: "45%",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "48px",
  cursor: "pointer",
  textShadow: "1px 1px 3px lightgray",
  background: "rgb(250 249 246 / 62%)"
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={Style.sample_arrow}
      style={{ ...styleButton, right: "1rem" }}
      onClick={onClick}
    >&gt;</div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={Style.sample_arrow}
      style={{ ...styleButton, left: "1rem" }}
      onClick={onClick}
    > &lt; </div>
  );
}

const Home = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    pauseOnHover: false
  };

  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <>
      <div className={Style.sliderImages}>
        <Slider
          {...settings}
          beforeChange={(oldIndex, newIndex) => handleSlideChange(newIndex)}
        >
          {landingPageSlider.map((slider, index) => (
            <div
              key={index}
              className={Style.slider_component}
            >
              <img src={slider.image} alt={`Slide ${index + 1}`} />
              <div
                className={`${Style.sliderText}`}
                key={activeSlide === index}
              >
                <h1>{slider.title}</h1>
                <p>{slider.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>


      <div className={Style.commit_container}>
        {commitmentSection.map((commit, index) => {
          return (
            <section className={Style.commitmentSection} key={index}>
              <div>{commit.logo}</div>
              <h2>{commit.title}</h2>
              <article>{commit.description}</article>
            </section>
          );
        })}
      </div>

      <div className="w-4/5 border-b-2 relative left-1/2 -translate-x-1/2 p-10"></div>

      <h1 className="text-center text-3xl m-12">Our Services</h1>
      <section className={`flex flex-col mt-16`}>
        <div className={`flex justify-around ${Style.card_section}`}>
          {[importDetails, privateLableDetails, exportDetails].map((item) => {
            return (
              <div
                className={`relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ${Style.Card}`}
                key={item?.title}
              >
                <div
                  className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-blue-500"
                  style={{
                    backgroundImage: "url(" + item?.thumbImage + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="p-6">
                  <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {item?.title}
                  </h5>
                  <p className="block font-light leading-relaxed text-inherit antialiased text-justify text-sm">
                    {`${item?.Description.slice(0, 185)}.....`}
                  </p>
                </div>
                <Link to={item?.path} className="p-6 pt-0">
                  <button
                    data-ripple-light="true"
                    type="button"
                    className={`absolute right-3 bottom-3 select-none rounded-lg bg-[#003C54] py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${Style.read_more}`}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <div className="w-4/5 border-b-2 relative left-1/2 -translate-x-1/2 p-10"></div>

      <Lider />

      <div className="w-4/5 border-b-2 relative left-1/2 -translate-x-1/2"></div>
      <Cardfeature />
    </>
  );
};

export default Home;
