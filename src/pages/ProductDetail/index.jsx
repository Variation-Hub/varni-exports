import { FaGreaterThan } from 'react-icons/fa6'
import { Link, useParams } from 'react-router-dom'
import style from '../ProductDetail/style.module.css'
import { catagories } from '../../contant'
import Markdown from 'react-markdown'
import { useEffect, useState } from 'react'

function Category() {

  const { categoryId, subcategoryId, productId } = useParams();
  const [suggestedCategory, setSuggestedCategory] = useState([]);
  const [data, setData] = useState(null);

  console.log(categoryId, subcategoryId, productId)

  useEffect(() => {
    if (!productId) {
      const category = catagories.find(category => category.catagoriesId === categoryId)?.products_detail;
      setSuggestedCategory(category);
      const productData = category?.find(item => item.name === subcategoryId) || null;
      setData(productData);
    } else {
      const category = catagories.find(category => category.catagoriesId === categoryId)?.products_detail;
      const subCategory = category.find(item => item.subCatagoriesId === subcategoryId)?.products_detail;
      setSuggestedCategory(subCategory);
      const productData = subCategory?.find(item => item.name === productId) || null;
      setData(productData);
    }
  }, [categoryId, subcategoryId, productId]);
  console.log(data)


  return (

    productId ? (
      null
    ) : (
      <div className={style.container}>
        <div className={style.productSection}>
          <h1 className={style.productName}>{data?.name}</h1>
          <div className='flex items-center justify-around gap-24'>
            <div className={style.image}>
              <img src={data?.images} alt={`${data?.name} image`} width="100%" height="100%" />
            </div>
            <div className={style.productDetails}>
              <table className={style.productTable}>
                <tbody>
                  {data &&
                    Object.keys(data)?.map((value, index) => (
                      (value !== "id" && value !== "name" && value !== "images" && value !== "description") ?
                        <tr key={index}>
                          <td>{value}</td>
                          <td>{data[value]}</td>
                        </tr> : null
                    ))}
                </tbody>
              </table>

            </div>
          </div>
        </div>


        <div className={style.otherProductsGrid}>
          <div className={style.productDescription}>
            <h1 className='text-3xl mb-10'>Description</h1>
            {data?.description ? (
              <Markdown className="text-justify">{atob(data?.description)}</Markdown>
            ) : null}
          </div>
          <div className='flex flex-col gap-5 mr-10'>
            <h1 className='text-2xl mb-4'>Other Products</h1>

            {suggestedCategory?.slice(0, 4)?.map((item) => (
              <Link to={`/products/${categoryId}/${item.name}`} key={item.id} className={style.productLink}>
                <div className={style.productThumbnail}>
                  <div className='w-16 rounded-full h-16 overflow-hidden flex justify-center items-center'>
                    <img src={item.images} alt="" width="100%" height="100%" />
                  </div>
                  <p>{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  );
}



export default Category
