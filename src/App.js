import "./app.css";
import "./components/NavBar";
import { NavBar } from "./components/NavBar";
import ItemListContainer from "./conteiner/ItemListContainer";
import ItemDetailContainer from "./conteiner/ItemListContainer/ItemDetailContainer";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./conteiner/ItemListContainer/Cart";


function App() {


  return (

    <BrowserRouter>

    <NavBar/>
    
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
    <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
    <Route path="/cart" element={<Cart/>}/>
        
    </Routes>
    

    

    
    </BrowserRouter>
  )
  
}


export default App;
