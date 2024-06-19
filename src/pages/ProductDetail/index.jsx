import { FaGreaterThan } from 'react-icons/fa6'
import { Link, useParams } from 'react-router-dom'
import style from '../ProductDetail/style.module.css'
import { catagories } from '../../contant'
import Markdown from 'react-markdown'
import { useEffect, useState } from 'react'

function Category() {

  const { categoryId, productId } = useParams();
  const [suggestedCategory, setSuggestedCategory] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    const category = catagories.find(category => category.catagoriesId === categoryId)?.products_detail;
    setSuggestedCategory(category);
    const productData = category?.find(item => item.name === productId) || null;
    setData(productData);
  }, [categoryId, productId]);


  return (
    <>
      <section >

        <div className={style.main}>
          <h1>{data?.name}</h1>
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
            <h1>{data?.name}</h1>
          </div>

          <div>
            {data?.description ?
              <Markdown>{atob(data?.description)}</Markdown>
              : null}
          </div>
        </div>

        <div className={style.box1}>
          <h1>Other Products</h1>
          <div className={style.box2}>
            {suggestedCategory?.map(item => {
              return (
                <Link to={`/products/${categoryId}/${item.name}`} key={item.id} className={style.Exporter}>
                  <div className={style.rice_img2}></div>
                  <p>{item.name}</p>
                </Link>
              )
            })}
          </div>
        </div>

      </div>
    </>
  )
}

export default Category
