import React from 'react'
import { useState } from 'react';
import Header from './Components/Header/Header';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Marketplace from "./Components/Marketplace/Marketplace"
import Cart from "./Components/Cart/Cart"
import Login from "./Components/Form/Login/Login"
import Choose from "./Components/Form/Decision/Choose"
import Password from './Components/Form/Password/Password';
import Resetpassword from './Components/Form/Password/Resetpassword';
import Admin from "./Components/Form/Decision/Admin/Admin"
import User from "./Components/Form/Decision/User/User"
import About from './Components/Landing/About/About';
import Details from './Components/Details/Details';
import Addpage from './Components/DashBoard/Addpage';
import Verify from "./Components/Verify/Verify"
import Subhead from './Components/Subhead/Subhead';
import DashBoard from "./Components/DashBoard/Dashboard"

function App() {
  const  [display, setDisplay] = useState(true)

  const toggle = () => {
    setDisplay(false)
  }

   const changeToggle = ()=> {
    setDisplay(true)
   }
  return (
    <div className='App'>
      
      <Router>
      {display ? <Header /> : null}
      {/* <Header /> */}
      <Routes>
           <Route path='/' element={<Landing props={changeToggle}/>} />
           <Route path='/Marketplace' element={<Marketplace/>}/>
           <Route path='/Cart' element={<Cart/>} />
           <Route path='/Admin' element={<Admin />} />
           <Route path='/User' element={<User />}/>
          <Route path='/Login' element={<Login props={toggle}/>} />
          <Route path='/Choose' element={<Choose/>} />
           <Route path='/About' element={<About/>} />
          <Route path='/About' element={<About/>} />
           <Route path='/Password' element={<Password/>} />
           <Route path='/DashBoard' element={<DashBoard/>}/>
           <Route path='/Resetpassword/:id' element={<Resetpassword/>} />
            <Route path='/Details/:_id' element={<Details /> } />
           <Route path='/Addpage' element={<Addpage/>} />
           <Route path='/Verify/:_id' element={<Verify />}/>
           <Route path='/Subhead' element={<Subhead />}/>
        </Routes>
      </Router>
    </div>
  ) 
}

export default App