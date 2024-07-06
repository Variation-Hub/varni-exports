import { privateLableDetails } from '../../contant'
import Style from './style.module.css'
import PrivateLableBanner from '../../assets/Banner/private-label.webp'

const PrivateLable = () => {
    return (
        <>
            <section className={Style.img_style}>
                <h1>Private Label</h1>
                <img src={PrivateLableBanner} alt="" width="100%" height="100%" />
            </section>
            <div className="p-4">
        {Object.keys(privateLableDetails).map((value) => {
          if (
            !["title", "thumbImage", "path", "productImage", "last"].includes(
              value
            )
          ) {
            return (
              <div className="px-5">
                <h1 className="text-2xl">{value}</h1>
                <p className="text-justify">{privateLableDetails[value]}</p>
                <br />
              </div>
            );
          } else null;
        })}
        <div className={`flex justify-center gap-20 ${Style.privateimg_container}`}>
            {privateLableDetails?.productImage?.map((value) => {
                return (
                    <img className={Style.private_img} src={value} alt="" />
                )
            })}
        </div>
        <h1 className="text-center text-[#003c54] text-2xl mt-20">{privateLableDetails.last}</h1>
      </div>
        </>

    )
}

export default PrivateLable