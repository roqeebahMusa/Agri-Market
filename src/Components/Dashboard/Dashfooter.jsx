import React from 'react'
import "./Dashfooter.css"
import { MdPassword } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import {FaUpload} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Dashfooter() {
  const navigate = useNavigate()
  return (
    <div className='Dashfooter_main'>
        <div className='dashfooter_wrap'>
          <FaUpload className='dashfootdown' onClick={() => navigate('/Uploadproduct')}/>|
          <IoMdSettings className='dashfootdown' onClick={() => navigate('/Settings')}/> |
          <IoMdSettings className='dashfootdown' onClick={() => navigate('/Deleteproduct')}/> |
           <MdPassword className='dashfootdown' onClick={() => navigate('/Resetpassword')}/> |
          <BiLogOutCircle className='dashfootdown'/>

        </div>
    </div>
  )
}

export default Dashfooter