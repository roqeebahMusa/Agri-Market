import React from 'react'
import './Choose.css'
import {FaUserNurse,FaUserCircle} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const Choose = () => {

  const navigate = useNavigate()

  return (
    <div className='choose_main'>
      <div className='choose_wrap'>
        <h2 className='nmjk'> we want to serve you better </h2>
        <span>Please choose the option that suits your need </span>

        <div className='choose_box'>
          <button className='buyer'onClick={()=> navigate('/User ')}>
          <FaUserCircle fontSize={25} color="#24835d"  />   User sign up
          </button>

          <button className='Agent' onClick={()=> navigate('/Admin ')}>
          <FaUserNurse fontSize={25} color="#24835d"/> Become A Merchant
          </button>
          
        </div>
      </div>
    </div>
   
  )
}

export default Choose