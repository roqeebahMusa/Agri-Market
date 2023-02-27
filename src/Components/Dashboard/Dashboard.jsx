import React, {useState} from "react";
import {ImMenu3  } from 'react-icons/im'
import "./Dashboard.css"
import {FaTimes} from 'react-icons/fa'
import Dashsidemenu from "./Dashsidemenu"
import { useNavigate } from "react-router-dom";
import AG from "../../assets/AG.png"

function Dashboard() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate()

  const handlechange = () => { 
    setToggle(!toggle) 
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
          <h4 className="dasth3" onClick={() => navigate('/MarketPlace')}>Market Place</h4>
          <h4 className="dasth3">Settings</h4>
          <h4 className="dasth3" onClick={() => navigate('/Addpage')}>Upload</h4>
          {/* <h4 className="dasth3" onClick={() => navigate('/Password')}>Change password</h4> */}
          </div>
          <h4 className="dasth4">LOG OUT</h4>

        </div>
        <div className="dash_maincont">
          <div className="dash_maincont2">
            <h2 className="ello">Hello Miss Chisom</h2>
            <p>Welcome to your Dashboard where you can </p>
          </div>
        </div>

      </div>

    </div>

  );
}

export default Dashboard;