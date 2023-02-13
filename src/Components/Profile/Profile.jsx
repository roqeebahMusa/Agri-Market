import "./Profile.css"
import { FaUserCircle } from "react-icons/fa"
import { MdNotifications } from "react-icons/md"
import { MdSettings } from "react-icons/md"
 import { BiLogOutCircle } from "react-icons/bi"
 import {NavLink, useNavigate} from "react-router-dom"
 import A from "../../assets/curve.jpg";
const Profile = ({color,change}) => {


  const activeColorObject = {
    color : change ? "#0C764C" : "white",
    textDecoration: "none",
    
  }
  
  const colorObject = {
    textDecoration: "none",
    color: "black",
  }

  const navigate = useNavigate()
  return (
        <div className="Profile">
          <div className="Prof1">

      <div className="profHolder">
              <h2>User Profile</h2>

              <div className="iconsWord">
                <div className="iconword1">
                <FaUserCircle  fontSize='25px'/>
               <NavLink to="/UserInfo"  style={({isActive}) => isActive ? activeColorObject : colorObject}> <p>User info</p> </NavLink> 
                </div>
                
                 <div className="iconword2">
                <MdNotifications fontSize='25px'/>
               <NavLink to="/Notifications" style={({isActive}) => isActive ? activeColorObject : colorObject}>  <p>Notification</p> </NavLink>
                </div>

                <div className="iconword3">
                <MdSettings  fontSize='25px'/>
               <NavLink style={({isActive}) => isActive ? activeColorObject : colorObject} to='/Settings'>  <p>Settings</p> </NavLink>
                </div>

                <div className="iconword4">
                <BiLogOutCircle fontSize='25px'/>
                <NavLink to="/" style={({isActive}) => isActive ? activeColorObject : colorObject}> <p>Log out</p> </NavLink>
                </div>
                  </div>
            </div>
           
          </div>
          <div className="Prof2">
            <div className="texts">
              <h2>Your Personal Profile Info</h2>
            </div>
            <div className="side-bar">
              <div className="side-bar1">
                 <div className="upload">
                <div className="uploadImg">
                  <img className="pics" src={A} />
                    <div className="textsWord">
                     <div className="textsWord1">
                      <p>Curve by Kora</p>
                     </div>
                    <div className="textsWord2">
                      <p>Lagos, Nigeria</p>
                    </div>
                    </div>
                </div>
              
              </div>
              </div>
              <div className="side-bar2">
                <div className="inputHolder">
                  <input className="name1" type="text" placeholder="First Name" />
                  <input className="name2" type="text" placeholder="Address" />
                  <input className="name3" type="text" placeholder="Email" />
                  <input className="name4" type="text" placeholder="Password"/>
                  <input className="name5" type="text" placeholder="Dail Code +234" />
                  <input className="name6" type="text" placeholder="Phone Number" />
                </div>

                <button onClick={() => navigate ("/Successpage")} className="update">Update Profile</button>
               
              </div>
             
            </div>
          </div>
        </div>
  )
}

export default Profile