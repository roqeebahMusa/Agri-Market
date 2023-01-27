import "./Header.css"
import Agri from "../../assets/AG.png"

const Header = () => {
  return (
    <div className="Main-Header">
        <div className="Logo-Holder">
            <img className="Logo" src={Agri}/>
        </div>
        <div className="Header-Text">
            <p>Home</p>
            <p>Marketplace</p>
            <p>Cart</p>
        </div>
        <div className="Accounts">
            <button className="Acct-one">Log in</button>
            <button className="Acct-two">Sign up</button>
        </div>
    </div>
  )
}

export default Header