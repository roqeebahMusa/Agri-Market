import React from 'react'
import { NavLink } from 'react-router-dom'

const Settings = () => {


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
    <div className="main_dash">
    <div className="dash_sidebar">
     
      <div className="dash_sidebar2">
      <h3>Dashboard</h3>
          {/* <h4 className="dasth3">HOME</h4> */}
          <NavLink to="/Marketplace" style={({isActive}) => isActive ? activeColorObject : colorObject}><h4 className="dasth3">Market Place</h4></NavLink>
      <h4 className="dasth3">Settings</h4>
      <h4 className="dasth3">Upload</h4>
      {/* <h4 className="dasth3" onClick={() => navigate('/Password')}>Change password</h4> */}
      </div>
      <h4 className="dasth4">LOG OUT</h4>

    </div>
  </div>
  )
}

export default Settings