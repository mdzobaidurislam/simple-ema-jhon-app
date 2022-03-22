import React from "react";
import logo from "./../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <>
      <nav className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="main_menu">
          <a href="/">Home</a>
          <a href="/cart">Inventory</a>
          <a href="/">Cart</a>
          <a href="/">Login</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
