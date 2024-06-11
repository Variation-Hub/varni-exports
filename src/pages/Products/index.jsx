import { Link } from 'react-router-dom'
import { catagories } from '../../contant'

function Products() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Products Page</h1>
      <ul>
        {catagories.map((product, index) => (
          <li key={index}>
            <Link to={product.path}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
