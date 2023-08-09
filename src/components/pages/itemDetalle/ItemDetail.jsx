import { useContext, useEffect, useState } from "react"
import { useParams} from "react-router-dom";
import CounterContainer from "../../common/counter/CounterConteiner";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CartContext } from "../../../context/CartContext";
import Swal from 'sweetalert2'
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore"

const ItemDetail = () => {

const { addToCart, cantidadXId } = useContext(CartContext);

    const [producto, setProducto] = useState({});

    const { id } = useParams ();

    const totalCantidad = cantidadXId(id);

    useEffect(() => {

        let productsCollection = collection(db, "productos");
        let productRef = doc(productsCollection, id);
        getDoc(productRef).then((res) => {
            setProducto({ ...res.data(), id: res.id});
        });

    },[id]);
    
    const onAdd = (cantidad) => {
        let productCart = { ...producto, quantity: cantidad}
        addToCart(productCart);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu producto fue agregado al carrito!',
            showConfirmButton: false,
            timer: 1500
        })
    };
    
        return (
            <div style={{width: "100%",
                        display: "flex",
                        flexDirection:"column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "90vh",                                           
                        }}>

                <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                        component="img"
                        alt=""
                        height="300"
                        image={producto.img}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            <h3>{producto.titulo}</h3>
                            <h4>{producto.description}</h4>
                            <h5>${producto.precio}</h5>
                        </Typography>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                </Card>

                {(typeof(totalCantidad) === "undefined" || producto.stock > totalCantidad) && 
                producto.stock > 0 && (
                    <CounterContainer 
                    stock={producto.stock} 
                    onAdd={onAdd} 
                    initial={totalCantidad}
                />
                )}

                {producto.stock === 0 && <h2>No hay stock</h2>}
                {typeof totalCantidad !== "undefined" && 
                totalCantidad === producto.stock && (
                    <h4>Tenes el maximo stock en el carrito</h4>
                )}

        </div>
    
    
    );
};


export default ItemDetail



{/* {producto.stock > 0 ?(
    <CounterContainer 
        stock={producto.stock} 
        onAdd={onAdd} 
        initial={totalCantidad}
    />
) : (
    <h2>No hay stock</h2>
)} */}