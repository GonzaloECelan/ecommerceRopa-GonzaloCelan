import React from 'react';
import "./style.css";

const ItemListContainer = ({greeting}) => {
  return (
    <div className='titulo'>
        <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer
