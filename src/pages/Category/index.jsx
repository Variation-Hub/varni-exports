import {  Link, useParams } from 'react-router-dom'

function Category() {
  const { categoryId } = useParams()
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{categoryId}</h1>
      <ul>
      <li><Link to={`/products/${categoryId}/product1`}>Product 1</Link></li>
          <li><Link to={`/products/${categoryId}/product2`}>Product 2</Link></li>
      </ul>
    </div>
  )
}

export default Category
