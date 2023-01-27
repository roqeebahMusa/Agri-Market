import React from 'react'
import Header from './Components/Header/Header'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Components/Header/Login';
import Signup from './Components/Header/Signup';

const App = () => {
  return (
    <div>
        <Header />
        <Router>
          <Routes>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Sigup' element={<Signup />}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App