import { createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const existe = estaEnCarrito(item.id)

        if(existe){
            let newArreglo = cart.map( (elemento)=>{
                if(elemento.id === item.id){
                    return {...elemento, quantity: item.quantity}
                }else{
                    return elemento
                }
            })
            setCart(newArreglo)

        }else{
            setCart([...cart, item])

        }
        
    };
    
    
    const estaEnCarrito = (id)=>{
        let existe = cart.some ((elemento)=> elemento.id === id)
        return existe
    }


    const cleanCart = () => {
        setCart([])
    };


    const deleteCart = (id)=>{
        let nuevoArreglo = cart.filter ((elemento)=>elemento.id !== id)
        setCart (nuevoArreglo);
    };

    const totalPrecio = ()=>{
        
        let total = cart.reduce ((acc, elemento)=>{
            return acc + (elemento.precio * elemento.quantity)
        }, 0)
        return total 
    }

    const totalCantidad = ()=>{
        let totalc = cart.reduce((acc, elemento)=>{
            return acc + elemento.quantity
        }, 0)
        return totalc
    }

    const cantidadXId = (id)=>{
        const producto = cart.find ((elemento)=> elemento.id === id)
        return producto?.quantity
    }

    
    let datamaster = { cart, addToCart, cleanCart, deleteCart, totalPrecio, totalCantidad, cantidadXId};

    return <CartContext.Provider value={datamaster}>{children}</CartContext.Provider>;
};

export default CartContextProvider;