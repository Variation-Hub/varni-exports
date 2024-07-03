import { Cardfeatures } from '../../contant';
import Style from './style.module.css'
function Cardfeature() {
    return (
        <>
            <div className={Style.card}>
                <ul className={Style.card_box} >
                    {Cardfeatures.map((feature, index) => (
                        <li className={Style.inner_card} key={index}>
                            <img className={Style.img} src={feature.logo} alt={feature.title} />
                            <h2 className={Style.title}>{feature.title}</h2>
                            <article className={Style.description} >{feature.description}</article>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Cardfeature