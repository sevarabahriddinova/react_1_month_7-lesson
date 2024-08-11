import axios from '../../api/index'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import yulduz from "../../images/yulduz.svg"

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
    <div className='details__content'>
        {
           <div className='details__wrapper'>
              <div className='details__title'>
                <img className='details__img' src={products?.image} alt="" />
              </div>
            
              <div className='details__subtitle'>
                <p className='details__text'> {products?.description.slice(0,190)}</p>
                <h2 className='details__text'>{products?.title.slice(0,40)}</h2>
                <div className='span__wrapper'>
                <img src={yulduz} alt="" /> 
                <span className='span'> {products?.price}</span>   
                </div>
              </div>
           </div>
        }
    </div>
  )
}

export default ProductsDetails