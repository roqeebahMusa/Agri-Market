import React, {useState} from "react";
import {ImMenu3  } from 'react-icons/im'
import "./Dashboard.css"
import {FaTimes} from 'react-icons/fa'
import Dashsidemenu from "./Dashsidemenu"
// import { useNavigate } from "react-router-dom";
import Subhead from "../Subhead/Subhead"
import {useEffect} from "react"
import Dashfooter from "./Dashfooter";
import {CgProfile} from 'react-icons/cg'
import { BsCart4 } from "react-icons/bs";
import { SiSalesforce } from "react-icons/si";
import Barside from "../Barside/Barside";
// import Products from "../Uploadproduct/Products";

function Dashboard({props}) {
  const [toggle, setToggle] = useState(false);

  const handlechange = () => { 
    setToggle(!toggle) 
  }

  useEffect(() => {
    props()
  }, [props])

  

  return (
    <>
    <Subhead />
    <div className="Dashboard_origin">
      <div className="dashboard_head">
        <h3 className="wc">welcome</h3> 
        <div className="dash_icon">
        {toggle ? <FaTimes fontSize={"30px"} color="#0C764C" onClick={handlechange}/>:
         <ImMenu3 fontSize={"30px"} color="#0C764C" onClick={handlechange}/>} </div>
         {toggle ? <Dashsidemenu props={handlechange}/>: null}

        <h4> </h4>
      </div>

      <div className="main_dash">
        <Barside />

     <div className="dash_maincont">
         <div className="dash_elements">
            <div className="ddt"> <h4>Customers</h4>
            <CgProfile font-size="25px"/> <h4>9,324</h4> </div>
            <div className="ddt"><h4>Average sales</h4>
            <  SiSalesforce font-size="25px"/> <h4>1,924</h4></div>
            <div className="ddt"> <h4>Average order</h4>
            < BsCart4 font-size="25px"/> <h4>2,824</h4></div>
            <div className="ddt"> <h4>Daily visitors</h4>
            <CgProfile font-size="25px"/> <h4>3,728</h4></div>
           </div>
          <div className="dash_mainCont_inside">

          <br/>  <h3 className="da1">All your uploaded products</h3>

            <p className="da1">No Products have been uploaded</p>
            {/* <Products /> */}
          
          </div>
        </div>

      </div>

    </div>
    <Dashfooter />
    </>

  );
}

export default Dashboard;