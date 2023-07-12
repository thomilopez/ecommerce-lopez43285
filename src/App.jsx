import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/home";
import ItemList from "./components/pages/itemlist/ItemList";

function App() {
  const [saludo, setSaludo] = useState("Hola! todo bien?");
  //const [name, setName] = useState("Ignacio");
  //console.log(name);
  const cambiarSaludo = (nuevoSaludo) => {
    setSaludo(nuevoSaludo);
  };

  //const cambiarNombre = (nuevoNombre) => {
  //  setName(nuevoNombre);
  //};

  return (
    <div>
      <Navbar />
      <Home />
      <ItemList
        saludo={saludo}
        cambiarSaludo={cambiarSaludo}
        //    cambiarNombre={cambiarNombre}
      />
    </div>
  );
}

export default App;
