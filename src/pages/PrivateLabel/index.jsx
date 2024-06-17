import { privateLable } from '../../contant'
import Style from './style.module.css'

const PrivateLable = () => {
    return (
        <div>
            <div className={Style.label_image}>
                <img src={privateLable.thumbImage} alt="" />
                <h1>{privateLable.title}</h1>
            </div>
            <article className={Style.artical_private_label}>
                <p>{privateLable.description}</p>
            </article>
            <div>
                <img src={privateLable.productImage[0]} alt="" />
                <img src={privateLable.productImage[1]} alt="" />
            </div>
        </div>
    )
}

export default PrivateLable