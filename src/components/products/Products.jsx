import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({products}) => {
    console.log(products)
  return (
    <div>
        {
            products?.map((product) => (
                <div key={product.id} style={{marginBottom: "20px ", border: "1px solid black"}}>
                    <h2>
                        {product.title}
                    </h2>
                    <Link style={{color: "dodgerblue"}} to={`/product-details/${product.id}`}>View details</Link>
                </div>
            ))
        }
    </div>
  )
}

export default Products