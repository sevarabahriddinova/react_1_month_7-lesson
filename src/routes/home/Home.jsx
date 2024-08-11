import React, { useEffect, useState } from 'react'
import Products from '../../components/products/Products'
import axios from '../../api/index'


const Home = () => {

  const [products, setProducts] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios("/products")
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
      <Products products={products} />
    </div>
  )
}

export default Home