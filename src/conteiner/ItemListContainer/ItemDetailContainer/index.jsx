
import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from '../../../components/ItemDetail'

const ItemDetailContainer = () => {

    
    const [detalleproducto, setDetalleproducto] = useState({})
  
    useEffect(()=> {

      
      (async ()=> {
        
  
          try {
            const response = await fetch("https://fakestoreapi.com/products/18");
            const data = await response.json();
            setDetalleproducto(data);
          } catch (error) {
            console.log(error);
          }
  
        })()
  
    }, [])
  
    console.log(detalleproducto)



  return (
    <ItemDetail product={detalleproducto}/>
    
  )
}

export default ItemDetailContainer