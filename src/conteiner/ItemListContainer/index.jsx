import React from 'react';
import ItemCount from '../../components/NavBar/ItemCount';
import "./style.css";


const ItemListContainer = ({greeting}) => {

  const agregarAlCarrito = (cantidad) => {
    alert("Producto añadido");
    console.log("Se agrego al carrito:", cantidad);
  }
  return (
    <div className='titulo'>
        <h1>{greeting}</h1>
        <ItemCount stock={10} initial={1} onAdd={agregarAlCarrito}/>
    </div>

  
  )
}

export default ItemListContainer
