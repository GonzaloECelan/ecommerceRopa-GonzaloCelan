import "./app.css";
import "./components/NavBar";
import { NavBar } from "./components/NavBar";
import ItemListContainer from "./conteiner/ItemListContainer";


function App() {


  return (
    <>
    <NavBar/>
    <div className="App">
  
    </div>

    <ItemListContainer greeting={"Nuestros productos"}/>
    
    
    </>
  );
  
}


export default App;
