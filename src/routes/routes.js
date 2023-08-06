import CartConteniner from "../components/pages/cart/CartConteniner";
import CheckoutConteiner from "../components/pages/checkout/CheckoutConteiner";
import Dashboard from "../components/pages/dashboard/Dashboard";
import FormularioFormik from "../components/pages/formularioFormik/FormularioFormik";
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
    {
        id: "dashboard",
        path: "/dashboard",
        Element: Dashboard
    },
]


