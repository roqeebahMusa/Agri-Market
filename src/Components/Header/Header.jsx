import React, {useState} from 'react'
import './Header.css'
import agi from '../../assets/AG.png'
import Nav from './Nav'
import {useNavigate} from "react-router-dom"
import {ImMenu3  } from 'react-icons/im'
import {FaTimes} from 'react-icons/fa'
import Dropdown from './Dropdown'

function Header() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);


  // const [isOpen, setIsOpen] = useState(false)

  const handlechange = () => { 
    setToggle(!toggle) 
  }
 
  return (
    <div className="Header_Container">
       <div className="Main">
          <div className="Head_Content">
             <div className="images" >         
               <img src={agi} alt="" className='ape'
                onClick={() => navigate('/')} />
             </div>

              <Nav />

<div className="Accounts">
           <button className="Acct-two" onClick={()=> navigate('/Choose')}>Sign up</button>
         <button onClick={() => navigate('/Login')} className="Acct-one">Log in</button>
        </div>

            <div className='Burger'>
               
              {toggle ? <FaTimes fontSize={"30px"} color="#0C764C" onClick={handlechange}/>: <ImMenu3 fontSize={"30px"} color="#0C764C" onClick={handlechange}/>}
              {toggle ? <Dropdown props={handlechange}/>: null}
            </div>
          </div>
        </div>
        {/* <Header /> */}
    </div>
  )
}

export default Header























// import React, {useState} from 'react'
// import './Header.css'
// import agi from '../../assets/AG.png'
// import Nav from './Nav'
// import {useNavigate} from "react-router-dom"
// import {ImMenu3  } from 'react-icons/im'
// import {FaTimes} from 'react-icons/fa'
// import Dropdown from './Dropdown'


// function Header() {
//   const navigate = useNavigate();
//   const [toggle, setToggle] = useState(false);
//   const handlechange = () => { 
//     setToggle(!toggle) 
//   }

//   return (
//     <div className="Header_Container">
//        <div className="Main">
//           < div className="Head_Content">
//              <div className="images" >         
//                <img src={agi} alt="" className='ape'
//                 onClick={() => navigate('/')} />
//              </div>

//               <Nav />
//                <div className='new'>
//                 <button className="butt" onClick={()=> navigate('/Choose')}>sign up</button>
//                 <button className='butt2'onClick={()=> navigate('/Login')}>Login</button>
//             </div>

//             <div className='Burger'>
               
//               {toggle ? <FaTimes fontSize={"30px"} color="#0C764C" onClick={handlechange}/>: <ImMenu3 fontSize={"30px"} color="#0C764C" onClick={handlechange}/>}
//               {toggle ? <Dropdown props={handlechange}/>: null}
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Header