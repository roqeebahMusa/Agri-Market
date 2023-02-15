import "./Profile.css"
import { FaUserCircle } from "react-icons/fa"
import { MdNotifications } from "react-icons/md"
import { MdSettings } from "react-icons/md"
 import { BiLogOutCircle } from "react-icons/bi"
 import { useNavigate} from "react-router-dom"
 import A from "../../assets/curve.jpg";
import Sidebar from "../Dashboard/Sidebar"
const Profile = ({color,change}) => {

  const isActive = {
    color : change ? "#0C764C" : "white",
  }
  
  const colorObject = {
    textDecoration: "none",
    color: "black",
  }

  return (
        <div className="Profile">
          <Sidebar />
          <div className="Prof2">
            <div className="texts">
              <h2>Your Personal Profile Info</h2>
            </div>
            <div className="Personal-Info"></div>
            {/* <div className="side-bar">
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

                <button className="update">Update Profile</button>
               
              </div>
             
            </div> */}
          </div>
        </div>
  )
}

export default Profile