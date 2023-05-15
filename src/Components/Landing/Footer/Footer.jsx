import React from 'react'
import "./Footer.css"
import AG from "../../../assets/AG.png"
import { ImFacebook2 } from 'react-icons/im';
import {FaTwitterSquare } from 'react-icons/fa';
import {BsLinkedin } from 'react-icons/bs';
import { SiInstagram} from 'react-icons/si';
import {SiWhatsapp } from 'react-icons/si';
import {MdAlternateEmail } from 'react-icons/md';
import {HiLocationMarker } from 'react-icons/hi';
import {MdContactPage } from 'react-icons/md';
import kora from "../Footer/kora.png"
import curve from "../Footer/africa2.jpg"


function Footer() {
  return (
    <footer className='Footer_main'>
      <div className='Footer1'>
       <div className='FooterLogo'>
    <img src={AG} alt="" className='AG' />
       </div>
         
        {/* <div className='Location'>
          <p>Wilmer Stop, Muyibi Street No 161/163 Olodi, Apapa Lagos State.</p>
        </div> */}

      </div>  
    {/* <div className='footer_wrap'>
      <div className='left_footer'>
<h4>follow us on:</h4> <br/>
<div className='left_footer_icon' >
<ImFacebook2 className='icon'/>
<br/>
<FaTwitterSquare className='icon'/>
<br/>
<BsLinkedin className='icon'/>
<br/>
<SiInstagram className='icon'/>
<br/>
<IoLogoYoutube className='icon'/>
</div>

      </div>

      <div className='center_footer' >
    <img src={AG} alt="" className='AG' />
    <div className='center_footer2'>
        <h4>Our partners</h4>
    <img src={curve} alt=" " className='curve'/>
        <img src={kora} alt="" className='kora' />
    </div>
  

      </div>
      <div className='right_footer'>
        <MdAlternateEmail className='icon'/>
        <p>Gmail</p>
        <p>info@agri_market.com</p> <br/><br/> 
        
        
<HiLocationMarker className='icon'/>
<p>Location</p>
<p>No 161, Muyibi Street, Apapa, Lagos State</p> <br/> <br/> 

<MdContactPage className='icon'/>
<p>Contact</p>
 <p>+234 806 431 8819</p>
 <p>+234 907 359 7639</p>
      </div>

    </div>
    <div className='footer_bottom'>
      <h4>Privacy Policy</h4> 
      <h4>Terms of Service</h4>
      <h4>2023 Agri_Market</h4>
    </div> */}

   </footer>
    
  )
}

export default Footer