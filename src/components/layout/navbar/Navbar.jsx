//import React from "react";
import "./Navbarcss.css";
import CartWidget from "../../common/Cart/CartWidget";
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div>
        <div>
            <div className="NavBar-container">
              <Link to="/">
                <img src="../../../../images/logo.png" alt="" />
              </Link>
              

              <ul className="categorias">
                
                <Link className="botton" to="/">Productos</Link>
                <Link className="botton" to="/category/juegos">Juegos</Link>
                <Link className="botton" to="/category/delantales">Delantales</Link>
              </ul>
              
              <CartWidget />
            </div>
          
        </div>
    </div>
    
  );
};

export default Navbar;
