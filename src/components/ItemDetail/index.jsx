import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../NavBar/ItemCount';
import './style.css';
import { Shop } from '../../Context/ShopProvides';

const ItemDetail = ({product}) => {

  const {addItem} = useContext(Shop);

  const navigate = useNavigate();

  const finalizarCompra = () =>{

    const productoTosave = {...product, quantity: qty}
    addItem(productoTosave)
navigate("/cart");
  }

  const [qty, setQty] = useState(0);

const addCart = (quantity)=>{
setQty(quantity);

}
// console.log(qty);

  return (


<div className='detail'>
  <h2>{product.category}</h2>
<div className='detail-img'>
  <img src={product.img} alt="" />
</div>
  <div className='detail-inf'>
    <span className='title'>{product.tittle}</span>
    <span className='price'>${product.price}</span>
    <span className='more'>MAS VENDIDO</span>
    <span className='stock'>Stock disponible</span>
    { !qty ? <ItemCount stock={product.stock} initial={1} onAdd={addCart} /> : <button className='Finalizar' onClick={finalizarCompra}>Finalizar compra</button>}
  </div>
  
    

</div>

  )
}

export default ItemDetail