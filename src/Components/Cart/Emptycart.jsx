import React from 'react'
// import "./Cart.css"
import "../Cart/Emptycart.css"
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

function Emptycart() {
  const navigate = useNavigate()

  return (
    <div className='emptycart_main'>
        <div className='emptycart_wrap'>
          <div className='shopping1'>
               <h3 className='emptcuart'>SHOPPING CART
               <HiOutlineShoppingCart fontSize={25} color={'White'} /></h3>
          </div>
         
     <div className='Cartshold'>
     <div className='emptycart_logo'> <HiOutlineShoppingCart className='shoppingcart' fontSize={130} color={'White'} /></div>
        <h2 className='emptcuart2'> Your Cart is Currently Empty </h2>
        <span>Your shopping cart is currently empty!<br/>
        Simply Click the button to Shop for your desired products at our Marketplace.</span>

        <button className='emptybotton' onClick={()=> navigate('/MarketPlace')}>Shop Now</button>
     </div>

        </div>

    </div>
  )
}

export default Emptycart