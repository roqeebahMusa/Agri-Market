import React from "react";
import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Nav() {
  let activeStyle = {
    textDecoration: "underline",
    fontSize:"15px",
    color:"green",
    fontWeight:"400"
    
  };

  return (
    <div className="NavTab">
      <NavLink
        to="/"
        className="linkz"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p> HOME</p>
      </NavLink>
      <NavLink
        to={"MarketPlace/"}
        className="linkz"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>MARKET PLACE</p>
      </NavLink>
      <NavLink
        to={"Cart/"}
        className="linkz"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>
          CART
          <BsCart4 />
        </p>
      </NavLink>
    </div>
  );
}

export default Nav;