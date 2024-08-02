import { Link, useParams } from 'react-router-dom'
import style from '../ProductDetail/style.module.css'
import { catagories } from '../../contant'
import Markdown from 'react-markdown'
import { useEffect, useState } from 'react'
import Style from './style.module.css'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

function Category() {

  const { categoryId, subcategoryId, productId } = useParams();
  const [suggestedCategory, setSuggestedCategory] = useState([]);
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    if (categoryId === "spices" && ["ground-spices", "whole-spices"].includes(subcategoryId)) {
      if (productId) {
        const category = catagories.find(category => category.catagoriesId === categoryId)?.products_detail;
        const productData = category?.find(item => item.subCatagoriesId === subcategoryId)?.products_detail || null;
        setSuggestedCategory(productData);
        const deailtData = productData?.find(item => item.name === productId) || null;
        setData2(deailtData);
      } else {
        const category = catagories.find(category => category.catagoriesId === categoryId)?.products_detail;
        setSuggestedCategory(category);
        const productData = category?.find(item => item.subCatagoriesId === subcategoryId) || null;
        setData(productData);
      }
    } else {
      const category = catagories.find(category => category.catagoriesId === categoryId)?.products_detail;
      setSuggestedCategory(category);
      const subCategory = category.find(item => item.name === subcategoryId);
      setData(subCategory);
    }
  }, [categoryId, subcategoryId, productId]);

  return (

    categoryId === "spices" && ["ground-spices", "whole-spices"].includes(subcategoryId) ? (
      productId && data2 ?
        <div className={style.container}>
          <div className={style.productSection}>
            <h1 className={style.productName}>{data2?.name}</h1>
            <div className={`flex items-center justify-around gap-24 w-[80%] ${Style.details_head}`}>
              <div className={style.image}>
                <img src={data2?.images} alt={`${data2?.name} image`} width="100%" height="100%" />
              </div>
              <div className={style.productDetails}>
                <TableContainer>
                  <Table className={style.productTable}>
                    <TableHead className={style.tableHead}>
                      <TableRow>
                        <TableCell className={`w-[40%] ${style.tableHeadCell}`}>Attribute</TableCell>
                        <TableCell className={style.tableHeadCell}>Value</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data2 &&
                        Object.keys(data2).map((value, index) => (
                          value !== "id" && value !== "name" && value !== "images" && value !== "description" ? (
                            <TableRow key={index} className={style.tableBodyRow}>
                              <TableCell className={style.tableBodyCell}>{value}</TableCell>
                              <TableCell className={style.tableBodyCell}>{data2[value]}</TableCell>
                            </TableRow>
                          ) : null
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>


          <div className={style.otherProductsGrid}>
            <div className={style.productDescription}>
              <h1 className='text-3xl mb-10'>Description</h1>
              {data2?.description ? (
                <Markdown className="text-justify">{atob(data2?.description)}</Markdown>
              ) : null}
            </div>

            <div className={`flex flex-col gap-5 mr-10 ${Style.other_product}`}>
              <h1 className='text-2xl mb-4'>Other Products</h1>
              {suggestedCategory?.slice(0, 4)?.map((item) => (
                <Link to={`/products/${categoryId}/${subcategoryId}/${item.name}`} key={item.id} className={style.productLink}>
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
        :
        <div className={Style.product_container}>
          {data?.products_detail?.map((item) => {
            return (
              <Link
                to={`/products/${categoryId}/${subcategoryId}/${item.name}`}
                key={item.id}
                className={`flex flex-col items-center justify-between  ${Style.images}`}
              >
                <img className="w-[220px]" src={item?.images} alt="" />
                <h1 className={Style.productt_name}>{item.name}</h1>
              </Link>
            );
          })}
        </div>
    ) : (
      <div className={style.container}>
        <div className={style.productSection}>
          <h1 className={style.productName}>{data?.name}</h1>
          <div className={`flex items-center justify-around gap-24 w-[80%] ${Style.details_head}`}>
            <div className={style.image}>
              <img src={data?.images} alt={`${data?.name} image`} width="100%" height="100%" />
            </div>
            <div className={style.productDetails}>
              <TableContainer>
                <Table className={style.productTable}>
                  <TableHead className={style.tableHead}>
                    <TableRow>
                      <TableCell className={`w-[40%] ${style.tableHeadCell}`}>Attribute</TableCell>
                      <TableCell className={style.tableHeadCell}>Value</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data &&
                      Object.keys(data).map((value, index) => (
                        value !== "id" && value !== "name" && value !== "images" && value !== "description" ? (
                          <TableRow key={index} className={style.tableBodyRow}>
                            <TableCell className={style.tableBodyCell}>{value}</TableCell>
                            <TableCell className={style.tableBodyCell}>{data[value]}</TableCell>
                          </TableRow>
                        ) : null
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
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

          <div className={`flex flex-col gap-5 mr-10 ${Style.other_product}`}>
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
