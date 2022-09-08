import React from 'react'
import './item.css';


const Item = ({product}) => {
    return (
      <div className='tarjeta_producto'>
        <div className='foto_prod'>
      
        </div>
         <div className='informacion'>
          <span className='descrip'>{product.descripcion}</span>
          <span className='precio'>${product.precio}</span>
          <span className='more'>Ver mas detalles</span>
         </div>
    
      </div>
      
    )
  }

export default Item