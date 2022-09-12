import "./app.css";
import "./components/NavBar";
import { NavBar } from "./components/NavBar";
// import ItemListContainer from "./conteiner/ItemListContainer";
import ItemDetailContainer from "./conteiner/ItemListContainer/ItemDetailContainer";


function App() {


  return (
    <>
    <NavBar/>
    

    {/* <ItemListContainer greeting={"Nuestros productos"}/> */}
    
    <ItemDetailContainer/>
    
    </>
  )
  
}


export default App;
