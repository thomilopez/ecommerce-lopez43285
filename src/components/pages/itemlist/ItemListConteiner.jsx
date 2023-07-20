import { products } from "../../productsMock";
import ItemList from "./ItemList";
import { useState , useEffect } from "react";


const ItemListConteiner = () => {

    const [items, setItems] = useState ([]);
    const [error, setError] = useState ("")

    useEffect (() => {
        const buscar = new Promise((resolve, reject)=> {
        resolve(products);
        reject ({message: "No autorizado", status: 401})
    });
    
    buscar.then((resp) => setItems(resp))
            .catch((err) => setError(err));
    }, []);

    //console.log(items);

    return <ItemList items={items} />;
};

export default ItemListConteiner