import React, { useEffect, useState } from 'react'
import Products from '../../components/products/Products'
import axios from '../../api/index'
import model from "../../images/model.jpg"
import search from '../../images/search.svg'
import avt from '../../images/avt.svg'
import { Link } from 'react-router-dom'
 

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
      <div className='nav'>
        <div className='nav__wrapper'>
        <div className='nav__title'>
            <h3 className='subtitle'>zara home</h3>
              <dir className="searc__inp">
              <input className='search' type="text"placeholder='Search'/>
              <img src={search} alt="" />
              </dir>
            <ul className='nav__list'>  
              <li className='list__style'><a className='list' href="#">Men</a></li>
              <li className='list__style'><a className='list' href="#">Women</a></li>
              <li className='list__style'><a className='list' href="#">Kids</a></li>
              <li className='list__style'><a className='list' href="#">sale</a></li>
              <li className='list__style'><a className='list' href="#">customers</a></li>
              <li className='list__style'><a className='list' href="#">help</a></li>
              <li className='list__style'><img src={avt} alt="" /></li>
            </ul>
        </div>
        </div>
        <div className='nav__img'>
            <img className='nav__images' src={model} alt="" />
            <h2 className='nav__img__title'>New collection</h2>
            <p className='nav__img__text'>women's clothing 2024</p>
            <Link className='product__link' to="auth/login">Shop Now</Link>
          </div>  
      </div>
      <Products products={products} />
    </div>
  )
}

export default Home