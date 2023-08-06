import { Skeleton } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";
Skeleton

const ItemList = ( {items} ) => {
  // let arr = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div>
      <h1 className={items.length > 0 ? "hay elementos" : ""}style={{display: "flex",
                  alignItems: "center",
                  justifyContent:  "center",
                  height: "15vh",
                  fontWeight: "bold",
    }}>
        Productos
      </h1>

      <div style={{width:"100%",
                  display: "flex", 
                  justifyContent: "space-evenly", 
                  flexWrap: "wrap" 
        }}
      >
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
      </div>

    </div>
  );
};

export default ItemList;
