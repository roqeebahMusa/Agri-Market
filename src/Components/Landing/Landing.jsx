import React from 'react'
import "./Landing.css"
import Carousel from '../Carousel/Carousel'
import poult from "../../assets/poult.jpg"
import {useNavigate} from "react-router-dom"
import Landcont from './Landcont'
import katti from "../../assets/katti.jpg"
import hen from "../../assets/hen.jpeg"
import catti from "../../assets/catti.jpg"
import t1 from "../../assets/t1.png"
import feedbe from "../../assets/feedbe.jpeg"
import Footer from './Footer/Footer'

function Landing() {
  const navigate = useNavigate();
  return (
    <div className='Main-Body'>
      <div className='main_wrap'>
      <div className='Agri-Main'>
            <div className='Textxx'>
                <h1 className='big_text'>LIVESTOCK PRODUCT AT YOUR FINGERTIPS</h1><br/>
            
                <p className='smalltip'>If you say that something is at your fingertips, you approve of the fact that you can reach it easily or that it is easily available to you.<br/> <br/>We make livestock products available for you at the comfort of your warehouse. Don't have to stress yourself, just order for the products you want and we'll get it delivered. <br/><br/>
                </p>
              </div>
                {/* <br/> */}
                <div className='rele'>
                <button className='vbnt' onClick={()=> navigate('/MarketPlace')}>Shop Now</button>
                </div>
        </div>
        
                <div className='piccont'>
                  <img src={poult} alt="" className='peesu' />
                </div>
 </div>
     <Carousel /> 
     <div className="landing_body">
      <h2>We ALWAYS want you to order for QUALITY Products</h2>
      <Landcont 
      ftext="Shop Different Species of Catfish"
      text="You can view our list of catfish species and shop for the species that suits your meals..."
      img={katti}
      click="Shop Now" navigate="/MarketPlace"/>
      <Landcont 
      ftext="Chicken  based on their breeds"
      text="Your health is a priority to us and we  have a list of healthy food items that will help you manage certain health conditions"
      click="Shop Now" navigate="/MarketPlace"
      img={hen}/>
      
      <Landcont
      img={catti}
      click="Buy Now" navigate="/MarketPlace"
       />
     </div>
     <div className='land_delivery'>
      <div className='land_delivery_text'>
        <h2>We Deliver All Your livestock Products
        to your location in 24 Hours</h2>
      </div>
      <div  className='land_div_img'>
        <img src={t1} alt="" className='land_delivery_image'/>
      </div>
    </div>

     <div className='feedback_landing'>
     <h3>FeedBack</h3>
     <div className='feedback_wrap'>
     <div className='first_feedback'>
      <img src={feedbe} alt="" className='feedback_imag' />
      <p>Great Service!<br/> Great product!</p>
       </div>
     <div className='first_feedback'>
      <img src={feedbe} alt="" className='feedback_imag' />
       <p>The process for placing an <br/> order was very simple.</p>
     </div>
     <div className='first_feedback'>
      <img src={feedbe} alt="" className='feedback_imag' />
      <p> Great App <br/> Lovly user interface</p>
     </div>
     </div> 
   </div>
  <Footer />
    </div>
  )
}

export default Landing