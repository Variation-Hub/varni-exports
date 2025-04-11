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
      aria-label="Next slide"
      role="button"
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
      aria-label="Previous slide"
      role="button"
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
      <section className={Style.sliderImages} aria-label="Featured Products">
        <Slider
          {...settings}
          beforeChange={(oldIndex, newIndex) => handleSlideChange(newIndex)}
        >
          {landingPageSlider.map((slider, index) => (
            <div
              key={index}
              className={Style.slider_component}
            >
              <img 
                src={slider.image} 
                alt={`Varni Exports - ${slider.title}`} 
                loading="eager" 
              />
              <div
                className={`${Style.sliderText}`}
                key={activeSlide === index}
              >
                <h1>{slider.title}</h1>
                <h2>{slider.description}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className={Style.commit_container} aria-label="Our Commitments">
        <h2 className="sr-only">Our Commitments</h2>
        {commitmentSection.map((commit, index) => {
          return (
            <article className={Style.commitmentSection} key={index}>
              <div aria-hidden="true">{commit.logo}</div>
              <h3 className="text-xl font-semibold">{commit.title}</h3>
              <p className="text-center">{commit.description}</p>
            </article>
          );
        })}
      </section>

      <div className="w-4/5 border-b-2 relative left-1/2 -translate-x-1/2 p-10" aria-hidden="true"></div>

      <section className="my-12" aria-label="Our Services">
        <h3 className="text-center text-3xl m-12 font-bold">Our Services</h3>
        <div className={`flex justify-around ${Style.card_section}`}>
          {[importDetails, privateLableDetails, exportDetails].map((item) => {
            return (
              <article
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
                  role="img"
                  aria-label={`${item?.title} service thumbnail`}
                ></div>
                <div className="p-6">
                  <h3 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {item?.title}
                  </h3>
                  <p className="block font-light leading-relaxed text-inherit antialiased text-justify text-sm">
                    {`${item?.Description.slice(0, 185)}.....`}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Link 
                    to={item?.path} 
                    className="absolute right-3 bottom-3 select-none rounded-lg bg-[#003C54] py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    aria-label={`Read more about ${item?.title}`}
                  >
                    Read More
                  </Link>
                </div>
              </article>
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
