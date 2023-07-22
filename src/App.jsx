import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListConteiner from "./components/pages/itemlist/ItemListConteiner";
import CartConteniner from "./components/pages/cart/CartConteniner";
import Layout from "./components/layout/layout";
import ItemDetail from "./components/pages/itemDetalle/ItemDetail";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element= {<Layout/>}>

              <Route path="/" element={<ItemListConteiner />}/>
              <Route path="/itemDetalle/:id" element={<ItemDetail/>}/>
              <Route path="/category/:categoriasNombre" element={<ItemListConteiner />}/>
              <Route path="/carrito" element={<CartConteniner />}/>
          </Route>

              <Route path="*" element={<h1>404 not found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


