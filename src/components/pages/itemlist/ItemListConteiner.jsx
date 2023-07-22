import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "./ItemList";
import { useState , useEffect } from "react";


const ItemListConteiner = () => {

    const [items, setItems] = useState ([]);
    const [error, setError] = useState ({});

    const {categoriasNombre } = useParams ();

    useEffect (() => {
        let productosFiltrados = products.filter(
            (elemento) => elemento.category === categoriasNombre
        );
        const buscar = new Promise((resolve, reject)=> {
            resolve(categoriasNombre === undefined ? products : productosFiltrados);
            reject ({message: "ERROR", status: 401})
    });
    
    buscar.then((resp) => setItems(resp))
            .catch((err) => setError(err));
    }, [categoriasNombre]);

    return <ItemList items={items} />;
};

export default ItemListConteiner