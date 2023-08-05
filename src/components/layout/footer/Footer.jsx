import {Link} from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
        <div className="Footer-container">
          
          <div >
            
          <a href="https://wa.me/5491161885398?text=Chickids%20Juegos"><img src="../../../../images/whatsapp.svg" alt="" /></a>

          <a href="https://www.facebook.com/ChicKids.juegos" ><img src="../../../../images/Face.svg" alt="" /></a>

          <a href="https://www.instagram.com/chickids.juegos/" ><img src="../../../../images/instagram.svg" alt="" /></a>
          </div>
          
          <div className="Logo-footer " style={{display:"flex", flexDirection:"column",
                                                alignItems:"center"}}>
          <Link to="/">
            <img src="../../../../images/logo.png" alt="" />
          </Link>
          <h8>
          Copyright ChicKids - 2022
          </h8>
          <h9>
          Defensa de las y los consumidores. Para reclamos ingrese aquí
          </h9>
          </div>
          <div>
            <div className="tarjetas" style={{}}>
              <div className="tarjetaAbajo">
                    <img src="../../../../images/amex.png" alt="" />
                    <img src="../../../../images/argencard.png" alt="" />
                    <img src="../../../../images/banelco.png" alt="" />
                    <img src="../../../../images/cabal2x.png" alt="" />
              </div>
              <div>
                    <img src="../../../../images/diners.png" alt="" />
                    <img src="../../../../images/mastercard.png" alt="" />
                    <img src="../../../../images/mercadopago.png" alt="" />
                    <img src="../../../../images/pagofacil.png" alt="" />
              </div>
              <div>
                    <img src="../../../../images/rapipago.png" alt="" />
                    <img src="../../../../images/tarjeta-naranja2x.png" alt="" />
                    <img src="../../../../images/tarjetashopping.png" alt="" />
                    <img src="../../../../images/visa.png" alt="" />
              </div>
            </div>
          </div>
          
        </div>       
    </div>
  )
}

export default Footer


{/* <img src="../../../../images/diners.png" alt="" />
<img src="../../../../images/mastercard.png" alt="" />
<img src="../../../../images/mercadopago.png" alt="" />
<img src="../../../../images/pagofacil.png" alt="" />
</div>
<div>
<img src="../../../../images/rapipago.png" alt="" />
<img src="../../../../images/tarjeta-naranja@2x.png" alt="" />
<img src="../../../../images/tarjetashopping.png" alt="" />
<img src="../../../../images/visa.png" alt="" />
</div>  */}