import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/home";
import ItemListConteiner from "./components/pages/itemlist/ItemListConteiner";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <ItemListConteiner />
    </div>
  );
}

export default App;
