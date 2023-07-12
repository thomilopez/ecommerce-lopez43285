//import React from "react";
import "./Navbar.css";
import CartWidget from "../../common/Cart/CartWidget";

const Navbar = () => {
  return (
    <div className="NavBar-container">
      <div className="logo-container">
        <h2>
          <img src="../../../../images/logo.png" alt="" />
        </h2>
      </div>
      <div className="menu-container">
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
