import { useEffect, useState } from "react"
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterConteiner";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const ItemDetail = () => {

    const [producto, setProducto] = useState({});

    const {id} = useParams ()
    
    useEffect(() => {
        let productoSelec = products.find ((item) => item.id === +id);
        const buscar = new Promise ((res) => {
            res(productoSelec)
        });
        buscar.then(res => setProducto(res))
    },[id]);
    
    const onAdd = (cantidad) => {
            console.log (cantidad)
    
    }
    
        return (
            <div style={{width: "100%",
                        display: "flex",
                        flexDirection:"column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "90vh",
                    
                        
            }}
            >
                <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            alt=""
            height="300"
            image={producto.img}
            />
            <CardContent>
            <Typography gutterBottom variant="h3" component="div">
                {producto.titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                <h4>{producto.description}</h4>
                <h5>${producto.precio}</h5>
                
            </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
        
            <CounterContainer stock={producto.stock} onAdd={onAdd} />
        </div>
    
    
        );
    };


export default ItemDetail