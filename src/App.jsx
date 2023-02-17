// import React from 'react'
// import Header from './Components/Header/Header'
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Login from './Components/Header/Login';
// import Signup from './Components/Header/Signup';
// import "./App.css"
// import Marketplace from './Components/Marketplace/Marketplace';
// import Cart from './Components/Cart/Cart';
// import Profile from './Components/Profile/Profile';
// import Dashboard from './Components/Dashboard/Dashboard';
// import AdminDashboard from './Components/Dashboard/AdminDashboard/AdminDashboard';
// import FarmerDashboard from './Components/Dashboard/FarmerDashboard/FarmerDashboard';
// import UserDashboard from './Components/Dashboard/UserDashboard/UserDashboard';
// import Successpage from "./Components/Profile/Successpage"
// import UserInfo from './Components/Profile/UserInfo/UserInfo';
// // import Body from "./Components/Body/Body"/

// const App = () => {
//   return (
//     <div className='App'>
//         <Router>
//         <Header />
//           <Routes>
//             <Route path='/Login' element={<Login />}/>
//             <Route path='/Signup' element={<Signup />}/>
//             <Route path='/Marketplace' element={<Marketplace/>} />
//             <Route path='/Cart' element={<Cart />} />
//             <Route path='/Profile' element={<Profile />} />
//          {/* <Route path="/Body" element={<Body />}/> */}
        
//         <Route path='/Dashboard' element={ <Dashboard>
//         <Route path='/AdminDashboard' element={<AdminDashboard />}/>
//         <Route path='/AdminDashboard' element={<FarmerDashboard/>}/>
//         <Route path='/AdminDashboard' element={<UserDashboard />}/>
//            </Dashboard>}/>
//             <Route path='/Successpage' element={<Successpage />}/>
//             <Route path='/UserInfo' element={<UserInfo />}/>
//           </Routes>
//         </Router>
//     </div>
//   )
// }

// export default App








import React from 'react'
import Header from './Components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Marketplace from "./Components/Marketplace/Marketplace"
import Cart from "./Components/Cart/Cart"
// import SignUp from "./Components/Form/SignUp/SignUp"
import Login from "./Components/Form/Login/Login"
import Choose from "./Components/Form/Decision/Choose"
import Password from './Components/Form/Password/Password';
import Resetpassword from './Components/Form/Password/Resetpassword';
import Admin from "./Components/Form/Decision/Admin/Admin"
import User from "./Components/Form/Decision/User/User"
import About from './Components/Landing/About/About';
import Details from './Components/Details/Details';
import Dashboard from './Components/DashBoard/Dashboard';
import Addpage from './Components/DashBoard/Addpage';

function App() {
  return (
    <div className='App'>
      
      <Router>
      <Header/>
    <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/Marketplace' element={<Marketplace/>}/>
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/User' element={<User />}/>
          <Route path='/Login' element={<Login/>} />
          <Route path='/Choose' element={<Choose/>} />
          <Route path='/About' element={<About/>} />
         <Route path='/About' element={<About/>} /> <Route path='/Password' element={<Password/>} />
          <Route path='/Resetpassword' element={<Resetpassword/>} />
           <Route path='/Details/:_id' element={<Details /> } />
           <Route path='/Dashboard' element={<Dashboard/>} />
           <Route path='/Addpage' element={<Addpage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App