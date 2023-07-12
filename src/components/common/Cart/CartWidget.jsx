//import { Box } from "@mui/material";

import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={4} color="primary">
        <ShoppingCart color="action" />
      </Badge>
    </div>
  );
};

export default CartWidget;
