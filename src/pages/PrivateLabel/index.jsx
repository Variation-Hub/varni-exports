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


            </div>
        </>

    )
}

export default PrivateLable