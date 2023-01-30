import "./Header.css"
import Agri from "../../assets/AG.png"
import { NavLink, useNavigate } from "react-router-dom"

const Header = () => {

  const navigate = useNavigate();
  return (

       <div className="Main-Header">
        <div className="Logo-Holder">
            <img className="Logo" src={Agri} onClick={() => navigate("/")}/>
        </div>
        <div className="Header-Text">
            <NavLink to='/'> <p className="Home">Home</p> </NavLink>

           <NavLink to="/Marketplace"> <p className="Marketplace">Marketplace</p> </NavLink> 

            <NavLink to='/Cart'> <p>Cart</p> </NavLink>
        </div>
        <div className="Accounts">
           <NavLink to="/Login"><button onClick={() => navigate} className="Acct-one">Log in</button></NavLink> 
           <NavLink to="/Signup"> <button className="Acct-two">Sign up</button> </NavLink> 
        </div>
    </div>
  
  
   
  )
}

export default Header

// import React from 'react'
// import "./Header.css"
// // import Carousel from '../Carousel/Carousel'
// import hen from "../../assets/poult.jpg"
// // import cat from "./pie/egg.jpeg"


// function Header() {
//   return (
//     <div className='Main-Body'>
//       <div className='main_wrap'>
//       <div className='Agri-Main'>
//             <div className='Textxx'>
//                 <h1 className='big_text'>LIVESTOCK PRODUCT AT YOUR FINGERTIPS</h1>
            
//                 <p className='smalltip'>We make livestock products available for you at the comfort of your warehouse. Don't have to stress yourself, just order for the products you want and we'll get it delivered.</p>
//                 </div>
//                 <br/>
//                 <button className='butt2'>Shop Now</button>
//         </div>
        
//         <div className='piccont'>
//                   <img src={hen} alt="" className='peesu' />
//                 </div>
//  </div>
//      {/* <Carousel />  */}
//     </div>
//   )
// }

// export default Header