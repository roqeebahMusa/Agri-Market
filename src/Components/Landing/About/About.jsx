import React from 'react'
import "./About.css"
import Mission from './Mission'
import {useNavigate} from "react-router-dom"
import Tech from "../../../assets/Farming-tech.jpg"
import Footer from "../Footer/Footer"

function About() {
  const navigate = useNavigate()
  
  return (
    <div className='about_main'>
      <div className='about_wrap'>
        <div className='about-us-page'>
        <h2>About Us</h2> <br/>
        <p className='para1'>Agri-Market makes livestock products available for you at the comfort of your warehouse.<br/> Don't have to stress yourself, just order for the products you want and we'll get it delivered. </p> 
        <p  className='para1'>Agri-Market platform makes it easy for you to purchase the livestock products of your choice,<br/> we make it very easy for our users to get the best productd they want<br/> and at an affordable price which our user will be able to purchase</p> <br />
        </div>

        <div className='our_mission'>
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
      </div>
      </div>
    <Footer/>
    </div>
  )
}

export default About