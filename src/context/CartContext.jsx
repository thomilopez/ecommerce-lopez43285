import { createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const existe = estaEnCarrito(item.id)

        if(existe){
            let newArreglo = cart.map( (elemento)=>{
                if(elemento.id === item.id){
                    return {...elemento, quantity: elemento.quantity + item.quantity}
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

    
    let datamaster = { cart, addToCart, cleanCart, deleteCart};

    return <CartContext.Provider value={datamaster}>{children}</CartContext.Provider>;
};

export default CartContextProvider;