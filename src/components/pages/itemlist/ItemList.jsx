import "./ItemList.css";

const ItemList = ({ saludo, cambiarSaludo }) => {
  //  let nombreUsuario = "Thomas";
  return (
    <div className="saludo-container">
      <h2>{saludo}</h2>
      <button onClick={() => cambiarSaludo("Todo bien y vos?")}>
        Cambiar saludo
      </button>
    </div>
  );
};

export default ItemList;
