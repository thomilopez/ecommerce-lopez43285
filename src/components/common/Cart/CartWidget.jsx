//import { Box } from "@mui/material";

import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
const {totalCantidad} = useContext(CartContext)
let total = totalCantidad()

  return (
    <div>
      <Link to="/carrito">
      <Badge badgeContent={total} color="primary">
        <ShoppingCart color="action" />
      </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
