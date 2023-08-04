import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const CartConteniner = () => {
  const { cart, cleanCart, deleteCart} = useContext(CartContext)

  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>

      <h1>Carrito</h1>
        {cart.map((elemento) => {
          return (
            <div key={elemento.id} style={{ width: "50%",
                                            display: "flex",
                                            flexDirection:"row",
                                            alignItems: "center",
                                            justifyContent: "space-evenly",
                                            height: "70vh",
          }}
          >
            <Card sx={{ maxWidth: 250 }}>
              <CardMedia
              component="img"
              alt=""
              height="200"
              image={elemento.img}
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {elemento.titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h5>Descripcion:{elemento.description}</h5>
                <h6>Precio Unitario: ${elemento.precio}</h6>
                <h6>Cantidad = {elemento.quantity}</h6>
              </Typography>
              </CardContent>
              <CardActions>
              <button onClick={()=>deleteCart(elemento.id)}>Eliminar producto</button>
              </CardActions>
            </Card>
              
              
            </div>
           );
          })}

          <button onClick={cleanCart}>Sacar productos</button>
            

    </div>
  )
}

export default CartConteniner