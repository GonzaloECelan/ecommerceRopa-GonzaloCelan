import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
// import { products } from '../../data/products';
// import ItemCount from '../../components/NavBar/ItemCount';
import "./style.css";


const ItemListContainer = ({greeting}) => {

  // const agregarAlCarrito = (cantidad) => {
  //   alert("Producto añadido");
  //   console.log("Se agrego al carrito:", cantidad);
  // }

  const [productos, setProductos] = useState([])

  
  useEffect(()=> {
    
    (async ()=> {
    // const obtenerProductos = new Promise ((accept, reject)=> {
    //     setTimeout(()=> {
    //       accept(products)
    //     }, 3000);
    //   })
      

        try {
          const response = await fetch("https://fakestoreapi.com/products");
          const productos = await response.json();
          setProductos(productos);
        } catch (error) {
          console.log(error);
        }

      })()

  }, [])

  console.log(productos)

  return (
    <div className='itemlist'>
        <h1>{greeting}</h1>
        {/* <ItemCount stock={10} initial={1} onAdd={agregarAlCarrito}/> */}
        <ItemList products={productos}/>
    </div>

  
  )
}

export default ItemListContainer
