// import * as React from 'react';

import ProductCard from "../../common/productCard/ProductCard";


const ItemList = ( {items} ) => {
  return (
    <div>
      <h1>aca van los productos</h1>

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
