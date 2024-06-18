import { FaGreaterThan } from 'react-icons/fa6'
import { Link, useParams } from 'react-router-dom'
import style from '../ProductDetail/style.module.css'
import { products_detail2, products_detail1 } from '../../contant'
import Markdown from 'react-markdown'

function Category() {
  const { categoryId, productId } = useParams()

  // const data=array.find(item=>item.type===categoryId && item.name===productId); 
  return (
    <>
      <section >
        {/* <div className="p-4">
        <h1 className="text-2xl font-bold">{categoryId} {productId}</h1>
      <h1>Non Basmati Rice Exporter</h1> </div> */}

        <div className={style.main}>
          <h1>Non Basmati Rice Exporter </h1>
          <div className={style.img_home}>
            <div className={style.home}>
              <Link to="/">Home</Link>
            </div>
            <div className={style.GreaterThan}><FaGreaterThan /></div>
            <div>Contact Us</div>
          </div>
        </div>
      </section>

      <div className={style.Rice}>
        <div className={style.section}>

          <div>
            <h1>Non Basmati Rice Exporter</h1>
          </div>

          <div className={style.Non_Basmati}>
            <div className={style.img}></div>
            <Markdown>{atob(products_detail1)}</Markdown>
          </div>

          <div>
            <Markdown>{atob(products_detail2)}</Markdown>
          </div>
        </div>

        <div className={style.box1}>
          <h1>Other Products</h1>
          <div className={style.box2}> 
            <div className={style.Exporter}>
              <div className={style.rice_img1}></div>
              <p>Brown Rice Exporter</p>
            </div>
            <div className={style.Exporter}>
              <div className={style.rice_img2}></div>
              <p>Basmati Rice Exporter</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Category
