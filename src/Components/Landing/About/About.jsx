import React from 'react'
import "./About.css"
import Mission from './Mission'
import {useNavigate} from "react-router-dom"
import food from "../../../assets/food.jpg"
import quality from "../../../assets/quality.jpg"
import delivery from "../../../assets/delivery.jpg"
import Footer from "../Footer/Footer"

function About() {
  const navigate = useNavigate()
  
  return (
    <div className='about_main'>
      <div className='about_wrap'>
        <div className='about-us-page'>
          <h1>About Agri-Market</h1>
          <p>What Agri-Market does and Why Agri-Market?</p>
        </div>
        <div className='about-us-page2'>
          <div className='abt-us-page21'></div>
          <div className='abt-us-page22'>
           <h1>What Agri-Market does</h1>
           <p>Agri-Market source for the best livestock product from farmers coming to our platform to post the products they have with them and also gives the users the satisfaction they want when they want to purchase the product they want and also the satisfaction they want after they've purchased the product so as for them to come back to Agri-Market platform again to purchase products. <br/>
            We also want to give our Users coming to purchase products the opportunity to chat with the Farmers regarding the price of any Livestock products they want to purchase and be able to negotiate the price with eachother.
            <br /> <br />
            WHAT AGRI-MARKET WILL LIKE TO OFFER THEIR CUSTOMERS. <br /> <br />
            Agri-Market will like to offer their customers best experience during their purchase and also give them products at an affordable price also give discounts to any customers that do come on Agri-Market platform to make purchase.
           </p>
          </div>
        </div>
       
        {/* <p>Agri-Market makes livestock products available for you at the comfort of your warehouse.<br/> Don't have to stress yourself, just order for the products you want and we'll get it delivered.</p> */}
        {/* <p  className='para1'>Agri-Market platform makes it easy for you to purchase the livestock products of your choice,<br/> we make it very easy for our users to get the best productd they want<br/> and at an affordable price which our user will be able to purchase</p> <br /> */}

        {/* <div className='our_mission'>
          <h3>Our Mission</h3>
          <div className='mission_info'>
                <Mission
                abouttext="Access Geniune Livestock products from local vendors. Helping local farmers connect to buyers" 
                aboutimg = {Tech}   /> 
                    <Mission 
                abouttext="Buy Livestock product from your comfort zone at the best price" 
                aboutimg = {Tech}  />
                <Mission
                abouttext=" Assisting our Customers for the best Shopping Experience" 
                aboutimg = {Tech}  />
        </div>
        <div className='shopnow_about'>
        <button className='about_shopnow' onClick={()=> navigate('/MarketPlace')} >Shop Now</button>
        </div>     
      </div> */}
      </div>
    <div className='About-Main2'>
      <div className='Choose'>
        <h1>WHY CHOOSE US?</h1>
        <p>You will choose us because you get the best quality livestock products from us and we deliver fast.</p>
      </div>
      <div className='Choose-Reason'>
        <Mission
        aboutimg={food}
        abtbigtext="Provide healthy products" 
        abtsmalltext="We provide all healthy livestock products here at Agri-Market. You can purchase any Livestock Products you want."/>

       <Mission
        aboutimg={quality}
        abtbigtext="Best Quality" 
        abtsmalltext="Our Productss here at Agri-Market is excellent. You will get exactly what you want here."/>

      <Mission
        aboutimg={delivery}
        abtbigtext="Fast Delivery" 
        abtsmalltext="You can say the main goal of our delivery man is to deliver orders quickly. You can receive it shortly after ordering."/>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About