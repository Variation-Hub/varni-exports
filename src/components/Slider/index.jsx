import Slider from 'react-slick'
import Style from './App.module.css'
// import { commitmentSection, landingPageSlider } from '../../contant';

import { Slider_products } from '../../contant.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Lider() {

    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        focusOnChange: true,
    };

    return (
        <>
            <div className={Style.sliderImages}>
                <div className={Style.titel}>
                    <h4 className={Style.our}>Our Categories</h4>
                    <h1 className={Style.offering}>What we’re offering</h1>
                </div>
                <Slider {...settings}>
                    {Slider_products.map((slider, index) => {
                        return (
                            
                            <div key={index} className={Style.slider_component}>
                                <img className={Style.img} src={slider.image} alt="Slide 1" />
                                <hr className={Style.img_bg} />
                                <div className={Style.sliderText}>
                                    <h1 className={Style.name}>{slider.name}</h1>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </>
    )
}

export default Lider

