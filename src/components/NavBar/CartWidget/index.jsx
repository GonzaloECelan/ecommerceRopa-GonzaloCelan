import React from 'react'
import {FaShoppingCart} from 'react-icons/fa';
import './cart.css';

const CartWidget = () => {
  return (
    <div className='carrito'>
        <FaShoppingCart className='cart-nav'/>
    </div>
  )
}

export default CartWidget