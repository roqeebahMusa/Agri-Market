import React from 'react'
import "./Dashboard.css"
import { FaUserCircle } from "react-icons/fa"
 import { BiLogOutCircle } from "react-icons/bi"
 import { NavLink} from 'react-router-dom'
 import AG from "../../assets/AG.png"

const Sidebar = ({color,change}) => {

      
      const colorObject = {
        textDecoration: "none",
        color: "black",
      }

       const activeColorObject = {
    color : "white",
    textDecoration: "none",
    backgroundColor: '#0C764C',
    borderRadius: "10px",
    
  }

  return (
    <div className='Dashboard-part2' >
     <div className='Dashboard-part3'>
          <div className='Dashboard-part-image'>
            <img className='Dashboard-image' src={AG} />
          </div>
          <div className='Dashboard-part-contents'>
          <div className='Dashboard-part-contents1'>
               
               <NavLink to='/Profile' style={({isActive}) => isActive ? activeColorObject : colorObject}><h4 className='addproduct'> <FaUserCircle />Profile</h4></NavLink>
            </div>
            <div className='Dashboard-part-contents2'>
           
              <NavLink to='/Addproduct' style={({isActive}) => isActive ? activeColorObject : colorObject}><h4 className='addproduct'><FaUserCircle />Add Product</h4> </NavLink>
            </div>
            <div className='Dashboard-part-contents3'>
              <NavLink to='/'><h4 className='addproduct'><FaUserCircle />Home</h4></NavLink>
            </div>
            <div className='Dashboard-part-contents4'>
           
              <NavLink><h4 className='addproduct'><BiLogOutCircle />Log out</h4></NavLink>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Sidebar