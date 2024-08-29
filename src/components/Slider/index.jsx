import Slider from "react-slick";
import Style from "./App.module.css";

import { catagories, Slider_products } from "../../contant.jsx";
import { Link } from "react-router-dom";

const styleButton = {
  position: "absolute",
  borderRadius: "50%",
  zIndex: "50",
  width: "50px",
  height: "50px",
  color: "var(--secondary-color)",
  display: "flex",
  top: "35%",
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
      style={{ ...styleButton, right: "20px" }}
      onClick={onClick}
    >&gt;</div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={Style.sample_arrow}
      style={{ ...styleButton, left: "20px" }}
      onClick={onClick}
    > &lt; </div>
  );
}

function Lider() {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1200,
    autoplaySpeed: 1200,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings_category = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1400,
    autoplaySpeed: 1400,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={Style.sliderImages}>
        <div className={Style.titel}>
          <h1 className={Style.offering}>What we’re offering</h1>
          <h4 className={Style.our}>Our Products</h4>
        </div>

        <Slider {...settings} className={Style.Slider_products}>
          {Slider_products.map((slider) => {
            return (
              <Link
                to={`${slider.path}/${slider.name}`}
                key={slider.id}
                className={Style.slider_component}
              >
                <div className={Style.img_box}> </div>
                <img className={Style.img} src={slider.image} alt="Slide 1" />
                <div className={Style.sliderText}>
                  <h1 className={Style.text}>{slider.name}</h1>
                  <div className={Style.slider}>{slider.name} </div>
                </div>
              </Link>
            );
          })}
        </Slider>

        <div className={Style.titel}>
          <h4 className={Style.our}>Our Categories</h4>
        </div>
        <Slider {...settings_category} className={Style.slider_main}>
          {catagories.map((slider, index) => {
            return (
              <div key={index}>
                <Link
                  to={slider.path}

                  className={Style.slider_component_category}
                >
                  <img
                    src={slider.image}
                    alt="Slide 1"
                    width="100%"
                    height="100%"
                  />
                </Link>
                <h1 className={Style.name_category}>{slider.name}</h1>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Lider;
