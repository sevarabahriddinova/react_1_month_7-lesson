import axios from '../../api/index'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductsDetails = () => {
    const { id } = useParams()
    const [products, setProducts] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios(`/products/${id}`)
        console.log(res.data)
        setProducts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])
  return (
    <div>
        {
           <div>
             <h2>{products?.title}</h2>
            <p>{  products?.description}</p>
           </div>
        }
    </div>
  )
}

export default ProductsDetails