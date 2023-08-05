import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import { useState , useEffect } from "react";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemListConteiner = () => {

    const [items, setItems] = useState ([]);
   

    const {categoriasNombre } = useParams ();

    useEffect (() => {
        let productsCollection = collection(db, "productos")
        let consulta;
        if(categoriasNombre){
            consulta = query (productsCollection, where("category", "==", categoriasNombre))
        }else{
            consulta = productsCollection
        }
        
        getDocs(consulta).then((elemento)=>{
            let productos = elemento.docs.map( doc =>{
                return {...doc.data(), id: doc.id}
            })
            setItems(productos)
        })
        
        

    }, [categoriasNombre]);







    return <ItemList items={items} />;
};

export default ItemListConteiner






