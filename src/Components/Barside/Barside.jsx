import React from 'react'
import './Barside.css'
// import Time from "../Time/Time"
import { useNavigate } from "react-router-dom";
import {FaUpload} from 'react-icons/fa';
import { IoMdSettings } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";
import { MdPassword } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { RiProductHuntFill } from "react-icons/ri";
import Time from '../Time/Time';

function Barside() {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("response" );
       }


  return (
    <div className="dash_sidebar">
         <div className="dasth3" onClick={() => navigate('/Dashboard')}> <MdDashboard fontSize="25px"/> <h4 > Dashboard </h4> </div>
         <div className="dasth3" onClick={() => navigate('/Uploadproduct')}> <FaUpload fontSize="25px"/> <h4 > Upload </h4> </div>
         <div className="dasth3" onClick={() => navigate('/Settings')}> <IoMdSettings fontSize="25px"/> <h4 > Settings</h4> </div>
         <div className="dasth3" onClick={() => navigate('/Deleteproduct')}> <RiProductHuntFill fontSize="25px"/> <h4 > Products</h4> </div>
         <div className="dasth3" onClick={() => navigate('/Resetpassword/1')}>  < MdPassword fontSize="25px"/>  <h4 >Security</h4> </div> 
         <div  className="dasth3" onClick={() => {logout(); navigate('/')}} > <BiLogOutCircle fontSize="25px"/> <h4>Logout</h4> </div>
          <div className="timeshow">
           <Time/>
          </div>
        </div>
  )
}

export default Barside