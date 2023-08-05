import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2'

const CartConteniner = () => {
  const { cart, cleanCart, deleteCart, totalPrecio} = useContext(CartContext)

  let total = totalPrecio()


  const limpiar = ()=>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Vaciar carrito?',
      text: "Vas a quitar todos tus productos!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, vaciar carrito!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Listo limpiaste el carrito!',
          '',
          'success',
          cleanCart()
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Casi borraste todo :)',
          'error'
        )
      }
    })
  }
  return (
    <div>
      <div style={{display: "flex",
                  alignItems: "center",
                  justifyContent:  "center",
                  height: "15vh",
                  fontWeight: "bold",}}>
      <h1>Carrito</h1>
      </div>
      <div style={{width:"100%",
                  display: "flex", 
                  justifyContent: "space-evenly", 
                  flexWrap: "wrap",
                  alignItems: "center",
                  height: ""}}>
        {cart.map((elemento) => {
          return (
            <div key={elemento.id} style={{ }} >
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
                <h5>{elemento.description}</h5>
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

      </div>
          <div style={{display: "flex",
                  alignItems: "center",
                  justifyContent:  "space-evenly",
                  height: "15vh",
                  fontWeight: "bold",}}>
          {
            cart.length > 0 && <button onClick={limpiar}>Vaciar carrito</button>
          }
          <h5>El total a pagar es: ${total}</h5>
          </div>
    </div>
  )
}

export default CartConteniner

{/* <div style={{display: "flex", alignItems: "column", justifyContent: ""}}> */}