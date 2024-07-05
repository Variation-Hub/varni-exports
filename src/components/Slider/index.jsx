import Slider from "react-slick";
import Style from "./App.module.css";

import { catagories, Slider_products } from "../../contant.jsx";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";

function Lider() {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 1200,
    pauseOnHover: true,
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
    pauseOnHover: true,
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
          <h4 className={Style.our}>Our Produts</h4>
        </div>

        <Slider {...settings} className={Style.Slider_products}>
          {Slider_products.map((slider) => {
            return (
              <Link
                to={`${slider.path}/${slider.name}`}
                key={slider.id}
                className={Style.slider_component}
              >
                <img className={Style.img} src={slider.image} alt="Slide 1" />
                <hr className={Style.img_bg} />
                <div className={Style.sliderText}>
                  <h1 className={Style.name}>{slider.name}</h1>
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
              <>
                <Link
                  to={slider.path}
                  key={index}
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
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Lider;
