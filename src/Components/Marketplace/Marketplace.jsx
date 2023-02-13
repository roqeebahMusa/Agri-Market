import React from 'react'
import "./MarketPlace.css"
import Landcont from "../Landing/Landcont"
import Carousel from '../Carousel/Carousel'
import Dashboard from "../DashBoard/Dashboard"
import katti from "../../assets/katti.jpg"
import hen from "../../assets/hen.jpeg"

function MarketPlace() {
  return (                                 
    <div className='Market_main'>
      <div className='Market_wrap'>
      <div className='Market_top'>
      <input type="text" placeholder='search' className='marketsearch'/> <button className="marketbutt">Search</button>
      </div>
      <h2>Livestock at your finger tips</h2>
    <p>Forget the hustle, lets go to the market for you!!!</p>
      <div className='market_load'>
      <Landcont
      ftext="Chicken  based on their breeds"
      text="Your health is a priority to us and we  have a list of healthy food items that will help you manage certain health conditions"
      click="add to cart" navigate="/Cart"
      img={hen} />
      <Landcont
      ftext="Shop Different Species of Catfish"
      text="You can view our list of catfish species and shop for the species that suits your meals..."
      click="add to cart" navigate="/Cart"
      img={katti} />
      </div>
      </div>
      <Carousel />
      <Dashboard />
      
      

    </div>
  )
}

export default MarketPlace