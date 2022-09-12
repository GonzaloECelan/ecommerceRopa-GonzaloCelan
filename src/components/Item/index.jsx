import React from 'react'
import './item.css';


const Item = ({product}) => {
    return (
      
      
      <div className='tarjeta_producto'>
        <div className='foto_prod'>
        <img src={product.image} alt="" />
        </div>
         <div className='informacion'>
          <span className='descrip'>{product.title}</span>
          <span className='precio'>${product.price}</span>
          <span className='more'>Ver mas detalles</span>
         </div>
    
      </div>
      
    )
  }

export default Item