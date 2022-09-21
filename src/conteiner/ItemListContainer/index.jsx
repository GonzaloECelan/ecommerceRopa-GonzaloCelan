import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';

import "./style.css";


const ItemListContainer = ({greeting}) => {



  const [productos, setProductos] = useState([]);

const {categoryId} = useParams();


useEffect(()=>{

    (async ()=> {
        const obtenerProduct = new Promise ((accept, reject)=> {
            setTimeout(()=> {
            accept(productos)
            }, 3000);
        })
        
        try {
            if (categoryId){
                const response = await fetch( `https://fakestoreapi.com/products/category/${categoryId} `);
                const productos = await response.json();
                setProductos(productos);
            }
            else{
                const response = await fetch( "https://fakestoreapi.com/products");
                const productos = await response.json();
                setProductos(productos);
            }

            
            } catch (error) {
                console.log(error);
        }
        
    
            
    
        })()

},[categoryId])
  return (
    <div className='itemlist'>
        <h1>{greeting}</h1>
      
        <ItemList products={productos}/>
    </div>

  
  )
}

export default ItemListContainer
