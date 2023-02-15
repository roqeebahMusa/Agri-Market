// import React from 'react'
// import { useState } from 'react'
// import "./Dashboard.css"
// import AG from "../../assets/AG.png"
// import { FaUserCircle } from "react-icons/fa"
// import { BiLogOutCircle } from "react-icons/bi"
// import { useNavigate, NavLink } from 'react-router-dom'

// const Dashboard = () => {
//   const navigate = useNavigate()
//   return (
//     <div className='Dashboard-part'>
//       <div className='Dashboard-part2'>
//         <div className='Dashboard-part3'>
//           <div className='Dashboard-part-image'>
//             <img className='Dashboard-image' src={AG} />
//           </div>
//           <div className='Dashboard-part-contents'>
//           <div className='Dashboard-part-contents1'>
//                <FaUserCircle />
//                <NavLink to='/Profile'><p>Profile</p></NavLink>
//             </div>
//             <div className='Dashboard-part-contents1'>
//                <FaUserCircle />
//                <NavLink to='/MyDashboard'><p>My Dashboard</p></NavLink>
//             </div>
//             <div className='Dashboard-part-contents2'>
//             <FaUserCircle />
//               <NavLink to='/Addproduct'> <p>Add Product</p></NavLink>
//             </div>
//             <div className='Dashboard-part-contents3'>
//             <FaUserCircle />
//               <NavLink onClick={() => navigate ('/')}> <p>Home</p></NavLink>
//             </div>
//             <div className='Dashboard-part-contents4'>
//             <BiLogOutCircle />
//               <NavLink> <p>Log out</p></NavLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dashboard










// import Sidebar from "./Sidebar"
// import { MdNotifications } from "react-icons/md"
// import "../Dashboard/MyDashboard/MyDashboard.css"
// import boy from "./boy1.jpg"
// import dev_lulu from "./dev_lulu.jpg"
// import dev from "./dev.jpg"
// import gal from "./gal.jpg"
// import jong from "./jong.jpg"
// import onile from "./onile.jpg"
// import { useState } from "react"
// // import {ImMenu3  } from 'react-icons/im'
// // import {FaTimes} from 'react-icons/fa'
// const MyDashboard = () => {

//   // const [toggle, setToggle] = useState(false);

  
//   // const handlechange = () => { 
//   //   setToggle(!toggle) 
//   // }

//   return (
//     <div className="My-Dashboard">
//     <Sidebar />
//     <div className="Dashboard">
//         <div className="My-Dashboard2">
//     <div className="dash">
//       <h2>Dashboard</h2>
//     </div>
//     <div className="dash-content">
//     <MdNotifications fontSize="30" color="black"/>
//     <div className="Dash-img">
//       <h4>Mr Smith</h4>
//    <img className="dash_img" src={boy}/>
//     </div>
//     </div>
 
//   </div>
//    <div className="My-Dashboard3">
//     <div className="board">
//       <div className="board1">
//         <h2>Hello Mr Smith!</h2>
//       </div>
//       <p>Welcome to your Farmer's Dashboard, this is where you can be able to post the livestock product you want to sell and you can see the amount of livestock products that has been purchased and the remainings of your livestock products</p>
//     </div>
//     <div className="smith-livestock">
//       <div className="see">
//           <h3>Check out to see the remaining livestock and the ones that has been purchased</h3>
//       </div>
    
//     <div className="smith-livestock1">
//    <div className="smith-side">
//    <div className="smith-livestock1-side1">
//         <div className="smith-livestock1-img1">
//           <img className="smith-img"  src={dev_lulu} />
//         </div>
//         <div className="smith-livestock1-img2">
//         <img className="smith-img" src={dev} />
//         </div>
//         <div className="smith-livestock1-img3">
//         <img className="smith-img" src={gal} />
//         </div>
//         <div className="smith-livestock1-img4">
//         <img  className="smith-img" src={jong} />
//         </div>
//         <div className="smith-livestock1-img5">
//         <img className="smith-img"  src={onile} />
//         </div>
//       </div>
//       <div className="smith-livestock1-side2">
//       <div className="smith-livestock1-name1">
//         <p>Anozie Luciana</p>
//         </div>
//         <div className="smith-livestock1-name1">
//         <p>Samuel kelechi</p>
//         </div>
//         <div className="smith-livestock1-name1">
//         <p>Lucia.U.Chizoba</p>
//         </div>
//         <div className="smith-livestock1-name1">
//         <p>GodwinChinkwe</p>
//         </div>
//         <div className="smith-livestock1-name1">
//         <p>Onile.I.Gunners</p>
//         </div>
//       </div>
//       <div className="smith-side-livestock-purchased">
//         <div className="livestock_purchased1">
//           <p>This user has purchased 50 bags of Catfish</p>
//         </div>
//         <div className="livestock_purchased1">
//         <p>This user has purchased 60 Chicken</p>
//         </div>
//         <div className="livestock_purchased1">
//         <p>This user has purchased 20 bags of Catfish</p>
//         </div>
//         <div className="livestock_purchased1">
//         <p>This user has purchased 50 Chicken and 25 crate of eggs</p>
//         </div>
//         <div className="livestock_purchased1">
//         <p>This user has purchased 40 fingerlings Catfish </p>
//         </div>
//       </div>
//    </div>
//     </div>
//     </div>

//    </div>
  {/* <div className="Last-part-Dashboard">
    <div className="Last-PartDashboard2">
      <h3>Check out the remaining livestock product left</h3>
    </div>
    <div className="Part">
    <div className="last-part1"> 
    <li>There are 20 Channel Catfish left in the Marketplace</li>
    </div>
    <div className="last-part2">
    <li>There are 10 Chicken left in the Marketplace</li>
    </div>
    <div className="last-part3">
    <li>There are 0 Fingerlings Catfish left in the Marketplace</li>
    </div>
    </div>

  </div> */}
   {/* <div className='Burger'>
               
               {toggle ? <FaTimes fontSize={"30px"} color="#0C764C" onClick={handlechange}/>: <ImMenu3 fontSize={"30px"} color="#0C764C" onClick={handlechange}/>}
               {toggle ? <Dropdown props={handlechange}/>: null}
             </div> */}
//     </div>
//     </div>
//   )
// }

// export default MyDashboard