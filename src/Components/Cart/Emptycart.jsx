import React from 'react'
import "./Cart.css"
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

function Emptycart() {
  const navigate = useNavigate()

  return (
    <div className='emptycart_main'>
        <div className='emptycart_wrap'>
            <h4 className='emptcuart'>SHOPPING CART</h4>
       <div className='emptycart_logo'> <HiOutlineShoppingCart fontSize={120} color={'White'} /></div>
        <h2 className='emptcuart'> Your Cart is Currently Empty </h2>
        <span>Your shopping cart is empty, but it doesn't have to be.
        Check out our marketplace to Shop now.  </span>

        <button className='emptybotton' onClick={()=> navigate('/MarketPlace')}>Shop Now</button>

        </div>

    </div>
  )
}

export default Emptycart