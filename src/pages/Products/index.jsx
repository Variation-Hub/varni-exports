import { Link } from 'react-router-dom'
import { catagories } from '../../contant'
import Style from './style.module.css'
import productsBanner from '../../assets/Banner/products-banner.webp'

function Products() {
  return (
    <>
      <section className={Style.img_style}>
        <h1>Products</h1>
        <img src={productsBanner} alt="" width="100%" height="100%" />
      </section>
      <div className="p-4">
        <ul className={Style.products_contianer}>
          {catagories.map((product, index) => (
            <Link to={product.path} key={index} className={Style.product_name}>
              <h2>{product.name}</h2>
              <div className={Style.image}>
                <img src={product?.image} alt="" />
                <div className={Style.more_info}>
                  <button>More Info</button>
                </div>
              </div>
              <article>{product?.description?.length > 315 ? `${product?.description.slice(0, 312)}...` : product?.description}</article>
            </Link>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Products
