import React from 'react'
import "./Header.css"
import {useNavigate} from "react-router-dom"
import { BsCart4 } from "react-icons/bs";

function Dropdown(prop) {

  const {props} = prop  
    const navigate = useNavigate();
    const getResponse = JSON.parse(localStorage.getItem("response"));

     const logout = () => {
      localStorage.removeItem("response" );
     }
     
  return (
    <div className='drop_main'>
     <div className='drop_wrap'>
<p className='dipdrop' onClick={() => {props(); navigate('/')}}>Home</p><br/>
<p className='dipdrop' onClick={() => {props(); navigate('/MarketPlace')}}>Market Place</p><br/>
<p className='dipdrop' onClick={() => {props(); navigate('/Cart')}}>Cart <BsCart4 /></p><br/>


 
{ getResponse ? <> <p className='dipdrop' onClick={() => {props(); navigate('/Dashboard')}}>Dashboard</p> <br/>
<p className='dipdrop' onClick={() => {logout(); navigate('/')}} > Log Out
</p> </>
 :

 <> <p className='dipdrop' onClick={() => {props(); navigate('/Choose')}}>Sign up</p><br/>
  <p className='dipdrop' onClick={() => {props(); navigate('/login')}}>Log in</p><br/></>}

    </div>
    </div>
  )
}

export default Dropdown