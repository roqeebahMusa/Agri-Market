import React from 'react'
import Header from './Components/Header/Header'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Components/Header/Login';
import Signup from './Components/Header/Signup';
import Body from './Components/Body/Body';
import "./App.css"

const App = () => {
  return (
    <div className='App'>
        <Router>
        <Header />
        <Body/>
          <Routes>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Signup' element={<Signup />}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App