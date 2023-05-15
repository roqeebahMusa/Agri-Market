import React from 'react'
import './Choose.css'
import {FaUserNurse,FaUserCircle} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const Choose = () => {

  const navigate = useNavigate()

  return (
    <div className='choose_main'>
      <h1 className='head1'>
        <span className='span1'>O</span>
        <span className='span2'>R</span></h1>
      <div className='choose_wrap'>
        <div className='wrap-img1'>
        <FaUserNurse fontSize={257} color="#ffffff" />
         <p className='farm'>Do you want to Join as a Farmer? <br/> If Yes, Press the button to Sign Up</p>
        </div>
        <div className='wrapText'>
          <button className='Agent' onClick={()=> navigate('/Admin ')}>  
     <FaUserNurse fontSize={25} color="#0C764C" />
     Sign Up & Become A Merchant 
   </button>
        </div>
      </div>
    <div className='choose_wrap2'>
      <div className='wrap-img2'>
      <FaUserCircle fontSize={257} color="#0C764C" />
      <p className="pp">Do you want to Join as a Customer? <br/> If Yes, Press the button to Sign Up</p>
        </div>
        <div className='wrapText2'>
          <button className='buyer'onClick={()=> navigate('/User ')}>
  <FaUserCircle className='icon' fontSize={25} color="#24835d"  />  Sign Up & Become A User
  </button>

        </div>
      </div>
    </div>
   
  )
}

export default Choose


// <h2 className='nmjk'> we want to serve you better </h2>
// <span>Please choose the option that suits your need </span>

// <div className='choose_box'>
//   <button className='buyer'onClick={()=> navigate('/User ')}>
//   <FaUserCircle fontSize={25} color="#24835d"  />   User sign up
//   </button>

//   <button className='Agent' onClick={()=> navigate('/Admin ')}>
//   <FaUserNurse fontSize={25} color="#24835d"/> Become A Merchant
//   </button>
  
// </div>