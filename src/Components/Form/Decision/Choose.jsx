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
        <p>please choose the option that suits your need </p>

        <div className='choose_box'>
          <button className='buyer'onClick={()=> navigate('/SignUp ')}>
          <FaUserCircle fontSize={25} color="#24835d"  />   Sign up As a buyer
          </button>

          <button className='Agent' onClick={()=> navigate('/SignUp ')}>
          <FaUserNurse fontSize={25} color="#24835d"/> Become An Agent
          </button>
          
        </div>
      </div>
    </div>
   
  )
}

export default Choose