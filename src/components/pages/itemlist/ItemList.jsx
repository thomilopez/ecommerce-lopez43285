import ProductCard from "../../common/productCard/ProductCard";


const ItemList = ( {items} ) => {
  return (
    <div>
      <h1 style={{display: "flex",
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
