import React from 'react'
import "./Header.css"
import {useNavigate} from "react-router-dom"



function Dropdown(prop) {
  const {props} = prop
    const navigate = useNavigate();
  return (
    <div className='drop_main'>
     <div className='drop_wrap'>
<p className='dipdrop' onClick={() => {props(); navigate('/')}}>Home</p><br/>
<p className='dipdrop' onClick={() => {props(); navigate('/MarketPlace')}}>Market Place</p><br/>
<p className='dipdrop' onClick={() => {props(); navigate('/Cart')}}>Cart</p><br/>
<p className='dipdrop' onClick={() => {props(); navigate('/Choose')}}>Sign up</p><br/>
<p className='dipdrop' onClick={() => {props(); navigate('/login')}}>Log in</p><br/>
    </div>
    </div>
  )
}

export default Dropdown