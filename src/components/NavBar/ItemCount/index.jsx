import React, { useState } from 'react'
import { useEffect } from 'react';
import './style.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [cantidad, setCantidad] = useState(0);
    
    const eventClickmas = (e) => {
      if(cantidad < stock){
        setCantidad(cantidad + 1)}
      else{
        alert("No hay stock disponible")

      };

      }
      const eventClickmenos = (e) => {
        if(cantidad > initial){
          setCantidad(cantidad - 1)};
        }
      
      const addCart = () =>{
        onAdd(cantidad);
        setCantidad(initial);
      }


            useEffect(()=>{

              console.log("se sumo uno");
},[cantidad]);

  return (
    
    <div className='tarjeta'>
      <div className='contador'>
        <span className='mas' onClick={eventClickmas}>+</span>
        <span className='cant'>{cantidad}</span>
        <span className='menos' onClick={eventClickmenos}>-</span>
        </div>
        <button onClick={addCart}>Agregar al carrito</button>
        
    </div>
    
  )
}

export default ItemCount