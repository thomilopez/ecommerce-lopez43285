import { Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext, useState } from "react";


const FormularioFormik = () => {
    const { cart, totalPrecio } = useContext(CartContext);
    const [ orderId, setOrderId ] = useState("");
    let total = totalPrecio(); 
    const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
            name: "",
            email: "",
            age: "",
            password: "",
            repetPassword: "",
        },
    
    
    onSubmit: (data) => {
        
        let order = {
            buyer: data,
            items: cart,
            total,
            date: serverTimestamp(),
        };
        
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((res)=> setOrderId(res.id));

        cart.forEach ((productos) => {
            updateDoc(doc(db, "productos", productos.id),{
                stock: productos.stock - productos.quantity,
            });
        });
    },
    
    validationSchema: Yup.object({
        name: Yup.string()
            .required("Este campo es obligatorio")
            .min(3, "El nombre debe tener al menos 3 caracteres y un maximo de 10")
            .max(10),
        age: Yup.string()
            .required("Este campo es obligatorio")
            .min(2, "La edad no es valida")
            .max(3),
        email: Yup.string()
            .email("El email debe contener @")
            .required("Este campo es obligatorio"),
        password: Yup.string()
            .required("Este campo es obligatorio")
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
            message: "La contraseña debe tener por lo menos 1 numero, una mayuscula y debe tenes entre 6-15 caracteres",
            }),
        repetPassword: Yup.string()
            .required()
            .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
});

  return (
    <div style={{   display: "flex",
                    width: "100%",  
                    padding: "80px",
                    height: "90vh",
                    flexDirection:"column",
                    alignItems: "center",
                    justifyContent: "space-around",  }}>
        <h2>Completa tus datos, para finalizar tu compra</h2>

    {orderId ? (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                    Gracias por su compra!
                    </Typography>
                    <Typography variant="body2">
                    Su numero de comprar es: {orderId}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to="/">Volver a comprar</Link>
                </CardActions>
            </Card>
                    

        </div>
    ) : (
        

            <form onSubmit={handleSubmit}>
                <div>

                <TextField
                    type="text"
                    label="name"
                    variant="outlined"
                    error={errors.name ? true : false}
                    name="name"
                    onChange={handleChange}
                    helperText={errors.name}
                    />
                </div>
                <div>

                <TextField
                    type="number"
                    label="age"
                    variant="outlined"
                    error={errors.age ? true : false}
                    name ="age"
                    onChange={handleChange}
                    helperText={errors.age}
                    />
                </div>
                <div>

                <TextField
                    type="text"
                    label="Email"
                    variant="outlined"
                    error={errors.email ? true : false}
                    name="email"
                    onChange={handleChange}
                    helperText={errors.email}
                    />
                </div>
                <div>
                <TextField
                    type="password"
                    label="Contraseña"
                    variant="outlined"
                    error={errors.password ? true : false}
                    name="password"
                    onChange={handleChange}
                    helperText={errors.password}
                    />
                </div>
                <div>

                <TextField
                    
                    type="password"
                    label="Repetir contraseña"
                    variant="outlined"
                    error={errors.repetPassword ? true : false}
                    name="repetPassword"
                    onChange={handleChange}
                    helperText={errors.repetPassword}
                    />
                
                </div>
                <div>

                <Button type="submit" variant="contained">Completar compra</Button>
                </div>
                </form>
            )}
    
        




        
    </div>
  );
};

export default FormularioFormik;