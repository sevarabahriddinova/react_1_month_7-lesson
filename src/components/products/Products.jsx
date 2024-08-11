import React from 'react'
import { Link } from 'react-router-dom'
import yulduz from "../../images/yulduz.svg"



const Products = ({products}) => {
    console.log(products)
  return (
    <div className='products'>
        <div className='product__wrapper'>
        {
            products?.map((product) => (
                <div key={product.id}>
                    <div className="wrapper">
                        <img className='card__img' src={product.image} alt="" />
                        <h2 className='card__title'>
                            {product.title.slice(0,20)}
                        </h2>
                        <div className='yulduz__wrapper'>
                            <img src={yulduz} alt="" />
                            <span>price: {product.price}</span>
                        </div>
                        <Link className='link__style' to={`/product-details/${product.id}`}>View details</Link>
                    </div>
                 </div>
            ))
        }
        </div>
    </div>
  )
}

export default Products