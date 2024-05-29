import { useParams } from 'react-router-dom'

function Category() {
  const { categoryId, productId } = useParams()
  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-bold">{categoryId} {productId}</h1>
      </div>
    </div>
  )
}

export default Category
