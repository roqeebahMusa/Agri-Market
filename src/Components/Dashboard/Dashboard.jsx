import React, {useState} from "react";
import {ImMenu3  } from 'react-icons/im'
import "./Dashboard.css"
import {FaTimes} from 'react-icons/fa'
import Dashsidemenu from "./Dashsidemenu"
import { NavLink } from "react-router-dom";

function Dashboard() {
  const [toggle, setToggle] = useState(false);

  const handlechange = () => { 
    setToggle(!toggle) 
  }

  const activeColorObject = {
    color : "black",
    textDecoration: "none",
    fontWeight: 550,
    
  }

  const colorObject = {
    textDecoration: "none",
    fontWeight: 550,
    color: "white",
  }

  

  return (
    <div className="Dashboard_origin">
      <div className="dashboard_head">
        {/* <h3 className="wc">welcome</h3>  */}
        <div className="dash_icon">
        {toggle ? <FaTimes fontSize={"30px"} color="#0C764C" onClick={handlechange}/>:
         <ImMenu3 fontSize={"30px"} color="#0C764C" onClick={handlechange}/>} </div>
         {toggle ? <Dashsidemenu props={handlechange}/>: null}

        {/* <h4>Log out</h4> */}
      </div>
      <div className="main_dash">
        <div className="dash_sidebar">
         
          <div className="dash_sidebar2">
          <h3>Dashboard</h3>
              {/* <h4 className="dasth3">HOME</h4> */}
              <NavLink to="/Marketplace" style={({isActive}) => isActive ? activeColorObject : colorObject}><h4 className="dasth3">Market Place</h4></NavLink>
              <NavLink to="/Settings" style={({isActive}) => isActive ? activeColorObject : colorObject}><h4 className="dasth3">Settings</h4></NavLink>
          <h4 className="dasth3">Upload</h4>
          {/* <h4 className="dasth3" onClick={() => navigate('/Password')}>Change password</h4> */}
          </div>
          <h4 className="dasth4">LOG OUT</h4>

        </div>
      </div>

    </div>

  );
}

export default Dashboard;