import React from 'react'
import "./Dashboard.css"
import {useNavigate} from "react-router-dom";

function Dashsidemenu() {
  const navigate = useNavigate()
  
  return (
    <div className='Dashsidemenu_main'>
        <div className='Dashsidemenu_wrap'>
        
          <h4 onClick={() => navigate('/')}>HOME</h4>
          <h4 onClick={() => navigate('/MarketPlace')}>Market Place</h4>
          <h4> Settings</h4>
          <h4 onClick={() => navigate('/Addpage')} >Upload</h4>
          <h4 onClick={() => navigate('/Password')}>Change password</h4>
          <h4>LOG OUT</h4>

        </div>

    </div>
  )
}

export default Dashsidemenu