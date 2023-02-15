import React from 'react'
import "./Marketplace.css"
import Goods from './Goods'
// import Landcont from "../Landing/Landcont"
import Carousel from '../Carousel/Carousel'
import Dashboard from "../Dashboard/Dashboard"
import katti from "../../assets/katti.jpg"
import hen from "../../assets/hen.jpeg"
// import { useDispatch } from "react-redux"
// import { addToCart } from "../Features/Features"




function MarketPlace() {
  // const dispatch = useDispatch()

  // const dispatch = useDispatch()
  return (                                 
    <div className='Market_main'>
      <div className='Market_wrap'>             
      <div className='Market_top'>
      <input type="text" placeholder='search' className='marketsearch'/> <button className="marketbutt">Search</button>
      </div>
      <h2>Livestock at your finger tips</h2>
    <p>Forget the hustle, lets go to the market for you!!!</p>
      <div className='market_load1'>
        <div className='market-img'>
          <img className='hen' src={hen} />
        </div>
        <div className='marketText'>
          <h2>Chicken  based on their breeds</h2>
          <p>Your health is a priority to us and we  have a list of healthy food items that will help you manage certain health conditions</p>
       <div className='cart'>
          <button className='cart2'>Add to Cart</button>
       </div>
        </div>
          </div>
          <div className='market_load1'>
        <div className='market-img'>
          <img className='hen' src={katti} />
        </div>
        <div className='marketText'>
          <h2>Shop Different Species of Catfish</h2>
          <p>You can view our list of catfish species and shop for the species that suits your meals...</p>
       <div className='cart'>
          <button className='cart2'>Add to Cart</button>
       </div>
        </div>
          </div>
    
      </div>
      <Carousel />
      <Dashboard />
      <Goods />
      

    </div>
  )
}

export default MarketPlace