import React from 'react'
import './item.css';
import { useNavigate } from 'react-router-dom';


const Item = ({product}) => {

  const navegate = useNavigate();
  const handleNavegate = ()=>{
    navegate(`/detail/${product.id}`)

  }
    return (
      
      
      <div className='tarjeta_producto'>
        <div className='foto_prod'>
        <img src={product.img} alt="" />
        </div>
         <div className='informacion'>
          <span className='descrip'>{product.tittle}</span>
          <span className='precio'>${product.price}</span>
          <span className='more' onClick={handleNavegate}>Ver mas detalles</span>
         </div>
    
      </div>
      
    )
  }

export default Item