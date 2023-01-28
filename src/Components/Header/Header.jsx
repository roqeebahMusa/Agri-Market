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
            <p>Home</p>
            <p>Marketplace</p>
            <p>Cart</p>
        </div>
        <div className="Accounts">
           <NavLink to="/Login"><button onClick={() => navigate} className="Acct-one">Log in</button></NavLink> 
           <NavLink to="/Signup"> <button className="Acct-two">Sign up</button> </NavLink> 
        </div>
    </div>
  )
}

export default Header