
import { Link, useParams } from 'react-router-dom'
import Style from './style.module.css'
import { catagories } from '../../contant';
import { useState } from 'react';
function Category() {

  const { categoryId } = useParams();

  const [data] = useState(catagories.find(category => category.catagoriesId === categoryId) || null)
  return (
    <>
      <h1>{data?.name}</h1>
      <h1>{data?.description}</h1>
      <hr />

      <div className={Style.product_container}>
        {data?.products_detail?.map(item => {
          return (
            <Link to={`/products/${categoryId}/${item.name}`} key={item.id} className={Style.images}>
              <img src="https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg" alt="" />
              <h1>{item.name}</h1>
            </Link>
          )
        })}
      </div>


    </>
  )
}

export default Category
