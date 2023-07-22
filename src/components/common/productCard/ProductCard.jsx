
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const ProductCard = ({item}) => {
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            alt=""
            height="140"
            image={item.img}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {item.titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {item.description}
            </Typography>
            </CardContent>
            <CardActions>
            <Link to= {`/itemDetalle/${item.id}`}>
            <Button size="small">Ver detalle</Button>
            </Link>
            </CardActions>
        </Card>
    </div>
)
}

export default ProductCard