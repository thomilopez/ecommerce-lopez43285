import CartConteniner from "../components/pages/cart/CartConteniner";
import CheckoutConteiner from "../components/pages/checkout/CheckoutConteiner";
import FormularioFormik from "../components/pages/formularioFormik/formularioFormik";
import ItemDetail from "../components/pages/itemDetalle/ItemDetail";
import ItemListConteiner from "../components/pages/itemlist/ItemListConteiner";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListConteiner
    },
    {
        id: "detalle",
        path: "/itemDetalle/:id",
        Element: ItemDetail
    },    {
        id: "categorias",
        path: "/category/:categoriasNombre",
        Element: ItemListConteiner
    },    {
        id: "carrito",
        path: "/carrito",
        Element: CartConteniner
    },    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutConteiner
    },
    {
        id: "formik",
        path: "/formik",
        Element: FormularioFormik
    },
]


