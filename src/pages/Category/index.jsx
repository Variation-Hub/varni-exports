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
                to={`/products/${categoryId}/${product.subCatagoriesId}`}
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
                className={`flex flex-col items-center justify-between  ${Style.images}`}
              >
                <img className="w-[220px]" src={item?.images} alt="" />
                <h1 className={Style.productt_name}>{item.name}</h1>
              </Link>
            //    <Link
            //    to={`/products/${categoryId}/${item.name}`}
            //    key={item.id}
            //    className={`flex flex-col items-center justify-between relative ${Style.images}`}
            //  >
            //    <img className="w-[220px]" src={item?.images} alt={item.name} />
            //    <div
            //      className={`${Style.productt_name} rotate-6 absolute -bottom-5 left-0 right-0 text-white bg-[var(--primary-color)] opacity-0 transition-opacity duration-300 ease-in-out`}
            //    >
            //      <h1 className="-rotate-6">{item.name}</h1>
            //    </div>
            //  </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Category;
