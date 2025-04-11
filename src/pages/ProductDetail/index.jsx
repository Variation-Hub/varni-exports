import { Link, useParams } from 'react-router-dom'
import style from '../ProductDetail/style.module.css'
import { catagories } from '../../contant'
import { useEffect, useState } from 'react'
import Style from './style.module.css'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
} from '@mui/material';
import ReactImageMagnify from 'react-image-magnify'

function Category() {
  const { categoryId, subcategoryId, productId } = useParams();
  const [suggestedCategory, setSuggestedCategory] = useState([]);
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);

  // Normalize helper function
  const normalizeParam = (param) => {
    return param ? param.replace(/-/g, ' ') : param;
  };

  // Format URL parameter helper function
  const formatUrlParam = (param) => {
    return param ? param.replace(/\s+/g, '-') : '';
  };

  const [open, setOpen] = useState(false);
  const [enquiryData, setEnquiryData] = useState({
    full_name: '',
    email: '',
    country_code: '',
    number: '',
    company_name: '',
    city: '',
    postal_code: '',
    country: '',
    quantity_in_ton: '',
    product_name: productId ? data2?.name : data?.name
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEnquiryData({
      full_name: '',
      email: '',
      number: '',
      country_code: '',
      company_name: '',
      city: '',
      postal_code: '',
      country: '',
      quantity_in_ton: '',
      product_name: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnquiryData({
      ...enquiryData,
      [name]: value
    });

    setEnquiryData(prevState => ({
      ...prevState,
      product_name: productId ? data2?.name : data?.name,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://varni-export-backend.onrender.com/send-enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ subject: "Product Enquiry", body: enquiryData }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Email sent successfully')
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    handleClose();
  };

  useEffect(() => {
    try {
      // Normalize parameters
      const normalizedCategoryId = normalizeParam(categoryId);
      const normalizedSubcategoryId = normalizeParam(subcategoryId);
      const normalizedProductId = normalizeParam(productId);
      
      // Find category - first try exact match, then try normalized
      let categoryData = catagories.find(cat => cat.catagoriesId === categoryId);
      if (!categoryData) {
        categoryData = catagories.find(cat => cat.catagoriesId === normalizedCategoryId);
      }
      
      // Safety check for undefined category
      if (!categoryData || !categoryData.products_detail) {
        console.warn(`Category not found for ID: ${categoryId}`);
        return;
      }
      
      const category = categoryData.products_detail;
      
      if (categoryId === "spices" || normalizedCategoryId === "spices") {
        const validSubcategories = ["ground-spices", "whole-spices", "ground spices", "whole spices"];
        
        if (validSubcategories.includes(subcategoryId) || validSubcategories.includes(normalizedSubcategoryId)) {
          if (productId) {
            // Try to find subcategory with different formats
            let subcategoryData = category.find(item => item.subCatagoriesId === subcategoryId);
            if (!subcategoryData) {
              subcategoryData = category.find(item => item.subCatagoriesId === normalizedSubcategoryId);
            }
            
            // Safety check for undefined subcategory
            if (!subcategoryData || !subcategoryData.products_detail) {
              console.warn(`Subcategory not found for ID: ${subcategoryId}`);
              return;
            }
            
            const productData = subcategoryData.products_detail;
            setSuggestedCategory(productData);
            
            // Try match with original ID
            let detailData = productData.find(item => item.name === productId);
            // If no match, try with normalized ID
            if (!detailData) {
              detailData = productData.find(item => item.name === normalizedProductId);
            }
            
            setData2(detailData);
          } else {
            setSuggestedCategory(category);
            
            // Try match with original subcategory ID
            let productData = category.find(item => item.subCatagoriesId === subcategoryId);
            // If no match, try with normalized subcategory ID
            if (!productData) {
              productData = category.find(item => item.subCatagoriesId === normalizedSubcategoryId);
            }
            
            setData(productData);
          }
        }
      } else {
        setSuggestedCategory(category);
        
        // Try match with original subcategory ID
        let subCategory = category.find(item => item.name === subcategoryId);
        // If no match, try with normalized subcategory ID
        if (!subCategory) {
          subCategory = category.find(item => item.name === normalizedSubcategoryId);
        }
        
        setData(subCategory);
      }
    } catch (error) {
      console.error("Error processing product data:", error);
    }
  }, [categoryId, subcategoryId, productId]);

  // Handle cases where data isn't loaded yet
  if (!data && !data2 && categoryId !== "spices") {
    return <div className="p-10 text-center">Loading product details...</div>;
  }

  return (
    <>
      {categoryId === "spices" && ["ground-spices", "whole-spices"].includes(subcategoryId) ? (
        productId && data2 ?
          <div className={style.container}>
            <div className={style.productSection}>
              <h2 className={style.productName}>{data2?.name}</h2>
              <div className={`flex items-center justify-around gap-24 w-[80%] ${Style.details_head}`}>
                {data2 && data2.images && (
                  <div className={style.image}>
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: data2.name || 'Product Image',
                          isFluidWidth: true,
                          src: data2.images
                        },
                        largeImage: {
                          src: data2.images,
                          width: 500,
                          height: 500
                        },
                        enlargedImageContainerDimensions: {
                          width: '100%',
                          height: '100%',
                        },
                      }}
                    />
                  </div>
                )}

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
                                <TableCell className={`${style.tableBodyCell} ${style.tableBodyCellTitle}`}>{value}</TableCell>
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
                <h3 className='text-3xl mb-10'>Description</h3>
                  <div className="text-justify">{data2?.description}</div>
              </div>

              <div className={`flex flex-col gap-5 mr-10 ${Style.other_product}`}>
                <h1 className='text-2xl mb-4'>Other Products</h1>
                {suggestedCategory?.map((item) => {
                  if (!item || !item.name) return null;
                  
                  // Format the product name for URL
                  const formattedProductName = formatUrlParam(item.name);
                  return (
                    <Link to={`/products/${categoryId}/${subcategoryId}/${formattedProductName}`} key={item.id || formattedProductName} className={style.productLink}>
                      <div className={style.productThumbnail}>
                        <div className='w-16 rounded-full h-16 overflow-hidden flex justify-center items-center'>
                          <img src={item.images} alt={item.name} width="100%" height="100%" />
                        </div>
                        <p>{item.name}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          :
          <div className={Style.product_container}>
            {data?.products_detail?.map((item) => {
              if (!item || !item.name) return null;
              
              // Format the product name for URL
              const formattedProductName = formatUrlParam(item.name);
              return (
                <Link
                  to={`/products/${categoryId}/${subcategoryId}/${formattedProductName}`}
                  key={item.id || formattedProductName}
                  className={`flex flex-col items-center justify-between ${Style.images}`}
                >
                  <img className="w-[220px]" src={item?.images} alt={item.name || ''} />
                  <h2 className={Style.productt_name}>{item.name}</h2>
                </Link>
              );
            })}
          </div>
      ) : (
        <div className={style.container}>
          <div className={style.productSection}>
            <h2 className={style.productName}>{data?.name}</h2>
            <div className={`flex items-center justify-around gap-24 w-[80%] ${Style.details_head}`}>
              {data && data.images && (
                <div className={style.image}>
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: data.name || 'Product Image',
                        isFluidWidth: true,
                        src: data.images
                      },
                      largeImage: {
                        src: data.images,
                        width: 600,
                        height: 700
                      },
                      enlargedImageContainerDimensions: {
                        width: '100%',
                        height: '100%',
                      },
                    }}
                  />
                </div>
              )}
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
                              <TableCell className={`${style.tableBodyCell} ${style.tableBodyCellTitle}`}>{value}</TableCell>
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
              <h3 className='text-3xl mb-10'>Description</h3>
                <div className="text-justify">{data?.description}</div>
            </div>

            <div className={`flex flex-col gap-5 mr-10 ${Style.other_product}`}>

              <h1 className='text-2xl mb-4'>Other Products</h1>
              {suggestedCategory?.map((item) => {
                if (!item || !item.name) return null;
                
                // Format the product name for URL
                const formattedProductName = formatUrlParam(item.name);
                return (
                  <Link to={`/products/${categoryId}/${formattedProductName}`} key={item.id || formattedProductName} className={style.productLink}>
                    <div className={style.productThumbnail}>
                      <div className='w-16 rounded-full h-16 overflow-hidden flex justify-center items-center'>
                        <img src={item.images} alt={item.name || ''} width="100%" height="100%" />
                      </div>
                      <p>{item.name}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>


        </div>
      )}
      <Dialog open={open} onClose={handleClose}>
        <form className={style.contact_Form2} onSubmit={handleSubmit}>
          <label className='text-lg uppercase'>Enquiry Details</label>
          <input
            type='text'
            name='full_name'
            placeholder='Full name'
            className={`${style.fonts}`}
            value={enquiryData?.full_name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className={`w-full max-[426px]:w-full ${style.fonts}`}
            value={enquiryData?.email}
            onChange={handleChange}
            required
          />
          <div className='flex gap-5 max-[426px]:flex-col'>

            <input
              type="number"
              name="country_code"
              placeholder="Country code"
              className={`w-1/3 max-[426px]:w-full ${style.fonts}`}
              value={enquiryData?.country_code}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="number"
              placeholder="Phone Number"
              className={`w-2/3 max-[426px]:w-full ${style.fonts}`}
              value={enquiryData?.number}
              onChange={handleChange}
              required
            />

          </div>

          <input
            type="text"
            name="company_name"
            placeholder="Company Name"
            className={style.fonts}
            value={enquiryData?.company_name}
            onChange={handleChange}
            required
          />


          <div className='flex gap-5 max-[426px]:flex-col'>
            <input
              type='text'
              name='city'
              placeholder='City'
              className={`w-1/2 max-[426px]:w-full ${style.fonts}`}
              value={enquiryData?.city}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="postal_code"
              placeholder="Postal Code"
              className={`w-1/2 max-[426px]:w-full ${style.fonts}`}
              value={enquiryData?.postal_code}
              onChange={handleChange}
              required
            />

          </div>

          <div className='flex gap-5 max-[426px]:flex-col'>
            <input
              type='text'
              name='country'
              placeholder='Country'
              className={`w-1/2 max-[426px]:w-full ${style.fonts}`}
              value={enquiryData?.country}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="quantity_in_ton"
              placeholder="Quantity in Ton"
              className={`w-1/2 max-[426px]:w-full ${style.fonts}`}
              value={enquiryData?.quantity_in_ton}
              onChange={handleChange}
              required
            />

          </div>

          <div className={style.send}>
            <input
              className={style.btn}
              value="Send Request"
              type='submit'
            />
          </div>

        </form>
      </Dialog>
      <div className={style.fixedEnquiryButtonContainer}>
        <button className={style.btn} onClick={handleClickOpen}>
          Enquiry Now
        </button>
      </div>
    </>
  );
}

export default Category;
