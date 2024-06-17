import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { commitmentSection, landingPageSlider, products } from '../../contant';
import Style from "./style.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const set = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 6.5,
    slidesToScroll: 1
  };

  return (
    <>
      <div className={Style.sliderImages}>
        <Slider {...settings}>
          {landingPageSlider.map((slider, index) => {
            return (
              <div key={index} className={Style.slider_component}>
                <img src={slider.image} alt="Slide 1"/>
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

      <div className={Style.services_container}>

        <h1 className={Style.services_title}>Our Services</h1>

        <div className={Style.Service_servicess}>

          <div className={Style.upper_services}>

            <div className={Style.import}>
              <div className={Style.hid_box}>
                <div className={Style.import_title}>
                  <h1>Import</h1>
                </div>
                <div className={Style.import_description}>
                  <p>We import Agri-commodities such as Cinamon sticks, cloves, and soybean seeds from the international market.</p>
                </div>
              </div >
            </div>


            <div className={Style.Export}>
              <div className={Style.export_title}>
                <h1>Export</h1>
              </div>
              <div className={Style.export_description}>
                <p>We export the finest quality of spices, nuts, and other agricultural products with superlative value to the international market.</p>
              </div>
            </div>

          </div>

          <div className={Style.downe_services}>

            <div className={Style.Service_broker}>
              <div className={Style.service_broker_title}>
                <h1>Service Broker</h1>
              </div>
              <div className={Style.service_broker_description}>
                <p>We offer broker services among highly motivated dealers with full authenticity in a transaction.</p>
              </div>
            </div>

            <div className={Style.impex_solution}>
              <div className={Style.impex_solution_title}>
                <h1>Impex Solutions</h1>
              </div>
              <div className={Style.impex_solution_description}>
                <p>We provide end-to-end solutions to our clients regarding all import and export-related issues to the domestic market as well international market.</p>
              </div>
            </div>

          </div>

        </div>

      </div>


      <div className={Style.sliderImagesp}>
        <Slider {...set}>
          {products.map((slider, index) => {
            return (
              <div key={index} className={Style.products_component}>
                <img src={slider.image} alt="Slide 1" width="100%" height="100%" />
                <div className={Style.sliderTextp} >
                  <h1>{slider.name}</h1>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>

    </>
  );
}

export default Home;
