import React from 'react'
import Header from './Components/Header/Header'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Components/Header/Login';
import Signup from './Components/Header/Signup';
import "./App.css"
import Marketplace from './Components/Marketplace/Marketplace';
import Cart from './Components/Cart/Cart';
import Body from './Components/Body/Body';

const App = () => {
  return (
    <div className='App'>
        <Router>
        <Header />
          <Routes>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Signup' element={<Signup />}/>
            <Route path='/Body' element={<Body />} />
            <Route path='/Marketplace' element={<Marketplace/>} />
            <Route path='/Cart' element={<Cart />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App