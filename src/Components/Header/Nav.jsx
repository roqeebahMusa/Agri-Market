import React from "react";
import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";


function Nav() {
  let activeStyle = {
    textDecoration: "underline",
    fontSize:"15px",
    color:"green",
    fontWeight:"400"
    
  };

  const cart = useSelector((state) => state.commerce.cart);

  return (
    <div className="NavTab">
      <NavLink
        to="/"
        className="linkz"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p className="headercenter"> HOME</p>
      </NavLink>
      <NavLink
        to={"MarketPlace/"}
        className="linkz"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p className="headercenter" >MARKET PLACE</p>
      </NavLink>
      <NavLink
        to={"Cart/"}
        className="linkz"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p className="headercenter">
          CART
          <BsCart4 />{cart[0] === undefined ? 0 : cart[0].QTY}
        </p>
      </NavLink>
    </div>
  );
}

export default Nav;