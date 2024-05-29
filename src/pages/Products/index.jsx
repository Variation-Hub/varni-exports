import { Link } from 'react-router-dom'

function Products() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Products Page</h1>
      <ul>
        <li><Link to="/products/category1">Category 1</Link></li>
        <li><Link to="/products/category2">Category 2</Link></li>
      </ul>
    </div>
  )
}

export default Products
