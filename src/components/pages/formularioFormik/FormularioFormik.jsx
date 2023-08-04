import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormularioFormik = () => {
    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            name: "",
            email: "",
            edad: "",
            password: "",
            repetPassword: "",
    },
    onSubmit: (data) => {
        console.log(data);
    },
    validationSchema: Yup.object({
        name: Yup.string()
            .required("Este campo es obligatorio")
            .min(3, "El nombre debe tener al menos 3 caracteres y un maximo de 10")
            .max(10),
        edad: Yup.string()
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
    validateOnChange: false,
});
  console.log(errors);

  return (
    <div style={{   display: "flex",
                    width: "100%",  
                    padding: "40px",
                    flexDirection:"column",
                    alignItems: "center",
                    justifyContent: "",  }}>
        <h2>Crea tu cuenta</h2>
      <form onSubmit={handleSubmit}>
        <TextField
            type="text"
            label="Nombre"
            variant="outlined"
            error={errors.name ? true : false}
            name="name"
            onChange={handleChange}
            helperText={errors.name}
        />
        </form>
        <form onSubmit={handleSubmit}>
        <TextField
            type="text"
            label="Edad"
            variant="outlined"
            error={errors.edad ? true : false}
            edad ="edad"
            onChange={handleChange}
            helperText={errors.edad}
        />
        </form>
        <form onSubmit={handleSubmit}>

        <TextField
            type="text"
            label="Email"
            variant="outlined"
            error={errors.email ? true : false}
            name="email"
            onChange={handleChange}
            helperText={errors.email}
        />
        </form>
        <form onSubmit={handleSubmit}>

        <TextField
            type="text"
            label="Contraseña"
            variant="outlined"
            error={errors.password ? true : false}
            name="password"
            onChange={handleChange}
            helperText={errors.password}
        />
        </form>
        <form onSubmit={handleSubmit}>

        <TextField
            type="text"
            label="Repetir contraseña"
            variant="outlined"
            error={errors.repetPassword ? true : false}
            name="repetPassword"
            onChange={handleChange}
            helperText={errors.repetPassword}
        />
        
        </form>
        <Button type="submit" variant="contained">
            Enviar
        </Button>
    </div>
  );
};

export default FormularioFormik;