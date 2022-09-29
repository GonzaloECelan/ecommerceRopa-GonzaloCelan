import "./app.css";
import "./components/NavBar";
import { NavBar } from "./components/NavBar";

import ItemDetailContainer from "./Container/ItemListContainer/ItemDetailContainer";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./Container/ItemListContainer/Cart";
import ShopProvides from "./Context/ShopProvides";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";


function App() {


  return (
<ShopProvides>


    <BrowserRouter>

    <NavBar/>
    
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
    <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
    <Route path="/cart" element={<Cart/>}/>
        
    </Routes>
    </BrowserRouter>

</ShopProvides>
  )
  
}


export default App;
