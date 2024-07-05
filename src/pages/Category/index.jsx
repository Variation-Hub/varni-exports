import { Link, useParams } from "react-router-dom";
import Style from "./style.module.css";
import productStyle from "../Products/style.module.css";
import { catagories } from "../../contant";
import { useEffect, useState } from "react";
function Category() {
  const { categoryId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const category = catagories.find(
      (category) => category.catagoriesId === categoryId
    );
    console.log(category, categoryId);
    setData(category);
  }, [categoryId]);

  return (
    <>
      <div className={Style.products_head}>
        <h1 className="text-center uppercase text-2xl mt-10">{data?.name}</h1>
        <h1 className={`px-32 py-10 text-center ${Style.products_description}`}>
          {data?.description}
        </h1>
      </div>
      {categoryId === "spices" ? (
        <div className="p-4">
          <ul className={productStyle.products_contianer}>
            {data?.products_detail?.map((product, index) => (
              <Link
                to={`/products/${categoryId}/${product.subCatagoriesId}/${product.name}`}
                key={index}
                className={productStyle.product_name}
              >
                <h1>{product.name}</h1>
                <div className={productStyle.image}>
                  <img src={product?.image} alt="" />
                  <div className={productStyle.more_info}>
                    <button>More Info</button>
                  </div>
                </div>
                <article>
                  {product?.description?.length > 315
                    ? `${product?.description.slice(0, 312)}...`
                    : product?.description}
                </article>
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <div className={Style.product_container}>
          {data?.products_detail?.map((item) => {
            return (
              <Link
                to={`/products/${categoryId}/${item.name}`}
                key={item.id}
                className={Style.images}
              >
                <img src={item?.images} alt="" />
                <h1 className={Style.productt_name}>{item.name}</h1>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Category;
