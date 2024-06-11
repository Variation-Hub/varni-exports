import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { commitmentSection, landingPageSlider } from '../../contant';
import Style from "./style.module.css";

const Home = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <div className={Style.sliderImages}>
        <Slider {...settings}>
          {landingPageSlider.map((slider, index) => {
            return (
              <div key={index} className={Style.slider_component}>
                <img src={slider.image} alt="Slide 1" width="100%" height="100%" />
                <div className={Style.sliderText}>
                  <h1>{slider.title}</h1>
                  <p>{slider.description}</p>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
      <div className={Style.commit_container}>
        {
          commitmentSection.map((commit, index) => {
            return (
              <section className={Style.commitmentSection} key={index}>
                <div>{commit.logo}</div>
                <h2>{commit.title}</h2>
                <article>{commit.description}</article>
              </section>
            )
          })
        }
      </div>
    </>
  );
}

export default Home;
