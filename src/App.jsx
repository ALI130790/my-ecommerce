import "./App.css";
import ItemListContainer from "./componentes/itemListContainer";
import NavBar from "./componentes/NavBar/NavBar";


function App() {
   return (
      
      <div id = "app" >
        <NavBar/>
        <ItemListContainer saludo="Bienvenidos a nuestra Tienda"/>
      </div>
  );
}

export default App;
