import React from 'react'
import "./Success.css"
import check from "../Checkout/check.png"
import { useNavigate } from 'react-router-dom'

const Success = () => {

  const navigate = useNavigate()

  return (
    <div className='Success-page-main1'>
        <div className='Success-page-main2'>
            <div className='Success-design-page1'>
                <img className='checkmark' src={check} alt = " " />
            </div>
            <div className='Success-design-page2'>
               <p className='yea'>Yeah!</p>
               <h1 className='pay'>Payment Successful</h1>
            </div>
            <button className='done' onClick={() => navigate('/Marketplace')} >Done</button>
        </div>
    </div>
  )
}

export default Success