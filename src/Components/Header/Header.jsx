import React, {useState} from 'react'
import './Header.css'
import agi from '../../assets/AG.png'
import Nav from './Nav'
import {useNavigate} from "react-router-dom"
import {ImMenu3  } from 'react-icons/im'
import {FaTimes} from 'react-icons/fa'
import Dropdown from './Dropdown'
import {CgProfile} from 'react-icons/cg'

function Header() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [drop, setDrop] = useState(false);


  // const [isOpen, setIsOpen] = useState(false)

  const handlechange = () => { 
    setToggle(!toggle) 
  }
  
  const getResponse = JSON.parse(localStorage.getItem("response"));
 
  return (
    <div className="Header_Container">
       <div className="Main">
          <div className="Head_Content">
             <div className="images" >         
               <img src={agi} alt="" className='ape'
                onClick={() => navigate('/')} />
             </div>

              <Nav />

            {
              getResponse ? <h4 className='login_response'  onClick={() => navigate('/Dashboard')}>
                
                 {getResponse.data.data.firstName}  <CgProfile fontSize={"28px"}/> 
               </h4> : 
              (  <div className="Accounts">
           <button className="Acct-two" onClick={()=> navigate('/Choose')}>Sign up</button>
         <button onClick={() => navigate('/Login')} className="Acct-one">Log in</button>
        </div> )
}

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