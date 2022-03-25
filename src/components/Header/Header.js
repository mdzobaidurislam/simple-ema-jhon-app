import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <nav className="header">
        <div className="logo">
          <a href="/">Electronics shop</a>
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
