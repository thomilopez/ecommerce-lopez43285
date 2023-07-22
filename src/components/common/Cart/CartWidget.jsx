//import { Box } from "@mui/material";

import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom"

const CartWidget = () => {
  return (
    <div>
      <Link to="/carrito">
      <Badge badgeContent={4} color="primary">
        <ShoppingCart color="action" />
      </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
